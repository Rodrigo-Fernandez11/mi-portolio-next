type EmailJsEnv = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

// Read public env vars safely so importing this module never breaks prerender.
export function getEmailJsEnv(): EmailJsEnv | null {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey };
}
