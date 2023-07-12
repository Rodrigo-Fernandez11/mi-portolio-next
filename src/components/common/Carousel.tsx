"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Card 1",
      date: "January 1, 2022",
      description: "This is card 1",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
    },
    {
      title: "Card 2",
      date: "February 15, 2022",
      description: "This is card 2",
      technologies: ["Technology 4", "Technology 5", "Technology 6"],
    },
    {
      title: "Card 3",
      date: "March 27, 2022",
      description: "This is card 3",
      technologies: ["Technology 7", "Technology 8", "Technology 9"],
    },
    // Agrega más datos de cards aquí
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative">
      <div className="flex justify-center mb-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-gray-200 p-2 focus:outline-none absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-gray-700"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full bg-gray-200 p-2 focus:outline-none absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-gray-700"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="flex"
          style={{
            width: `${data.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / data.length)}%)`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full p-4"
              style={{ width: `${100 / data.length}%` }}
            >
              <Card
                title={item.title}
                date={item.date}
                description={item.description}
                technologies={item.technologies}
                isActive={index === currentIndex}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;