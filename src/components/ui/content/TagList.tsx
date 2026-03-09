interface TagListProps {
  tags: string[];
  className?: string;
  tagClassName?: string;
}

export const TagList: React.FC<TagListProps> = ({
  tags,
  className = "",
  tagClassName = "",
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-full border border-gray-700 bg-black/50 px-2.5 py-1 text-xs text-gray-300 sm:px-3 sm:py-1.5 sm:text-sm ${tagClassName}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
