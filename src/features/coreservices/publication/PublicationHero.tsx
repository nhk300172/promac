// src/features/coreservices/publication/PublicationHero.tsx
import React from "react";
import { Phone, Mail } from "lucide-react";

// --- IMPORT ẢNH ---
import left1 from "../../../assets/printingservices/image8.jpg";
import left2 from "../../../assets/printingservices/image59.png";
import left3 from "../../../assets/printingservices/image12.jpg";
import right1 from "../../../assets/printingservices/image53.jpg";
import right2 from "../../../assets/printingservices/image206.png";
import right3 from "../../../assets/printingservices/image46.png";
import right4 from "../../../assets/printingservices/image67.png";
import mainVisual from "../../../assets/printingservices/thecao.png";

export const PublicationHero: React.FC = () => {
  return (
    <section className="w-full bg-[#FCF5F6] overflow-hidden">
      {/* =================================================================
          1. MOBILE VERSION (< 768px)
          - ĐÃ GIẢM padding-bottom từ 40px xuống 20px
          ================================================================= */}
      {/* CŨ: py-[40px] */}
      {/* MỚI: pt-[40px] pb-[20px] */}
      <div className="flex flex-col items-center w-full md:hidden pt-[40px] pb-[20px] px-[20px] relative">
        {/* Title */}
        <div className="text-center mb-[40px] z-20 relative">
          <h1 className="font-inter font-extrabold text-[#FF0000] text-[32px] leading-[1.2] mb-[12px]">
            In Ấn Phẩm Marketing
          </h1>
          <p className="font-inter font-medium text-[#374151] text-[16px]">
            Chuẩn Màu, Sắc Nét, Giá Tốt Nhất Thị Trường
          </p>
        </div>

        {/* Main Image Area with Backgrounds */}
        <div className="relative w-full max-w-[320px] aspect-[4/3] mb-[40px] flex justify-center items-center z-10">
          {/* --- DECOR IMAGES MOBILE --- */}
          <img
            src={left2}
            alt="decor"
            className="absolute -left-[30px] top-[-40px] w-[100px] h-[70px] object-cover rounded-[10px] opacity-80 -rotate-12 z-0 shadow-md border-2 border-white"
          />
          <img
            src={right1}
            alt="decor"
            className="absolute -right-[30px] bottom-[-30px] w-[90px] h-[60px] object-cover rounded-[10px] opacity-80 rotate-12 z-0 shadow-md border-2 border-white"
          />
          <img
            src={left3}
            alt="decor"
            className="absolute -right-[20px] top-[-30px] w-[80px] h-[50px] object-cover rounded-[10px] opacity-70 rotate-6 z-0 shadow-md border-2 border-white"
          />

          {/* --- MAIN VISUAL MOBILE --- */}
          <div className="relative z-10 w-full h-full bg-white p-2 rounded-[20px] shadow-xl border border-gray-100">
            <img
              src={mainVisual}
              alt="Hộp cứng cao cấp"
              className="w-full h-full object-cover rounded-[15px]"
            />
          </div>
        </div>

        {/* Action Button */}
        <button className="flex items-center justify-center bg-[#FF0000] text-white rounded-[20px] shadow-lg w-[200px] h-[50px] mb-[30px] active:scale-95 transition-transform z-20 relative">
          <span className="font-bold text-[16px]">Yêu cầu Báo giá</span>
        </button>

        <div className="w-full h-[1px] bg-black/10 mb-[30px] z-20 relative"></div>

        {/* Contact Info */}
        <div className="flex flex-col gap-[15px] w-full items-center z-20 relative">
          <div className="flex items-center gap-[10px]">
            <Phone size={20} className="text-black/50" />
            <div className="flex gap-[10px] text-[15px] text-black/50 underline">
              <a href="tel:02822272416">(028) 22272416</a>
              <span>|</span>
              <a href="tel:0906838869">0906838869</a>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <Mail size={20} className="text-black/50" />
            <a
              href="mailto:info@promacprinting.com"
              className="text-[15px] text-black/50 underline"
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1439px)
          - ĐÃ GIẢM padding-bottom từ 60px xuống 30px
          ================================================================= */}
      {/* CŨ: py-[60px] */}
      {/* MỚI: pt-[60px] pb-[30px] */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full pt-[60px] pb-[30px] px-[40px] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1000px] gap-[40px]">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-30 relative">
            <h1 className="font-inter font-extrabold text-[#FF0000] text-[40px] lg:text-[48px] leading-[1.2] mb-[20px]">
              In Ấn Phẩm Marketing
            </h1>
            <p className="font-inter font-semibold text-[#374151] text-[18px] mb-[40px] max-w-[500px]">
              In Ấn Phẩm Marketing – Chuẩn Màu, Sắc Nét, Giá Tốt Nhất Thị Trường
            </p>
            <button className="flex items-center justify-center bg-[#FF0000] text-white rounded-[20px] shadow-lg w-[220px] h-[60px] mb-[40px] hover:scale-105 transition-transform">
              <span className="font-bold text-[18px]">Yêu cầu Báo giá</span>
            </button>

            {/* Contact Tablet */}
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[12px]">
                <Phone size={24} className="text-black/50" />
                <div className="flex gap-[12px] text-[16px] text-black/50 underline">
                  <a href="tel:02822272416">(028) 22272416</a>
                  <div className="w-[1px] h-[20px] bg-black/50"></div>
                  <a href="tel:0906838869">0906838869</a>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <Mail size={24} className="text-black/50" />
                <a
                  href="mailto:info@promacprinting.com"
                  className="text-[16px] text-black/50 underline"
                >
                  info@promacprinting.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Area (Main Visual + Backgrounds) */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center mt-10 lg:mt-0 z-10">
            {/* --- DECOR IMAGES TABLET/IPAD --- */}
            <img
              src={left1}
              alt=""
              className="absolute -left-[80px] -top-[50px] w-[160px] h-[100px] object-cover rounded-[15px] opacity-90 -rotate-12 shadow-lg border-2 border-white z-0"
            />
            <img
              src={left3}
              alt=""
              className="absolute -left-[50px] -bottom-[30px] w-[140px] h-[90px] object-cover rounded-[15px] opacity-80 rotate-6 shadow-lg border-2 border-white z-0"
            />
            <img
              src={right2}
              alt=""
              className="absolute -right-[60px] -top-[30px] w-[150px] h-[90px] object-cover rounded-[15px] opacity-90 rotate-12 shadow-lg border-2 border-white z-0"
            />
            <img
              src={right4}
              alt=""
              className="absolute -right-[40px] -bottom-[40px] w-[130px] h-[80px] object-cover rounded-[15px] opacity-80 -rotate-6 shadow-lg border-2 border-white z-0"
            />

            {/* --- MAIN VISUAL TABLET --- */}
            <div className="relative z-20 w-full h-full bg-white p-2 rounded-[28px] shadow-2xl border border-gray-100">
              <img
                src={mainVisual}
                alt="Main Visual"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Stats Tablet */}
        <div className="flex gap-[60px] mt-[80px] z-20 relative">
          <div className="flex flex-col items-center">
            <span className="font-poppins font-bold text-[#142257] text-[40px]">
              50+
            </span>
            <span className="font-poppins font-medium text-[#74848B] text-[20px]">
              Unique Blocks
            </span>
          </div>
          <div className="w-[1px] h-[60px] bg-[#D5DCDF]"></div>
          <div className="flex flex-col items-center">
            <span className="font-poppins font-bold text-[#142257] text-[40px]">
              100+
            </span>
            <span className="font-poppins font-medium text-[#74848B] text-[20px]">
              Components
            </span>
          </div>
        </div>
      </div>

      {/* =================================================================
          3. DESKTOP VERSION (>= 1440px)
          - Chiều cao cố định h-[746px] nên không cần chỉnh padding/margin ở đây.
          - Khoảng cách sẽ được điều chỉnh ở component tiếp theo (HardBoxContent).
          ================================================================= */}
      <div className="hidden xl:block relative w-full h-[746px]">
        <div className="relative mx-auto h-full w-[1440px]">
          {/* LAYER 1: BACKGROUND IMAGES */}
          <div
            className="absolute flex flex-col gap-[22px]"
            style={{
              left: "790px",
              top: "-115px",
              transform: "rotate(6deg)",
              opacity: 0.5,
              zIndex: 0,
              filter: "blur(1px)",
              pointerEvents: "none",
            }}
          >
            <img
              src={left1}
              className="w-[425px] h-[240px] rounded-[15px] object-cover shadow-lg"
              alt="left-1"
            />
            <img
              src={left2}
              className="w-[425px] h-[240px] rounded-[15px] object-cover shadow-lg"
              alt="left-2"
            />
            <img
              src={left3}
              className="w-[425px] h-[320px] rounded-[15px] object-cover shadow-lg"
              alt="left-3"
            />
          </div>

          <div
            className="absolute flex flex-col gap-[22px]"
            style={{
              left: "1240px",
              top: "-155px",
              transform: "rotate(6deg)",
              opacity: 0.5,
              zIndex: 0,
              filter: "blur(1px)",
              pointerEvents: "none",
            }}
          >
            <img
              src={right1}
              className="w-[425px] h-[240px] rounded-[15px] object-cover shadow-lg"
              alt="right-1"
            />
            <img
              src={right2}
              className="w-[425px] h-[217px] rounded-[15px] object-cover shadow-lg"
              alt="right-2"
            />
            <img
              src={right3}
              className="w-[425px] h-[242px] rounded-[15px] object-cover shadow-lg"
              alt="right-3"
            />
            <img
              src={right4}
              className="w-[425px] h-[207px] rounded-[15px] object-cover shadow-lg"
              alt="right-4"
            />
          </div>

          {/* LAYER 2: MAIN VISUAL */}
          <div
            className="absolute z-30 flex items-center justify-center"
            style={{
              width: "716px",
              height: "489px",
              left: "730px",
              top: "130px",
              transform: "rotate(6deg)",
              borderRadius: "28px",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.1) 100%)",
              padding: "3px",
              boxShadow:
                "0px 30px 60px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255,255,255,0.8)",
            }}
          >
            <div className="w-full h-full rounded-[25px] overflow-hidden bg-white relative">
              <img
                src={mainVisual}
                alt="Thẻ cào trúng thưởng"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* LAYER 3: TEXT CONTENT */}
          <div className="absolute left-[63px] top-[192px] z-40">
            <h1 className="font-inter font-extrabold text-[#FF0000] text-[56px] leading-[1.2] w-[674px]">
              In Ấn Phẩm Marketing
            </h1>
            <p className="font-inter font-semibold text-[#374151] text-[16px] leading-[19px] w-[532px] mt-[16px]">
              In Ấn Phẩm Marketing – Chuẩn Màu, Sắc Nét, Giá Tốt Nhất Thị Trường
            </p>
            <button className="flex items-center justify-center bg-[#FF0000] text-[#F5F5F5] hover:scale-105 transition-transform mt-[40px] w-[245px] h-[71px] rounded-[20px] shadow-[0px_0px_14px_#FF0000] border border-[#FFF5F6]">
              <span className="font-inter font-bold text-[20px]">
                Yêu cầu Báo giá
              </span>
            </button>
            <div className="mt-[75px] w-[487px] h-[1px] bg-black/50" />
            <div className="flex flex-col gap-[20px] mt-[22px] ml-[20px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[20px] flex justify-center">
                  <Phone size={20} className="text-black/50" />
                </div>
                <div className="flex items-center gap-[12px]">
                  <a
                    href="tel:02822272416"
                    className="font-inter text-[16px] text-black/50 underline"
                  >
                    (028) 22272416
                  </a>
                  <div className="h-[20px] border-l border-black/50"></div>
                  <a
                    href="tel:0906838869"
                    className="font-inter text-[16px] text-black/50 underline"
                  >
                    0906838869
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[22px] flex justify-center">
                  <Mail size={20} className="text-black/50" />
                </div>
                <a
                  href="mailto:info@promacprinting.com"
                  className="font-inter text-[16px] text-black/50"
                >
                  info@promacprinting.com
                </a>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div
            className="absolute flex items-center gap-[40px] z-40"
            style={{ left: "88px", top: "749px" }}
          >
            <div className="flex flex-col items-start gap-[5px]">
              <span className="font-poppins font-bold text-[#142257] text-[61px] leading-none">
                50+
              </span>
              <span className="font-poppins font-medium text-[#74848B] text-[30px]">
                Unique Blocks
              </span>
            </div>
            <div className="w-[118px] h-[1px] bg-[#D5DCDF] rotate-90 origin-center"></div>
            <div className="flex flex-col items-start gap-[5px]">
              <span className="font-poppins font-bold text-[#142257] text-[61px] leading-none">
                100+
              </span>
              <span className="font-poppins font-medium text-[#74848B] text-[30px]">
                Components
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
