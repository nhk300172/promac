import React from "react";
import { ProductDetailInfo } from "../../features/products/detail/ProductDetailInfo";
import { ProductDetailMain } from "../../features/products/detail/ProductDetailMain";
import { ProductSidebar } from "../../features/products/detail/ProductSidebar";
import { OrderBanner } from "./../../components/layout/OrderBanner";

export const ProductDetailPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-[100px]">
      <ProductDetailInfo />

      {/* ============================================================
          2. BODY (Chia 2 cột: Main + Sidebar)
          Phần này mới cần wrap trong container 1319px để chia cột
      ============================================================ */}
      <div
        className="flex flex-row items-start gap-[58px]"
        style={{
          width: "1319px",
          marginBottom: "100px",
          // Width = 890 (Main) + 58 (Gap) + 371 (Sidebar) = 1319px
        }}
      >
        {/* Cột Trái: Ảnh + Bài viết */}
        <div className="flex-shrink-0">
          <ProductDetailMain />
        </div>

        {/* Cột Phải: Sidebar */}
        <div className="flex-shrink-0">
          <ProductSidebar />
        </div>
      </div>

      {/* 3. Banner đặt hàng */}
      <OrderBanner />
    </div>
  );
};
