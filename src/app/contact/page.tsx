import { ContactForm } from "@/app/contact/components/ContactForm";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactMethod } from "@/app/contact/components/ContactMethod";

export default function Contact() {
  return (
    <main className="w-full min-h-screen px-6 flex justify-center items-center">
      <section className="w-full max-w-screen-lg flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pr-4 my-4">
          <div className="max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none lg:mt-0">
            <header>
              <h3 className="text-2xl font-semibold pb-4">
                ¿Te puedo ayudar en algo?
              </h3>
              <p>
                Estoy aquí para ayudarte y responder cualquier pregunta que
                pueda tener. Por favor complete el formulario o a través de lo
                siguiente médios.
              </p>
            </header>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
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
        <div className="w-full lg:w-1/2 lg:pl-4 lg:mt-0 my-4">
          <div className="max-w-lg mx-auto lg:ml-auto lg:mr-0 lg:max-w-md">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
