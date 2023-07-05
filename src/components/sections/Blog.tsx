"use client"
import Image from "next/image";
import React, { useState } from "react";
import perfil from "../../../public/images/foto-perfil.jpg"

interface BlogEntry {
  title: string;
  description: string;
  date: string;
  image: string;
}

const Blog: React.FC = () => {
  const entries: BlogEntry[] = [
    {
      title: "My Experience at Hackathon X",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "June 10, 2023",
      image: "hackathon-x.jpg",
    },
    {
      title: "Speaking at Conference Y",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "May 15, 2023",
      image: "conference-y.jpg",
    },
    // ...more entries
  ];

  const [currentEntry, setCurrentEntry] = useState<number>(0);

  const handleNext = () => {
    setCurrentEntry((prevEntry) =>
      prevEntry === entries.length - 1 ? 0 : prevEntry + 1
    );
  };

  const handlePrev = () => {
    setCurrentEntry((prevEntry) =>
      prevEntry === 0 ? entries.length - 1 : prevEntry - 1
    );
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
          <div className="mt-4">
            <BlogEntryCard entry={entries[currentEntry]} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface BlogEntryCardProps {
  entry: BlogEntry;
}

const BlogEntryCard: React.FC<BlogEntryCardProps> = ({ entry }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        src={perfil}
        alt="hola"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
        <p className="text-gray-700 mb-4">{entry.description}</p>
        <p className="text-gray-500 text-sm">{entry.date}</p>
      </div>
    </div>
  );
};

export default Blog;
