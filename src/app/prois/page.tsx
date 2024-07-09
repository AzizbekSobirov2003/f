"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import ChooseUs from "@/components/ChooseUs";
import img1 from "@/assets/data/image1.png";
import AboutCompany from "@/components/About/AboutCompany";
import News from "@/components/News/News";
import Catalog from "@/components/Catalog/Catalog";
import med from "@/app/meditsin/page";
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
              <BreadcrumbPage>О компании</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex">
      <div className="ml-20 ">
        <select name="" id="" className="m-1 w-[320px] h-[52px] border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3] rounded-[10px] text-[12px]">
          <option value="0">Направления</option>
          <option value="1">Реанимация</option>
          <option value="2">Хирургия</option>
          <option value="3">Офтальмология</option>
          <option value="4">Лабораторная диагностика</option>
          <option value="5">Акушерство</option>
          <option value="6">Акушерство</option>
          <option value="7">Гистология</option>
          <option value="8">Косметология</option>
          <option value="9">Оториноларингология</option>
          <option value="10">Рентгенология и томография</option>
          <option value="11">Стерилизация</option>
          <option value="12">Физиотерапия и реабилитация</option>
          <option value="13">Функциональная диагностика</option>
          <option value="14">Эндоскопия</option>
          <option value="15">Новинки</option>
          <option value="16">Распродажи</option>
          <option value="17">Кабинеты под ключ</option>
        </select>
        <div className="w-[320px] h-[421px] m-1 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3] rounded-[10px] text-[12px]">
          <p className="text-[16px] m-1 p-1">Страны</p>
          <input
            type="search"
            placeholder="Поиск по стране"
            className="h-[39px] rounded-[20px] m-1 p-1 text-[14px]"
            style={{ width: "291px" }}
          />
          <div className="mt-2 space-y-2 ml-5">
            <input type="checkbox" className="form-checkbox w-[20px] h-[20px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3]" />
            <span className="text-[14px]">Австралия</span>
          </div>
          <div className="mt-2 space-y-2 ml-5">
            <input type="checkbox" className="form-checkbox w-[20px] h-[20px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3]" />
            <span className="text-[14px]">Австрия</span>
          </div>
          <div className="mt-2 space-y-2 ml-5">
            <input type="checkbox" className="form-checkbox w-[20px] h-[20px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3]" />
            <span className="text-[14px]">Бельгия</span>
          </div>
          <div className="mt-2 space-y-2 ml-5">
            <input type="checkbox" className="form-checkbox w-[20px] h-[20px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3]" />
            <span className="text-[14px]">Великобритания</span>
          </div>
          <div className="mt-2 space-y-2 ml-5">
            <input type="checkbox" className="form-checkbox w-[20px] h-[20px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3]" />
            <span className="text-[14px]">Германия</span>
          </div>
          <div className="mt-2 space-y-2 ml-5">
            <input type="checkbox" className="form-checkbox w-[20px] h-[20px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3]" />
            <span className="text-[14px]">Израиль</span>
          </div>
          <div className="mt-2 space-y-2 ml-5">
            <input type="checkbox" className="form-checkbox w-[20px] h-[20px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#F8F7F3]" />
            <span className="text-[14px]">Испания</span>
          </div>
         
        </div> <div className="flex space-x-4 relative bottom-[0px]">
            <button className="w-[120px] h-[41px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] rounded-[50px] hover:bg-gray-200 transition">
              Сбросить
            </button>
            <button className="w-[180px] h-[41px] m-2 p-2 border-[1px] border-solid border-[#E5E2EE] bg-[#088269] text-white rounded-[50px] hover:bg-[#066e5b] transition">
              Показать
            </button>
          </div>
      </div>
      <div>
<div className="flex gap-6 justify-center items-center m-1 p-1">
<Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]   " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div> 
    </Link>

    <Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]  " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

    <Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]  " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

</div>
<div className="flex gap-6 justify-center items-center m-1 p-1">
<Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]   " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

    <Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]  " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

    <Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]  " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

</div>
<div className="flex gap-6 justify-center items-center m-1 p-1">
<Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]   " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

    <Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]  " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

    <Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]  " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

</div>
<div className="flex gap-6 justify-center m-1 p-1 items-center">
<Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]   " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

    <Link href="../meditsin">

    <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
        <img className="w-[320px] h-[196px] bg-white  rounded-[10px]  " src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
    </div>
    </Link>

<div className="flex gap-6 justify-center items-center m-1 p-1">
  <div className="w-[320px] h-[280px]  border-[1px] border-solid rounded-[10px] border-[#E5E2EE]">
    <Link href="../meditsin">
      <div>
        <img className="w-[320px] h-[196px] bg-white rounded-[10px]" src={img1.src} alt="img1" />
        <p className="m-2 p-2 w-[266px]">НМИЦ онкологии им. Н.Н. Блохина</p>
      </div>
    </Link>
  </div>

  {/* Qolgan divlarni ham shuningdek o'zgartiring */}

</div>
</div>
</div>
</div>
      <Catalog />

      <ChooseUs />
      <News />
      <AboutCompany />

      <Map />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
