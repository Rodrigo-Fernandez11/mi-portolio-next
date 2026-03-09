import type { BlogPost } from "@/types";
import Image from "next/image";
import perfi from "../../../../public/images/foto-perfil2.webp";

export const BlogCard: React.FC<BlogPost> = ({
  img,
  title,
  alt,
  date,
  desc,
}) => {
  return (
    <div className="max-w-md mx-auto mt-4 shadow-lg border border-gray-800 rounded-md transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-pointer">
      <Image
        src={img}
        alt={alt}
        className="w-full h-48 rounded-t-md"
        width={400}
        height={400}
      />
      <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
        <div className="flex-none w-10 h-10 rounded-full">
          <Image
            src={perfi}
            alt="foto de perfil de rodrigo peña"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="ml-3">
          <span className="block font-medium">Rodri</span>
          <span className="block text-gray-500 text-sm">{date}</span>
        </div>
      </div>
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-base leading-relaxed text-gray-400">{desc}</p>
      </div>
    </div>
  );
};
