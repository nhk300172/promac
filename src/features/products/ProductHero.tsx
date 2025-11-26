import React from "react";
import { Phone, Mail } from "lucide-react";

export const ProductHero: React.FC = () => {
  return (
    <section
      className="relative mx-auto flex flex-col items-center bg-[#FFF5F6] rounded-[30px]"
      style={{ width: "1379px", height: "451px", marginTop: "40px" }}
    >
      {/* Title Section */}
      <div className="mt-[56px] text-center flex flex-col items-center">
        <h1
          className="font-medium text-[#FF0000]"
          style={{ fontFamily: "Inter", fontSize: "50px", lineHeight: "61px" }}
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
          Khám phá danh mục dịch vụ in ấn cao cấp đa dạng, được thiết kế để đáp
          ứng mọi nhu cầu kinh doanh và cá nhân của bạn.
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
          style={{ fontFamily: "Inter", fontSize: "20px", lineHeight: "24px" }}
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
  );
};
