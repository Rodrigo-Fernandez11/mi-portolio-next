const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rodrigo Peña',
  url: 'https://mi-portolio-next.vercel.app',
  image: 'https://mi-portolio-next.vercel.app/images/foto-perfil-rodrigo-peña.webp',
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

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
