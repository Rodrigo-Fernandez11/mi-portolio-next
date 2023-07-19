interface EventProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    organization: string;
  }
  
 export const Event: React.FC<EventProps> = ({ icon, title, description, organization}) => {
    return (
      <div className="flex items-center shadow-md transition duration-300 hover:border-white border border-transparent rounded-xl">
        <div className="w-12 h-12 p-3 flex items-center justify-center rounded-full">
          {icon}
        </div>
        <div className="ml-5">
          <h4 className="text-xl font-bold">{title}</h4>
          <span>{organization}</span>
          <p>{description}</p>
        </div>
      </div>
    );
  };