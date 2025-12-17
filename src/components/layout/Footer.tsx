// src/components/layout/Footer.tsx
import React from "react";
import {
  Twitter,
  Instagram,
  Facebook,
  Phone,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";
import { SiZalo } from "react-icons/si";

// --- CONFIG ---
const MAP_SRC =
  "https://maps.google.com/maps?q=236%2F59%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Ph%C6%B0%E1%BB%9Dng%2017%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed";
const BG_COLOR = "bg-[#FFD1D1]";

// --- DATA LINKS ---
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

// --- TYPE DEFINITIONS ---
interface SectionTitleProps {
  title: string;
  className?: string;
}

interface SocialItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isZalo?: boolean;
}

interface MapFrameProps {
  heightClass: string;
}

// --- HELPER COMPONENTS ---

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => (
  <div
    className={`flex flex-col gap-[12px] md:gap-[20px] mb-[18px] md:mb-2 w-full ${className}`}
  >
    <h3 className="font-inter font-bold text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] leading-tight text-[#FF0000]">
      {title}
    </h3>
    <div className="w-full h-[2px] bg-[#E5E5E5]/50"></div>
  </div>
);

const SocialItem = ({
  href,
  icon: Icon,
  label,
  isZalo = false,
}: SocialItemProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      // Container 45px để có không gian rộng rãi hơn cho icon lớn
      className="w-[45px] h-[45px] flex items-center justify-center rounded-full transition-all duration-300 group hover:bg-white/50"
    >
      <Icon
        // LOGIC SIZE:
        // - Zalo: 30px (Lớn hơn hẳn để nhìn cho đều)
        // - Lucide: 24px (Kích thước chuẩn)
        size={isZalo ? 30 : 24}
        // Lucide cần strokeWidth để đậm đà, Zalo (dạng fill) sẽ bỏ qua thuộc tính này
        strokeWidth={isZalo ? 0 : 2.25}
        className="text-black opacity-70 group-hover:opacity-100 group-hover:text-[#FF0000] transition-colors"
      />
    </a>
  );
};

const SocialList = () => {
  return (
    <div className="flex gap-1 items-center">
      <SocialItem href="#" label="Twitter" icon={Twitter} />
      <SocialItem href="#" label="Instagram" icon={Instagram} />
      <SocialItem href="#" label="Facebook" icon={Facebook} />
      {/* Icon Zalo được set cờ isZalo=true để kích hoạt logic size lớn */}
      <SocialItem href="#" label="Zalo" icon={SiZalo} isZalo={true} />
    </div>
  );
};

