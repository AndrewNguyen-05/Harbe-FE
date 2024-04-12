import { BreadCrumb } from "@/components/custom/BreadCrumb";
import React from "react";
import { ProductImage } from "@/components/custom/ProductDetail/ProductImage";
import { ProductSharing } from "@/components/custom/ProductDetail/ProductSharing";
import { ProductInformation } from "@/components/custom/ProductDetail/ProductInformation";

const page = () => {
  return (
    <div className="bg-detail px-32 h-screen">
      <BreadCrumb />
      <div className="flex p-0 bg-white gap-8">
        <section className="shrink-0 p-4 block" style={{ width: "450px" }}>
          <ProductImage />
          <ProductSharing />
        </section>
        <section className="flex flex-auto">
          <ProductInformation />
        </section>
      </div>
    </div>
  );
};

export default page;
