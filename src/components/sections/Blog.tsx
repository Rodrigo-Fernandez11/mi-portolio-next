"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { SiReact, SiTypescript } from "react-icons/si";

const BlogCard: React.FC<{
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}> = ({ title, date, tags, excerpt }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <FaCalendarAlt className="mr-1" />
        <span>{date}</span>
      </div>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <div className="flex mt-auto">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="px-2 py-1 bg-blue-500 text-white text-sm rounded-lg mr-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const BlogCarousel: React.FC = () => {
  const blogPosts = [
    {
      title: "Aprendiendo React Hooks",
      date: "Mayo 2022",
      tags: ["React", "JavaScript"],
      excerpt:
        "En este artículo, compartiré mi experiencia y aprendizaje al utilizar los Hooks de React en mis proyectos. Descubrirás cómo los Hooks pueden mejorar la estructura y la eficiencia de tus componentes.",
    },
    {
      title: "Mejorando la performance de una aplicación React",
      date: "Septiembre 2022",
      tags: ["React", "Optimización"],
      excerpt:
        "La optimización de rendimiento es crucial para una aplicación React exitosa. Aprenderás técnicas avanzadas para mejorar el rendimiento y la velocidad de tus aplicaciones.",
    },
    {
      title: "Introducción a TypeScript",
      date: "Enero 2023",
      tags: ["TypeScript", "JavaScript"],
      excerpt:
        "TypeScript es un superset de JavaScript que agrega tipado estático y características adicionales. Exploraremos los conceptos básicos de TypeScript y cómo puede mejorar la calidad y mantenibilidad de tus proyectos.",
    },
  ];

  const [currentPost, setCurrentPost] = useState(0);

  const handleNext = () => {
    setCurrentPost((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentPost((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${currentPost * 100}%)` }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              tags={post.tags}
              excerpt={post.excerpt}
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none mr-2"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Blog
        </h2>
        <BlogCarousel />
      </div>
    </section>
  );
};

export default Blog;
