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
              <BreadcrumbPage>Оплата</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
<div>
    <br />
    <br />
    <br />
    <h1 className="text-[48px] ml-20">Оплата</h1>
 <br />
    <p className="w-[650px] ml-20">Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. </p>
</div>
<br />
<div className="flex gap-3 justify-center items-center" >
<div className="w-[430px] h-[240px] bg-white border border-gray-200 rounded-[10px]">
    <p className="text-[18px] font-semibold m-2 p-2">Оплата наличными</p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">1. Также как постоянное обеспечение нашей деятельности требует определения </p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">2. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </p>
<p className="text-[16px] w-[342px] ml-5 text-gray-700">3. Также как постоянное обеспечение нашей </p>
</div>
<div className="w-[430px] h-[240px] bg-white border border-gray-200 rounded-[10px]"> <p className="text-[18px] font-semibold m-2 p-2">Безналичный расчет</p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">1. Также как постоянное обеспечение нашей деятельности требует определения </p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">2. Также как постоянное обеспечение нашей </p>
<p className="text-[16px] w-[342px] ml-5 text-gray-700">3. Также как постоянное</p>
</div>
<div className="w-[430px] h-[240px] bg-white border border-gray-200 rounded-[10px]">
<p className="text-[18px] font-semibold m-2 p-2">Оплата наличными</p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">1. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">2. Также как постоянное обеспечение нашей </p>
<p className="text-[16px] w-[342px] ml-5 text-gray-700">3. Также как постоянное</p>
<p className="text-[16px] w-[342px] ml-5 text-gray-700">4. Также как постоянное обеспечение </p>

</div>

</div>
<br />
<br />
<br />
<h1 className="text-[48px] ml-20">Порядок возврата денежных средств</h1>
 <br />
    <p className="w-[650px] ml-20">Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. </p>
   <br />
    <div className="flex gap-3 ml-20 items-center" >
    <div className="w-[430px] h-[240px] bg-white border border-gray-200 rounded-[10px]">
    <p className="text-[18px] font-semibold m-2 p-2">При оплате наличными</p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">1. Также как постоянное обеспечение нашей деятельности требует определения </p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">2. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </p>

</div>
<div className="w-[430px] h-[240px] bg-white border border-gray-200 rounded-[10px]">
    <p className="text-[18px] font-semibold m-2 p-2">При оплате банковской картой</p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">1. Также как постоянное обеспечение нашей деятельности требует определения </p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">2. Также как постоянное обеспечение нашей </p>
<p className="text-[16px] w-[342px] ml-5 text-gray-700">3. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии  </p>
</div>
    </div>
    <br />
    <br />
    <br />
    <h1 className="text-[48px] ml-20">Условия поставок</h1>
 <br />
    <p className="w-[650px] ml-20">Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. </p>
   <br />
   <div className="flex gap-3 ml-20 items-center" >
    <div className="w-[430px] h-[240px] bg-white border border-gray-200 rounded-[10px]">
    <p className="text-[18px] font-semibold m-2 p-2">Лизинг</p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">1. Также как постоянное обеспечение нашей деятельности требует определения </p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">2.Также как постоянное</p>
<p className="text-[16px] w-[342px] ml-5 text-gray-700">3. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </p>

</div>
<div className="w-[430px] h-[240px] bg-white border border-gray-200 rounded-[10px]">
    <p className="text-[18px] font-semibold m-2 p-2">Рассрочка</p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">1. Требующим обновления приборов в различных направлениях, от установок компьютерной томографии  </p>
    <p className="text-[16px] w-[342px] ml-5 text-gray-700">2.  Также как постоянное  </p>
<p className="text-[16px] w-[342px] ml-5 text-gray-700">3. Также как постоянное обеспечение нашей </p>
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

