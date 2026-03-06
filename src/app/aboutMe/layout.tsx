import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre Mí - Rodrigo Peña",
  description:
    "Conoce más sobre Rodrigo Peña, desarrollador Full Stack con pasión por crear aplicaciones web modernas y eficientes.",
  openGraph: {
    title: "Sobre Mí - Rodrigo Peña",
    description:
      "Desarrollador Full Stack con experiencia en React, Next.js, Node.js y más.",
    url: "https://mi-portolio-next.vercel.app/aboutMe",
    type: "website",
    images: [
      {
        url: "https://mi-portolio-next.vercel.app/images/desarrollador.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

