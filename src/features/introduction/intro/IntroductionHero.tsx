// src/features/introduction/intro/IntroductionHero.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import mainVisual from "../../../assets/main-visual.jpg";

// --- DATA TĨNH ---
const DATA = {
  header: "GIỚI THIỆU VỀ PROMAC",
  subHeader:
    "Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại PROMAC",
  contact: {
    // Cập nhật địa chỉ ngắn gọn hơn để hiển thị tốt hơn nếu cần
    address: "236/59 Điện Biên Phủ, Phường 17, Q. Bình Thạnh, TP.HCM",
    email: "info@promacprinting.com",
    phones: ["(028) 22272416", "0906838869"],
  },
};

export const IntroductionHero = () => {
  return (
    <div className="w-full flex justify-center bg-white my-10 px-4 xl:px-0">
      {/* =========================================================================
          1. MOBILE VERSION (< 1024px)
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
          ========================================================================= */}
      <div className="hidden lg:flex w-full bg-[#FFDEDE] rounded-[30px] relative overflow-hidden shadow-lg flex-col min-h-[600px] m-8">
        {/* --- PHẦN BODY --- */}
        <div className="flex w-full h-full flex-grow relative z-10">
          {/* CỘT TRÁI: TEXT CONTENT */}
          <div className="w-[60%] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-center gap-6 z-20 pb-[80px]">
            <h1 className="font-inter font-bold text-[30px] lg:text-[40px] leading-tight text-[#FF0000] uppercase">
              {DATA.header}
            </h1>

            <div className="w-fit max-w-[80%]">
              <p className="font-semibold text-[16px] lg:text-[18px] text-[#374151] tracking-wide leading-relaxed">
                {DATA.subHeader}
              </p>
            </div>
          </div>

          {/* CỘT PHẢI: HÌNH ẢNH */}
          <div className="absolute top-0 right-0 w-[50%] h-full z-10 overflow-hidden pointer-events-none">
            <div className="w-full h-full relative">
              <img
                src={mainVisual}
                alt="Introduction Visual"
                className="w-full h-full object-cover object-center pointer-events-auto"
              />
              <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-[#FFDEDE] to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* --- FOOTER DESKTOP (CONTACT BAR) --- */}
        <div className="absolute bottom-0 left-0 w-full bg-white h-[70px] z-40 flex items-center justify-center">
          {/* SỬA: Giảm gap và padding để vừa vặn hơn trên iPad Pro */}
          <div className="flex items-center justify-center gap-[15px] lg:gap-[20px] xl:gap-[40px] px-2 lg:px-4 w-full max-w-[1440px]">
            {/* 1. ĐỊA CHỈ */}
            <div className="flex items-center gap-[8px] lg:gap-[16px]">
              <div className="w-[25px] h-[25px] bg-[#FF0000] rounded-[15px] flex items-center justify-center shrink-0">
                <MapPin size={14} className="text-white" />
              </div>
              {/* SỬA: Font size 13px cho màn hình lg, 20px cho màn hình xl */}
              <span className="font-inter font-normal text-[13px] xl:text-[20px] text-black whitespace-nowrap">
                {DATA.contact.address}
              </span>
            </div>

            {/* 2. EMAIL */}
            <div className="flex items-center gap-[8px] lg:gap-[16px]">
              <div className="w-[25px] h-[25px] bg-[#FF0000] rounded-[15px] flex items-center justify-center shrink-0">
                <Mail size={14} className="text-white" />
              </div>
              <span className="font-inter font-normal text-[13px] xl:text-[20px] text-black whitespace-nowrap">
                {DATA.contact.email}
              </span>
            </div>

            {/* 3. ĐIỆN THOẠI */}
            <div className="flex items-center gap-[8px] lg:gap-[16px]">
              <div className="w-[25px] h-[25px] bg-[#FF0000] rounded-[15px] flex items-center justify-center shrink-0">
                <Phone size={14} className="text-white" />
              </div>
              <div className="flex items-center gap-[5px] lg:gap-[10px] xl:gap-[16px] font-inter font-normal text-[13px] xl:text-[20px] text-black whitespace-nowrap">
                <span>{DATA.contact.phones[0]}</span>
                <div className="w-[1px] h-[14px] lg:h-[20px] bg-black/50"></div>
                <span>{DATA.contact.phones[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
