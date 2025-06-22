import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jovino | Desenvolvedor Full Stack e Criador de Soluções Digitais",
  description:
    "Portfólio profissional de Jovino, desenvolvedor full stack especializado em aplicações web, APIs, IoT e inteligência artificial. Confira projetos, experiências e soluções criativas.",
  keywords: [
    "Jovino",
    "Portfólio Jovino",
    "Desenvolvedor Full Stack",
    "Programador",
    "Desenvolvimento Web",
    "Next.js",
    "AdonisJS",
    "Node.js",
    "TypeScript",
    "IoT",
    "Inteligência Artificial",
    "Soluções Digitais"
  ],
  authors: [{ name: "Jovino", url: "https://meu-dominio.com" }],
  creator: "Jovino",
  openGraph: {
    title: "Jovino | Desenvolvedor Full Stack e Criador de Soluções Digitais",
    description:
      "Explore o portfólio de Jovino e descubra projetos inovadores nas áreas de desenvolvimento web, APIs, IoT e inteligência artificial.",
    url: "https://meu-dominio.com",
    siteName: "Portfólio Jovino",
    images: [
      {
        url: "https://meu-dominio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jovino - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovino | Desenvolvedor Full Stack e Criador de Soluções Digitais",
    description:
      "Confira meu portfólio com projetos em desenvolvimento web, APIs, IoT e IA.",
    images: ["https://meu-dominio.com/og-image.png"],
    creator: "@meuusuario",
  },
  metadataBase: new URL("https://meu-dominio.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
