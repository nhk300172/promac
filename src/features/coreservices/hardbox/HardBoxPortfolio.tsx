// src/features/coreservices/hardbox/HardBoxPortfolio.tsx
import React from "react";

// --- IMPORT ẢNH ---
// Bạn nhớ thêm ảnh vào folder này nhé
import project1 from "../../../assets/printingservices/project1.png";
import project2 from "../../../assets/printingservices/project2.png";
import project3 from "../../../assets/printingservices/project3.png";

export const HardBoxPortfolio: React.FC = () => {
  return (
    <section className="w-full flex justify-center pb-[100px]">
      <div className="flex flex-col items-center w-[1473px]">
        {/* 1. HEADER SECTION */}
        <div className="text-center mb-[100px] max-w-[1354px]">
          <h2 className="font-inter font-semibold text-[56px] leading-[60px] text-black tracking-[-0.03em] mb-[29px]">
            Một số mẫu hộp cứng Team Promac đã thực hiện .
          </h2>
          <p className="font-inter font-normal text-[20px] leading-[31px] text-black/65 text-center mx-auto max-w-[683px]">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
        </div>

        {/* 2. PROJECTS LIST (Zig-Zag Layout) */}
        <div className="flex flex-col gap-[70px] w-full mb-[100px]">
          {/* ITEM 1: Ảnh Trái - Chữ Phải */}
          <div className="flex items-center justify-between w-full">
            {/* Ảnh */}
            <div className="w-[727px] h-[518px] bg-gray-200 overflow-hidden">
              <img
                src={project1}
                alt="Branding Design"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-[551px] flex flex-col gap-[35px]">
              <h3 className="font-manrope font-bold text-[48px] leading-[54px] tracking-[-0.025em] text-black">
                Branding Design
              </h3>
              <p className="font-manrope font-normal text-[22px] leading-[36px] tracking-[-0.025em] text-[#A4A4A4]">
                Build a unique website Teamollo.Webflow template. Build a unique
                website Teamollo.Webflow template. Build a unique website
                Teamollo.Webflow template
              </p>
            </div>
          </div>

          {/* ITEM 2: Chữ Trái - Ảnh Phải (Đảo ngược) */}
          <div className="flex items-center justify-between w-full flex-row-reverse">
            {/* Ảnh */}
            <div className="w-[686px] h-[516px] bg-gray-200 overflow-hidden">
              <img
                src={project2}
                alt="Packaging Design"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-[687px] flex flex-col gap-[35px]">
              <h3 className="font-manrope font-bold text-[48px] leading-[54px] tracking-[-0.025em] text-black">
                Packaging Design
              </h3>
              <p className="font-manrope font-normal text-[22px] leading-[36px] tracking-[-0.025em] text-[#A4A4A4]">
                Build a unique website Teamollo.Webflow template. Build a unique
                website Teamollo.Webflow template. Build a unique website
                Teamollo.Webflow template
              </p>
            </div>
          </div>

          {/* ITEM 3: Ảnh Trái - Chữ Phải */}
          <div className="flex items-center justify-between w-full">
            {/* Ảnh */}
            <div className="w-[727px] h-[575px] bg-gray-200 overflow-hidden">
              <img
                src={project3}
                alt="Braning Identity"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-[551px] flex flex-col gap-[35px]">
              <h3 className="font-manrope font-bold text-[48px] leading-[54px] tracking-[-0.025em] text-black">
                Braning Identity
              </h3>
              <p className="font-manrope font-normal text-[22px] leading-[36px] tracking-[-0.025em] text-[#A4A4A4]">
                Build a unique website Teamollo.Webflow template. Build a unique
                website Teamollo.Webflow template. Build a unique website
                Teamollo.Webflow template
              </p>
            </div>
          </div>
        </div>

        {/* 3. BUTTON "Xem tất cả" */}
        <button className="w-[162px] h-[47px] bg-[#FF0000] rounded-[47px] flex items-center justify-center hover:bg-red-700 transition-colors">
          <span className="font-inter font-semibold text-[16px] leading-[30px] tracking-[-0.02em] text-white">
            Xem tất cả
          </span>
        </button>
      </div>
    </section>
  );
};
