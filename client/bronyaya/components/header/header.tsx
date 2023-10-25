"use client"
import { dashboard } from "@/config/dashboard";
import MainNav from "../main-nav";
import { siteConfig } from "@/config/site";

const Header = () => {
  return (
    <>
      <div className="bg-black w-[95%] text-white flex justify-center items-center py-2   text-2xl">
        <h1>{siteConfig.name}</h1>
      </div>
      <div
        className=" w-[95%] h-[30rem] relative  bg-cover shadow-lg"
        style={{ backgroundImage: `url('/Genshin-Impact-4.1.jpg')` }}
      >
        <div className="absolute bottom-0.5 flex  items-center w-full justify-around h-[3rem]  backdrop-contrast-50 backdrop-blur-sm drop-shadow-lg shadow-lg shadow-yellow-500 "></div>
      </div>
      <div className="w-[95%] h-[4rem] border-b-2  font-body border-r-2 border-l-2 shadow-lg flex justify-around rounded-b-xl">
        <MainNav items={dashboard.mainNav} />
      </div>
      
    </>
  );
};

export default Header;
