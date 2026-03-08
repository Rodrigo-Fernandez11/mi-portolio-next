// Declaraciones de tipos globales para el proyecto

// Soporte para imports de imágenes
import type { StaticImageData } from "next/image";

declare module "*.png" {
  const value: StaticImageData;
  export default value;
}

declare module "*.jpg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.webp" {
  const value: StaticImageData;
  export default value;
}

declare module "*.svg" {
  const value: StaticImageData;
  export default value;
}

// Variables de entorno tipadas
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    
    // EmailJS - credenciales públicas para cliente
    readonly NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
    readonly NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
    readonly NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
  }
}
