// src/features/coreservices/hardbox/HardBoxHero.tsx
import React from "react";
import { Phone, Mail } from "lucide-react";

// --- IMPORT ẢNH ---
// Cột Trái (3 ảnh)
import left1 from "../../../assets/printingservices/image8.jpg";
import left2 from "../../../assets/printingservices/image59.png";
import left3 from "../../../assets/printingservices/image12.jpg";

// Cột Phải (4 ảnh)
import right1 from "../../../assets/printingservices/image53.jpg";
import right2 from "../../../assets/printingservices/image206.png";
import right3 from "../../../assets/printingservices/image46.png";
import right4 from "../../../assets/printingservices/image67.png";

// Ảnh Chính (Thẻ cào)
import mainVisual from "../../../assets/printingservices/thecao.png";

export const VariableScratchHero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FCF5F6]"
      style={{ height: "746px" }}
    >
      <div className="relative mx-auto h-full" style={{ width: "1440px" }}>
        {/* =========================================
            LAYER 1: BACKGROUND IMAGES (Nền chìm)
           ========================================= */}

        {/* CỘT TRÁI - 3 ẢNH */}
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

        {/* CỘT PHẢI - 4 ẢNH */}
        <div
          className="absolute flex flex-col gap-[22px] "
          style={{
            left: "1240px",
            //right: "0px",
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

        {/* =========================================
            LAYER 2: MAIN VISUAL (Ảnh Chính - Nổi bật)
           ========================================= */}
        <div
          className="absolute z-30 flex items-center justify-center"
          style={{
            width: "716px",
            height: "489px",
            left: "730px",
            top: "130px",
            transform: "rotate(6deg)",

            // --- HIỆU ỨNG VIỀN KÍNH ---
            borderRadius: "28px",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.1) 100%)",
            padding: "3px", // Độ dày viền
            boxShadow:
              "0px 30px 60px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255,255,255,0.8)",
          }}
        >
          <div className="w-full h-full rounded-[25px] overflow-hidden bg-white relative">
            <img
              src={mainVisual}
              alt="Thẻ cào trúng thưởng"
              className="w-full h-full object-cover" // object-cover giúp ảnh tràn đầy khung bo góc
            />
            {/* Lớp phủ bóng nhẹ lên ảnh để tăng độ khối */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* =========================================
            LAYER 3: TEXT CONTENT (Bên trái)
           ========================================= */}
        <div className="absolute left-[63px] top-[192px] z-40">
          <h1 className="font-inter font-extrabold text-[#FF0000] text-[56px] leading-[1.2] w-[674px]">
            In Thẻ Cào Biến Đổi
          </h1>
          <p className="font-inter font-semibold text-[#374151] text-[16px] leading-[19px] w-[532px] mt-[16px]">
            In Thẻ Cào Biến Đổi – Chuẩn Màu, Sắc Nét, Giá Tốt Nhất Thị Trường
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

        {/* STATS (Con số thống kê) */}
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
    </section>
  );
};
