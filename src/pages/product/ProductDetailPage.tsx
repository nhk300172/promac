// src/pages/product/ProductDetailPage.tsx
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
      {/*
          THAY ĐỔI QUAN TRỌNG:
          - Đổi 'lg:' thành 'xl:' để iPad Pro (1024px) vẫn hiển thị dạng cột dọc (flex-col).
          - Thêm 'max-w-[1024px]' để giới hạn chiều rộng trên iPad Pro cho đẹp.
          - 'xl:max-w-[1319px]' cho màn hình desktop lớn.
      */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-[40px] xl:gap-[58px] w-full px-4 xl:px-0 max-w-[1024px] xl:max-w-[1319px] mb-[60px] lg:mb-[100px]">
        {/* Main Content */}
        {/* Trên iPad Pro nó sẽ là w-full, trên Desktop XL nó là 890px */}
        <div className="w-full xl:flex-shrink-0 xl:w-[890px]">
          <ProductDetailMain />
        </div>

        {/* Sidebar */}
        {/* Trên iPad Pro nó sẽ là w-full và nằm dưới, trên Desktop XL nó là 371px và nằm bên phải */}
        <div className="w-full xl:flex-shrink-0 xl:w-[371px]">
          <ProductSidebar />
        </div>
      </div>

      {/* Footer Banner */}
      <OrderBanner />
    </div>
  );
};
