interface SectionBadgeProps {
  text: string;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  text,
  className = "",
}) => {
  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:text-sm font-semibold text-white ${className}`}
    >
      {text}
    </span>
  );
};
