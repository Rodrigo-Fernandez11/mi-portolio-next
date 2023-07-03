const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 text-black sticky top-0">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Logo</a>
        <ul className="flex space-x-4">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Portafolio</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
