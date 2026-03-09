interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <div className={className}>
      <h2
        className={`mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl lg:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base text-gray-400 sm:text-lg ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};
