import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-black bg-opacity-95 border-b border-gray-800 border-opacity-50">
      <div className="container mx-auto flex items-center justify-center px-6 py-4">
        <ul className="flex items-center gap-8 md:gap-12">
          <li>
            <Link
              className="relative font-medium text-white text-base md:text-lg transition-all duration-300 hover:text-gray-400 hover:scale-105 group"
              href={"/"}
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              className="relative font-medium text-white text-base md:text-lg transition-all duration-300 hover:text-gray-400 hover:scale-105 group"
              href={"/blog"}
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              className="relative font-medium text-white text-base md:text-lg transition-all duration-300 hover:text-gray-400 hover:scale-105 group"
              href={"/aboutMe"}
            >
              Sobre mí
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              className="relative font-medium text-white text-base md:text-lg transition-all duration-300 hover:text-gray-400 hover:scale-105 group"
              href={"/portfolio"}
            >
              Portafolio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
