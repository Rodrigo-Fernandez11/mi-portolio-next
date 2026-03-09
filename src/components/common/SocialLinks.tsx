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
    className="group flex items-center gap-3 rounded-lg border border-gray-700 bg-gray-900/50 px-5 py-3.5 transition-all duration-300 hover:scale-105 hover:border-gray-600 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/20"
  >
    <span className="text-2xl text-gray-400 transition-colors duration-300 group-hover:text-white">
      {icon}
    </span>
    <span className="text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
      {label}
    </span>
  </a>
);
