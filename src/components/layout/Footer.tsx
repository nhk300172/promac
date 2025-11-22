import { useState, useRef } from "react";
// Đã xóa MapPin khỏi import
// import { MapPin } from "lucide-react"; // Nếu cần thì uncomment

// --- IMPORT HÌNH ẢNH (Giữ nguyên như cũ) ---
import footer1 from "../../assets/footer/footer1.jpg";
import footer2 from "../../assets/footer/footer2.jpg";
import footer3 from "../../assets/footer/footer3.jpg";
import footer4 from "../../assets/footer/footer4.png";
import telephoneIcon from "../../assets/footer/telephoneicon.png";
import twitterIcon from "../../assets/footer/twittericon.png";
import instagramIcon from "../../assets/footer/instagramicon.png";
import facebookIcon from "../../assets/footer/facebookicon.png";
import zaloIcon from "../../assets/footer/zaloicon.jpg";
import mapImage from "../../assets/footer/map.jpg";

// --- DATA ---
const BASE_IMAGES = [footer1, footer2, footer3, footer4];
const DISPLAY_IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];

const FOOTER_LINKS = [
  {
    title: "Về Promac",
    items: ["Câu chuyện và tầm nhìn", "Năng lực in ấn", "Khách hàng & đối tác"],
  },
  {
    title: "Dịch vụ cốt lõi",
    items: [
      "In hộp cứng cao cấp",
      "In thẻ cào & Voucher",
      "In ấn phẩm marketing",
      "Danh mục sản phẩm",
    ],
  },
  {
    title: "Chính sách & Pháp lý",
    items: ["Chính sách bảo mật", "Quy trình làm việc", "Chính sách dịch vụ"],
  },
  {
    title: "Tin tức",
    items: [
      "Blog",
      "Dự án thực hiện",
      "Chương trình khuyến mãi",
      "Sản phẩm bán kèm",
    ],
  },
];

const ITEM_WIDTH = 490 + 24;
const SET_WIDTH = ITEM_WIDTH * BASE_IMAGES.length;

