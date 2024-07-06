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
              <BreadcrumbPage>Услуги</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

     
        <h1 className="text-[48px] m-20 ml-30">Услуги</h1>
     <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
<h1 className="font-semibold  text-[18px] m-4">Апробация</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us1.src} alt="us1" className="relative left-[385px] bottom-[270px]" />
       </div>
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
        <h1 className="font-semibold  text-[18px] m-4">Помощь в подборе оборудования</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us2.src} alt="us2" className="relative left-[385px] bottom-[270px]" />  </div>
            </div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
        <h1 className="font-semibold  text-[18px] m-4">Помощь инженеров в настройке</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us3.src} alt="us3" className="relative left-[385px] bottom-[270px]" />
        </div>
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
        <h1 className="font-semibold  text-[18px] m-4">Пуско-наладочные работы</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us4.src} alt="us4" className="relative left-[385px] bottom-[270px]" /> </div></div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
        <h1 className="font-semibold  text-[18px] m-4">Обучение работе с оборудованием</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us5.src} alt="us5" className="relative left-[385px] bottom-[270px]" />
        </div>
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
        <h1 className="font-semibold  text-[18px] m-4">Подменный аппарат</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us6.src} alt="us6" className="relative left-[385px] bottom-[270px]" /></div></div>
            <div className="flex gap-6 justify-center items-center mb-4">
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
        <h1 className="font-semibold  text-[18px] m-4">Работа с учебными центрами</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us7.src} alt="us7" className="relative left-[385px] bottom-[270px]" />
        </div>
        <div className="w-[650px] h-[350px] bg-white rounded-[10px] border border-[#E5E2EE] rounded-lg">
        <h1 className="font-semibold  text-[18px] m-4">Организация обучения врачей на собственной территории</h1>
<p  style={{ color: '#7A7687' }} className="text-[12px] text-customGray ml-4">Описание услуги</p>
<p  style={{ color: '#7A7687' }} className="w-[345px] ml-4 text-customGray text-[16px]">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
<button className="w-[123px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px] text-teal-600 m-4 relative bottom-[-70px] transition duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:border-teal-600">Заказать</button>
    <img src={us8.src} alt="us8" className="relative left-[385px] bottom-[270px]" />  </div></div>
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
     
      <div className="flex11">
        <p className="font-manrope relative left-32 w-[200px] text-left text-2xl font-medium  leading-9">
          Цифры и факты
        </p>
        <br />

        <h1 className="let">7 лет</h1>
        <p className="na">на рынке</p>
      </div>
      <p className="font-manrope relative left-32 inline-block w-96 text-left  text-base font-medium leading-6 opacity-50">
        Мы работаем на результат и продаём только качественную продукцию
      </p>
      <hr
        className="bottom-50 relative relative bottom-[70px] my-4 mb-10 ml-[800px] mt-[50px] border-t-2 border-gray-400 text-[#D5D1E1]"
        style={{ width: "650px" }}
      />

      <div className="flex12">
        <h1 className="let">964 +</h1>
        <p className="na">оригинальной продукции со всего мира</p>
      </div>
      <hr
        className="text/-[#D5D1E1] relative   bottom-[40px] ml-[800px] border-t-2 border-gray-400 "
        style={{ width: "650px" }}
      />
      <div className="flex12">
        <h1 className="let2">23 +</h1>
        <p className="na2">международных сертификатов качества</p>
      </div>
      <hr
        className="text/-[#D5D1E1] relative   bottom-[0px] ml-[800px] border-t-2 border-gray-400 "
        style={{ width: "650px" }}
      />
      <div className="flex13">
        <h1 className="let2">2452+</h1>
        <p className="na3">товаров всегда в наличии</p>
      </div>
      <div className="flex ">
   <h1 className="text-[30px] w-[585px] m-3 mt-20 ">Вы сможете оставить заявку на услуги и скачать бланк для заполнения</h1>
    <img className="w-[320px] h-[74px] m-3 mt-20 relative left-[180px]" src={fr1.src} alt="fr1" />
    <img className="w-[320px] h-[74px] m-3 mt-20 relative left-[170px]" src={fr2.src} alt="fr2" />
      </div>
      <div className="relative left-[1300px]">
</div><button className="w-[173px] h-[41px] border border-customBorder rounded-full h-20 w-20 text-[14px]  m-4 relative bottom-[-70px] transition duration-300 ease-in-out bg-teal-600 text-white border-teal-600 relative left-[1270px]">Заказать</button>


      <div className="mt-[150px]">
      <div className="flex w-[100%] justify-between">
        <div className="w-[30%]">
          <div className="mx-auto mt-[20px] w-[70%]">
            <h1 className="text-[36px] font-[500]">Сертификаты на продукцию</h1>
            <ul>
              <li className="grid grid-cols-1 font-[600] text-[#8C8B89FF]">
              </li>
            </ul>
          </div>
        </div>
        <section className="flex w-[70%] max-w-[70%]">

        <div className="h-200 bg-ec165e flex w-full items-center justify-center overflow-hidden">
      <div className="scrolling-touch scroll-snap-x-repeat-300 bg-ec165e flex overflow-x-auto scroll-smooth">
        {brandsData.map((item) => (
          <Card
            key={item.id}
            className="scroll-snap-start mr-50 rounded-10 m-5 w-[1519] flex-shrink-0 origin-center transform rounded-[10px] bg-[#EFEEEAFF] transition-transform duration-500"
          >
            <CardActionArea>
              <div className="w-[180px] rounded-[10px]">
                <div className="flex h-[255px] w-[300px] items-center  bg-white">
                  <Image
                    src={img3}
                    alt="img3"
                    className=""
                  />
                </div>

                <div className="mx-[20px]">
                </div>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>

        </section>
      </div>
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <ButtonLeft />
          <ButtonRight />
        </div>
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

