import React, { useState, useRef } from 'react';
import GoogleRecaptcha, { GoogleRecaptchaRef } from '../../recaptcha/google-recaptcha';
import { useToast } from "@/components/ui/use-toast";

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
                title: "Erreur",
                description: "Veuillez cocher la case reCAPTCHA.",
                variant: "destructive",
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
                    title: "Succès",
                    description: "Le formulaire a été envoyé avec succès !",
                    variant: "success",
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
                    title: "Erreur",
                    description: errorData.error || "Une erreur est survenue lors de l'envoi du formulaire.",
                    variant: "destructive",
                    duration: 5000,
                });
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            setFormErrors([(error as Error).message]);
            toast({
                title: "Erreur",
                description: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
                variant: "destructive",
                duration: 5000,
            });
        }
    };

    function validateForm(formData: FormData): string[] {
        const errors = [];

        if (!formData.get("name")) {
            errors.push("Veuillez entrer votre nom.");
        }
        if (!formData.get("email") || !/\S+@\S+\.\S+/.test(formData.get("email") as string)) {
            errors.push("Veuillez entrer une adresse email valide.");
        }
        if (!formData.get("phone") || !/^\d{10}$/.test(formData.get("phone") as string)) {
            errors.push("Veuillez entrer un numéro de téléphone valide.");
        }
        if (!formData.get("message")) {
            errors.push("Veuillez entrer votre message.");
        }

        return errors;
    }

    return (
        <section id="contact" className="relative min-h-screen">
            <div
                className="bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/img/agency/bgemail.png)" }}
            >
                <div className="container mx-auto py-20 md:py-24 flex items-center justify-center">
                    <div className="flex justify-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white bg-opacity-95 shadow-xl rounded-lg">
                                <div className="p-8 md:p-12">
                                    <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">Contactez-moi</h2>
                                    {formErrors.length > 0 && (
                                        <div className="mb-6">
                                            {formErrors.map((error, index) => (
                                                <p key={index} className="text-red-500">
                                                    {error}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    <form ref={formRef} className="contact-form needs-validation" noValidate onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label htmlFor="form_name" className="block text-xs font-medium text-gray-700">
                                                    Nom <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    id="form_name"
                                                    placeholder="Nom"
                                                    className="w-full px-4 py-3 border border-gray-300 bg-white bg-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>

                                            <div className="relative">
                                                <label htmlFor="form_email" className="block text-xs font-medium text-gray-700">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    id="form_email"
                                                    placeholder="votre.nom@exemple.com"
                                                    className="w-full px-4 py-3 border border-gray-300 bg-white bg-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                            <div className="relative">
                                                <label htmlFor="form_phone" className="block text-xs font-medium text-gray-700">
                                                    Numéro de Téléphone <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    id="form_phone"
                                                    placeholder="Numéro de Téléphone"
                                                    pattern="[0-9]{10}"
                                                    className="w-full px-4 py-3 border border-gray-300 bg-white bg-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative mt-6">
                                            <label htmlFor="form_message" className="block text-xs font-medium text-gray-700">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                required
                                                name="message"
                                                id="form_message"
                                                placeholder="Votre message"
                                                className="w-full px-4 py-3 h-20 border border-gray-300 bg-white bg-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            ></textarea>
                                        </div>

                                        <div className="text-center mt-8">
                                            <GoogleRecaptcha ref={recaptchaRef} onVerify={handleRecaptchaVerify} />
                                        </div>

                                        <div className="text-center mt-8">
                                            <button
                                                type="submit"
                                                className="rounded-full bg-indigo-600 text-white py-3 px-6 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                                Envoyer le message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}