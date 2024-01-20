import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rodrigo peña - Desarrollador Full Stack",
  description:
    "Soy un desarrollador Full Stack con experiencia en React, JavaScript, TypeScript, Next.js, Node.js y Tailwind CSS. Descubre mis proyectos y habilidades en mi portafolio.",
  keywords:
    "Desarrollador Full Stack, React, JavaScript, TypeScript, Next.js, Node.js, Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-mywhite">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
