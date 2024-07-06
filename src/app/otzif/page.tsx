"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import img from "@/assets/images/Rectangle.png";
import img1 from "@/assets/images/Rectangle (1).png";
import img2 from "@/assets/images/Group.png"
import img3 from "@/assets/images/Rectangle (2).png"
import ChooseUs from "@/components/ChooseUs";
import { ButtonLeft, ButtonRight } from "@/components/RightLeftBtns";
import ButtonMy from "@/components/Button";
// components
import { Card, CardActionArea } from "@mui/material";
import { brandsData } from "@/data/BrandsData";
import us1 from "@/assets/images/us1.png";
import us2 from "@/assets/images/us2.png";
import us3 from "@/assets/images/us3.png";
import us4 from "@/assets/images/us4.png";
import us5 from "@/assets/images/us5.png";
import us6 from "@/assets/images/us6.png";
import us7 from "@/assets/images/us7.png";
import us8 from "@/assets/images/us8.png";
import fr1 from "@/assets/images/Frame.png";
import fr2 from "@/assets/images/Frame (1).png";
import st1 from "@/assets/images/el1.png";
import StarItem1 from "@/components/item1/Star";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { Iks, Like, Reyt } from "@/assets/images";
import Clients from "@/components/Clients";
import Map from "@/components/map/Map";
import Brands from "@/components/Brands/Brands";

const Basket = () => {
  const [favorites, setFavorites] = useState<UseType[]>([]);
  const [count, setCount] = useState(1);

  interface UseType {
    id: number;
    title: string;
    img: StaticImageData;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = Object.keys(localStorage);
        const favoriteItems = keys.map((key) => {
          if (key.startsWith("likeData_")) {
            return JSON.parse(localStorage.getItem(key) as string);
          }
          return null;
        });
        setFavorites(favoriteItems.filter((item) => item !== null) as []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const removeFromFavorites = (itemId: number) => {
    localStorage.removeItem(`likeData_${itemId}`);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item: { id: number }) => item.id !== itemId),
    );
  };

  const dataLength = favorites.length;

  return (
    <div className="bacround">
      <Header />
      <div className="mx-auto mt-8 w-[90%]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Главная</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Отзывы</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

     
        <h1 className="text-[48px] m-20 ml-30">Отзывы</h1>

     <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px] w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Не следует, однако, забывать, что граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Не следует, однако, забывать, что граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов. </p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
       <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
            <img src={st1.src} alt="st1" className="m-3" />
            <div className="relative left-[90px] bottom-[75px]">
            <h1 className="font-semibold  text-[18px] m-">ООО Название компании</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-">Михаил Булич Андреевич, Директор</p>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray relative left-[460px] bottom-[20px]  w-[60px]">14.03.2023</p>
<StarItem1 />
</div>
<p  style={{ color: '#7A7687' }} className="relative bottom-[50px] w-[580px] ml-4 text-customGray text-[16px]">Каждый из нс понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования материально-технической и кадровой базы. Господа, повышение уровня гражданского сознания играет определяющее значение для стандартных подходов.  План целого ряда внеочередных мероприятий с учётом комплекса.</p>
       </div>
            </div>
 
   

            


    
    
    < Map  />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;

