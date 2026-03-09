import type { EventProps } from '@/types';

export const Event: React.FC<EventProps> = ({
  icon,
  title,
  description,
  organization,
}) => {
  return (
    <div className="flex items-center shadow-md border border-transparent transition-all duration-300 hover:border-white hover:shadow-lg hover:scale-105 hover:-translate-y-1 rounded-xl p-2 cursor-pointer">
      <div className="p-3 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div className="">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-sm py-4 text-gray-400">{organization}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
