import React, { useState, useRef } from 'react';
import GoogleRecaptcha, {
  GoogleRecaptchaRef,
} from '../../recaptcha/google-recaptcha';
import { useToast } from '@/components/ui/use-toast';

export default function ContactForm() {
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<GoogleRecaptchaRef>(null);
  const { toast } = useToast();

  const handleRecaptchaVerify = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setRecaptchaToken(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const errors = validateForm(formData);

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!recaptchaToken) {
      toast({
        title: 'Erreur',
        description: 'Veuillez cocher la case reCAPTCHA.',
        variant: 'destructive',
        duration: 5000,
      });
      return;
    }

    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
      formBody.append(key, value.toString());
    });
    formBody.append('g-recaptcha-response', recaptchaToken);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formBody.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setFormErrors([]);
        toast({
          title: 'Succès',
          description: 'Le formulaire a été envoyé avec succès !',
          variant: 'success',
          duration: 5000,
        });
        resetForm();
      } else {
        const errorData = await response.json();
        setFormErrors([errorData.error]);
        if (errorData.errorCodes) {
          errorData.errorCodes.forEach((code: string) => {
            console.error('reCAPTCHA Error Code:', code);
          });
        }
        toast({
          title: 'Erreur',
          description:
            errorData.error ||
            "Une erreur est survenue lors de l'envoi du formulaire.",
          variant: 'destructive',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      setFormErrors([(error as Error).message]);
      toast({
        title: 'Erreur',
        description:
          'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
        variant: 'destructive',
        duration: 5000,
      });
    }
  };

  function validateForm(formData: FormData): string[] {
    const errors = [];

    if (!formData.get('name')) {
      errors.push('Veuillez entrer votre nom.');
    }
    if (
      !formData.get('email') ||
      !/\S+@\S+\.\S+/.test(formData.get('email') as string)
    ) {
      errors.push('Veuillez entrer une adresse email valide.');
    }
    if (
      !formData.get('phone') ||
      !/^\d{10}$/.test(formData.get('phone') as string)
    ) {
      errors.push('Veuillez entrer un numéro de téléphone valide.');
    }
    if (!formData.get('message')) {
      errors.push('Veuillez entrer votre message.');
    }

    return errors;
  }

  return (
    <section id="contact" className="relative min-h-screen">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/agency/bgemail.png)' }}
      >
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-4 position-relative">
            <div
              className="shape bg-dot primary rellax w-17 h-21"
              style={{ top: '-2rem', left: '-1.9rem' }}
            />
            <div
              className="shape rounded bg-soft-primary rellax d-none d-md-block"
              style={{
                width: '85%',
                height: '90%',
                right: '-1.5rem',
                bottom: '-1.8rem',
              }}
            />

            <figure className="rounded">
              <img
                src="/img/kokoro/img/carte-bas-rhin-departement-618x601.webp"
                srcSet="/img/kokoro/img/carte-bas-rhin-departement-618x601.webp"
                alt="carte bas-rhin"
              />
            </figure>
          </div>
          <div className="col-md-3 col-lg-4 mb-4 mb-md-0 p-12">
            <h2 className="fs-21 text-uppercase text-line text-primary mb-3">
              Lieu d’intervention
            </h2>
            <h2 className="display-3 fs-20 mb-4">
              J’interviens en itinérance dans le Bas-Rhin.
            </h2>

            <h2 className="fs-21 text-uppercase text-line text-primary mb-3">
              Contact
            </h2>
            <h2 className="display-3 fs-16 mb-8">
              Pour plus de renseignements ou un devis, n’hésitez pas à me
              contacter par téléphone ou par mail. <br />
              <br /> Louise BURG
            </h2>

            <div className="d-flex flex-row mb-3">
              <div className="icon text-primary fs-28 me-3 mt-n1">
                <i className="uil uil-location-pin-alt" />
              </div>
              <div>
                <h5 className="mb-1">Adresse</h5>
                <address>
                  26 E rue de Kaltenhouse, <br className="d-none d-md-block" />
                  67240 OBERHOFFEN-SUR-MODER
                </address>
              </div>
            </div>

            <div className="d-flex flex-row mb-3">
              <div className="icon text-primary fs-28 me-3 mt-n1">
                <i className="uil uil-phone-volume" />
              </div>
              <div>
                <h5 className="mb-1">Téléphone</h5>
                <a href="tel:0646453966">06.46.45.39.66</a>
              </div>
            </div>

            <div className="d-flex flex-row mb-3">
              <div className="icon text-primary fs-28 me-3 mt-n1">
                <i className="uil uil-envelope" />
              </div>
              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0">
                  <a
                    href="mailto:sandbox@email.com"
                    className="link-body"
                    target="_blank"
                  >
                    kokoro.mediation.animale@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mx-auto d-flex align-items-center justify-content-center">
            <div className="card bg-white bg-opacity-95 shadow-xl rounded-lg w-100">
              <div className="card-body p-4 p-md-5">
                <h2 className="fs-24 md:text-3xl font-bold mb-4 text-center">
                  Contactez-moi
                </h2>
                {formErrors.length > 0 && (
                  <div className="mb-6">
                    {formErrors.map((error, index) => (
                      <p key={index} className="text-red-500">
                        {error}
                      </p>
                    ))}
                  </div>
                )}

                <form
                  ref={formRef}
                  className="contact-form needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="form_name" className="form-label fs-16">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="form_name"
                      className="form-control fs-12"
                      placeholder="Nom"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="form_email" className="form-label fs-16">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="form_email"
                      className="form-control fs-12"
                      placeholder="votre.nom@exemple.com"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="form_phone" className="form-label fs-16">
                      Numéro de Téléphone{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      id="form_phone"
                      className="form-control fs-12"
                      placeholder="Numéro de Téléphone"
                      pattern="[0-9]{10}"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="form_message" className="form-label fs-16">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      id="form_message"
                      className="form-control fs-12"
                      placeholder="Votre message"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <GoogleRecaptcha
                      ref={recaptchaRef}
                      onVerify={handleRecaptchaVerify}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
