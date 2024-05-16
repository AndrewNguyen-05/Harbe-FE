"use client";

import Image from "next/image";
import logo from "@/public/ic_logo_2.svg";
import Link from "next/link";
import { useState } from "react";

const AdminSideBar = ({ menu, others }) => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <div className="bg-black px-[32px] py-[16px] flex flex-col items-center">
      <Link href="/">
        <Image src={logo} width={160} />
      </Link>
      <div className="flex flex-col justify-center h-fit mt-[64px]">
        <div className="text-gray-400 font-semibold text-[14px]">MENU</div>
        {menu.map((item, index) => (
          <Link
            href={item.link}
            onClick={() => {
              setSelectedTab(item.name);
            }}
          >
            <div
              key={index}
              className="flex flex row items-center mt-[12px] py-[8px] px-[12px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out"
              style={{
                backgroundColor:
                  selectedTab === item.name ? "#0077B6" : "transparent",
              }}
            >
              <Image
                alt={`${item.name} icon`}
                src={item.icon}
                className="w-[20px] h-[20px] mr-[12px]"
              />
              <div className="text-gray-200 text-[17px] mr-[40px]">
                {item.name}
              </div>
            </div>
          </Link>
        ))}

        <div className="text-gray-400 font-semibold text-[14px] mt-[40px]">
          OTHERS
        </div>
        {others.map((item, index) => (
          <Link
            href={item.link}
            onClick={() => {
              setSelectedTab(item.name);
            }}
          >
            <div
              key={index}
              className="flex flex row items-center mt-[12px] py-[8px] px-[12px] rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out"
              style={{
                backgroundColor:
                  selectedTab === item.name ? "#0077B6" : "transparent",
              }}
            >
              <Image
                alt={`${item.name} icon`}
                src={item.icon}
                className="w-[20px] h-[20px] mr-[12px]"
              />
              <div className="text-gray-200 text-[17px] mr-[40px]">
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSideBar;
