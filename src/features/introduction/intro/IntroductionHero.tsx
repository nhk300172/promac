// src/features/introduction/intro/IntroductionHero.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import mainVisual from "../../../assets/main-visual.jpg";

// --- DATA TĨNH ---
const DATA = {
  header: "GIỚI THIỆU VỀ PROMAC",
  subHeader:
    "Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại PROMAC",
  contact: {
    address: "236/59 Điện Biên Phủ, Phường Gia Định, Thành phố Hồ Chí Minh",
    email: "info@promacprinting.com",
    phones: ["(028) 22272416", "0906838869"],
  },
};

export const IntroductionHero = () => {
  return (
    <div className="w-full flex justify-center bg-white my-10 px-4 xl:px-0">
      {/* =========================================================================
          1. MOBILE VERSION (< 1024px)
          - Giữ nguyên thiết kế card dọc cho Mobile
         ========================================================================= */}
      <div className="flex lg:hidden flex-col w-full bg-[#FFDEDE] rounded-[20px] overflow-hidden shadow-lg relative pb-6 max-w-[500px] mx-auto">
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-red-500 rounded-full opacity-5 z-0 pointer-events-none"></div>

        <div className="flex flex-col items-center pt-8 px-6 z-10 relative">
          <h1 className="font-bold text-[28px] leading-tight text-[#FF0000] text-center mb-4 uppercase">
            {DATA.header}
          </h1>
          <p className="font-medium text-[15px] text-center text-gray-700 leading-snug mb-6">
            {DATA.subHeader}
          </p>
          <div className="w-full aspect-video rounded-[15px] overflow-hidden shadow-md mb-6 border-4 border-white">
            <img
              src={mainVisual}
              className="w-full h-full object-cover"
              alt="Introduction Mobile"
            />
          </div>
        </div>

        <div className="mt-4 mx-4 bg-white rounded-[15px] p-4 flex flex-col gap-3 shadow-sm border border-red-50">
          <div className="flex items-start gap-3">
            <MapPin className="text-[#FF0000] w-5 h-5 shrink-0 mt-[2px]" />
            <span className="text-[13px] text-gray-600 font-medium">
              {DATA.contact.address}
            </span>
          </div>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <div className="flex items-center gap-3">
            <Mail className="text-[#FF0000] w-5 h-5 shrink-0" />
            <span className="text-[13px] text-gray-600 break-all font-medium">
              {DATA.contact.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-[#FF0000] w-5 h-5 shrink-0" />
            <div className="text-[13px] text-gray-600 font-bold">
              <span>{DATA.contact.phones[0]}</span>{" "}
              <span className="text-gray-400">|</span>{" "}
              <span>{DATA.contact.phones[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VERSION (>= 1024px)
          - Copy cấu trúc chính xác từ HomeBanner.tsx
          - Wrapper: min-h-[600px], m-8
          - Cột trái: w-[60%], padding chuẩn (pt-40, pl-30/50/80)
          - Cột phải: absolute top-0 right-0 w-[50%]
         ========================================================================= */}
      <div className="hidden lg:flex w-full bg-[#FFDEDE] rounded-[30px] relative overflow-hidden shadow-lg flex-col min-h-[600px] m-8">
        {/* --- PHẦN BODY --- */}
        <div className="flex w-full h-full flex-grow relative z-10">
          {/* CỘT TRÁI: TEXT CONTENT (Cấu trúc y hệt HomeBanner) */}
          <div className="w-[60%] pt-[40px] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-start gap-6 z-20">
            {/* Tiêu đề */}
            <h1 className="font-inter font-bold text-[30px] lg:text-[40px] leading-tight text-[#FF0000] uppercase mt-10">
              {DATA.header}
            </h1>

            {/* Subheader Box (Nếu muốn giống hệt layout HomeBanner thì có thể bọc div trắng, 
                nhưng theo design Intro thì để trần cũng được. Ở đây tôi để trần nhưng canh lề khớp) */}
            <div className="w-fit max-w-[80%]">
              <p className="font-semibold text-[16px] lg:text-[18px] text-[#374151] tracking-wide leading-relaxed">
                {DATA.subHeader}
              </p>
            </div>
          </div>

          {/* CỘT PHẢI: HÌNH ẢNH (Absolute Positioning giống HomeBanner) */}
          <div className="absolute top-0 right-0 w-[50%] h-full z-10 overflow-hidden pointer-events-none">
            {/* Thay vì dùng Bubble tròn như Home, ta dùng hình chữ nhật full 
                nhưng vẫn giữ vị trí absolute right-0 w-[50%] để khớp layout
             */}
            <div className="w-full h-full relative">
              <img
                src={mainVisual}
                alt="Introduction Visual"
                className="w-full h-full object-cover object-center pointer-events-auto"
              />
              {/* Lớp phủ Gradient để hòa trộn biên giới ảnh và nền hồng */}
              <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-[#FFDEDE] to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* FOOTER DESKTOP (Cấu trúc y hệt HomeBanner) */}
        <div className="bg-white w-full h-[80px] flex items-center justify-between px-[60px] relative z-40 border-t border-red-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
              <MapPin size={16} />
            </div>
            <span className="text-gray-600 font-medium text-[15px]">
              {DATA.contact.address}
            </span>
          </div>

          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
                <Mail size={16} />
              </div>
              <span className="text-gray-600 font-medium text-[15px]">
                {DATA.contact.email}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
                <Phone size={16} />
              </div>
              <div className="text-gray-600 font-medium text-[15px]">
                <span>{DATA.contact.phones[0]}</span> |{" "}
                <span>{DATA.contact.phones[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
