//src/features/introduction/intro/IntroductionHero.tsx
import { Mail, Phone } from "lucide-react";
import mainVisual from "../../../assets/main-visual.jpg";

export const IntroductionHero = () => {
  return (
    <div className="w-full flex justify-center mt-[5px]">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA MỚI
          ================================================================= */}
      <div className="lg:hidden flex justify-center w-full">
        <section
          className="relative flex flex-col items-center bg-[#FFF5F6] rounded-[30px]"
          style={{ width: "375px", height: "694px" }}
        >
          {/* TEXT CONTENT (Top: 75px - padding Figma) */}
          <div className="absolute top-[75px] w-[328px] flex flex-col items-center gap-[50px]">
            {/* Title & Desc Group */}
            <div className="flex flex-col items-center gap-[16px]">
              <h1
                className="font-inter font-bold text-[#FF0000] text-center"
                style={{ fontSize: "28px", lineHeight: "34px" }}
              >
                GIỚI THIỆU VỀ PROMAC
              </h1>
              <p
                className="font-inter font-semibold text-[#374151] text-center"
                style={{ fontSize: "16px", lineHeight: "19px" }}
              >
                Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại
                PROMAC
              </p>
            </div>

            {/* Button & Contact */}
            <div className="flex flex-col items-center w-full gap-[24px]">
              {/* Button */}
              <button
                className="flex flex-col justify-center items-center bg-[#FF0000] rounded-[20px]"
                style={{
                  width: "155px",
                  height: "45px",
                  boxShadow: "0px 0px 14px #FF0000",
                }}
              >
                <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
                  Yêu cầu Báo giá
                </span>
              </button>

              {/* Divider */}
              <div className="w-full h-[1px] bg-black/50 border border-black/50"></div>

              {/* Contact Info (Vertical) */}
              <div className="flex flex-col items-start gap-[14px] w-full pl-[10px]">
                {/* Phone */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[20px] flex justify-center">
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
                {/* Mail */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[22px] flex justify-center">
                    <Mail size={20} className="text-black/50" />
                  </div>
                  <a
                    href="mailto:info@promacprinting.com"
                    className="font-inter font-normal text-[16px] text-black/50 underline"
                  >
                    info@promacprinting.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE (Bottom: 328x242, radius 10px) */}
          <div className="absolute bottom-[50px] w-[328px] h-[242px] bg-gray-200 rounded-[10px] overflow-hidden">
            <img
              src={mainVisual}
              alt="Promac Intro"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <section
        className="hidden lg:block relative"
        style={{
          width: "1440px",
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
          className="absolute font-inter font-semibold"
          style={{
            width: "732.86px",
            height: "64px",
            top: "53px", // +53px relative to group
            left: "80px", // Adjust for absolute positioning
            fontSize: "36px",
            lineHeight: "64px",
            color: "#FF0000",
          }}
        >
          GIỚI THIỆU VỀ PROMAC
        </h1>

        <p
          className="absolute font-inter font-semibold"
          style={{
            width: "698.29px",
            height: "46px",
            top: "137px", // 53 + 84
            left: "80px",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#374151",
          }}
        >
          Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại PROMAC
        </p>

        <button
          className="absolute flex flex-col justify-center items-center transition-transform hover:scale-105"
          style={{
            width: "208.4px",
            height: "53px",
            left: "80px",
            top: "209px", // 53 + 156
            backgroundColor: "#FF0000",
            borderRadius: "20px",
            boxShadow: "0px 0px 14px #FF0000",
          }}
        >
          <span className="font-inter font-bold text-[20px] leading-[24px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        <div
          className="absolute"
          style={{
            width: "481px",
            height: "0px",
            left: "70px",
            top: "389.51px", // 53 + 336.51
            borderTop: "1px solid rgba(0, 0, 0, 0.5)",
          }}
        />

        <div
          className="absolute flex items-center"
          style={{
            left: "80px",
            top: "413px", // 53 + 360
            height: "21px",
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
            left: "80px",
            top: "453px", // 53 + 400
            height: "21.07px",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{ width: "21.83px", height: "21.07px" }}
          >
            <Mail size={20} color="rgba(0,0,0,0.5)" />
          </div>
          <a
            href="mailto:info@promacprinting.com"
            className="font-inter font-normal ml-[12px] underline"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            info@promacprinting.com
          </a>
        </div>
      </section>
    </div>
  );
};
