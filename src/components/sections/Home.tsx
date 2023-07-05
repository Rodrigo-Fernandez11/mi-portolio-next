import React from "react";
import Image from "next/image";
import perfil from "../../../public/images/foto-perfil.jpg";

const HomeSection: React.FC = () => {
  return (
    <section className="bg-gray-800 text-gray-100 h-screen p-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Hello my name is Rodrigo</h2>
        <div className="space-y-2 md:space-y-3 lg:space-y-4">
          <p className="text-base md:text-lg lg:text-xl">front end developer</p>
          <p className="text-base md:text-lg lg:text-xl">solidity developer</p>
          <p className="text-base md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus minus minima nostrum distinctio animi odit optio ipsa temporibus dignissimos iure incidunt saepe exercitationem asperiores, repudiandae nisi suscipit. Eos, vitae?</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="max-w-xs md:max-w-md">
          <Image
            src={perfil}
            alt="foto perfil rodrigo peña"
            width={300}
            height={300}
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
