import React from "react";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Inicio", href: "#" },
  { label: "Acerca", href: "#" },
  { label: "Portafolio", href: "#" },
  { label: "Contacto", href: "#" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white sticky top-0 shadow-sm">
      <div className="container mx-auto flex items-center justify-end px-4 py-3">
        <ul className="flex space-x-4">
          {menuItems.map(({ label, href }, index) => (
            <li key={index}>
              <a
                href={href}
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
