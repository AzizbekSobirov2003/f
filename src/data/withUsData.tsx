// type for img
import type { StaticImageData } from "next/image";
// images
import img1 from "@/assets/icons/Subtract.png";
import img2 from "@/assets/icons/Group (1).png";
import img3 from "@/assets/icons/Symbol.png";
import img4 from "@/assets/icons/Group (3).png";

// type for data
interface DataType {
  id: number;
  title: string;
  img: StaticImageData;
  alt: string;
}

export const withUsData: DataType[] = [
  {
    id: 48,
    title: "Доставка по всей России",
    img: img1,
    alt: "Доставка по всей России",
  },
  {
    id: 49,
    title: "Собственный склад с продукцией",
    img: img2,
    alt: "Собственный склад с продукцией",
  },
  {
    id: 49,
    title: "Весь товар сертифицирован",
    img: img3,
    alt: "Весь товар сертифицирован",
  },
  {
    id: 50,
    title: "Безопасные способы оплаты",
    img: img4,
    alt: "Безопасные способы оплаты",
  },
];
