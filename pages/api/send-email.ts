import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import AWS from 'aws-sdk';
import ContactFormEmail from '../../emails/contactFormEmail';
import { renderToStaticMarkup } from 'react-dom/server';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

// Configure AWS SDK for SES
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: 'latest' });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const contentType = req.headers['content-type'];
  if (
    contentType !== 'application/x-www-form-urlencoded' &&
    contentType !== 'application/json'
  ) {
    return res
      .status(415)
      .json({ error: 'Unsupported Media Type', success: false });
  }

  let parsedBody: URLSearchParams;
  if (contentType === 'application/json') {
    parsedBody = new URLSearchParams(req.body as string);
  } else {
    parsedBody = new URLSearchParams(req.body);
  }

  const name = parsedBody.get('name') ?? '';
  const email = parsedBody.get('email') ?? '';
  const message = parsedBody.get('message') ?? '';
  const phone = parsedBody.get('phone') ?? '';
  const recaptchaToken =
    parsedBody.get('g-recaptcha-response')?.split(',')[0].trim() ?? '';

  if (!name || !email || !message || !phone) {
    console.log('Données manquantes:', { name, email, message, phone });
    return res.status(400).json({
      error: 'Toutes les informations sont requises.',
      success: false,
    });
  }

  if (!recaptchaToken) {
    console.log('Jeton reCAPTCHA manquant');
    return res.status(400).json({
      error: 'La vérification reCAPTCHA est requise.',
      success: false,
    });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.log('Clé secrète reCAPTCHA manquante');
    return res.status(500).json({
      error: 'La clé secrète reCAPTCHA est manquante.',
      success: false,
    });
  }

  const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';

  try {
    console.log('Token reçu du client:', recaptchaToken);

    const verificationBody = new URLSearchParams();
    verificationBody.append('secret', secretKey);
    verificationBody.append('response', recaptchaToken);

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    verificationBody.append('remoteip', clientIp as string);

    console.log('Requête de vérification:', verificationBody.toString());
    const recaptchaResponse = await fetch(verificationURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: verificationBody,
    });

    const recaptchaData = (await recaptchaResponse.json()) as RecaptchaResponse;
    console.log('Réponse complète:', JSON.stringify(recaptchaData));

    if (!recaptchaData.success) {
      console.log('Erreur reCAPTCHA:', recaptchaData['error-codes']);
      return res.status(400).json({
        error: 'Échec de la vérification reCAPTCHA. Veuillez réessayer.',
        success: false,
        errorCodes: recaptchaData['error-codes'],
      });
    }

    const emailHtml = renderToStaticMarkup(
      ContactFormEmail({
        name,
        email,
        message,
        phone,
      } as ContactFormEmailProps)
    );

    const params = {
      Destination: {
        ToAddresses: ['anstett.solutions.pro@gmail.com'],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: emailHtml,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Formulaire de contact',
        },
      },
      Source: 'anstett.solutions.pro@gmail.com',
    };

    await ses.sendEmail(params).promise();

    return res.status(200).json({ error: null, success: true });
  } catch (error) {
    console.error(
      "Erreur lors de la vérification reCAPTCHA ou de l'envoi de l'email:",
      error
    );
    return res
      .status(500)
      .json({ error: (error as Error).message, success: false });
  }
}
