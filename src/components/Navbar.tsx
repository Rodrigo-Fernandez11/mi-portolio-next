import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-gray-800 sticky top-0 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a
          href="#"
          className="text-3xl font-bold tracking-wider text-gray-900 hover:text-pink-500 transition-colors duration-300"
        >
          <span className="text-pink-500">My</span> Portfolio
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="nav-link hover:text-pink-500 transition-colors duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link hover:text-pink-500 transition-colors duration-300"
            >
              Acerca
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link hover:text-pink-500 transition-colors duration-300"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link hover:text-pink-500 transition-colors duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
