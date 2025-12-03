//src/features/home/HomeBanner.tsx
import { Mail, Phone } from "lucide-react";

import mainVisual from "../../assets/main-visual.jpg";
// --- QUAN TRỌNG: PHẦN MOBILE MỚI ---
const MobileBanner = () => {
  return (
    // Container Mobile (lg:hidden)
    // Width: 100% (max 375px), Padding: 101px 23px (Figma)
    <div className="flex flex-col items-center w-full max-w-[375px] bg-[#FFF5F6] rounded-[30px] pt-[40px] pb-[60px] px-[23px] mx-auto lg:hidden">
      {/* 1. TEXT CONTENT GROUP */}
      <div className="flex flex-col items-center gap-[32px] w-full mb-[50px]">
        {/* Title + Subtitle Group */}
        <div className="flex flex-col items-center gap-[24px] w-full text-center">
          <h1 className="font-inter font-bold text-[28px] leading-[34px] text-[#FF0000]">
            PROMAC: In ấn Kỹ thuật Cao
          </h1>
          <p className="font-inter font-semibold text-[16px] leading-[19px] text-[#374151]">
            Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại
            PROMAC
          </p>
        </div>

        {/* Button */}
        <button className="flex flex-col justify-center items-center w-[155px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] active:scale-95 transition-transform">
          <span className="font-inter font-bold text-[16px] leading-[19px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-black/50 opacity-50 border border-black/50"></div>

        {/* Contact Info Group */}
        <div className="flex flex-col items-start gap-[14px] w-full pl-[10px]">
          {/* Phone Row */}
          <div className="flex items-center relative h-[21px]">
            {/* Icon Phone */}
            <div className="w-[20px] h-[21px] flex items-center justify-center mr-[12px]">
              <Phone size={20} className="text-black/50" />
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center gap-[12px]">
              <a
                href="tel:02822272416"
                className="font-inter font-normal text-[16px] leading-[19px] text-black/50 underline"
              >
                (028) 22272416
              </a>
              {/* Vertical Line */}
              <div className="w-[1px] h-[20px] bg-black/50"></div>
              <a
                href="tel:0906838869"
                className="font-inter font-normal text-[16px] leading-[19px] text-black/50 underline"
              >
                0906838869
              </a>
            </div>
          </div>

          {/* Email Row */}
          <div className="flex items-center relative h-[21px]">
            {/* Icon Mail */}
            <div className="w-[22px] h-[21px] flex items-center justify-center mr-[12px]">
              <Mail size={20} className="text-black/50" />
            </div>

            <a
              href="mailto:info@promacprinting.com"
              className="font-inter font-normal underline text-[16px] leading-[19px] text-black/50"
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </div>

      {/* 2. IMAGE (Order 1 in Figma - Bottom) */}
      <div
        className="w-full h-[242px] bg-gray-200 rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm"
        style={{ width: "328px" }}
      >
        {/* Thẻ img */}
        <img
          src={mainVisual}
          alt="Promac Banner Mobile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// --- COMPONENT CHÍNH ---
export const HomeBanner = () => {
  return (
    <div className="w-full flex justify-center mt-[20px] lg:mt-[41px]">
      {/* 1. MOBILE BANNER (Tách riêng) */}
      <MobileBanner />

      {/* 2. DESKTOP BANNER (Giữ nguyên code cũ 100%) */}
      <section
        className="hidden lg:block relative"
        style={{
          width: "1437px",
          height: "600px",
          backgroundColor: "#FFF5F6",
          borderRadius: "30px",
        }}
      >
        {/* --- DESKTOP CONTENT (Code gốc của bạn) --- */}
        <div
          className="absolute bg-gray-200 flex items-center justify-center overflow-hidden"
          style={{
            width: "591px",
            height: "506px",
            borderRadius: "10px",
            left: "813px",
            top: "57px",
          }}
        >
          <img
            src={mainVisual}
            alt="Promac Banner Desktop"
            className="w-full h-full object-cover"
          />
        </div>

        <h1
          className="absolute font-inter font-bold text-[#FF0000]"
          style={{
            width: "742px",
            height: "64px",
            left: "51px",
            top: "90px",
            fontSize: "50px",
            lineHeight: "61px",
          }}
        >
          PROMAC: In ấn Kỹ thuật Cao
        </h1>

        <p
          className="absolute font-inter font-semibold text-[#374151]"
          style={{
            width: "707px",
            height: "46px",
            left: "51px",
            top: "174px",
            fontSize: "16px",
            lineHeight: "19px",
          }}
        >
          Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại PROMAC
        </p>

        <button
          className="absolute flex flex-col justify-center items-center transition-transform hover:scale-105"
          style={{
            width: "211px",
            height: "53px",
            left: "51px",
            top: "246px",
            backgroundColor: "#FF0000",
            borderRadius: "20px",
            boxShadow: "0px 0px 14px #FF0000",
            gap: "12px",
          }}
        >
          <span className="font-inter font-bold text-[20px] leading-[24px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        <div
          className="absolute"
          style={{
            width: "487px",
            height: "0px",
            left: "34px",
            top: "445.51px",
            borderTop: "1px solid rgba(0, 0, 0, 0.5)",
          }}
        />

        <div
          className="absolute flex items-center"
          style={{
            left: "54.56px",
            top: "468.18px",
            height: "21.07px",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{ width: "20px", height: "21px" }}
          >
            <Phone size={20} color="rgba(0,0,0,0.5)" />
          </div>
          <a
            href="tel:02822272416"
            className="font-inter font-normal underline ml-[12px]"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            (028) 22272416
          </a>
          <div
            className="mx-[12px]"
            style={{
              width: "0px",
              height: "20px",
              borderLeft: "1px solid rgba(0,0,0,0.5)",
            }}
          />
          <a
            href="tel:0906838869"
            className="font-inter font-normal underline"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            0906838869
          </a>
        </div>

        <div
          className="absolute flex items-center"
          style={{
            left: "55px",
            top: "509px",
            height: "21.07px",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{ width: "22.1px", height: "21.07px" }}
          >
            <Mail size={20} color="rgba(0,0,0,0.5)" />
          </div>
          <a
            href="mailto:info@promacprinting.com"
            className="font-inter font-normal underline ml-[12px]"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            info@promacprinting.com
          </a>
        </div>
      </section>
    </div>
  );
};
