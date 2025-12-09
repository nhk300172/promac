// src/features/products/ProductHero.tsx
import React from "react";
import { Phone, Mail } from "lucide-react";

export const ProductHero: React.FC = () => {
  return (
    // Wrapper chung
    <div className="w-full flex justify-center mt-[20px] lg:mt-[40px]">
      {/* =================================================================
          1. MOBILE VERSION (< 768px)
          - Thay đổi: lg:hidden -> md:hidden (Chỉ hiện trên điện thoại nhỏ)
          ================================================================= */}
      <section className="flex flex-col items-center w-full max-w-[375px] bg-[#FFF5F6] rounded-[30px] pt-[40px] pb-[60px] px-[23px] md:hidden">
        {/* Title Group */}
        <div className="flex flex-col items-center gap-[16px] text-center mb-[50px]">
          <h1 className="font-inter font-extrabold text-[28px] leading-[34px] text-[#FF0000]">
            Sản Phẩm Của Chúng Tôi
          </h1>
          <p className="font-inter font-semibold text-[16px] leading-[19px] text-[#374151]">
            Khám phá danh mục dịch vụ in ấn cao cấp đa dạng, được thiết kế để
            đáp ứng mọi nhu cầu kinh doanh và cá nhân của bạn.
          </p>
        </div>

        {/* Button */}
        <button className="flex flex-col justify-center items-center w-[155px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] mb-[24px] active:scale-95 transition-transform">
          <span className="font-inter font-bold text-[16px] leading-[19px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/50 border border-black/50 mb-[24px]"></div>

        {/* Contact Info (Vertical) */}
        <div className="flex flex-col items-start gap-[14px] w-full pl-[10px]">
          {/* Phone Row */}
          <div className="flex items-center">
            <div className="w-[20px] mr-[12px] flex justify-center">
              <Phone size={20} className="text-black/50" />
            </div>
            <div className="flex items-center gap-[12px]">
              <a
                href="tel:02822272416"
                className="font-inter font-normal text-[16px] text-black/50 underline"
              >
                (028) 22272416
              </a>
              <div className="w-[1px] h-[20px] bg-black/50"></div>
              <a
                href="tel:0906838869"
                className="font-inter font-normal text-[16px] text-black/50 underline"
              >
                0906838869
              </a>
            </div>
          </div>

          {/* Email Row */}
          <div className="flex items-center">
            <div className="w-[22px] mr-[12px] flex justify-center">
              <Mail size={20} className="text-black/50" />
            </div>
            <a
              href="mailto:info@promacprinting.com"
              className="font-inter font-normal text-[16px] text-black/50 underline"
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1279px) - KHỐI MỚI
          - Fluid Layout (Linh hoạt), dùng Flexbox thay vì Absolute
          ================================================================= */}
      <section className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[900px] bg-[#FFF5F6] rounded-[30px] py-[60px] px-[40px] mx-4 shadow-sm">
        {/* Title Group */}
        <div className="flex flex-col items-center text-center mb-[40px]">
          <h1 className="font-inter font-extrabold text-[#FF0000] text-[36px] lg:text-[40px] leading-[1.2] mb-[16px]">
            Sản Phẩm Của Chúng Tôi
          </h1>
          <p className="font-inter font-semibold text-[#374151] text-[16px] lg:text-[18px] max-w-[700px]">
            Khám phá danh mục dịch vụ in ấn cao cấp đa dạng, được thiết kế để
            đáp ứng mọi nhu cầu kinh doanh và cá nhân của bạn.
          </p>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] mb-[40px] active:scale-95 transition-transform w-[220px] h-[60px]">
          <span className="font-inter font-bold text-[18px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        {/* Divider */}
        <div className="w-full max-w-[600px] h-[1px] bg-black/50 border border-black/50 mb-[30px]"></div>

        {/* Contact Info (Horizontal) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[50px]">
          {/* Phone Group */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[24px] flex justify-center">
              <Phone className="w-6 h-6 text-black/50" strokeWidth={2} />
            </div>
            <div className="flex items-center gap-[12px]">
              <a
                href="tel:02822272416"
                className="font-inter font-normal text-[16px] text-black/50 underline hover:text-red-500 transition-colors"
              >
                (028) 22272416
              </a>
              <div className="w-[1px] h-[20px] bg-black/50"></div>
              <a
                href="tel:0906838869"
                className="font-inter font-normal text-[16px] text-black/50 underline hover:text-red-500 transition-colors"
              >
                0906838869
              </a>
            </div>
          </div>

          {/* Mail Group */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[24px] flex justify-center">
              <Mail className="w-6 h-6 text-black/50" strokeWidth={2} />
            </div>
            <a
              href="mailto:info@promacprinting.com"
              className="font-inter font-normal text-[16px] text-black/50 hover:text-red-500 transition-colors underline"
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN CODE CŨ
          - Thay đổi: hidden lg:flex -> hidden xl:flex
          ================================================================= */}
      <section
        className="hidden xl:flex relative flex-col items-center bg-[#FFF5F6] rounded-[30px]"
        style={{
          width: "1379px",
          height: "451px",
        }}
      >
        {/* Title Section */}
        <div className="mt-[56px] text-center flex flex-col items-center">
          <h1
            className="font-medium text-[#FF0000]"
            style={{
              fontFamily: "Inter",
              fontSize: "50px",
              lineHeight: "61px",
            }}
          >
            Sản phẩm của chúng tôi
          </h1>
          <p
            className="mt-[24px] font-semibold text-[#374151] text-center"
            style={{
              fontFamily: "Inter",
              fontSize: "20px",
              lineHeight: "24px",
              width: "697px",
            }}
          >
            Khám phá danh mục dịch vụ in ấn cao cấp đa dạng, được thiết kế để
            đáp ứng mọi nhu cầu kinh doanh và cá nhân của bạn.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="mt-[32px] flex flex-col items-center justify-center bg-[#FF0000] text-[#F5F5F5] transition-transform hover:scale-105 active:scale-95"
          style={{
            width: "309.82px",
            height: "70.53px",
            borderRadius: "20px",
            border: "1px solid #FFF5F6",
            boxShadow: "0px 0px 14px #FF0000",
            gap: "12px",
          }}
        >
          <span
            className="font-bold"
            style={{
              fontFamily: "Inter",
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Yêu cầu Báo giá
          </span>
        </button>

        {/* Divider */}
        <div
          className="absolute"
          style={{
            top: "347px",
            width: "749.72px",
            height: "0px",
            border: "1px solid rgba(0, 0, 0, 0.5)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* Contact Info Row */}
        <div
          className="absolute flex items-center justify-center w-full"
          style={{ top: "370px", gap: "40px" }}
        >
          <div className="flex items-center gap-[12px]">
            <div className="w-[20px] flex justify-center">
              <Phone className="w-5 h-5 text-black/50" strokeWidth={2} />
            </div>
            <div className="flex items-center gap-[12px]">
              <a
                href="tel:02822272416"
                className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
                style={{ fontFamily: "Inter" }}
              >
                (028) 22272416
              </a>
              <div className="h-[20px] border-l border-black/50"></div>
              <a
                href="tel:0906838869"
                className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
                style={{ fontFamily: "Inter" }}
              >
                0906838869
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-[22px] flex justify-center">
              <Mail className="w-5 h-5 text-black/50" strokeWidth={2} />
            </div>
            <a
              href="mailto:info@promacprinting.com"
              className="font-normal underline text-black/50 hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
              style={{ fontFamily: "Inter" }}
            >
              info@promacprinting.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
