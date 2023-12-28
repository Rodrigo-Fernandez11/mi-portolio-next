import { ContactForm } from "@/components/common/ContactForm";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactMethod } from "@/components/common/ContactMethod";

export default function Contact() {
  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <section className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-6">
            <header>
              <h1 className="text-indigo-600 font-semibold text-3xl sm:text-4xl">
                Contact
              </h1>
              <p className="text-2xl font-semibold">¿Cómo puedo ayudarte?</p>
              <p>
                Estamos aquí para ayudarte y responder cualquier pregunta que
                puedas tener. Por favor, completa el formulario o contáctanos a
                través de los siguientes medios.
              </p>
            </header>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center ">
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
                contact="11 23 018269"
              />
            </div>
          </div>
          <div className="flex-1 mt-4 sm:max-w-lg lg:max-w-md">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
