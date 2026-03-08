import type { Metadata } from "next";
import { ContactForm, ContactMethod } from "@/components";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contacto - Rodrigo Pena",
  description:
    "Quieres trabajar conmigo o tienes preguntas? Ponte en contacto a traves del formulario.",
  openGraph: {
    title: "Contacto - Rodrigo Pena",
    description:
      "Formulario de contacto para proyectos, propuestas o consultas.",
    url: "https://mi-portolio-next.vercel.app/contact",
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

export default function Contact() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen px-6">
      <section className="flex flex-col w-full max-w-screen-lg lg:flex-row">
        <div className="w-full my-4 lg:w-1/2 lg:pr-4">
          <div className="max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none lg:mt-0">
            <header>
              <h3 className="pb-4 text-2xl font-semibold">
                ¿Te puedo ayudar en algo?
              </h3>
              <p>
                Estoy aquí para ayudarte y responder cualquier pregunta que
                pueda tener. Por favor complete el formulario o a través de lo
                siguiente médios.
              </p>
            </header>
            <div className="flex flex-wrap items-center mt-6 gap-x-10 gap-y-6">
              <ContactMethod
                icon={<FaMapMarkerAlt className="text-xl" />}
                contact="Buenos Aires, Argentina"
              />
              <ContactMethod
                icon={<FaEnvelope className="text-xl" />}
                contact="rodrip602@gmail.com"
              />
              <ContactMethod
                icon={<FaPhone className="text-xl" />}
                contact="+54 9 11 23 018269"
              />
            </div>
          </div>
        </div>
        <div className="w-full my-4 lg:w-1/2 lg:pl-4 lg:mt-0">
          <div className="max-w-lg mx-auto lg:ml-auto lg:mr-0 lg:max-w-md">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
