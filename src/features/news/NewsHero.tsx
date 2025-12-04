import React from "react";
import { Phone, Mail } from "lucide-react";

export const NewsHero: React.FC = () => {
  return (
    // Wrapper chung
    <div className="w-full flex justify-center mt-[20px] lg:mt-[40px]">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA DỌC
          ================================================================= */}
      <section className="flex flex-col items-center w-full max-w-[375px] bg-[#FFF5F6] rounded-[30px] pt-[40px] pb-[60px] px-[23px] lg:hidden mb-[20px]">
        {/* Title Group */}
        <div className="flex flex-col items-center gap-[16px] text-center mb-[50px]">
          <h1 className="font-inter font-bold text-[28px] leading-[34px] text-[#FF0000]">
            Trung Tâm Kiến Thức
          </h1>
          <p className="font-inter font-semibold text-[16px] leading-[19px] text-[#374151]">
            Khẳng định nội dung có giá trị chuyên môn cao. Nơi tìm kiếm giải
            pháp và tiêu chuẩn in ấn B2B.
          </p>
        </div>

        {/* Button */}
        <button className="flex flex-col justify-center items-center w-[155px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] mb-[24px] active:scale-95 transition-transform">
          <span className="font-inter font-bold text-[16px] leading-[19px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/50 border border-black/50 mb-[24px]"></div>

        {/* Contact Info (Vertical) */}
        <div className="flex flex-col items-start gap-[14px] w-full pl-[10px]">
          {/* Phone Row */}
          <div className="flex items-center">
            <div className="w-[20px] mr-[12px] flex justify-center">
              <Phone size={20} className="text-black/50" />
            </div>
            <div className="flex items-center gap-[12px]">
              <a
                href="tel:02822272416"
                className="font-inter font-normal text-[16px] text-black/50 underline"
              >
                (028) 22272416
              </a>
              <div className="w-[1px] h-[20px] bg-black/50"></div>
              <a
                href="tel:0906838869"
                className="font-inter font-normal text-[16px] text-black/50 underline"
              >
                0906838869
              </a>
            </div>
          </div>

          {/* Email Row */}
          <div className="flex items-center">
            <div className="w-[22px] mr-[12px] flex justify-center">
              <Mail size={20} className="text-black/50" />
            </div>
            <a
              href="mailto:info@promacprinting.com"
              className=" underline font-inter font-normal text-[16px] text-black/50"
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <section
        className="hidden lg:block relative"
        style={{
          width: "1379px",
          height: "451px",
          backgroundColor: "#FFF5F6",
          borderRadius: "30px",
        }}
      >
        {/* Title Section */}
        <div className="mt-[56px] text-center flex flex-col items-center">
          <h1
            className="font-extrabold text-[#FF0000]"
            style={{
              fontFamily: "Inter",
              fontSize: "40px",
              lineHeight: "48px",
            }}
          >
            Trung Tâm Kiến thức
          </h1>
          <p
            className="mt-[24px] font-semibold text-[#374151] text-center"
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "19px",
              width: "697px",
            }}
          >
            Khẳng định nội dung có giá trị chuyên môn cao. Nơi tìm kiếm giải
            pháp và tiêu chuẩn in ấn B2B.
          </p>
        </div>

        {/* 2. CTA Button (Frame 12643) */}
        <button
          className="ml-[530px] mt-[32px] flex flex-col items-center justify-center bg-[#FF0000] text-[#F5F5F5] transition-transform hover:scale-105 active:scale-95"
          style={{
            width: "309.82px",
            height: "70.53px",
            borderRadius: "20px",
            border: "1px solid #FFF5F6",
            boxShadow: "0px 0px 14px #FF0000", // Hiệu ứng glow đỏ chuẩn Figma
            gap: "12px",
          }}
        >
          <span
            className="font-bold"
            style={{
              fontFamily: "Inter",
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Yêu cầu Báo giá
          </span>
        </button>

        {/* Divider */}
        <div
          className="absolute"
          style={{
            top: "347px",
            width: "749.72px",
            height: "0px",
            border: "1px solid rgba(0, 0, 0, 0.5)",
            left: "50%",
            transform: "translateX(-50%)", // Căn giữa divider
          }}
        />

        {/* Contact Info Row */}
        <div
          className="absolute flex items-center justify-center w-full"
          style={{ top: "370px", gap: "40px" }}
        >
          <div className="flex items-center gap-[12px]">
            <div className="w-[20px] flex justify-center">
              <Phone className="w-5 h-5 text-black/50" strokeWidth={2} />
            </div>
            <div className="flex items-center gap-[12px]">
              <a
                href="tel:02822272416"
                className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
                style={{ fontFamily: "Inter" }}
              >
                (028) 22272416
              </a>
              <div className="h-[20px] border-l border-black/50"></div>
              <a
                href="tel:0906838869"
                className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
                style={{ fontFamily: "Inter" }}
              >
                0906838869
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-[22px] flex justify-center">
              <Mail className="w-5 h-5 text-black/50" strokeWidth={2} />
            </div>
            <a
              href="mailto:info@promacprinting.com"
              className="font-normal text-black/50 hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
              style={{ fontFamily: "Inter" }}
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
