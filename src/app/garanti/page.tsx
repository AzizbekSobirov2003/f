"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import YouUs from "@/components/youUs"; // `youUs` o'rniga `YouUs`


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
import Map from "@/components/map/Map";

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
              <BreadcrumbPage>Гарантии</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
<div>
    <h1 className="text-[48px] m-20 ">Гарантии</h1>
    <p className="text-[16px] w-[650px] ml-20">Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам. </p>
<br />
<p  className="text-[16px] w-[650px] ml-20">Являясь авторизованным дилером брендов, продукция которых представлена в каталоге, компания:</p>
<p className="ml-40">1.  Предоставляет услуги сервисного и гарантийного обслуживания.</p>
<p className="ml-40">2.  Осуществляет поставку оригинальных запчастей и комплектующих.</p>
<p className="w-[650px] ml-40">3.  Обучает медицинский персонал работе с современным высокотехнологичным оборудованием.</p>
<p  className="text-[16px] w-[650px] ml-20">Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем клиентам возможность воспользоваться услугами квалифицированных мастеров в установке, пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования.</p>
</div>
<h1 className="text-[30px] m-20 ">Перечень гарантийных услуг</h1>
 
<YouUs /> {/* youUs o'rniga YouUs */}
<div className=" flex gap-15 ml-[1050px]  m-10">
<button className="m-1 w-[241px] h-[41px] border-2 border-solid border-gray-300 rounded-full text-[#088269] hover: hover:text-green-600">
  Гарантийный случай
</button>
<button className="m-1 w-[163px] text-[14px] h-[41px] border-2 border-solid border-gray-300 rounded-full text-white 
  bg-[#088269] hover:bg-[#0d9a6f] hover:text-white">
  Гарантийный случай
</button>
    </div>
    <div className=" flex items-center justify-center">
    <div className="w-[1309px] h-[264px] bg-[#088269]  rounded-[10px]">
        <h1 className="text-[30px] text-white relative left-[25px] bottom-[-25px]">Внимание!</h1>
        <p  className="text-[16px] w-[589px] text-white relative left-[700px] ">Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре.</p>
   <br />
    <p className="text-[16px] w-[589px] text-white relative left-[700px]">Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре  и при наличии заявления с указанием причины возврата, оформленного надлежащим образом.</p>
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

