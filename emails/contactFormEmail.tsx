import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
  phone,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>Nouveau message de contact de {name}</Preview>
    <Body className="bg-[#f6f9fc] font-sans">
      <Container className="mx-auto py-5 px-0 max-w-[580px]">
        <Heading className="text-[#333] text-2xl font-bold pt-4 pb-0 m-0">
          Nouveau message de contact
        </Heading>
        <Section className="p-6 bg-white rounded border border-solid border-[#e2e8f0]">
          <Text className="m-0 mb-2.5 p-0 leading-7">
            <strong>Nom :</strong> {name}
          </Text>
          <Text className="m-0 mb-2.5 p-0 leading-7">
            <strong>Email :</strong> {email}
          </Text>
          <Text className="m-0 mb-2.5 p-0 leading-7">
            <strong>Téléphone :</strong> {phone}{' '}
            {/* New field for phone number */}
          </Text>
          <Text className="m-0 mb-2.5 p-0 leading-7">
            <strong>Message :</strong>
          </Text>
          <Text className="m-0 mb-2.5 p-0 leading-7 whitespace-pre-wrap">
            {message}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;
