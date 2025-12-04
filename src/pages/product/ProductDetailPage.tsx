import React from "react";
import { ProductDetailInfo } from "../../features/products/detail/ProductDetailInfo";
import { ProductDetailMain } from "../../features/products/detail/ProductDetailMain";
import { ProductSidebar } from "../../features/products/detail/ProductSidebar";
import { OrderBanner } from "../../components/layout/OrderBanner";

export const ProductDetailPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-[60px] lg:pb-[100px]">
      {/* Header Info */}
      <ProductDetailInfo />

      {/* Body Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[40px] lg:gap-[58px] w-full lg:w-[1319px] mb-[60px] lg:mb-[100px]">
        {/* Main Content */}
        <div className="w-full lg:flex-shrink-0 lg:w-[890px]">
          <ProductDetailMain />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:flex-shrink-0 lg:w-[371px]">
          <ProductSidebar />
        </div>
      </div>

      {/* Footer Banner */}
      <OrderBanner />
    </div>
  );
};
