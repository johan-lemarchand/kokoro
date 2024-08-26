import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface GoogleRecaptchaProps {
    onVerify: (token: string | null) => void;
}

export interface GoogleRecaptchaRef {
    reset: () => void;
}

const GoogleRecaptcha = forwardRef<GoogleRecaptchaRef, GoogleRecaptchaProps>(({ onVerify }, ref) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useImperativeHandle(ref, () => ({
        reset: () => {
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
        }
    }));

    const handleRecaptchaChange = (token: string | null) => {
        onVerify(token);
    };

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        console.error('La clé de site reCAPTCHA n\'est pas définie');
        return null;
    }

    return (
        <div>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={handleRecaptchaChange}
            />
        </div>
    );
});

GoogleRecaptcha.displayName = 'GoogleRecaptcha';

export default GoogleRecaptcha;