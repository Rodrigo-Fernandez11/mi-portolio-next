import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portafolio - Rodrigo Peña",
  description:
    "Explora mis proyectos destacados como desarrollador Full Stack. Proyectos en React, Next.js, Node.js y más tecnologías modernas.",
  openGraph: {
    title: "Portafolio - Rodrigo Peña",
    description:
      "Proyectos profesionales de desarrollo web y aplicaciones full stack.",
    url: "https://mi-portolio-next.vercel.app/portfolio",
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

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
