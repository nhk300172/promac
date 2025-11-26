import React from "react";
import { ChevronRight } from "lucide-react";

export const ProductDetailInfo: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white mb-[65px]">
      {/* ============================================================
          1. BREADCRUMB
          Logic: Home > Dịch vụ & SP > Danh mục > Tên SP
          Style: Chuẩn theo NewsDetailContent (w-[1299px])
      ============================================================ */}
      <div className="w-[1299px] flex items-center gap-[8px] mt-[21px] mb-[40px]">
        {/* Home */}
        <div className="flex items-center gap-[8px] text-[#8E8E8E]">
          <span className="font-inter text-[16px]">Trang chủ</span>
          <ChevronRight size={16} />
        </div>

        {/* Dịch vụ & Sản phẩm */}
        <div className="flex items-center gap-[8px] text-[#9E9E9E]">
          <span className="font-inter text-[16px] whitespace-nowrap">
            Dịch vụ & Sản phẩm
          </span>
          <ChevronRight size={16} />
        </div>

        {/* Danh mục sản phẩm (Tag) */}
        <div className="flex items-center gap-[8px] text-[#9E9E9E]">
          <span className="font-inter text-[16px] whitespace-nowrap">
            Danh mục sản phẩm
          </span>
          <ChevronRight size={16} />
        </div>

        {/* Current Product Title */}
        <div className="flex items-center">
          <span
            className="font-inter font-semibold text-[16px] truncate max-w-[500px]"
            style={{ color: "rgba(255, 0, 0, 0.8)", letterSpacing: "-0.04em" }}
          >
            Best smartwatch 2022: the top wearables you can buy today
          </span>
        </div>
      </div>

      {/* ============================================================
          2. PRODUCT HEADER — Tag & Title & Price
          Style: Relative/Absolute giống Figma và NewsDetail
          Height: 176px (Cao hơn News 31px để chứa thêm phần Giá)
      ============================================================ */}
      <div className="relative w-[1299px] h-[176px] mb-[12px]">
        {/* Tag (1548) - Position chuẩn News */}
        <span
          className="
            absolute
            left-[12px]
            top-[-1px]
            font-bold
            text-[16px]
            leading-[19px]
            text-[#FF0000]
            flex items-center
            h-[20px]
          "
          style={{ fontFamily: "Quicksand" }}
        >
          In Ấn Bao Bì
        </span>

        {/* Title (412) - Position chuẩn News */}
        <h1
          className="
            absolute
            left-[12px]
            top-[28px]
            w-[1265px] h-[98px]
            text-[40px]
            leading-[48px]
            font-semibold
            text-[#253D4E]
            flex items-center
          "
          style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
        >
          Best smartwatch 2022: the top wearables you can buy today
        </h1>

        {/* Prices - Position Absolute nằm dưới Title */}
        {/* Title kết thúc ở khoảng 126px (28+98), đặt Price ở 130px là đẹp */}
        <div
          className="absolute left-[12px] top-[130px] flex items-center gap-[10px]"
          style={{ height: "34px" }}
        >
          {/* Old Price */}
          <span className="font-montserrat font-bold text-[20px] text-[#BDBDBD] tracking-[0.1px]">
            45.000đ
          </span>

          {/* New Price */}
          <span className="font-montserrat font-bold text-[20px] text-[#FF0000] tracking-[0.1px]">
            39.000đ/cái
          </span>
        </div>
      </div>
    </section>
  );
};
