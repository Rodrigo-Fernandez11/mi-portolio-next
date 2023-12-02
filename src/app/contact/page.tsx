import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "@/components/common/SocialLinks";
import ButtonCv from "@/components/common/ButtonCv";

const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen p-10 flex flex-col items-center justify-center" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

      <div className="w-full max-w-screen-md flex">
        <div className="w-1/2 pr-4">
          <h3 className="text-xl font-bold mb-4">Mis redes sociales</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <SocialLink
                href="https://github.com/Rodrigo-Fernandez11"
                icon={<FaGithub size={30} />}
                label="GitHub"
              />
              <span className="ml-2">GitHub</span>
            </div>
            <div className="flex items-center">
              <SocialLink
                href="https://twitter.com/RodrigoPeaFern1"
                icon={<FaTwitter size={30} />}
                label="Twitter"
              />
              <span className="ml-2">Twitter</span>
            </div>
            <div className="flex items-center">
              <SocialLink
                href="https://www.linkedin.com/in/rodrigo-frontend-developer/"
                icon={<FaLinkedin size={30} />}
                label="LinkedIn"
              />
              <span className="ml-2">LinkedIn</span>
            </div>
          </div>
          <ButtonCv />
        </div>

        <div className="w-px bg-neutral-100"></div>

        <div className="w-1/2 pl-4">
          <h3 className="text-xl font-bold mb-4">Informacion de Contacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg overflow-hidden shadow-md">
            <ul className="space-y-2">
              <li>
                <span className="font-bold">Email:</span> rodrip602@gmail.com
              </li>
              <li>
                <span className="font-bold">Ubicacion:</span> Buenos Aires, Argentina
              </li>
              <li>
                <span className="font-bold">Telefono:</span> +54 9 11 23018269
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
