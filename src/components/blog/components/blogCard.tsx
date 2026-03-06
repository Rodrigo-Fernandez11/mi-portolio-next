import Image from "next/image";
import { StaticImageData } from "next/image";
import perfi from "../../../../public/images/foto-perfil2.webp";

interface PropsBlog {
  img: StaticImageData;
  title: string;
  alt: string;
  date: string;
  desc: string;
}

export const BlogCard: React.FC<PropsBlog> = ({
  img,
  title,
  alt,
  date,
  desc,
}) => {
  return (
    <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
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
          <span className="block">Rodri</span>
          <span className="block text-gray-400 text-sm">{date}</span>
        </div>
      </div>
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm mt-4 text-gray-300">{desc}</p>
      </div>
    </div>
  );
};
