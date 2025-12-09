// src/features/home/HomeBanner.tsx
import { Mail, Phone } from "lucide-react";
import mainVisual from "../../assets/main-visual.jpg";

// --- COMPONENT MOBILE & TABLET (Đã đổi tên cho chuẩn) ---
const MobileAndTabletBanner = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center md:justify-between 
                 w-full max-w-[375px] md:max-w-[740px] lg:max-w-[960px] 
                 bg-[#FFF5F6] rounded-[30px] 
                 pt-[40px] pb-[60px] px-[23px] md:p-[40px] 
                 mx-auto xl:hidden" // <--- THAY ĐỔI: lg:hidden -> xl:hidden (Hiện cho cả iPad Pro)
    >
      {/* 1. TEXT CONTENT GROUP */}
      <div className="flex flex-col items-center md:items-start gap-[32px] w-full mb-[50px] md:mb-0 md:w-1/2">
        {/* Title + Subtitle Group */}
        <div className="flex flex-col items-center md:items-start gap-[24px] w-full text-center md:text-left">
          <h1 className="font-inter font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-[34px] md:leading-[42px] lg:leading-[56px] text-[#FF0000]">
            PROMAC: In ấn Kỹ thuật Cao
          </h1>
          <p className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[19px] text-[#374151]">
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
        <div className="flex flex-col items-start gap-[14px] w-full pl-[10px] md:pl-0">
          {/* Phone Row */}
          <div className="flex items-center relative h-[21px]">
            <div className="w-[20px] h-[21px] flex items-center justify-center mr-[12px]">
              <Phone size={20} className="text-black/50" />
            </div>
            <div className="flex items-center gap-[12px]">
              <a
                href="tel:02822272416"
                className="font-inter font-normal text-[16px] leading-[19px] text-black/50 underline hover:text-[#FF0000]"
              >
                (028) 22272416
              </a>
              <div className="w-[1px] h-[20px] bg-black/50"></div>
              <a
                href="tel:0906838869"
                className="font-inter font-normal text-[16px] leading-[19px] text-black/50 underline hover:text-[#FF0000]"
              >
                0906838869
              </a>
            </div>
          </div>

          {/* Email Row */}
          <div className="flex items-center relative h-[21px]">
            <div className="w-[22px] h-[21px] flex items-center justify-center mr-[12px]">
              <Mail size={20} className="text-black/50" />
            </div>
            <a
              href="mailto:info@promacprinting.com"
              className="font-inter font-normal underline text-[16px] leading-[19px] text-black/50 hover:text-[#FF0000]"
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </div>

      {/* 2. IMAGE */}
      <div
        className="bg-gray-200 rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm
                   w-full max-w-[328px] h-[242px]
                   md:max-w-full md:w-1/2 md:h-[350px]
                   lg:h-[450px]" // Thêm chiều cao cho iPad Pro
      >
        <img
          src={mainVisual}
          alt="Promac Banner"
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
      {/* 1. MOBILE & TABLET & IPAD PRO BANNER */}
      <MobileAndTabletBanner />

      {/* 2. DESKTOP BANNER (Chỉ hiện từ xl - 1280px trở lên) */}
      <section
        className="hidden xl:block relative" // <--- THAY ĐỔI: lg:block -> xl:block
        style={{
          width: "1437px",
          height: "600px",
          backgroundColor: "#FFF5F6",
          borderRadius: "30px",
        }}
      >
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
            className="font-inter font-normal underline ml-[12px] hover:text-[#FF0000]"
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
            className="font-inter font-normal underline hover:text-[#FF0000]"
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
            className="font-inter font-normal underline ml-[12px] hover:text-[#FF0000]"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            info@promacprinting.com
          </a>
        </div>
      </section>
    </div>
  );
};
