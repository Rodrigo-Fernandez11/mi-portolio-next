// Types compartidos y reutilizables en todo el proyecto
import type { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageProject: string | StaticImageData;
  demoLink: string;
  githubLink: string;
  altProject: string;
}

export interface BlogPost {
  img: StaticImageData;
  title: string;
  alt: string;
  date: string;
  desc: string;
}

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface EventProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  organization: string;
}

// Re-export de tipos de Next.js para facilitar imports
export type { Metadata } from "next";
export type { StaticImageData } from "next/image";
