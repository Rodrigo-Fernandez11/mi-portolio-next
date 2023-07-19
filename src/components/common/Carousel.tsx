"use client";
import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

interface CarouselItem {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

interface CarouselContextProps {
  items: CarouselItem[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, date, description, imageUrl, alt } = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const contextValue: CarouselContextProps = {
    items,
    currentIndex,
    setCurrentIndex,
  };

  if (!items || items.length === 0) {
    // Manejar el caso en que no se proporcionen los datos del carrusel
    return null;
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className="flex justify-between m-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-blue-400 p-2 focus:outline-none"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full bg-blue-400 p-2 focus:outline-none"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="flex flex-col items-center">
          <Card
            title={title}
            date={date}
            description={description}
            imageUrl={imageUrl}
            alt={alt}
          />
        </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
