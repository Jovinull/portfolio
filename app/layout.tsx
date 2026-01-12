import type { Metadata, Viewport } from 'next';
import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

import ThemeHydration from '@/components/theme/ThemeHydration';
import Providers from './providers';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ovo',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://meu-dominio.com';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Jovino | Desenvolvedor Full Stack e Criador de Soluções Digitais',
  description:
    'Portfólio profissional de Jovino, desenvolvedor full stack especializado em aplicações web, APIs, IoT e inteligência artificial.',
  applicationName: 'Portfólio Jovino',
  authors: [{ name: 'Jovino', url: SITE_URL }],
  creator: 'Jovino',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Jovino | Desenvolvedor Full Stack e Criador de Soluções Digitais',
    description:
      'Explore projetos inovadores nas áreas de desenvolvimento web, APIs, IoT e inteligência artificial.',
    url: SITE_URL,
    siteName: 'Portfólio Jovino',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Jovino - Desenvolvedor Full Stack',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jovino | Desenvolvedor Full Stack e Criador de Soluções Digitais',
    description: 'Confira meu portfólio com projetos em desenvolvimento web, APIs, IoT e IA.',
    images: [`${SITE_URL}/og-image.png`],
    creator: '@meuusuario',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${ovo.variable} min-h-dvh overflow-x-hidden leading-8 antialiased`}
      >
        <ThemeHydration />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
