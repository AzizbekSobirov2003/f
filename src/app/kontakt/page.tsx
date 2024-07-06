"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/HeaderCatalog";
import Image, { StaticImageData } from "next/image";
// import ChooseUs from "@/components/ChooseUs";
// import { ButtonLeft, ButtonRight } from "@/components/RightLeftBtns";
import Subscribe from "@/components/Subscribe";
import WithComponent from "@/components/withUs";
import AboutCompany from "@/components/About/AboutCompany";
import Document from "@/components/dakument/dakument";

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
const Map = dynamic(() => import("@/components/map/Map"), {
  ssr: false, // Server tomonida render qilinmasligi uchun
});

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
      <div></div>
<iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam"
            width="1310"
            height="389"
            className="rounded-[10px]  items-center justify-center m-0 relative left-[110px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className="text-[14px] relative bottom-[60px] left-[1160px] w-[198px] h-[41px] rounded-3xl  bg-[#088269FF] px-6 py-3 text-white active:scale-95 ">Построить маршрут</button>



      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
