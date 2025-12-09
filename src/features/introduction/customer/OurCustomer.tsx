// src/features/introduction/customer/OurCustomer.tsx

// --- IMPORT HÌNH ẢNH LOGO ---
import strongbow from "../../../assets/ourcustomer/strongbow.png";
import usgboral from "../../../assets/ourcustomer/usgboral.png";
import sensodyne from "../../../assets/ourcustomer/sensodyne.png";
import nhasach from "../../../assets/ourcustomer/nhasach.png";
import nhasachphuongnam from "../../../assets/ourcustomer/nhasachphuongnam.png";
import vietbank from "../../../assets/ourcustomer/vietbank.png";
import nescafe from "../../../assets/ourcustomer/nescafe.png";
import futabuslines from "../../../assets/ourcustomer/futabuslines.png";

const CLIENT_LOGOS = [
  { name: "Strongbow", img: strongbow },
  { name: "USG Boral", img: usgboral },
  { name: "Sensodyne", img: sensodyne },
  { name: "Nha Sach", img: nhasach },
  { name: "Nha Sach Phuong Nam", img: nhasachphuongnam },
  { name: "Vietbank", img: vietbank },
  { name: "Nescafe", img: nescafe },
  { name: "FUTA Bus Lines", img: futabuslines },
];

export const OurCustomer = () => {
  return (
    <section
      className="w-full flex justify-center px-3 xl:px-0"
      style={{ paddingBottom: "50px" }}
    >
      {/* =================================================================
          1. MOBILE VERSION (< 768px)
          - Đổi lg:hidden thành md:hidden để chỉ hiện trên điện thoại
          ================================================================= */}
      <div className="flex flex-col items-center w-full md:hidden px-[20px]">
        {/* CONTAINER CHÍNH MOBILE */}
        <div className="relative flex flex-col items-center bg-[#F5F5F5] rounded-[30px] shadow-[0px_4px_15px_rgba(0,0,0,0.25)] p-[30px] w-full max-w-[387px]">
          {/* Header Mobile */}
          <div className="flex flex-col items-center text-center mb-[30px]">
            <h2 className="font-lato font-bold text-[28px] leading-[34px] text-[#313131] mb-[12px]">
              Khách hàng của chúng tôi
            </h2>
            <p className="font-inter font-normal text-[15px] leading-[20px] text-[#575757]">
              Những thương hiệu hàng đầu đã và đang tin tưởng sử dụng dịch vụ
              của chúng tôi.
            </p>
          </div>

          {/* Logo Grid Mobile (2 Cột) */}
          <div className="grid grid-cols-2 gap-[15px] w-full">
            {CLIENT_LOGOS.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-[10px] overflow-hidden shadow-sm aspect-[3/2] p-2"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1279px) - KHỐI MỚI
          - Fluid Width (Co giãn linh hoạt)
          - Grid 4 cột giống Desktop nhưng tự động thu nhỏ
          ================================================================= */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[1000px]">
        <div className="flex flex-col items-center bg-[#F5F5F5] rounded-[30px] shadow-[0px_4px_15px_rgba(0,0,0,0.25)] w-full p-[40px] md:p-[50px]">
          <div className="flex flex-col items-center text-center mb-[40px]">
            <h2 className="font-lato font-bold text-[40px] md:text-[48px] leading-[1.2] text-[#313131] mb-[16px]">
              Khách hàng của chúng tôi
            </h2>
            <p className="font-inter font-normal text-[16px] md:text-[18px] text-[#575757]">
              Những thương hiệu hàng đầu đã và đang tin tưởng sử dụng dịch vụ
              của chúng tôi.
            </p>
          </div>

          {/* Grid 4 Cột Co Giãn */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-[20px] lg:gap-[29px] w-full">
            {CLIENT_LOGOS.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center overflow-hidden bg-white transition-transform hover:scale-105 duration-300 cursor-pointer rounded-[10px] shadow-sm aspect-[261/108] p-4"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN CODE CŨ
          - Đổi hidden lg:flex thành hidden xl:flex
          ================================================================= */}
      <div
        className="hidden xl:flex relative flex-col items-center"
        style={{
          width: "1277px",
          height: "517px",
          backgroundColor: "#F5F5F5",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
          borderRadius: "30px",
          paddingTop: "65px",
        }}
      >
        <div className="flex flex-col items-center text-center mb-[35px]">
          <h2
            className="font-lato font-bold text-[#313131]"
            style={{
              fontSize: "56px",
              lineHeight: "100%",
              letterSpacing: "-3px",
              marginBottom: "20px",
            }}
          >
            Khách hàng của chúng tôi
          </h2>
          <p
            className="font-inter font-normal text-[#575757]"
            style={{ fontSize: "18px", lineHeight: "22px" }}
          >
            Những thương hiệu hàng đầu đã và đang tin tưởng sử dụng dịch vụ của
            chúng tôi.
          </p>
        </div>

        <div
          className="grid grid-cols-4"
          style={{ width: "1131px", columnGap: "29px", rowGap: "32px" }}
        >
          {CLIENT_LOGOS.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center overflow-hidden bg-white transition-transform hover:scale-105 duration-300 cursor-pointer"
              style={{
                width: "261px",
                height: "108px",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
