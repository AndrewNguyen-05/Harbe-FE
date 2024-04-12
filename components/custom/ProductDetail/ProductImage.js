import React from "react";
import product1 from "@/public/pictures/product/product1.jpg";
import Image from "next/image";
import { ProductImageSlide } from "./ProductImageSlide";

export const ProductImage = () => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="border rounded-lg relative p-1">
        <Image src={product1} alt="Product Image" width={400} />
      </div>
      <div className="flex border border-yellow-600 relative">
        <div className="flex w-100 relative mx-2 my-1">
          <ProductImageSlide />
          <ProductImageSlide />
          <ProductImageSlide />
          <ProductImageSlide />
        </div>
      </div>
    </div>
  );
};
