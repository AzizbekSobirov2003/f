"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/HeaderCatalog";
import Image, { StaticImageData } from "next/image";
import loc from "@/assets/images/loc.png";
import time from "@/assets/images/time.png";
import call from "@/assets/images/call.png";
import mail from "@/assets/images/mail.png";
import sot from "@/assets/images/sot.png";
import Map from "@/components/map/Map";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { Iks, Like, Reyt } from "@/assets/images";
import Clients from "@/components/Clients";
import Brands from "@/components/Brands/Brands";
import { Import } from "lucide-react";

// Map komponentini dynamic import qilish


const Basket = () => {
  const [favorites, setFavorites] = useState<UseType[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Komponentni faqat mijoz tomonida yuklash uchun

  interface UseType {
    id: number;
    title: string;
    img: StaticImageData;
  }

  useEffect(() => {
    setIsMounted(true); // Komponentni yuklanganini bildirish uchun
    const fetchData = async () => {
      try {
        const keys = Object.keys(localStorage);
        const favoriteItems = keys.map((key) => {
          if (key.startsWith("likeData_")) {
            return JSON.parse(localStorage.getItem(key) as string);
          }
          return null;
        });
        setFavorites(favoriteItems.filter((item) => item !== null) as UseType[]);
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

  if (!isMounted) {
    return null; // Komponent server tomonda render qilinmasligi uchun
  }

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
              <BreadcrumbPage>Контакты</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

    
        <h1 className="w-[600px] text-[48px] m-10 relative left-[70px]">Контакты</h1>
      <div className="w-[650px] h-[652px] bg-white rounded-lg m-20">
        <p className="text-[30px] font-madium m-4 p-4 ">ООО Глобал Медикал Трейд</p>
        <p className="flex text-gray-700 text-[16px] ml-4 gap-2"> <img className="w-[11px] h-[15px]" src={loc.src} alt="loc" />Юридический адрес:</p>
        <p className="ml-8 font-madium ">Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
        <br />
        <p className="flex text-gray-700 text-[16px] ml-4 gap-2"> <img className="w-[11px] h-[15px]" src={loc.src} alt="loc" />Фактический адрес:</p>
        <p className="ml-8 font-madium ">Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
        <br />
        <p className="flex text-gray-700 text-[16px] ml-4 gap-2"> <img className="w-[15px] h-[15px]" src={time.src} alt="timevvd" />Режим работы:</p>
        <p className="ml-8 font-madium  w-[156px]">Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
        <br />
        <p className="ml-8 font-semibold">Звоните. Звонки по России бесплатны: </p>
<br />
<p className="flex text-gray-700 text-[16px] ml-4 gap-2"> <img className="w-[15px] h-[15px]" src={call.src} alt="call" />Телефоны:</p>
        <p className="ml-8 font-madium  flex">8-800-000-00-00 .... +7-000-000-00-00 .... +7-495-000-00-00</p>
        <br />
        <p className="flex text-gray-700 text-[16px] ml-4 gap-2"> <img className="w-[15px] h-[11px]" src={mail.src} alt="mail" />Пишите: </p>
        <p className="ml-8 font-madium  flex">info@mail.ru</p>
        <br />
        <p className="ml-8 font-madium  flex">Реквизиты: </p>
        <br />
        <div className="flex">
          <div>
        <p className="flex text-gray-700 text-[16px] ml-8 gap-2">ИНН</p>
        <p className="ml-8 font-madium  flex">9717039181</p>
        </div>
        <div>
        <p className="flex text-gray-700 text-[16px] ml-8 gap-2">ОГРН</p>
        <p className="ml-8 font-madium  flex">1167746796986</p>
        </div>
        <div className=" items-center justify-center relative left-[50px] bottom-[50px]">
        <p className="ml-8 font-madium text-[18px] flex ">Мы в соцсетях</p>
        <br />
        <img className=" ml-[30px]" src={sot.src} alt="sot" />

        </div>
</div>

      </div>
      <Map />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
