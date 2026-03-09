/**
 * Configuración de variables de entorno
 * Valida que las variables críticas existan en tiempo de ejecución
 */

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  emailjs: {
    serviceId: getEnvVar('NEXT_PUBLIC_EMAILJS_SERVICE_ID'),
    templateId: getEnvVar('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'),
    publicKey: getEnvVar('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'),
  },
} as const;
