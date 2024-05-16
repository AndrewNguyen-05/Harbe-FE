"use client";
import Breadcrumb from "@/components/admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/admin/Layout/DefaultLayout";
import TableTwo from "@/components/admin/Table/TableTwo";
import SearchInput from "@/components/custom/SearchInput";
import { getListProduct } from "@/services/productServices";
import Image from "next/image";
import { useState, useEffect } from "react";
import icPlus from "@/public/ic_admin/ic_plus.svg";
import icEditBlue from "@/public/ic_admin/ic_edit_blue.svg";
import icBin from "@/public/ic_admin/ic_bin.svg";

const ProductAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    setIsLoading(true);
    try {
      const data = await getListProduct();
      console.log(">>> check product_list:", data);
      if (data.content) {
        setProductList(data.content);
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(">>> check error:", e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="">
      {/* Search bar */}
      <div className="flex flex-row items-center w-full border-b-[1px] border-gray-300 px-[32px] py-[10px]">
        <div className="flex flex-row items-center mr-[64px]">
          <div className="text-[18px] font-semibold">All products</div>
          <div className="px-[8px] py-[1px] bg-blue-600 text-white text-[14px] rounded-[16px] ml-[12px] flex items-center justify-center">
            120
          </div>
        </div>

        <div className="flex-grow">
          <SearchInput placeholder={"Nhập từ khóa..."} />
        </div>

        <div className="flex flex-row justify-center items-center gap-[16px] ml-[64px]">
          <button className="border-warning border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-red-50 w-[110px]">
            <Image src={icBin} width={12} height={12} />
            <div className="text-warning text-[14px] font-bold ml-[4px]">
              Xóa
            </div>
          </button>

          <button className="border-blue-600 border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-blue-50 w-[110px] ">
            <Image src={icEditBlue} width={12} height={12} />
            <div className="text-blue-600 text-[14px] font-bold ml-[4px]">
              Sửa
            </div>
          </button>

          <button className="bg-blue-600 px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center w-[110px]">
            <Image src={icPlus} width={12} height={12} />
            <div className="text-white text-[14px] font-bold  ml-[4px]">
              Thêm
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;