export const Footer = () => {
  // --- LOGIC KÉO THẢ VÔ TẬN ---
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const [currentTranslate, setCurrentTranslate] = useState(-SET_WIDTH);
  const [prevTranslate, setPrevTranslate] = useState(-SET_WIDTH);

  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);

  const checkBoundary = () => {
    setCurrentTranslate((prev) => {
      if (prev > 0) return prev - SET_WIDTH;
      if (prev < -2 * SET_WIDTH) return prev + SET_WIDTH;
      return prev;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX);
    setPrevTranslate(currentTranslate);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  const handleMouseUpOrLeave = () => {
    setIsDown(false);
    checkBoundary();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.2;
    setCurrentTranslate(prevTranslate + walk);
  };

  return (
    // Thêm !overflow-hidden vào thẻ cha để chắc chắn cắt scroll
    <footer className="w-full flex flex-col items-center font-sans text-promac-black bg-white !overflow-hidden">
      {/* === SECTION 1: CTA & BANNER === */}
      <div className="w-full pt-[31px] pb-20 flex flex-col items-center relative z-10 bg-white !overflow-hidden">
        <div className="flex flex-col items-center gap-2 mb-9 px-4">
          <h2 className="text-[40px] md:text-[56px] font-normal leading-tight md:leading-[115px] tracking-[-2px] md:tracking-[-5px] text-center text-black">
            Hãy liên hệ với chúng tôi để được hỗ trợ
          </h2>
          <p className="text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[31px] text-center text-black/65 max-w-[683px]">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[20px] md:gap-[36px] mb-[60px] z-20">
          <button
            className="group w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300"
            style={{ boxShadow: "none" }}
          >
            <span className="group-hover:drop-shadow-md">Yêu cầu Báo giá</span>
          </button>
          <button className="w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300">
            Liên hệ
          </button>
        </div>

        {/* KHUNG SLIDER: Thêm style overflow hidden cứng để fix lỗi scroll */}
        <div
          className={`w-full relative h-[360px] !overflow-hidden select-none ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ overflow: "hidden" }} // Force hidden bằng inline style
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseUp={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
        >
          <div
            className="absolute top-0 left-0 h-full flex flex-col justify-between"
            style={{
              transform: `translateX(${currentTranslate}px)`,
              width: `${ITEM_WIDTH * DISPLAY_IMAGES.length}px`,
            }}
          >
            <div className="flex gap-[24px] pl-[calc(50vw-245px)]">
              {DISPLAY_IMAGES.map((imgSrc, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="w-[490px] h-[158px] bg-gray-200 bg-cover bg-center shrink-0 pointer-events-none"
                  style={{
                    borderRadius: "512px",
                    backgroundImage: `url(${imgSrc})`,
                  }}
                />
              ))}
            </div>
            <div className="flex gap-[24px] pl-[calc(50vw-245px)] ml-[245px]">
              {DISPLAY_IMAGES.map((imgSrc, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="w-[490px] h-[158px] bg-gray-200 bg-cover bg-center shrink-0 pointer-events-none"
                  style={{
                    borderRadius: "512px",
                    backgroundImage: `url(${imgSrc})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === SECTION 2: BOTTOM FOOTER === */}
      <div className="w-full bg-[#FFF8F9] rounded-t-[30px] pt-[64px] pb-[80px] z-20 relative flex flex-col items-center">
        {/* Links Area */}
        <div className="w-full max-w-[1277px] grid grid-cols-2 md:grid-cols-4 gap-[75px] mb-[54px] px-4 md:px-0">
          {FOOTER_LINKS.map((section, index) => (
            <div key={index} className="flex flex-col gap-[18px] items-start">
              {/* Title + line */}
              <div className="flex flex-col items-center gap-[20px] w-full">
                <h3 className="font-inter font-bold text-[20px] leading-[24px] text-[#FF0000] text-center w-full">
                  {section.title}
                </h3>
                <div className="w-full h-0 border-b-[2px] border-[#E5E5E5]"></div>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-[16px] items-start w-full pt-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-left w-full">
                    <a
                      href="#"
                      className="text-[20px] leading-[24px] text-black hover:text-[#FF0000] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black mb-[47px] max-w-[1440px]"></div>

        {/* Info Area */}
        <div className="w-full max-w-[1380px] flex flex-col lg:flex-row items-start gap-[60px] px-4 lg:px-0 relative">
          {/* Column 1: Thông tin công ty */}
          <div className="flex flex-col gap-[18px] w-full lg:w-[401px]">
            <div className="flex flex-col gap-4 mb-2">
              <h3 className="font-bold text-[28px] leading-[34px] text-[#FF0000] text-center">
                Thông tin công ty
              </h3>
              <div className="w-full h-0 border-b-[2px] border-[#E5E5E5]"></div>
            </div>

            <div className="flex flex-col gap-[18px] text-[20px] leading-[24px] text-black">
              <p className="font-semibold">Công ty TNHH Kỹ thuật in Promac</p>
              <p className="leading-[24px]">
                <span className="font-semibold">Địa chỉ: </span>
                <span className="font-normal">
                  236/59 Điện Biên Phủ, Phường 17, Thành phố Hồ Chí Minh, Việt
                  Nam
                </span>
              </p>
              <div className="flex flex-col font-semibold">
                <span>
                  SDT: <span className="text-[#FF0000]">0903 006 409</span>
                </span>
                <span className="text-[#FF0000] ml-[45px]">(028) 22272416</span>
              </div>
              <p>
                <span className="font-semibold">Email: </span>
                <span className="font-normal">info@promacprinting.com</span>
              </p>
              <div>
                <p className="font-semibold">Thời gian làm việc:</p>
                <p className="font-normal">Thứ 2 - Thứ 7 (8:00 - 17:30)</p>
              </div>
            </div>
          </div>

          {/* Column 2: Bản đồ */}
          <div className="flex flex-col gap-[12px] w-full lg:w-[519px]">
            <div className="flex flex-col gap-4 mb-2 items-center">
              <h3 className="font-bold text-[28px] leading-[34px] text-[#FF0000] text-center">
                Bản đồ
              </h3>
              <div className="w-full h-0 border-b-[2px] border-[#E5E5E5]"></div>
            </div>
            <div className="w-full h-[320px] rounded-lg overflow-hidden relative shadow-sm border border-gray-200">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${mapImage})` }}
              ></div>
            </div>
          </div>

          {/* Column 3: Liên kết MXH */}
          <div className="flex flex-col w-full lg:w-[340px] items-center relative h-full min-h-[300px]">
            <div className="flex flex-col gap-4 mb-[36px] w-full items-center">
              <h3 className="font-bold text-[28px] leading-[34px] text-[#FF0000] text-center">
                Liên kết mạng xã hội
              </h3>
              <div className="w-full h-0 border-b-[2px] border-[#E5E5E5]"></div>
            </div>

            <div className="flex gap-[20px] justify-center mb-10">
              {/* Social Icons */}
              <a
                href="#"
                className="block w-[70px] h-[70px] opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="#"
                className="block w-[70px] h-[70px] opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="#"
                className="block w-[70px] h-[70px] opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="#"
                className="block w-[70px] h-[70px] opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={zaloIcon}
                  alt="Zalo"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>

            {/* Phone Button */}
            <div className="absolute bottom-0 right-4 lg:-bottom-[90px] lg:right-0">
              <button
                className="w-[110px] h-[110px] rounded-full flex items-center justify-center hover:scale-105 transition-transform animate-bounce-slow"
                style={{ boxShadow: "0px 0px 20px 10px #FF0000" }}
              >
                <img
                  src={telephoneIcon}
                  alt="Liên hệ ngay"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
