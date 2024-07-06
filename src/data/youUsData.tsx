// type for img
import type { StaticImageData } from "next/image";
// images
import dd1 from "@/assets/images/dd1.png";
import dd2 from "@/assets/images/dd2.png";
import dd3 from "@/assets/images/dd3.png";
import dd4 from "@/assets/images/dd4.png";

// type for data
interface DataType {
  id: number;
  title: string;
  img: StaticImageData;
  alt: string;
}

export const youUsData: DataType[] = [
  {
    id: 48,
    title: " Установка, настройка и пуско-наладка медтехники",
    img: dd1,
    alt: "Доставка по всей России",
  },
  {
    id: 49,
    title: " Сервисное обслуживание медицинской техники любой комплектации",
    img: dd2,
    alt: "Собственный склад с продукцией",
  },
  {
    id: 49,
    title: " Гарантийное и постгарантийное обслуживание",
    img: dd3,
    alt: "Весь товар сертифицирован",
  },
  {
    id: 50,
    title: " Диагностика и проведение профилактических работ",
    img: dd4,
    alt: "Безопасные способы оплаты",
  },
];
