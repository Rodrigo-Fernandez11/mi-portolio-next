import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contacto - Rodrigo Peña",
  description:
    "¿Quieres trabajar conmigo o tienes preguntas? Ponte en contacto a través del formulario.",
  openGraph: {
    title: "Contacto - Rodrigo Peña",
    description:
      "Formulario de contacto para proyectos, propuestas o consultas.",
    url: "https://mi-portolio-next.vercel.app/contact",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
