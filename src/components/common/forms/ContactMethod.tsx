import type { ContactMethodProps } from '@/types';

export const ContactMethod: React.FC<ContactMethodProps> = ({ icon, contact }) => {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <p>{contact}</p>
    </div>
  );
};