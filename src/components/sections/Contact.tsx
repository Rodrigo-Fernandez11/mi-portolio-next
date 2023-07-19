"use client";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import ContactForm from "../common/ContactForm";
import { SocialLink } from "../common/SocialLinks";

const ContactSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold my-8 flex justify-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactInformation: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md" id="contact">
      <h3 className="text-xl font-bold my-4">Informacion de Contacto</h3>
      <ul className="space-y-2">
        <li>
          <span className="font-bold">Email:</span> rodrip602@gmail.com
        </li>
        <li>
          <span className="font-bold">Ubicacion:</span> Buenos Aires, Argentina
        </li>
      </ul>
      <h3 className="text-xl font-bold my-4">Mis redes sociales</h3>
      <div className="flex m-8">
        <SocialLink
          href="https://github.com/Rodrigo-Fernandez11"
          icon={<FaGithub size={30} />}
          label="GitHub"
        />
        <SocialLink
          href="https://twitter.com/RodrigoPeaFern1"
          icon={<FaTwitter size={30} />}
          label="Twitter"
        />
        <SocialLink
          href="https://www.linkedin.com/in/rodrigo-frontend-developer/"
          icon={<FaLinkedin size={30} />}
          label="LinkedIn"
        />
      </div>
    </div>
  );
};
export default ContactSection;
