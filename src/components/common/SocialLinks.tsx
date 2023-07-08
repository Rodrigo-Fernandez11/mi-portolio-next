// SocialLink.tsx
import React, { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-gray-500 mx-2"
  >
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);

export default SocialLink;
