interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Acerca', href: '/aboutMe' },
  { label: 'Portafolio', href: '/portfolio' },
  { label: 'Contacto', href: '/contact' },
];

const Navbar: React.FC = () => {

  return (
    <nav className="bg-neutral-900 sticky top-0 bg-opacity-80">
      <div className="container mx-auto flex items-center justify-end p-2">
        <ul className="flex space-x-4">
          {menuItems.map(({ label, href }, index) => (
            <li key={index}>
              <a
                href={href}
                className="hover:text-blue-500"
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
