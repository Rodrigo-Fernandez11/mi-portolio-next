import { Metadata } from 'next';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rodrigo Peña',
  url: 'https://mi-portolio-next.vercel.app',
  image: 'https://mi-portolio-next.vercel.app/images/foto-perfil2.webp',
  description: 'Desarrollador Full Stack con experiencia en React, Next.js, Node.js y Tailwind CSS',
  jobTitle: 'Desarrollador Full Stack',
  sameAs: [
    'https://github.com/Rodrigo-Fernandez11',
    'https://www.linkedin.com/in/rodrip-dev/',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Full Stack Development',
    'Web Development',
  ],
};

export const metadata: Metadata = {
  title: 'Rodrigo Peña - Desarrollador Full Stack | React, Next.js, Node.js',
  description:
    'Soy un desarrollador Full Stack con experiencia en React, JavaScript, TypeScript, Next.js, Node.js y Tailwind CSS. Descubre mis proyectos y habilidades en mi portafolio profesional.',
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
