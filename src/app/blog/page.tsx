"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Subscribe from "@/components/Subscribe";
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
import Map from "@/components/map/Map";
//img
import bl1 from "@/assets/images/bl1.png";
import bl2 from "@/assets/images/bl2.png";
import bl3 from "@/assets/images/bl3.png";
import bl4 from "@/assets/images/bl4.png";

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
  const left = ">";

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
              <BreadcrumbPage>Блог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="text-[48px] m-20">Блог</h1>
      <div className="mt-5 h-[500px] w-[286px] rounded-[20px] m-20 border">
        <div className="p-5">
          <h1 className="mx-1 pb-3 text-[16px] font-[500]">Направления</h1>
          <hr />
          <nav className="mt-5">
            <ul className="text-[14px]">
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Реанимация</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Хирургия</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Офтальмология</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Лабораторная диагностика</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Акушерство и Гинекология</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Гистология</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Косметология</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Оториноларингология</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Рентгенология и томография</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Стерилизация</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Физиотерапия и реабилитация</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Функциональная диагностика</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Эндоскопия</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Новинки</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Распродажи</Link>
                <span className="mx-2">{left}</span>
              </li>
              <li className="m-1 flex cursor-pointer items-center justify-between hover:bg-[#F8F7F3FF] hover:underline">
                <Link href="#"> Кабинеты под ключ</Link>
                <span className="mx-2">{left}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="ml-[400px] relative bottom-[580px] h-[700px]">
        <div className=" mb-5 w-[980px] h-[304px] bg-white border border-customBorder border-1 rounded-[10px]">
          <img src={bl1.src} alt="bl1" />
          <div className="relative left-[450px] bottom-[280px]">
          <h1 className="text-[18px] font-semibold">Что такое инфузомат (инфузионный насос)</h1>   
     
          <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
          <br />
          
        <p className="w-[474px] text-[#7A7687] ">Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.</p>
        <br />
        <br />
        <br />
        <Link href="/stati">
                                <button   className="w-[138px] h-[41px] border border-customBorder border-1 rounded-[50px] text-[#088269] text-[12px] transition duration-300 ease-in-out hover:bg-[#065f47] hover:text-gray-200 ">Подробнее</button>

                      </Link>          </div>
          </div>
        <div className="mb-5 w-[980px] h-[304px] bg-white border border-customBorder border-1 rounded-[10px]">
          <img src={bl2.src} alt="bl2" />
          <div className="relative left-[450px] bottom-[280px]">
          <h1 className="text-[18px] font-semibold">Что такое инфузомат (инфузионный насос)</h1>   
     
          <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
          <br />
          
        <p className="w-[474px] text-[#7A7687] ">Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.</p>
        <br />
        <br />
        <br />
        <Link href="/stati">
                                <button   className="w-[138px] h-[41px] border border-customBorder border-1 rounded-[50px] text-[#088269] text-[12px] transition duration-300 ease-in-out hover:bg-[#065f47] hover:text-gray-200 ">Подробнее</button>

                      </Link>          </div>
        </div>
        <div className="w-[980px] mb-5 h-[304px] bg-white border border-customBorder border-1 rounded-[10px]">
          <img src={bl3.src} alt="bl3" />
          <div className="relative left-[450px] bottom-[280px]">
          <h1 className="text-[18px] font-semibold">Что такое инфузомат (инфузионный насос)</h1>   
     
          <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
          <br />
          
        <p className="w-[474px] text-[#7A7687] ">Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.</p>
        <br />
        <br />
        <br />
        <Link href="/stati">
                                <button   className="w-[138px] h-[41px] border border-customBorder border-1 rounded-[50px] text-[#088269] text-[12px] transition duration-300 ease-in-out hover:bg-[#065f47] hover:text-gray-200 ">Подробнее</button>

                      </Link>          </div>
        </div>
        <div className="w-[980px] mb-5 h-[304px] bg-white border border-customBorder border-1 rounded-[10px]">
          <img src={bl4.src} alt="bl4" />
          <div className="relative left-[450px] bottom-[280px]">
          <h1 className="text-[18px] font-semibold">Что такое инфузомат (инфузионный насос)</h1>   
     
          <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
          <br />
          
        <p className="w-[474px] text-[#7A7687] ">Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.  Каждый из нас понимает очевидную вещь.</p>
        <br />
        <br />
        <br />
        <Link href="/stati">
                                <button   className="w-[138px] h-[41px] border border-customBorder border-1 rounded-[50px] text-[#088269] text-[12px] transition duration-300 ease-in-out hover:bg-[#065f47] hover:text-gray-200 ">Подробнее</button>

                      </Link>
                                </div>
        </div>
   
      </div>
      <Subscribe />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
