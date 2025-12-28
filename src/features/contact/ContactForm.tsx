// src/features/contact/ContactForm.tsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";

import imgPhone from "../../assets/contact/contact-phone.png";
import imgGmail from "../../assets/contact/contact-gmail.png";
import imgMap from "../../assets/contact/contact-mappointer.png";
import imgClock from "../../assets/contact/contact-clock.png";

// --- DỮ LIỆU DROPDOWN ---
const SERVICE_OPTIONS = [
  { id: "all", label: "Tất cả", type: "normal" },
  { id: "hard-box", label: "In hộp cứng cao cấp", type: "normal" },
  { id: "voucher", label: "In Voucher", type: "normal" },
  { id: "marketing", label: "In ấn phẩm marketing", type: "normal" },
  { id: "decal", label: "In tem nhãn decal", type: "normal" },
  { id: "variable-scratch", label: "In thẻ cào biến đổi", type: "normal" },
  {
    id: "activation-scratch",
    label: "In thẻ cào kích hoạt dịch vụ",
    type: "normal",
  },
  { id: "winning-scratch", label: "In thẻ cào trúng thưởng", type: "normal" },
  { id: "matching-scratch", label: "In thẻ cào ráp chữ", type: "normal" },
];

// --- COMPONENT CON: ContactServiceDropdown (Định nghĩa nội bộ) ---
interface ContactServiceDropdownProps {
  selected: string;
  onSelect: (val: string) => void;
}

