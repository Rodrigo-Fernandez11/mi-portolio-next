import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "@/components/common/SocialLinks";
import ButtonCv from "@/components/common/ButtonCv";
import FavoriteTools from "@/components/common/FavoriteTools";
import FotoPerfil from "../../public/images/foto-perfil2.webp";
import Statics from "@/components/common/Statistics";

export default function Home() {
  return (
    <section className="min-h-screen p-5 flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-4">
        <Image
          src={FotoPerfil}
          alt="foto perfil rodrigo peña"
          priority
          className="rounded-full"
          width={200}
          height={200}
        />
        <Statics />
        <div className="my-8 flex justify-center items-center gap-4">
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
          <ButtonCv />
        </div>
      </div>
      <div className="w-full lg:w-1/2 my-2">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hello, I am Rodrigo Peña Fernandez. 👋
        </h2>
        <div className="mt-8 space-y-4 text-lg md:text-lg">
          <span className="text-sky-200">
            Front-end Developer / Blockchain Solidity Engineer / Digital
            Marketing
          </span>
          <p>
            <span className="text-yellow-200">
              Inquisitive, collaborative, and passionate about entrepreneurship
              and technology
            </span>
            , specialized in web programming and Blockchain. With experience in
            digital marketing and shaping startups and ideas, keeping myself
            updated every day and participating in various communities and
            hackathons.
          </p>
          <FavoriteTools />
        </div>
      </div>
    </section>
  );
}
