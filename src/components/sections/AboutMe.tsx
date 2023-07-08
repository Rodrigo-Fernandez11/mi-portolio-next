"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { SiGoogle, SiFreecodecamp, SiPlatzi } from "react-icons/si";

interface IntroductionProps {
  title: string;
  description: string;
}

const Introduction: React.FC<IntroductionProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <h3 className="text-2xl md:text-4xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 text-lg">{description}</p>
    </motion.div>
  );
};

interface TimelineEventProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center mb-6"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutMe: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Introduction
              title="Introducción Personal"
              description="¡Hola! Soy [Tu Nombre], un programador y marketer apasionado por la creación de soluciones digitales efectivas y atractivas. Combino mis habilidades técnicas con mi experiencia en marketing para ayudar a las empresas a alcanzar sus objetivos y brindar una experiencia excepcional a los usuarios."
            />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TimelineEvent
                icon={<FaGraduationCap />}
                title="Licenciatura en Ingeniería de Software"
                description="Universidad XYZ"
              />

              <TimelineEvent
                icon={<SiGoogle />}
                title="Certificado en Marketing Digital"
                description="Google Academy"
              />

              <TimelineEvent
                icon={<SiFreecodecamp />}
                title="Curso Avanzado de Desarrollo Web"
                description="freeCodeCamp"
              />

              <TimelineEvent
                icon={<SiPlatzi />}
                title="Diplomado en Marketing Digital"
                description="Platzi"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