const ContactServiceDropdown: React.FC<ContactServiceDropdownProps> = ({
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Xử lý click ra ngoài để đóng dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="w-full h-[35px] md:h-[45px] bg-[#F3F3F5] rounded-[10px] px-[14px] md:px-[20px] flex items-center justify-between cursor-pointer border border-transparent focus:border-red-500 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-[14px] md:text-[15px] truncate ${
            selected ? "text-[#364153]" : "text-[#707081]"
          }`}
        >
          {selected || "Chọn một dịch vụ"}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#707081] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-[110%] left-0 w-full bg-white border border-[#BDBDBD] rounded-[5px] max-h-[200px] overflow-y-auto z-50 custom-scrollbar p-1 shadow-lg animate-in fade-in zoom-in-95 duration-100">
          {SERVICE_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              onClick={() => {
                onSelect(opt.label);
                setIsOpen(false);
              }}
              // CSS: Hover vào hiện nền hồng và chữ đậm lên
              className="p-2 text-[14px] text-[#333333] font-normal cursor-pointer rounded-[3px] mb-1 last:mb-0 transition-all hover:bg-[#FF9E9E] hover:font-medium hover:text-black"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- COMPONENT CHÍNH: ContactForm ---
export const ContactForm: React.FC = () => {
  // State quản lý giá trị đã chọn cho từng phiên bản màn hình
  const [selectedServiceMobile, setSelectedServiceMobile] = useState("");
  const [selectedServiceTablet, setSelectedServiceTablet] = useState("");
  const [selectedServiceDesktop, setSelectedServiceDesktop] = useState("");

  return (
    <section className="relative flex flex-col items-center bg-white z-10 w-full mt-[40px] lg:mt-[80px]">
      {/* Style Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #828282; border-radius: 100px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      {/* HEADER chung */}
      <div className="text-center mb-[40px] lg:mb-[80px] px-4">
        <h2 className="font-manrope font-bold text-[#0E0E0E] text-[28px] lg:text-[56px] leading-[140%]">
          Liên hệ với chúng tôi
        </h2>
        <p className="mt-[12px] font-inter font-medium lg:font-semibold text-black text-[16px] lg:text-[20px] leading-[24px] max-w-[600px] lg:max-w-none mx-auto">
          Liên hệ ngay để bắt đầu dự án in ấn của bạn — nhận báo giá & tư vấn
          miễn phí từ đội ngũ PROMAC.
        </p>
      </div>

      {/* =================================================================
          1. MOBILE VERSION (< 768px)
          ================================================================= */}
      <div className="flex flex-col gap-[40px] w-full items-center md:hidden pb-[60px]">
        {/* KHỐI 1: FORM */}
        <div className="bg-white rounded-[20px] shadow-[0px_8px_25px_rgba(0,0,0,0.25)] p-[24px] w-[375px] max-w-full">
          <h3 className="font-inter font-bold text-[20px] mb-[36px] text-black">
            Gửi tin nhắn cho chúng tôi
          </h3>

          <form className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[15px]">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn An"
                className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[14px] text-[15px] outline-none placeholder-[#707081]"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[15px]">
                Địa chỉ email
              </label>
              <input
                type="email"
                placeholder="your@gmail.com"
                className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[14px] text-[15px] outline-none placeholder-[#707081]"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[15px]">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="09876543210"
                className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[14px] text-[15px] outline-none placeholder-[#707081]"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[15px]">
                Dịch vụ cần hỗ trợ
              </label>

              {/* SỬ DỤNG ContactServiceDropdown */}
              <ContactServiceDropdown
                selected={selectedServiceMobile}
                onSelect={setSelectedServiceMobile}
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[15px]">
                Mô tả chi tiết dự án
              </label>
              <textarea
                placeholder="Vd: Thẻ cào trúng thưởng - 5.000 thẻ..."
                className="w-full h-[144px] bg-[#F3F3F5] rounded-[10px] p-[14px] text-[15px] outline-none resize-none placeholder-[#707081]"
              />
            </div>
            <button
              type="button"
              className="self-center w-[132px] h-[45px] bg-[#FF0000] rounded-[10px] text-white font-bold text-[16px] shadow-sm active:scale-95 transition-transform"
            >
              Gửi
            </button>
          </form>
        </div>

        {/* KHỐI 2: INFO MOBILE */}
        <div className="bg-white rounded-[20px] shadow-[0px_8px_25px_rgba(0,0,0,0.25)] p-[24px] w-[375px] max-w-full flex flex-col gap-[36px]">
          <h3 className="font-inter font-bold text-[20px] text-black">
            Thông tin liên hệ
          </h3>
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[15px]">
              <div className="w-[26px] h-[26px] bg-gray-200 rounded flex items-center justify-center">
                <Phone size={16} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <span className="font-bold text-[16px]">Số điện thoại</span>
                <a
                  href="tel:02822272416"
                  className="text-[15px] text-[#4A5464] underline"
                >
                  (028) 22272416
                </a>
                <a
                  href="tel:0906838869"
                  className="text-[15px] text-[#4A5464] underline"
                >
                  0906838869
                </a>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="w-[28px] h-[28px] bg-gray-200 rounded flex items-center justify-center">
                <Mail size={16} />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-bold text-[16px]">Địa chỉ email</span>
                <a
                  href="mailto:info@promacprinting.com"
                  className="text-[15px] text-[#4A5464]"
                >
                  info@promacprinting.com
                </a>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="w-[28px] h-[32px] bg-gray-200 rounded flex items-center justify-center">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-bold text-[16px]">Địa chỉ văn phòng</span>
                <p className="text-[15px] text-[#4A5464] leading-[18px]">
                  (028) 236/59 Điện Biên Phủ, Phường 17, Quận Bình Thạnh, TP.HCM
                </p>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="w-[27px] h-[27px] bg-gray-200 rounded flex items-center justify-center">
                <Clock size={16} />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-bold text-[16px]">Giờ làm việc</span>
                <p className="text-[15px] text-[#4A5464]">
                  Thứ 2 - Thứ 7 (8:00 - 17:30)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] mt-[18px] items-start ml-[80px]">
            <button className="flex items-center justify-center gap-[8px] w-[155px] h-[45px] bg-[#FF0000] rounded-[10px] text-white font-semibold text-[16px]">
              <Phone size={18} fill="white" /> Gửi ngay
            </button>
            <button className="flex items-center justify-center gap-[8px] w-[155px] h-[45px] bg-[#00C851] rounded-[10px] text-white font-semibold text-[16px]">
              <Mail size={18} fill="white" /> Gửi email
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1279px)
          ================================================================= */}
      <div className="hidden md:flex xl:hidden w-full max-w-[1000px] flex-col md:flex-row items-center justify-center gap-[30px] lg:gap-[50px] px-[20px] pb-[80px]">
        {/* FORM */}
        <div className="bg-white rounded-[20px] shadow-[0px_8px_25px_rgba(0,0,0,0.25)] p-[30px] w-full flex-1">
          <h3 className="font-bold text-black mb-[20px] text-[24px]">
            Gửi tin nhắn cho chúng tôi
          </h3>
          <p className="mb-[20px] text-[#FF0000] text-[14px]">
            Vui lòng điền đầy đủ thông tin vào các ô dưới đây
          </p>
          <form className="w-full flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn An"
                className="w-full h-[45px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Email
              </label>
              <input
                type="email"
                placeholder="your@gmail.com"
                className="w-full h-[45px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="098..."
                className="w-full h-[45px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Dịch vụ cần hỗ trợ
              </label>

              {/* SỬ DỤNG ContactServiceDropdown */}
              <ContactServiceDropdown
                selected={selectedServiceTablet}
                onSelect={setSelectedServiceTablet}
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Mô tả
              </label>
              <textarea
                placeholder="..."
                className="w-full h-[100px] bg-[#F3F3F5] rounded-[10px] p-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full h-[50px] bg-[#FF0000] rounded-[10px] text-white font-bold text-[18px] hover:bg-red-700 transition-colors shadow-lg"
            >
              Gửi
            </button>
          </form>
        </div>

        {/* INFO TABLET */}
        <div className="bg-white flex flex-col px-[30px] py-[40px] rounded-[20px] shadow-[0px_8px_25px_rgba(0,0,0,0.25)] w-full flex-1 h-fit">
          <h3 className="font-bold text-black text-center mb-[30px] text-[24px]">
            Thông tin liên hệ
          </h3>
          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[15px] items-start">
              <img
                src={imgPhone}
                className="w-[30px] h-[30px] object-contain"
                alt="phone"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[16px]">Hotline</span>
                <span className="text-[14px] text-[#4A5464]">0906838869</span>
              </div>
            </div>
            <div className="flex gap-[15px] items-start">
              <img
                src={imgGmail}
                className="w-[30px] h-[30px] object-contain"
                alt="mail"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[16px]">Email</span>
                <span className="text-[14px] text-[#4A5464]">
                  info@promacprinting.com
                </span>
              </div>
            </div>
            <div className="flex gap-[15px] items-start">
              <img
                src={imgMap}
                className="w-[30px] h-[30px] object-contain"
                alt="map"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[16px]">Địa chỉ</span>
                <span className="text-[14px] text-[#4A5464]">
                  236/59 Điện Biên Phủ, P.17, Bình Thạnh
                </span>
              </div>
            </div>
            <div className="flex gap-[15px] items-start">
              <img
                src={imgClock}
                className="w-[30px] h-[30px] object-contain"
                alt="clock"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[16px]">Giờ làm việc</span>
                <span className="text-[14px] text-[#4A5464]">
                  T2 - T7 (8:00 - 17:30)
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[40px] flex flex-col gap-[15px]">
            <a
              href="tel:0906838869"
              className="w-full h-[45px] bg-[#FF0000] rounded-[10px] flex items-center justify-center gap-[10px] text-white font-medium hover:bg-red-700 transition-colors"
            >
              <Phone size={18} /> Gọi ngay
            </a>
            <a
              href="mailto:info@promacprinting.com"
              className="w-full h-[45px] bg-[#00C851] rounded-[10px] flex items-center justify-center gap-[10px] text-black font-medium hover:bg-green-500 transition-colors"
            >
              <Mail size={18} /> Gửi email
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================
          3. DESKTOP VERSION (>= 1280px)
          ================================================================= */}
      <div
        className="hidden xl:flex justify-center gap-[80px] w-full"
        style={{ width: "1439px", height: "auto" }}
      >
        {/* === CỘT TRÁI: FORM === */}
        <div
          className="bg-white flex flex-col items-center pt-[33px] px-[38px] pb-[40px]"
          style={{
            width: "590px",
            height: "634px",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h3
            className="font-bold text-black mb-[25px] w-full text-left"
            style={{
              fontFamily: "Inter",
              fontSize: "30px",
              lineHeight: "36px",
            }}
          >
            Gửi tin nhắn cho chúng tôi
          </h3>
          <p
            className="mb-[25px] w-full text-left text-[#FF0000]"
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            Vui lòng điền đầy đủ thông tin vào các ô dưới đây để gửi yêu cầu đến
            chúng tôi
          </p>
          <form className="w-full flex flex-col gap-[20px]">
            {/* Input Fields */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn An"
                className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 placeholder-[#707081]"
              />
            </div>
            <div className="flex gap-[36px]">
              <div className="flex flex-col gap-[8px] w-[245px]">
                <label className="font-bold text-[#364153] text-[16px]">
                  Địa chỉ email
                </label>
                <input
                  type="email"
                  placeholder="your@gmail.com"
                  className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 placeholder-[#707081]"
                />
              </div>
              <div className="flex flex-col gap-[8px] w-[239px]">
                <label className="font-bold text-[#364153] text-[16px]">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  placeholder="09876543210"
                  className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 placeholder-[#707081]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Dịch vụ cần hỗ trợ
              </label>

              {/* SỬ DỤNG ContactServiceDropdown */}
              <ContactServiceDropdown
                selected={selectedServiceDesktop}
                onSelect={setSelectedServiceDesktop}
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[16px]">
                Mô tả chi tiết dự án
              </label>
              <textarea
                placeholder="Vd: Thẻ cào trúng thưởng - 5.000 thẻ..."
                className="w-full h-[87px] bg-[#F3F3F5] rounded-[10px] p-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 resize-none placeholder-[#707081]"
              />
            </div>
            <button
              type="button"
              className="mt-[10px] w-full h-[40.1px] bg-[#FF0000] rounded-[10px] text-white font-bold text-[20px] hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
            >
              Gửi
            </button>
          </form>
        </div>

        {/* === CỘT PHẢI: THÔNG TIN === */}
        <div
          className="bg-white flex flex-col px-[30px] pt-[28px] relative"
          style={{
            width: "590px",
            height: "634px",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h3
            className="font-bold text-black text-center mb-[40px] ml-[-270px]"
            style={{
              fontFamily: "Inter",
              fontSize: "30px",
              lineHeight: "36px",
            }}
          >
            Thông tin liên hệ
          </h3>
          <div className="flex flex-col gap-[30px] pl-[18px]">
            {/* Item 1 */}
            <div className="flex gap-[20px] items-start">
              <div className="w-[26px] h-[26px] flex items-center justify-center mt-1">
                <img
                  src={imgPhone}
                  alt="phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="font-bold text-[16px]">Số điện thoại</span>
                <div className="flex flex-col text-[14px] text-[#4A5464] underline">
                  <a href="tel:02822272416">(028) 22272416</a>
                  <a href="tel:0906838869">0906838869</a>
                </div>
              </div>
            </div>
            {/* Các item khác tương tự... */}
            <div className="flex gap-[20px] items-start">
              <div className="w-[28px] h-[28px] flex items-center justify-center mt-1">
                <img
                  src={imgGmail}
                  alt="email"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="font-bold text-[16px]">Địa chỉ email</span>
                <a
                  href="mailto:info@promacprinting.com"
                  className="text-[14px] text-[#4A5464]"
                >
                  info@promacprinting.com
                </a>
              </div>
            </div>
            <div className="flex gap-[20px] items-start">
              <div className="w-[32px] h-[32px] flex items-center justify-center mt-1">
                <img
                  src={imgMap}
                  alt="address"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="font-bold text-[16px]">Địa chỉ văn phòng</span>
                <p className="text-[12px] text-[#4A5464] leading-[18px] w-[442px]">
                  (028) 236/59 Điện Biên Phủ, Phường 17, Quận Bình Thạnh, Thành
                  phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>
            <div className="flex gap-[20px] items-start">
              <div className="w-[32px] h-[32px] flex items-center justify-center mt-1">
                <img
                  src={imgClock}
                  alt="clock"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="font-bold text-[16px]">Giờ làm việc</span>
                <p className="text-[12px] text-[#4A5464]">
                  Thứ 2 - Thứ 7 (8:00 - 17:30)
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[40px] left-0 w-full px-[30px] flex flex-col gap-[15px]">
            <a
              href="tel:0906838869"
              className="w-full h-[36px] bg-[#FF0000] rounded-[10px] flex items-center justify-center gap-[10px] text-white font-medium text-[16px] hover:bg-red-700 transition-colors"
            >
              <Phone size={18} color="white" fill="white" /> Gọi ngay
            </a>
            <a
              href="mailto:info@promacprinting.com"
              className="w-full h-[36px] bg-[#00C851] rounded-[10px] flex items-center justify-center gap-[10px] text-black font-medium text-[16px] hover:bg-green-500 transition-colors"
            >
              <Mail size={18} color="black" /> Gửi email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
