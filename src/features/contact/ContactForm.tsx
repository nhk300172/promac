import React, { useState, useRef, useEffect } from "react";
// Import Icons từ Lucide
import { ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";

// --- IMPORT ẢNH TỪ ASSETS/CONTACT ---
// Lưu ý: Đường dẫn "../assets" giả định file này nằm trong thư mục con (vd: src/components).
// Nếu file này nằm ngay tại src, hãy đổi thành "./assets"
import imgPhone from "../../assets/contact/contact-phone.png";
import imgGmail from "../../assets/contact/contact-gmail.png";
import imgMap from "../../assets/contact/contact-mappointer.png";
import imgClock from "../../assets/contact/contact-clock.png";

// --- Dữ liệu Dropdown ---
const SERVICE_OPTIONS = [
  { id: "all", label: "Tất cả", type: "highlight" },
  { id: "print", label: "In ấn", type: "red-text" },
  { id: "promo", label: "Chương trình khuyến mãi", type: "normal" },
  { id: "paper", label: "Bìa và giấy in", type: "normal" },
  { id: "event", label: "Vật dụng sự kiện", type: "normal" },
  { id: "voucher", label: "Voucher", type: "normal" },
  { id: "scratch", label: "Thẻ cào", type: "normal" },
  { id: "box", label: "Hộp cứng", type: "normal" },
  { id: "bag", label: "Túi giấy", type: "normal" },
];

export const ContactForm: React.FC = () => {
  // State chung cho cả Mobile & Desktop
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleSelect = (label: string) => {
    setSelectedService(label);
    setIsOpen(false);
  };

  return (
    <section className="relative flex flex-col items-center bg-white z-10 w-full mt-[40px] lg:mt-[80px]">
      {/* Inject Style Scrollbar */}
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
        <p className="mt-[12px] font-inter font-medium lg:font-semibold text-black text-[16px] lg:text-[20px] leading-[24px] max-w-[600px] lg:max-w-none">
          Liên hệ ngay để bắt đầu dự án in ấn của bạn — nhận báo giá & tư vấn
          miễn phí từ đội ngũ PROMAC.
        </p>
      </div>

      {/* =================================================================
          1. MOBILE VERSION (< 1024px)
          ================================================================= */}
      <div className="flex flex-col gap-[40px] w-full items-center lg:hidden pb-[60px]">
        {/* KHỐI 1: FORM */}
        <div className="bg-white rounded-[20px] shadow-[0px_8px_25px_rgba(0,0,0,0.25)] p-[24px] w-[375px] max-w-full">
          <h3 className="font-inter font-bold text-[20px] mb-[36px] text-black">
            Gửi tin nhắn cho chúng tôi
          </h3>

          <form className="flex flex-col gap-[24px]">
            {/* Họ tên */}
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
            {/* Email */}
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
            {/* SĐT */}
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
            {/* Dịch vụ (Dropdown) */}
            <div className="flex flex-col gap-[8px] relative" ref={dropdownRef}>
              <label className="font-bold text-[#364153] text-[15px]">
                Dịch vụ cần hỗ trợ
              </label>
              <div
                className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[14px] flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`text-[15px] ${
                    selectedService ? "text-[#364153]" : "text-[#707081]"
                  }`}
                >
                  {selectedService || "Chọn một dịch vụ"}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {/* Mobile Dropdown List */}
              {isOpen && (
                <div className="absolute top-[65px] left-0 w-full bg-white border border-[#BDBDBD] rounded-[5px] max-h-[200px] overflow-y-auto z-50 custom-scrollbar p-1 shadow-lg">
                  {SERVICE_OPTIONS.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => handleSelect(opt.label)}
                      className="p-2 text-[14px] hover:bg-gray-100 cursor-pointer"
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Textarea */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-bold text-[#364153] text-[15px]">
                Mô tả chi tiết dự án
              </label>
              <textarea
                placeholder="Vd: Thẻ cào trúng thưởng - 5.000 thẻ..."
                className="w-full h-[144px] bg-[#F3F3F5] rounded-[10px] p-[14px] text-[15px] outline-none resize-none placeholder-[#707081]"
              />
            </div>
            {/* Button Gửi */}
            <button
              type="button"
              className="self-center w-[132px] h-[45px] bg-[#FF0000] rounded-[10px] text-white font-bold text-[16px] shadow-sm active:scale-95 transition-transform"
            >
              Gửi
            </button>
          </form>
        </div>

        {/* KHỐI 2: INFO */}
        <div className="bg-white rounded-[20px] shadow-[0px_8px_25px_rgba(0,0,0,0.25)] p-[24px] w-[375px] max-w-full flex flex-col gap-[36px]">
          <h3 className="font-inter font-bold text-[20px] text-black">
            Thông tin liên hệ
          </h3>

          <div className="flex flex-col gap-[24px]">
            {/* Phone */}
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
            {/* Email */}
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
            {/* Address */}
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
            {/* Clock */}
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

          {/* Action Buttons */}
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
          2. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div
        className="hidden lg:flex justify-center gap-[80px] w-full"
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

          <form className="w-full flex flex-col gap-[28px]">
            {/* Họ tên */}
            <div className="flex flex-col gap-[8px]">
              <label
                htmlFor="fullName"
                className="font-bold text-[#364153] text-[16px]"
              >
                Họ và tên
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Nguyễn Văn An"
                className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 placeholder-[#707081]"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex gap-[36px]">
              <div className="flex flex-col gap-[8px] w-[245px]">
                <label
                  htmlFor="email"
                  className="font-bold text-[#364153] text-[16px]"
                >
                  Địa chỉ email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@gmail.com"
                  className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 placeholder-[#707081]"
                />
              </div>
              <div className="flex flex-col gap-[8px] w-[239px]">
                <label
                  htmlFor="phone"
                  className="font-bold text-[#364153] text-[16px]"
                >
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="09876543210"
                  className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 placeholder-[#707081]"
                />
              </div>
            </div>

            {/* Dropdown Desktop */}
            <div className="flex flex-col gap-[8px] relative z-50">
              <label className="font-bold text-[#364153] text-[16px]">
                Dịch vụ cần hỗ trợ
              </label>
              <div
                className="w-full h-[35px] bg-[#F3F3F5] rounded-[10px] px-[20px] flex items-center justify-between cursor-pointer border border-transparent focus:border-red-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`text-[14px] ${
                    selectedService ? "text-[#364153]" : "text-[#707081]"
                  }`}
                >
                  {selectedService || "Chọn một dịch vụ"}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isOpen && (
                <div
                  className="absolute top-[68px] left-0 w-full custom-scrollbar"
                  style={{
                    height: "276px",
                    background: "#FFFFFF",
                    border: "0.5px solid #BDBDBD",
                    borderRadius: "5px",
                    padding: "5px",
                    overflowY: "auto",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="flex flex-col w-full">
                    {SERVICE_OPTIONS.map((option) => (
                      <div
                        key={option.id}
                        onClick={() => handleSelect(option.label)}
                        className="cursor-pointer flex items-center px-[10px] mb-1 last:mb-0 hover:bg-gray-100"
                        style={{
                          height: "37px",
                          width: "100%",
                          borderRadius:
                            option.type === "highlight" ? "3px" : "0px",
                          background:
                            option.type === "highlight"
                              ? "#FF9E9E"
                              : "transparent",
                          color:
                            option.type === "red-text" ? "#FF383C" : "#333333",
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontWeight: option.type === "highlight" ? 500 : 400,
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mô tả */}
            <div className="flex flex-col gap-[8px]">
              <label
                htmlFor="message"
                className="font-bold text-[#364153] text-[16px]"
              >
                Mô tả chi tiết dự án
              </label>
              <textarea
                id="message"
                placeholder="Vd: Thẻ cào trúng thưởng - 5.000 thẻ..."
                className="w-full h-[87px] bg-[#F3F3F5] rounded-[10px] p-[20px] text-[14px] outline-none focus:ring-1 focus:ring-red-500 resize-none placeholder-[#707081]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="mt-[10px] w-full h-[40px] bg-[#FF0000] rounded-[10px] text-white font-bold text-[20px] hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
            >
              Gửi
            </button>
          </form>
        </div>

        {/* === CỘT PHẢI: THÔNG TIN (Sử dụng ảnh đã Import) === */}
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
            {/* Phone */}
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
            {/* Email */}
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
            {/* Address */}
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
            {/* Clock */}
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

          {/* Buttons */}
          <div className="absolute bottom-[40px] left-0 w-full px-[30px] flex flex-col gap-[15px]">
            <a
              href="tel:0906838869"
              className="w-full h-[36px] bg-[#FF0000] rounded-[10px] flex items-center justify-center gap-[10px] text-white font-medium text-[16px] hover:bg-red-700 transition-colors"
            >
              {/* Thay ảnh lỗi bằng Icon Phone từ Lucide */}
              <Phone size={18} color="white" fill="white" />
              Gọi ngay
            </a>
            <a
              href="mailto:info@promacprinting.com"
              className="w-full h-[36px] bg-[#00C851] rounded-[10px] flex items-center justify-center gap-[10px] text-black font-medium text-[16px] hover:bg-green-500 transition-colors"
            >
              {/* Thay ảnh lỗi bằng Icon Mail từ Lucide */}
              <Mail size={18} color="black" />
              Gửi email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
