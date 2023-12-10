"use client"


import { siteConfig } from "@/config/site";
import { MainNavItem } from "@/types";
import Link from "next/link";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const MainNav = ({ items,children }: MainNavProps) => {
  return (
    <div className="flex h-full  w-full justify-evenly items-center ">
      <Link
        href="/"
        className="border-x-1 shadow-xl w-full h-[4rem] m-0 flex justify-center items-center hover:bg-gray-200 hover:text-black transition-all duration-300 ease-in-out "
      >
        <span className=" font-bold font-heading text-xl">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex  w-[70%]  justify-around m-0 ">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={`${index === 6 ? '' : ''}  hover:text-accent shadow-xl w-[20rem] h-[4rem] m-0 flex justify-center items-center hover:bg-gray-200 hover:text-black transition-all duration-300 ease-in-out`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

export default MainNav;
