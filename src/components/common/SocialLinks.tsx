import type { SocialLinkProps } from "@/types";

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-all duration-300 mx-2 hover:scale-110 hover:-translate-y-1"
  >
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);
