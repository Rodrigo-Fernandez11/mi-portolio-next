import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rodrigo Peña - Desarrollador Full Stack | React, Next.js, Node.js",
  description:
    "Soy un desarrollador Full Stack con experiencia en React, JavaScript, TypeScript, Next.js, Node.js y Tailwind CSS. Descubre mis proyectos y habilidades en mi portafolio profesional.",
  keywords:
    "Desarrollador Full Stack, React, JavaScript, TypeScript, Next.js, Node.js, Tailwind CSS, Portafolio",
  
  // Open Graph - Importante para redes sociales
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mi-portolio-next.vercel.app",
    siteName: "Rodrigo Peña - Portafolio",
    title: "Rodrigo Peña - Desarrollador Full Stack",
    description:
      "Portafolio profesional de Rodrigo Peña. Desarrollador Full Stack especializado en React, Next.js y Node.js.",
    images: [
      {
        url: "https://mi-portolio-next.vercel.app/images/desarrollador.png",
        width: 1200,
        height: 630,
        alt: "Rodrigo Peña - Desarrollador Full Stack",
      },
    ],
  },


  // Otros metadatos importantes
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/desarrollador.png",
        href: "/images/desarrollador.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/desarrollador.png",
        href: "/images/desarrollador.png",
      },
    ],
  },
  
  // Idioma y región
  alternates: {
    canonical: "https://tudominio.com",
    languages: {
      "es-ES": "https://mi-portolio-next.vercel.app",
    },
  },

  // Robots meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  // Verificación y análisis
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        {/* Preconnect a recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        
        {/* JSON-LD Schema Markup */}
        <StructuredData />
      </head>
      <body 
        className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-mywhite"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
