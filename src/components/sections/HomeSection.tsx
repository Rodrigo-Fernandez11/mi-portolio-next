import React from "react";
import Image from "next/image";
import perfil from "../../../public/images/foto-perfil.jpg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import SocialLink from "../common/SocialLinks";

const HomeSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen p-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Hello, my name is Rodrigo
        </h2>
        <div className="mt-8 space-y-4">
          <p className="text-xl md:text-2xl">Front-end Developer</p>
          <p className="text-xl md:text-2xl">Solidity Developer</p>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            accusamus minus minima nostrum distinctio animi odit optio ipsa
            temporibus dignissimos iure incidunt saepe exercitationem
            asperiores, repudiandae nisi suscipit. Eos, vitae?
          </p>
        </div>

        <div className="flex mt-8">
          <SocialLink
            href="https://github.com/your-username"
            icon={<FaGithub size={24} />}
            label="GitHub"
          />
          <SocialLink
            href="https://twitter.com/your-username"
            icon={<FaTwitter size={24} />}
            label="Twitter"
          />
          <SocialLink
            href="https://linkedin.com/in/your-username"
            icon={<FaLinkedin size={24} />}
            label="LinkedIn"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-8">
          Download CV
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src={perfil}
          alt="foto perfil rodrigo peña"
          className="rounded-full"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default HomeSection;

