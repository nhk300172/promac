// src/features/home/HomeBanner.tsx
import { Mail, Phone, MapPin, Check } from "lucide-react";

import inHopCarton from "../../assets/in-hop-carton.jpg";
import inTemNhanDecal from "../../assets/in-tem-nhan-decal.jpg";
import inTheCaoYeuCau from "../../assets/in-the-cao-yeu-cau.jpg";
import mayIn from "../../assets/may-in.jpg";

// --- ẢNH GIẢ LẬP ---
const productImg1 = inHopCarton;
const productImg2 = inTemNhanDecal;
const productImg3 = inTheCaoYeuCau;

// --- DATA TĨNH ---
const DATA = {
  header: "PROMAC: IN ẤN KỸ THUẬT CAO",
  subHeaderBox:
    "THIẾT KẾ - IN ẤN - GIA CÔNG TRỌN GÓI, ĐỒNG BỘ NHẬN DIỆN THƯƠNG HIỆU",
  features: [
    "10 năm kinh nghiệm",
    "Chất lượng ổn định trên mọi in ấn",
    "Tư vấn tận tình",
    "Thời gian đáp ứng nhanh",
  ],
  contact: {
    address: "236/59 Điện Biên Phủ, Phường Gia Định, Thành phố Hồ Chí Minh",
    email: "info@promacprinting.com",
    phones: ["(028) 22272416", "0906838869"],
  },
};

