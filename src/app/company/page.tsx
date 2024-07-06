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
              <BreadcrumbPage>О компании</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex h-screen items-center justify-center  ">
        <img src={img.src} alt="img" className="rec" />
      </div>
      <h1 className="glob">Глобал медикал трейд</h1>
      <p className="uchit">
        Учитывая стремительное развитие мировых медицинских технологий, врачи в
        Российской Федерации и соседних странах столкнулись с вызовом, требующим
        обновления приборов в различных направлениях, от установок компьютерной
        томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на
        полностью цифровую платформу при диагностике и лечении заболеваний также
        стал серьёзным испытанием для большинства больниц и частных клиник.
      </p>
      <br />
      <p className="uchit">
        Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
        специалистам всю необходимую помощь в деле поставок медицинского
        оборудования. Наш каталог включает передовое оборудование от лучших
        производителей России, Европы, Азии и США.
      </p>
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
      <div className="comp">
        <img
          src={img1.src}
          alt=""
          className="width: 600px;
           m-[50px]
          pt-16"
        />    <h1 className="font-manrope text-white text-[30px] mt-[120px] font-medium leading-[22.4px] text-left float-right">
    Наши партнёры
</h1>
         </div> 
      <p className="nash">Нашими партнёрами являются наиболее серьёзные игроки на мировом рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших цен для государственных учреждений здравоохранения, медицинских центров, лабораторий, а также ветеринарных клиник и кабинетов. Купить нужную вам технику по оптимальным ценам, выбрать подходящую модель устройства в рамках бюджета в нашей компании окажется намного проще. Мы поддерживаем скидки и особые предложения для наших партнёров, предлагаем оформление аппаратов в лизинг и готовы предоставить системы в рассрочку на выгодных условиях.</p>
         <div className="five">
         <h1 className="opit">Опытные сотрудники из производственных компаний</h1>
          <p className="nashsh">Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны.</p>
         </div>
         <img src={img2.src} alt="img2" className="group" />
           


<Clients></Clients>      <ChooseUs />
      <Brands></Brands>

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
          {/* <ButtonLeft />
          <ButtonRight /> */}
        </div>
        <ButtonMy>Сертификаты</ButtonMy>
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