const MapFrame = ({ heightClass }: MapFrameProps) => (
  <div
    className={`w-full ${heightClass} bg-white rounded-lg overflow-hidden shadow-sm border border-white/50 relative`}
  >
    <iframe
      title="Bản đồ địa chỉ công ty"
      src={MAP_SRC}
      className="absolute inset-0 w-full h-full border-0"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

// --- MAIN COMPONENT ---
export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center font-sans text-promac-black bg-white !overflow-hidden">
      {/* MOBILE VERSION */}
      <div
        className={`md:hidden w-full ${BG_COLOR} rounded-t-[40px] pt-[48px] pb-[80px] flex flex-col items-center`}
      >
        {/* Links */}

        {/* =================================================================
          1. MOBILE VERSION (< 768px) - GIỮ NGUYÊN
          ================================================================= */}
        <div className="w-full bg-[#FFD1D1] rounded-t-[40px] pt-[48px] pb-[80px] flex flex-col items-center md:hidden">
          {/* LINKS SECTIONS */}

          <div className="flex flex-col gap-[40px] w-full max-w-[265px] mb-[50px]">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <SectionTitle
                  title={section.title}
                  className="text-center items-center"
                />
                <ul className="flex flex-col gap-[14px] items-center w-full">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-center">
                      <a
                        href="#"
                        className="font-inter font-normal text-[16px] text-black hover:text-[#FF0000] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Info */}
        <div className="flex flex-col items-center w-full max-w-[324px] mb-[40px]">
          <SectionTitle
            title="Thông tin công ty"
            className="text-center items-center"
          />
          <div className="flex flex-col items-start w-full px-[10px] gap-[14px]">
            <p className="font-semibold text-[16px]">
              Công ty TNHH Kỹ thuật in Promac
            </p>
            <div className="flex items-start gap-2 text-[16px]">
              <MapPin size={20} className="text-[#FF0000] shrink-0 mt-1" />
              <p>
                <span className="font-semibold">Địa chỉ: </span> 236/59 Điện
                Biên Phủ, Phường 17, Thành phố Hồ Chí Minh, Việt Nam
              </p>
            </div>
            <div className="flex items-start gap-2 text-[16px]">
              <Phone size={20} className="text-[#FF0000] shrink-0 mt-1" />
              <p>
                <span className="font-semibold">SĐT: </span>
                <span className="text-[#FF0000] font-bold">0903 006 409</span>
                <br />
                <span className="pl-0">(028) 22272416</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-[16px]">
              <Mail size={20} className="text-[#FF0000] shrink-0" />
              <p>
                <span className="font-semibold">Email: </span>{" "}
                info@promacprinting.com
              </p>
            </div>
            <div className="flex items-start gap-2 text-[16px]">
              <Clock size={20} className="text-[#FF0000] shrink-0 mt-1" />
              <p>
                <span className="font-semibold">Thời gian làm việc:</span>
                <br /> Thứ 2 - Thứ 7 (8:00 - 17:30)
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex flex-col items-center w-full mb-[40px] px-4">
          <SectionTitle
            title="Bản đồ"
            className="text-center items-center max-w-[329px]"
          />
          <MapFrame heightClass="h-[210px]" />
        </div>

        {/* Socials Mobile */}
        <div className="flex flex-col items-center w-full max-w-[324px] pb-[10px]">
          <SectionTitle
            title="Liên kết mạng xã hội"
            className="text-center items-center"
          />
          <div className="flex justify-center items-center mb-[40px]">
            <button
              aria-label="Gọi ngay cho chúng tôi"
              className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center animate-bounce-slow mr-[20px] shadow-[0px_0px_15px_5px_rgba(255,0,0,0.4)] border border-[#FF0000]"
            >
              <Phone className="text-[#FF0000]" size={24} fill="#FF0000" />
            </button>
            <SocialList />
          </div>
        </div>
      </div>

      {/* TABLET & DESKTOP VERSION */}
      <div
        className={`hidden md:flex w-full ${BG_COLOR} rounded-t-[40px] xl:rounded-t-[30px] pt-[60px] xl:pt-[64px] pb-[80px] flex-col items-center px-[40px] xl:px-0 z-20 relative`}
      >
        <div className="w-full max-w-[1000px] xl:max-w-[1380px] flex flex-col gap-[60px] xl:gap-[50px]">
          {/* ROW 1: LINKS GRID */}
          <div className="grid grid-cols-4 gap-[20px] xl:gap-[75px] w-full xl:max-w-[1277px] xl:mx-auto">
            {FOOTER_LINKS.map((section, index) => (
              <div
                key={index}
                className="flex flex-col gap-[18px] items-center text-center lg:items-start lg:text-left"
              >
                <div className="w-full border-b-2 border-[#E5E5E5]/50 pb-2">
                  <h3 className="font-inter font-bold text-[18px] xl:text-[20px] text-[#FF0000] w-full">
                    {section.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-[12px] xl:gap-[16px] items-center lg:items-start w-full">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-[16px] xl:text-[20px] text-black hover:text-[#FF0000] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-black opacity-10 xl:max-w-[1440px]"></div>

          {/* ROW 2: INFO, MAP & SOCIALS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex xl:flex-row gap-[40px] xl:gap-[60px] w-full relative">
            {/* COLUMN 1: COMPANY INFO */}
            <div className="flex flex-col gap-[20px] items-center text-center lg:items-start lg:text-left xl:w-[401px]">
              <SectionTitle
                title="Thông tin công ty"
                className="items-center lg:items-start xl:items-center max-w-[350px] lg:max-w-full"
              />

              <div className="flex flex-col gap-[12px] xl:gap-[18px] text-[16px] xl:text-[20px] text-black">
                <p className="font-bold text-[18px] xl:text-[22px]">
                  Công ty TNHH Kỹ thuật in Promac
                </p>

                <div className="flex lg:items-start gap-3 justify-center lg:justify-start">
                  <MapPin
                    className="text-[#FF0000] shrink-0 mt-1 hidden xl:block"
                    size={24}
                  />
                  <p>
                    <span className="font-semibold">Địa chỉ: </span> 236/59 Điện
                    Biên Phủ, P.17, TP.HCM
                  </p>
                </div>
                <div className="flex lg:items-start gap-3 justify-center lg:justify-start">
                  <Phone
                    className="text-[#FF0000] shrink-0 mt-1 hidden xl:block"
                    size={24}
                  />
                  <p>
                    <span className="font-semibold">SĐT: </span>{" "}
                    <span className="text-[#FF0000] font-bold">
                      0903 006 409
                    </span>{" "}
                    - (028) 22272416
                  </p>
                </div>
                <div className="flex lg:items-start gap-3 justify-center lg:justify-start">
                  <Mail
                    className="text-[#FF0000] shrink-0 mt-1 hidden xl:block"
                    size={24}
                  />
                  <p>
                    <span className="font-semibold">Email: </span>{" "}
                    info@promacprinting.com
                  </p>
                </div>
                <div className="flex lg:items-start gap-3 justify-center lg:justify-start">
                  <Clock
                    className="text-[#FF0000] shrink-0 mt-1 hidden xl:block"
                    size={24}
                  />
                  <p>
                    <span className="font-semibold">Thời gian: </span> T2 - T7
                    (8:00 - 17:30)
                  </p>
                </div>
              </div>

              {/* Tablet Socials */}
              <div className="mt-8 flex flex-col items-center lg:items-start xl:hidden">
                <h3 className="font-bold text-[24px] text-[#FF0000] mb-4">
                  Liên kết mạng xã hội
                </h3>
                <SocialList />
              </div>
            </div>

            {/* COLUMN 2: MAP */}
            <div className="flex flex-col gap-[20px] items-center lg:items-start xl:w-[519px]">
              <SectionTitle
                title="Bản đồ"
                className="items-center lg:items-start xl:items-center max-w-[350px] lg:max-w-full text-center lg:text-left"
              />
              <MapFrame heightClass="h-[280px] xl:h-[320px]" />
            </div>

            {/* COLUMN 3: DESKTOP SOCIALS */}
            <div className="hidden xl:flex flex-col w-[340px] items-center relative h-full min-h-[300px]">
              <SectionTitle
                title="Liên kết mạng xã hội"
                className="items-center text-center"
              />

              <div className="flex gap-[20px] justify-center mb-10 mt-4 scale-110 origin-top">
                <SocialList />
              </div>

              <div className="absolute -bottom-[90px] right-0">
                <button
                  aria-label="Gọi ngay cho chúng tôi"
                  className="w-[110px] h-[110px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform animate-bounce-slow shadow-[0px_0px_20px_10px_rgba(255,0,0,0.5)] border-2 border-[#FF0000]"
                >
                  <Phone className="text-[#FF0000]" size={50} fill="#FF0000" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
