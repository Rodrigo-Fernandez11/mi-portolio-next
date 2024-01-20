import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 mx-2"
  >
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);
