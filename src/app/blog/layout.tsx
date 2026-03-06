import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Rodrigo Peña",
  description:
    "Lee artículos sobre desarrollo web, React, Next.js, y otras tecnologías de la industria.",
  openGraph: {
    title: "Blog - Rodrigo Peña",
    description:
      "Artículos sobre desarrollo full stack y mejores prácticas en programación.",
    url: "https://mi-portolio-next.vercel.app/blog",
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
