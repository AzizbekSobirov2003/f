"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
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
              <BreadcrumbPage>Доставка</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="infor">
        <h1 className="w-[600px] text-[48px] m-10 relative left-[70px]">Информация о доставке</h1>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam"
            width="1310"
            height="389"
            className="rounded-[10px]  items-center justify-center m-0 relative left-[110px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="w-[175px] mt-[-60px] relative left-[1180px]" >
          <button className="w-[175px] rounded-3xl  bg-[#088269FF] px-6 py-3 text-white active:scale-95 ">Пункт выдачи</button>
          </div><p className="relative left-[700px] mt-[50px] w-[700px]">Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник. </p>
      </div>

      <WithComponent />
      <button className=" m-10 relative left-[1150px] rounded-3xl  bg-[#088269FF] px-6 py-3 text-white active:scale-95 ">Проверить статус доставки</button>

      <div className="m-20">
      <h1 className="text-[30px] w-[360px]">Правила получения товара в пункте выдачи</h1>
     <br />
      <p className="text-[16px] w-[540px]">Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов.</p>
     </div>


     <div className="h-[230px] w-[650px] relative left-[800px] relative bottom-[250px]">
     <hr className="border-gray-700"style={{ width: "650px" }}/>
     <br />
     <h1 className="text-[18px] font-semibold ">Подготовить документы</h1>
     <br />
     <p className="text-[16px] text-gray-700">Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы</p>
  <br />
     <hr className="border-gray-700"style={{ width: "650px" }}/>
     <br />
<h1 className="text-[18px] font-semibold">Проверка упаковки</h1>
<br />
<p className="text-[16px] text-gray-700">При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки</p>
<br />
<hr className="border-gray-700" style={{ width: "650px", color: "#7A7687" }} />
<br />
<h1 className="text-[18px] font-semibold">Проверка товара</h1>
<br />
<p className="text-[16px] text-gray-700">Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары</p>
    </div>
      <AboutCompany />
  <h1 className="text-[30px] m-20  w-[650px]">Вы сможете забрать оборудование самостоятельно из нашего офиса</h1>

<div className="flex gap-2 relative left-[800px] bottom-[190px] h-[20px] w-[650px]">
<div className="h-[139px] w-[320px] bg-white rounded-[10px] border border-solid border-[1px] border-[#E5E2EE]">
    <h1 className="m-4  text-[18px] font-semibold">Контакты</h1>
    <p className="m-4 text-[#7A7687]">+7 (000) 000-00-00</p>
    <p className="m-4 text-[#7A7687]">info@mail.ru</p>
  </div>
  <div className="h-[139px] w-[320px] bg-white rounded-[10px] border border-solid border-[1px] border-[#E5E2EE]">
    <h1 className="m-4 text-[18px] font-semibold" >Режим работы</h1>
    <p className="m-4 text-[#7A7687]">пн-пт: 09:00-19:00</p>
    <p className="m-4 text-[#7A7687]">сб-вс: выходной</p>
  </div>
</div>
<iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam"
            width="1310"
            height="389"
            className="rounded-[10px]  items-center justify-center m-0 relative left-[110px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className="text-[14px] relative bottom-[60px] left-[1160px] w-[198px] h-[41px] rounded-3xl  bg-[#088269FF] px-6 py-3 text-white active:scale-95 ">Построить маршрут</button>


      <Document />
      <div className="h-[400px]">
        <h1 className="text-[30px] m-20">Вам нужна консультация?</h1>
        <p className="text-[16px] w-[540px] ml-20">Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
    
      <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSclGR229T2fhdiMJmTWCB9CQejMauQQYXl1heR9gJmxqwYNig/viewform?embedded=true"
            width="650"
            height="445"
            frameBorder="0"
            className="relative left-[770px] bottom-[180px]"
          >
            Загрузка…
          </iframe>  </div>
      <Subscribe />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
