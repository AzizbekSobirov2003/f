"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import sta1 from "@/assets/images/sta1.png";
import sta2 from "@/assets/images/sta2.png";
import sta3 from "@/assets/images/sta3.png";
import sta4 from "@/assets/images/sta4.png";

// components
import Complex from "@/components/Complex";
import Catalog from "@/components/Catalog/Catalog";

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
      prevFavorites.filter((item) => item.id !== itemId)
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
              <BreadcrumbPage>Информационная статья</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="w-[1310px] h-[2384px] bg-white rounded-[10px] relative left-[43px] m-20 md:w-[90%] md:mx-auto md:h-auto md:left-0 sm:w-full sm:h-auto sm:mx-0 sm:my-4">
        <h1 className="text-[48px] p-8 md:text-[36px] md:p-4 sm:text-[28px] sm:p-2">Информационная статья</h1>
        <p className="text-[12px] text-gray-700 ml-10 md:text-[10px] sm:ml-4">Автор: Иванов Р.</p>
        <p className="text-[18px] m-10 font-semibold md:text-[16px] md:m-6 sm:text-[14px] sm:m-4">Содержание:</p>
        <p className="ml-10 text-gray-700 md:ml-6 sm:ml-4">1. Новая модель организационной деятельности</p>
        <p className="ml-10 text-gray-700 md:ml-6 sm:ml-4">2. Мы вынуждены отталкиваться от того, что курс</p>
        <p className="ml-10 text-gray-700 md:ml-6 sm:ml-4">3. Новая модель организационной деятельности</p>
        <p className="ml-10 text-gray-700 md:ml-6 sm:ml-4">4. Мы вынуждены отталкиваться от того, что курс</p>
        <p className="text-[30px] font-semibold p-10 md:text-[24px] md:p-6 sm:text-[20px] sm:p-4">Новая модель организационной деятельности</p>
        <p className="w-[889px] text-[16px] ml-10 md:w-[80%] md:ml-6 sm:w-full sm:ml-4">Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для стандартных подходов. Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей активности создаёт предпосылки для соответствующих условий активизации.</p>
        <br />
        <div className="justify-center items-center flex gap-2">
          <Image src={sta1} alt="sta1" className="md:w-[40%] sm:w-[48%]" />
          <Image src={sta2} alt="sta2" className="md:w-[40%] sm:w-[48%]" />
        </div>
        <p className="text-[30px] font-semibold p-10 md:text-[24px] md:p-6 sm:text-[20px] sm:p-4">Новая модель организационной деятельности</p>
        <p className="w-[889px] text-[16px] ml-10 md:w-[80%] md:ml-6 sm:w-full sm:ml-4">Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для стандартных подходов. Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей активности создаёт предпосылки для соответствующих условий активизации.</p>
        <div className="w-[1310px] bg-green-100 md:w-[90%] md:mx-auto sm:w-full">
          <p className="text-[16px] w-[869px] text-[14px] m-10 p-5 md:w-[80%] md:m-6 md:p-4 sm:w-full sm:m-4 sm:p-2">Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для стандартных подходов. Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей активности создаёт предпосылки для соответствующих условий активизации.</p>
        </div>
        <p className="text-[30px] font-semibold p-10 md:text-[24px] md:p-6 sm:text-[20px] sm:p-4">Новая модель организационной деятельности</p>
        <p className="w-[889px] text-[16px] ml-10 md:w-[80%] md:ml-6 sm:w-full sm:ml-4">Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для стандартных подходов. Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей активности создаёт предпосылки для соответствующих условий активизации.</p>
        <br />
        <div className="justify-center items-center flex gap-2">
          <Image src={sta3} alt="sta3" className="md:w-[40%] sm:w-[48%]" />
          <Image src={sta4} alt="sta4" className="md:w-[40%] sm:w-[48%]" />
        </div>
        <p className="text-[30px] font-semibold p-10 md:text-[24px] md:p-6 sm:text-[20px] sm:p-4">Новая модель организационной деятельности</p>
        <p className="w-[889px] text-[16px] ml-10 md:w-[80%] md:ml-6 sm:w-full sm:ml-4">Равным образом, внедрение современных методик однозначно фиксирует необходимость поэтапного и последовательного развития общества. В частности, постоянное информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для стандартных подходов. Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей активности создаёт предпосылки для соответствующих условий активизации.</p>
      </div>

      <Catalog />
      <Complex />
      <Brands />
      <Map />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
