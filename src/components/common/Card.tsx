import Image from 'next/image';

interface CardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ title, date, description, imageUrl, alt }) => {
  return (
    <div>
      <div className="flex items-center">
        <h3 className="text-xl font-bold px-5 ">{title}</h3>
        <span>{date}</span>
      </div>
      <p className="m-5">{description}</p>
      <div className="flex justify-center items-center">
        <Image alt={alt} src={imageUrl} width={400} height={400} className="rounded-lg" />
      </div>
    </div>
  );
};

export default Card;
