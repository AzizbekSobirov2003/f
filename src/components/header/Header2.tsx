"use client";
// next
import Image from "next/image";
import Link from "next/link";
// form event for function form submit
import { FormEvent } from "react";
// components
import HeaderSelect from "./HeaderSelect";
import HeaderNav from "./HeaderNav";
// images
import mainImg from "@/assets/icons/main.svg";
import Search from "@/assets/icons/search.svg";

const Header2 = () => {
  const handleSubmit: (e: FormEvent) => void = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto flex w-[90%] items-center justify-between py-5" style={{ maxWidth: "100%" }}>
      <Link href="/">
        <Image src={mainImg} alt="main img" />
      </Link>
      <div className="flex h-[50px] w-[530px] items-center justify-between rounded-[25px] bg-[#D5D1E1FF]" style={{ maxWidth: "100%" }}>
        {/* components Select */}
        <HeaderSelect />
        <form onSubmit={handleSubmit} className="flex" style={{ width: "100%" }}>
          <input
            type="search"
            placeholder="Поиск"
            className="h-[46px] rounded-r-[20px] px-5 text-[14px] focus:outline-none"
            style={{ width: "100%" }}
          />
          <button className="ml-[2px] rounded-[50%] p-3 hover:bg-white" style={{ marginLeft: "2px" }}>
            <Image src={Search} alt="Search icon" width={15} />
          </button>
        </form>
      </div>
      <p className="hidden sm:flex" style={{ display: "none", marginTop: "10px", textAlign: "center" }}>
        Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
      </p>
      {/* under the header  components Links user, like, Compare, Basket */}
      <HeaderNav />
    </div>
  );
};

export default Header2;
