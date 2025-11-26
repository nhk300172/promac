import React from "react";
import { ProductHero } from "../../features/products/ProductHero";
import { ProductListing } from "../../features/products/ProductListing";
import { OrderBanner } from "../../components/layout/OrderBanner";

export const ProductPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <ProductHero />
      <ProductListing />
      <div className="w-full mt-[-50px]">
        {" "}
        {/* <--- Chỉnh số pixel bạn muốn ở đây */}
        <OrderBanner />
      </div>
    </div>
  );
};
