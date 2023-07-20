
import { createContext, Dispatch, SetStateAction } from 'react';

interface CarouselItem {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  alt: string;
  width: number;
  heigth: number;
}

interface CarouselContextProps {
  items: CarouselItem[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

export default CarouselContext;
