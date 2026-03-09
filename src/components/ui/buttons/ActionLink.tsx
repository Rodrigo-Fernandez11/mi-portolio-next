import Link from "next/link";

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const variantClasses = {
  primary:
    "border-blue-500/50 bg-blue-500/10 text-blue-400 hover:border-blue-500 hover:bg-blue-500/20",
  secondary:
    "border-gray-700 bg-gray-900/50 text-gray-300 hover:border-gray-600 hover:bg-gray-900 hover:text-white",
};

export const ActionLink: React.FC<ActionLinkProps> = ({
  href,
  children,
  variant = "secondary",
  className = "",
}) => {
  const sharedClasses =
    "rounded-lg border px-5 py-2.5 text-xs sm:px-6 sm:text-sm font-medium transition-all duration-300";

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sharedClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${sharedClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
};
