// src/features/otherservices/winning/WinningScratchPortfolio.tsx
import React from "react";

// --- IMPORT ẢNH ---
import project1 from "../../../assets/printingservices/project1.png";
import project2 from "../../../assets/printingservices/project2.png";
import project3 from "../../../assets/printingservices/project3.png";

export const WinningScratchPortfolio: React.FC = () => {
  return (
    <section className="w-full flex justify-center pb-[60px] lg:pb-[100px] px-4 xl:px-0">
      <div className="flex flex-col items-center w-full max-w-[1473px]">
        {/* 1. HEADER SECTION (Responsive Text Size) */}
        <div className="text-center mb-[60px] lg:mb-[100px] max-w-[1354px]">
          <h2 className="font-inter font-semibold text-[32px] md:text-[40px] xl:text-[56px] leading-[1.2] xl:leading-[60px] text-black tracking-[-0.03em] mb-[20px] xl:mb-[29px]">
            Một số mẫu thẻ cào trúng thưởng Team Promac đã thực hiện .
          </h2>
          <p className="font-inter font-normal text-[16px] md:text-[18px] xl:text-[20px] leading-[1.5] xl:leading-[31px] text-black/65 text-center mx-auto max-w-[683px]">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
        </div>

        {/* 2. PROJECTS LIST (Responsive Layout) */}
        <div className="flex flex-col gap-[60px] lg:gap-[70px] w-full mb-[40px] lg:mb-[50px]">
          {/* ITEM 1: Ảnh Trái - Chữ Phải */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-[30px] lg:gap-0">
            {/* Ảnh (Fluid Width on Tablet/Mobile) */}
            <div className="w-full lg:w-[48%] xl:w-[727px] aspect-[727/518] bg-gray-200 overflow-hidden rounded-[20px] lg:rounded-none">
              <img
                src={project1}
                alt="Branding Design"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-[45%] xl:w-[551px] flex flex-col gap-[16px] lg:gap-[35px] text-center lg:text-left">
              <h3 className="font-manrope font-bold text-[32px] lg:text-[48px] leading-[1.2] tracking-[-0.025em] text-black">
                Branding Design
              </h3>
              <p className="font-manrope font-normal text-[16px] lg:text-[22px] leading-[1.6] tracking-[-0.025em] text-[#A4A4A4]">
                Build a unique website Teamollo.Webflow template. Build a unique
                website Teamollo.Webflow template. Build a unique website
                Teamollo.Webflow template
              </p>
            </div>
          </div>

          {/* ITEM 2: Chữ Trái - Ảnh Phải (Đảo ngược trên Desktop, Xuôi trên Mobile) */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-[30px] lg:gap-0">
            {/* Ảnh */}
            <div className="w-full lg:w-[48%] xl:w-[686px] aspect-[686/516] bg-gray-200 overflow-hidden rounded-[20px] lg:rounded-none">
              <img
                src={project2}
                alt="Packaging Design"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-[45%] xl:w-[687px] flex flex-col gap-[16px] lg:gap-[35px] text-center lg:text-left">
              <h3 className="font-manrope font-bold text-[32px] lg:text-[48px] leading-[1.2] tracking-[-0.025em] text-black">
                Packaging Design
              </h3>
              <p className="font-manrope font-normal text-[16px] lg:text-[22px] leading-[1.6] tracking-[-0.025em] text-[#A4A4A4]">
                Build a unique website Teamollo.Webflow template. Build a unique
                website Teamollo.Webflow template. Build a unique website
                Teamollo.Webflow template
              </p>
            </div>
          </div>

          {/* ITEM 3: Ảnh Trái - Chữ Phải */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-[30px] lg:gap-0">
            {/* Ảnh */}
            <div className="w-full lg:w-[48%] xl:w-[727px] aspect-[727/575] bg-gray-200 overflow-hidden rounded-[20px] lg:rounded-none">
              <img
                src={project3}
                alt="Braning Identity"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-[45%] xl:w-[551px] flex flex-col gap-[16px] lg:gap-[35px] text-center lg:text-left">
              <h3 className="font-manrope font-bold text-[32px] lg:text-[48px] leading-[1.2] tracking-[-0.025em] text-black">
                Braning Identity
              </h3>
              <p className="font-manrope font-normal text-[16px] lg:text-[22px] leading-[1.6] tracking-[-0.025em] text-[#A4A4A4]">
                Build a unique website Teamollo.Webflow template. Build a unique
                website Teamollo.Webflow template. Build a unique website
                Teamollo.Webflow template
              </p>
            </div>
          </div>
        </div>

        {/* 3. BUTTON "Xem tất cả" */}
        {/* FIX: Thay transition-colors + transition-transform thành transition-all */}
        <button className="w-[162px] h-[47px] bg-[#FF0000] rounded-[47px] flex items-center justify-center hover:bg-red-700 shadow-lg active:scale-95 transition-all duration-300">
          <span className="font-inter font-semibold text-[16px] leading-[30px] tracking-[-0.02em] text-white">
            Xem tất cả
          </span>
        </button>
      </div>
    </section>
  );
};
