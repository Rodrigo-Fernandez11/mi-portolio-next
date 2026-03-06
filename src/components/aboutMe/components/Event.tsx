interface EventProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  organization: string;
}

export const Event: React.FC<EventProps> = ({
  icon,
  title,
  description,
  organization,
}) => {
  return (
    <div className="flex items-center shadow-md transition duration-300 hover:border-white border border-transparent rounded-xl p-2">
      <div className="p-3 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div className="">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-sm py-4 text-blue-500">{organization}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
