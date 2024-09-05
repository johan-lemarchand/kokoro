import React from 'react';
import type { Metadata } from 'next';

import { Manrope } from 'next/font/google';
import ScrollCue from './scroll-cue';

import ThemeProvider from '../theme/ThemeProvider';

import PageProgress from './components/common/PageProgress';
// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import './plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import './assets/scss/style.scss';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Kokoro Médiation Animale | Bien-être par la Médiation Animale dans le Bas-Rhin en Alsace',
  description:
    'Découvrez Kokoro Médiation Animale, spécialiste en médiation animale dans le Bas-Rhin. Nous offrons des services de bien-être, de développement personnel et de renforcement de la confiance en soi grâce à des interactions enrichissantes avec les animaux. Basés en Alsace dans le Bas-Rhin, nous sensibilisons au respect des animaux et développons des apprentissages pour tous, adaptés à votre environnement local.',
  keywords:
    'médiation animale, bien-être animal, confiance en soi, développement personnel, respect des animaux, apprentissage, interactions animales, Kokoro, Alsace, Bas-rhin',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={manrope.className}>
        <ScrollCue>
          <ThemeProvider>{children}</ThemeProvider>
          <SpeedInsights />
          <Analytics />
        </ScrollCue>
        <PageProgress />
      </body>
    </html>
  );
}
