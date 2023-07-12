"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

interface CardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ title, date, description, technologies }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-200 rounded-lg shadow-lg p-4">
        
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-gray-600 ml-2">{date}</span>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap">
        {technologies.map((technology, index) => (
          <a href="#" key={index} className="mr-2 mb-2 text-gray-500 hover:text-gray-700">
            <FaLink className="inline-block w-4 h-4 mr-1" />
            {technology}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Card;
