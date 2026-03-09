import type { ReactNode } from "react";

interface CtaPanelProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actions: ReactNode;
  footer?: ReactNode;
  backgroundLayer?: ReactNode;
  containerClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  actionsClassName?: string;
  footerClassName?: string;
}

export const CtaPanel: React.FC<CtaPanelProps> = ({
  icon,
  title,
  description,
  actions,
  footer,
  backgroundLayer,
  containerClassName = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  actionsClassName = "",
  footerClassName = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gray-800 p-6 sm:p-8 lg:p-12 ${containerClassName}`}
    >
      {backgroundLayer}
      <div className="relative text-center">
        {icon ? <div className={iconClassName}>{icon}</div> : null}
        <h2 className={`mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl lg:text-4xl ${titleClassName}`}>
          {title}
        </h2>
        <p className={`mx-auto mb-6 max-w-2xl text-base text-gray-300 sm:mb-8 sm:text-lg ${descriptionClassName}`}>
          {description}
        </p>

        <div className={actionsClassName}>{actions}</div>

        {footer ? <div className={footerClassName}>{footer}</div> : null}
      </div>
    </div>
  );
};
