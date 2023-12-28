import { ReactNode } from 'react';

interface ContactMethodProps {
  icon: ReactNode; // Tipo genérico para cualquier nodo React
  contact: string;
}

export const ContactMethod: React.FC<ContactMethodProps> = ({ icon, contact }) => {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <p>{contact}</p>
    </div>
  );
};