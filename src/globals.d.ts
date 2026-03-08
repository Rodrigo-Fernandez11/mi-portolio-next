// Declaraciones de tipos globales para el proyecto

// Soporte para imports de imágenes
declare module "*.png" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.webp" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.svg" {
  const value: import("next/image").StaticImageData;
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
