"use client";
// components
import Header from "@/components/header/Header";
import BannerHeader from "@/components/BannerHeader";
import PopularCategories from "@/components/PopularCategories";
import Complex from "@/components/Complex";
import ChooseUs from "@/components/ChooseUs";
import Catalog from "@/components/Catalog/Catalog";
import Clients from "@/components/Clients";
import Brands from "@/components/Brands/Brands";
import AboutCompany from "@/components/About/AboutCompany";
import News from "@/components/News/News";
import Map from "@/components/map/Map";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer/Footer";
import Items from "./items/page";
// my data
import { catalogDataPg } from "@/data/CatalogPgData";
// next images
import Image from "next/image";
// components
import Link from "next/link";
// import BreadcrumbP from "../Breadcrumb";
import { Card, CardActionArea } from "@mui/material";

const Home = () => {
  return (
    <>
      <div>
        {/* Header */}
        <header>
          {/* Components Header */}
          <Header />
        </header>
        {/* Main */}
        <main>
          {/* components banner */}
          <BannerHeader />
          {/* <PopularCategories /> */}
          <h1 className="text-[30px] m-20">Популярные категории</h1>
          <div className="items-center justify-center flex">
          <section className="calogPg w-[80%]  ">
            {catalogDataPg.map((item) => (
              <Link
                href={`/catalog/item_${item.id}`}
                key={item.id}
                className={item.class}
              >
                <div
                  className={`w-[320px] rounded-[10px] border ${item.class} mt-5`}
                >
                  <Card>
                    <CardActionArea>
                      <div className="flex items-center justify-center rounded-[10px] bg-white">
                        <Image
                          src={item.img}
                          alt={item.alt}
                          className="m-5 rounded-[10px]"
                        />
                      </div>
                      <p className="mx-5 py-5 text-[15px]">{item.title}</p>
                    </CardActionArea>
                  </Card>
                </div>
              </Link>
            ))}
          </section>
          </div>
          <Complex />
          {/* Choose us components  */}
          <ChooseUs />
          {/* Catalog components */}
          <Catalog />
          {/* Client components */}
          <Clients />
          {/* Brands components */}
          <Brands />
          {/* About company components */}
          <AboutCompany />
          {/* News components */}
          <News />
          {/* Map and questions */}
          <Map />
          {/* Subscribe components */}
          <Subscribe />
        </main>
        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
