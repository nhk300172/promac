import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";
import mainVisual from "../../assets/main-visual.jpg";

// --- ẢNH GIẢ LẬP ---
const productImg1 = mainVisual;
const productImg2 = mainVisual;
const productImg3 = mainVisual;

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
    address: "236/59 Điện Biên Phủ, Phường 17, Q. Bình Thạnh, TP.HCM",
    email: "info@promacprinting.com",
    phones: ["(028) 22272416", "0906838869"],
  },
};

export const HomeBanner = () => {
  return (
    <div className="w-full flex justify-center bg-white my-10 px-4 xl:px-0">
      {/* =========================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Layout dọc (Flex Column)
         ========================================================================= */}
      <div className="flex lg:hidden flex-col w-full bg-[#FFDEDE] rounded-[20px] overflow-hidden shadow-lg relative pb-6">
        {/* --- Phần Header & Hình ảnh Mobile --- */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500 rounded-full opacity-10 z-0 pointer-events-none"></div>

        <div className="flex flex-col items-center pt-8 px-6 z-10 relative">
          <h1 className="font-bold text-[28px] leading-tight text-[#FF0000] text-center mb-6">
            {DATA.header}
          </h1>

          {/* Cụm ảnh Mobile (Xếp chồng đơn giản hơn Desktop) */}
          <div className="relative w-[280px] h-[280px] mb-6">
            {/* Hình tròn trung tâm */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] rounded-full border-4 border-white shadow-md overflow-hidden z-20">
              <img
                src={mainVisual}
                className="w-full h-full object-cover"
                alt="Main"
              />
            </div>
            {/* Hình nhỏ trái */}
            <div className="absolute bottom-[20px] left-0 w-[100px] h-[100px] rounded-full border-4 border-white shadow-md overflow-hidden z-10">
              <img
                src={productImg1}
                className="w-full h-full object-cover"
                alt="P1"
              />
            </div>
            {/* Hình nhỏ phải */}
            <div className="absolute bottom-[20px] right-0 w-[100px] h-[100px] rounded-full border-4 border-white shadow-md overflow-hidden z-10">
              <img
                src={productImg2}
                className="w-full h-full object-cover"
                alt="P2"
              />
            </div>
          </div>

          {/* Box trắng subtitle */}
          <div className="bg-white rounded-[20px] px-4 py-3 shadow-sm w-full mb-6">
            <p className="font-bold text-[14px] text-center text-black leading-snug">
              {DATA.subHeaderBox}
            </p>
          </div>

          {/* Checklist Mobile */}
          <div className="flex flex-col gap-3 w-full pl-2 mb-6">
            {DATA.features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <Check className="text-[#0066CC] w-4 h-4" />
                </div>
                <span className="text-[15px] font-semibold text-gray-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons Mobile */}
          <button className="w-full py-3 bg-[#FF0000] text-white font-bold rounded-full shadow-lg mb-4">
            Yêu cầu báo giá
          </button>
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-[#FF0000] font-bold text-[15px] hover:underline"
          >
            Xem danh mục sản phẩm <ArrowRight size={18} />
          </a>
        </div>

        {/* Footer Mobile (Thông tin liên hệ) */}
        <div className="mt-6 mx-4 bg-white rounded-[15px] p-4 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="text-[#FF0000] w-5 h-5 shrink-0 mt-1" />
            <span className="text-[13px] text-gray-600">
              {DATA.contact.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-[#FF0000] w-5 h-5 shrink-0" />
            <span className="text-[13px] text-gray-600 break-all">
              {DATA.contact.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-[#FF0000] w-5 h-5 shrink-0" />
            <div className="text-[13px] text-gray-600">
              <span>{DATA.contact.phones[0]}</span> |{" "}
              <span>{DATA.contact.phones[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VERSION (>= 1024px)
          - Giữ nguyên code desktop hiện tại của bạn
          - Chỉ hiện khi màn hình lớn (hidden lg:flex)
         ========================================================================= */}
      <div className="hidden lg:flex w-full bg-[#FFDEDE] rounded-[30px] relative overflow-hidden shadow-lg flex-col min-h-[600px] m-8">
        {/* --- PHẦN BODY --- */}
        <div className="flex w-full h-full flex-grow relative z-10">
          {/* CỘT TRÁI: TEXT CONTENT */}
          <div className="w-[60%] pt-[40px] pl-[30px] lg:pl-[50px] xl:pl-[80px] flex flex-col justify-start gap-6 z-20">
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

            <div className="flex items-center gap-6 pl-12 mb-5 pb-5 md:pb-0">
              <button className="px-6 py-3 bg-[#FF0000] text-white text-[16px] lg:text-[18px] font-bold rounded-full shadow-[0px_4px_15px_rgba(255,0,0,0.4)] hover:scale-105 transition-transform">
                Yêu cầu báo giá
              </button>
              <a
                href="#"
                className="flex items-center gap-2 text-[#FF0000] font-bold text-[16px] lg:text-[18px] hover:underline group"
              >
                Xem danh mục sản phẩm
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* CỘT PHẢI: HÌNH ẢNH & BUBBLES */}
          <div className="absolute top-0 right-0 w-[50%] h-full z-10 pointer-events-none">
            {/* HÌNH TRÒN LỚN */}
            <div className="absolute top-2/3 right-[-300px] transform -translate-y-[60%] w-[850px] h-[850px] rounded-full border-[10px] border-[#FF0000] overflow-hidden shadow-2xl">
              <div className="w-full h-full relative">
                <img
                  src={mainVisual}
                  alt="Factory"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 opacity-40 mix-blend-multiply"></div>
              </div>
            </div>

            {/* 3 HÌNH TRÒN NHỎ */}
            <div className="absolute top-[4%] right-[63%] w-[140px] h-[140px] rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden z-30 pointer-events-auto">
              <img
                src={productImg1}
                className="w-full h-full object-cover"
                alt="P1"
              />
            </div>
            <div className="absolute top-[35%] right-[68%] w-[160px] h-[160px] rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden z-30 pointer-events-auto">
              <img
                src={productImg2}
                className="w-full h-full object-cover scale-110"
                alt="P2"
              />
            </div>
            <div className="absolute bottom-[4%] right-[63%] w-[140px] h-[140px] rounded-full border-[6px] border-white bg-white shadow-lg overflow-hidden z-30 pointer-events-auto">
              <img
                src={productImg3}
                className="w-full h-full object-cover"
                alt="P3"
              />
            </div>
          </div>
        </div>

        {/* FOOTER DESKTOP */}
        <div className="bg-white w-full h-[80px] flex items-center justify-between px-[60px] relative z-40 border-t border-red-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
              <MapPin size={16} />
            </div>
            <span className="text-gray-600 font-medium text-[15px]">
              {DATA.contact.address}
            </span>
          </div>
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
  );
};