export const HomeBanner = () => {
  return (
    <div className="w-full flex justify-center bg-white my-10 px-4 xl:px-0">
      {/* =========================================================================
          1. MOBILE & TABLET & IPAD PRO VERSION (< 1280px)
          ========================================================================= */}
      <div className="flex xl:hidden flex-col w-full bg-[#FFDEDE] rounded-[20px] overflow-hidden shadow-lg relative pb-6 max-w-[800px] xl:max-w-none mx-auto">
        {/* ... (Giữ nguyên phần Mobile) ... */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500 rounded-full opacity-10 z-0 pointer-events-none"></div>

        <div className="flex flex-col items-center pt-8 px-6 z-10 relative">
          <h1 className="font-bold text-[28px] md:text-[36px] leading-tight text-[#FF0000] text-center mb-6">
            {DATA.header}
          </h1>

          <div className="relative w-[280px] h-[280px] mb-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] rounded-full border-4 border-white shadow-md overflow-hidden z-20">
              <img
                src={mayIn}
                className="w-full h-full object-cover"
                alt="Main"
              />
            </div>
            <div className="absolute bottom-[20px] left-0 w-[100px] h-[100px] rounded-full border-4 border-white shadow-md overflow-hidden z-10">
              <img
                src={productImg1}
                className="w-full h-full object-cover"
                alt="P1"
              />
            </div>
            <div className="absolute bottom-[20px] right-0 w-[100px] h-[100px] rounded-full border-4 border-white shadow-md overflow-hidden z-10">
              <img
                src={productImg2}
                className="w-full h-full object-cover"
                alt="P2"
              />
            </div>
          </div>

          <div className="bg-white rounded-[20px] px-4 py-3 shadow-sm w-full md:w-auto md:px-10 mb-6">
            <p className="font-bold text-[14px] md:text-[16px] text-center text-black leading-snug">
              {DATA.subHeaderBox}
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-x-10 w-full md:w-auto pl-2 mb-6">
            {DATA.features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1 shrink-0">
                  <Check className="text-[#0066CC] w-4 h-4" />
                </div>
                <span className="text-[15px] font-semibold text-gray-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 mx-4 bg-white rounded-[15px] p-4 flex flex-col md:flex-row md:justify-around md:items-center gap-3 shadow-sm border border-red-50">
          <div className="flex items-start gap-3">
            <MapPin className="text-[#FF0000] w-5 h-5 shrink-0 mt-1" />
            <span className="text-[13px] md:text-[14px] text-gray-600">
              {DATA.contact.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-[#FF0000] w-5 h-5 shrink-0" />
            <span className="text-[13px] md:text-[14px] text-gray-600 break-all">
              {DATA.contact.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-[#FF0000] w-5 h-5 shrink-0" />
            <div className="text-[13px] md:text-[14px] text-gray-600">
              <span>{DATA.contact.phones[0]}</span> |{" "}
              <span>{DATA.contact.phones[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VERSION (>= 1280px)
          ========================================================================= */}
      <div className="hidden xl:flex w-full bg-[#FFDEDE] rounded-[30px] relative overflow-hidden shadow-lg flex-col min-h-[600px] m-8">
        {/* --- PHẦN BODY --- */}
        <div className="flex w-full h-full flex-grow relative z-10">
          {/* CỘT TRÁI: TEXT CONTENT */}
          {/* SỬA: justify-center (để căn giữa dọc), bỏ pt/pb để không bị lệch */}
          <div className="w-[60%] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-center gap-6 z-20">
            <h1 className="font-inter font-semibold text-[30px] lg:text-[40px] leading-tight text-[#FF0000]">
              {DATA.header}
            </h1>

            <div className="bg-white rounded-full px-8 py-4 shadow-sm w-fit max-w-[80%]">
              <p className="font-bold text-[16px] lg:text-[20px] text-black tracking-wide text-center">
                {DATA.subHeaderBox}
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2 pl-12">
              {DATA.features.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Check
                    className="text-[#0066CC] w-6 h-6 shrink-0"
                    strokeWidth={3}
                  />
                  <span className="text-[16px] lg:text-[18px] font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: HÌNH ẢNH & BUBBLES */}
          <div className="absolute top-0 right-0 w-[50%] h-full z-10 pointer-events-none">
            {/* HÌNH TRÒN LỚN */}
            <div className="absolute top-2/3 right-[-300px] transform -translate-y-[60%] w-[850px] h-[850px] rounded-full border-[10px] border-[#FF0000] overflow-hidden shadow-2xl">
              <div className="w-full h-full relative">
                <img
                  src={mayIn}
                  alt="Factory"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 opacity-40 mix-blend-multiply"></div>
              </div>
            </div>

            {/* 3 HÌNH TRÒN NHỎ */}
            <div className="absolute top-[3%] right-[59%] w-[140px] h-[140px] rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden z-30 pointer-events-auto">
              <img
                src={productImg1}
                className="w-full h-full object-cover"
                alt="P1"
              />
            </div>
            <div className="absolute top-[30%] right-[68%] w-[160px] h-[160px] rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden z-30 pointer-events-auto">
              <img
                src={productImg2}
                className="w-full h-full object-cover scale-110"
                alt="P2"
              />
            </div>
            <div className="absolute bottom-[15%] right-[63%] w-[140px] h-[140px] rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden z-30 pointer-events-auto">
              <img
                src={productImg3}
                className="w-full h-full object-cover"
                alt="P3"
              />
            </div>
          </div>
        </div>

        {/* --- FOOTER DESKTOP (CONTACT BAR) --- */}
        <div className="absolute bottom-0 left-0 w-full bg-white h-[70px] z-40 flex items-center justify-center border-t border-red-50">
          <div className="flex items-center gap-[20px] xl:gap-[40px] px-4 w-full max-w-[1440px] justify-center">
            {/* 1. ĐỊA CHỈ */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[25px] h-[25px] bg-[#FF0000] rounded-[15px] flex items-center justify-center shrink-0">
                <MapPin size={14} className="text-white" />
              </div>
              <span className="font-inter font-normal text-[15px] xl:text-[20px] text-black whitespace-nowrap">
                236/59 Điện Biên Phủ. Phường 17. Q. Bình Thạnh. TP.HCM
              </span>
            </div>

            {/* 2. EMAIL */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[25px] h-[25px] bg-[#FF0000] rounded-[15px] flex items-center justify-center shrink-0">
                <Mail size={14} className="text-white" />
              </div>
              <span className="font-inter font-normal text-[15px] xl:text-[20px] text-black whitespace-nowrap">
                info@promacprinting.com
              </span>
            </div>

            {/* 3. ĐIỆN THOẠI */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[25px] h-[25px] bg-[#FF0000] rounded-[15px] flex items-center justify-center shrink-0">
                <Phone size={14} className="text-white" />
              </div>
              <div className="flex items-center gap-[10px] xl:gap-[16px] font-inter font-normal text-[15px] xl:text-[20px] text-black whitespace-nowrap">
                <span>(028) 22272416</span>
                <div className="w-[1px] h-[20px] bg-black/50"></div>
                <span>0906838869</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
