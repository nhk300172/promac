//src/features/products/detail/ProductDetailInfo.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

export const ProductDetailInfo: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white mb-[65px]">
      {/* ============================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA MỚI
          ============================================================ */}
      <div className="flex flex-col w-full px-[24px] lg:hidden">
        {/* Breadcrumb Mobile */}
        <div className="flex flex-col items-start gap-[4px] mt-[12px] mb-[20px]">
          <div className="flex items-center flex-wrap gap-[4px] w-full">
            <span className="font-inter font-normal text-[15px] text-[#8E8E8E]">
              Trang chủ
            </span>
            <ChevronRight size={14} className="text-[#8E8E8E]" />
            <span className="font-inter font-normal text-[15px] text-[#9E9E9E]">
              Dịch vụ & Sản phẩm
            </span>
            <ChevronRight size={14} className="text-[#9E9E9E]" />
            <span className="font-inter font-normal text-[15px] text-[#9E9E9E]">
              Danh mục
            </span>
          </div>
          <div className="flex items-center gap-[4px] w-full">
            <ChevronRight size={14} className="text-[#9E9E9E]" />
            <span className="font-inter font-semibold text-[15px] text-[#FF0000]/80 line-clamp-1">
              Best smartwatch 2022...
            </span>
          </div>
        </div>

        {/* Header Mobile */}
        <div className="flex flex-col gap-[16px]">
          <span className="font-quicksand font-bold text-[16px] text-[#FF0000]">
            In Ấn Bao Bì
          </span>

          <div className="flex flex-col items-center text-center gap-[8px]">
            <h1 className="font-inter font-medium text-[28px] leading-[34px] text-black tracking-[-0.04em]">
              Our SaaS Product Just Launched!
            </h1>

            {/* Price Mobile */}
            <div className="flex items-center gap-[5px]">
              <span className="font-inter font-bold text-[16px] text-[#BDBDBD]">
                45.000đ
              </span>
              <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                39.000đ/cái
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ============================================================ */}
      <div className="hidden lg:flex flex-col w-[1299px]">
        {/* Breadcrumb Desktop */}
        <div className="flex items-center gap-[8px] mt-[21px] mb-[40px]">
          <div className="flex items-center gap-[8px] text-[#8E8E8E]">
            <span className="font-inter text-[16px]">Trang chủ</span>
            <ChevronRight size={16} />
          </div>
          <div className="flex items-center gap-[8px] text-[#9E9E9E]">
            <span className="font-inter text-[16px] whitespace-nowrap">
              Dịch vụ & Sản phẩm
            </span>
            <ChevronRight size={16} />
          </div>
          <div className="flex items-center gap-[8px] text-[#9E9E9E]">
            <span className="font-inter text-[16px] whitespace-nowrap">
              Danh mục sản phẩm
            </span>
            <ChevronRight size={16} />
          </div>
          <div className="flex items-center">
            <span
              className="font-inter font-semibold text-[16px] truncate max-w-[500px]"
              style={{
                color: "rgba(255, 0, 0, 0.8)",
                letterSpacing: "-0.04em",
              }}
            >
              Best smartwatch 2022: the top wearables you can buy today
            </span>
          </div>
        </div>

        {/* Product Header Desktop */}
        <div className="relative w-full h-[176px] mb-[12px]">
          <span
            className="absolute left-[12px] top-[-1px] font-bold text-[16px] leading-[19px] text-[#FF0000] flex items-center h-[20px]"
            style={{ fontFamily: "Quicksand" }}
          >
            In Ấn Bao Bì
          </span>
          <h1
            className="absolute left-[12px] top-[28px] w-[1265px] h-[98px] text-[40px] leading-[48px] font-semibold text-[#253D4E] flex items-center"
            style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
          >
            Best smartwatch 2022: the top wearables you can buy today
          </h1>
          <div
            className="absolute left-[12px] top-[130px] flex items-center gap-[10px]"
            style={{ height: "34px" }}
          >
            <span className="font-montserrat font-bold text-[20px] text-[#BDBDBD] tracking-[0.1px]">
              45.000đ
            </span>
            <span className="font-montserrat font-bold text-[20px] text-[#FF0000] tracking-[0.1px]">
              39.000đ/cái
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
