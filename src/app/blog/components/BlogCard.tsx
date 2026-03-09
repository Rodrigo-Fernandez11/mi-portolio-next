'use client';

import { useState } from "react";
import type { BlogPost } from "@/types";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import perfi from "../../../../public/images/foto-perfil2.webp";

type BlogCardProps = BlogPost & {
  className?: string;
  featured?: boolean;
};

const getExcerpt = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

const estimateReadTime = (text: string) => {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
};

export const BlogCard: React.FC<BlogCardProps> = ({
  img,
  title,
  alt,
  date,
  desc,
  className = "",
  featured = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const excerpt = getExcerpt(desc, featured ? 320 : 220);
  const readTime = estimateReadTime(desc);
  const shouldShowButton = desc.length > (featured ? 320 : 220);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950 to-black/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-2xl ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Image
        src={img}
        alt={alt}
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${featured ? "h-56 sm:h-64" : "h-52"}`}
        width={720}
        height={420}
      />

      <div className="flex items-center px-5 pt-4">
        <div className="flex-none h-10 w-10 rounded-full ring-1 ring-gray-700">
          <Image
            src={perfi}
            alt="foto de perfil de rodrigo peña"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
        <div className="ml-3">
          <span className="block text-sm font-semibold text-white">Rodri Peña</span>
          <span className="block text-xs text-gray-500">{date}</span>
        </div>
        <div className="ml-auto rounded-full border border-gray-700 bg-black/60 px-2.5 py-1 text-xs text-gray-300">
          {readTime} min de lectura
        </div>
      </div>

      <div className="px-5 pb-5 pt-4">
        <h3 className={`mb-3 font-semibold text-white ${featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
          {title}
        </h3>
        <p className="text-base leading-relaxed text-gray-400">
          {isExpanded ? desc : excerpt}
        </p>
        
        {shouldShowButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-900 hover:text-cyan-300"
          >
            {isExpanded ? (
              <>
                Leer menos
                <FiChevronUp size={16} />
              </>
            ) : (
              <>
                Leer más
                <FiChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </article>
  );
};
