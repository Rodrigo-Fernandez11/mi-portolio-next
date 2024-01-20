import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 sticky top-0 bg-opacity-90">
      <div className="container mx-auto flex items-center justify-end p-2">
        <ul className="flex space-x-3">
          <li>
            <Link className="hover:text-blue-500" href={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href={"/blog"}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href={"/aboutMe"}>
              Sobre mi
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href={"/portfolio"}>
              Portafolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href={"/contact"}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
