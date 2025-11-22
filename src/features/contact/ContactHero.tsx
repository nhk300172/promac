import React from "react";
import { Phone, Mail } from "lucide-react";

export const ContactHero: React.FC = () => {
  return (
    <section
      className="relative mx-auto flex flex-col items-center bg-[#FFF5F6] rounded-[30px]"
      style={{
        width: "1379px",
        height: "451px",
        marginTop: "40px", // Khoảng cách từ Header xuống (ước lượng từ top: 143px trừ header)
      }}
    >
      {/* 1. Title Section */}
      <div className="mt-[56px] text-center">
        <h1
          className="font-extrabold text-[#FF0000]"
          style={{
            fontFamily: "Inter",
            fontSize: "40px",
            lineHeight: "48px",
          }}
        >
          Liên Hệ & Tư Vấn Kỹ Thuật
        </h1>

        <p
          className="mt-[24px] font-semibold text-[#374151]"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            lineHeight: "19px",
            width: "697px",
            marginInline: "auto",
          }}
        >
          Chúng tôi sẵn sàng hỗ trợ bạn qua Hotline, Email, hoặc tại Văn phòng.
        </p>
      </div>

      {/* 2. CTA Button */}
      <button
        className="mt-[32px] flex flex-col items-center justify-center bg-[#FF0000] text-[#F5F5F5] transition-transform hover:scale-105 active:scale-95"
        style={{
          width: "309.82px",
          height: "70.53px",
          borderRadius: "20px",
          border: "1px solid #FFF5F6",
          boxShadow: "0px 0px 14px #FF0000", // Hiệu ứng glow đỏ
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

      {/* 3. Divider */}
      <div
        className="absolute"
        style={{
          top: "347px", // Tính toán vị trí tương đối trong box
          width: "749.72px",
          height: "0px",
          border: "1px solid rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* 4. Contact Info Row */}
      <div
        className="absolute flex items-center justify-center w-full"
        style={{
          top: "370px", // Vị trí tương đối
          gap: "40px", // Khoảng cách giữa cụm Phone và Mail
        }}
      >
        {/* Phone Group */}
        <div className="flex items-center gap-[12px]">
          {/* Icon Box */}
          <div className="w-[20px] flex justify-center">
            <Phone className="w-5 h-5 text-black/50" strokeWidth={2} />
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-[12px]">
            <a
              href="tel:02822272416"
              className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
            >
              (028) 22272416
            </a>

            {/* Vertical Divider */}
            <div className="h-[20px] border-l border-black/50"></div>

            <a
              href="tel:0906838869"
              className="font-normal text-black/50 underline hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
            >
              0906838869
            </a>
          </div>
        </div>

        {/* Mail Group */}
        <div className="flex items-center gap-[12px]">
          <div className="w-[22px] flex justify-center">
            <Mail className="w-5 h-5 text-black/50" strokeWidth={2} />
          </div>
          <a
            href="mailto:info@promacprinting.com"
            className="font-normal text-black/50 hover:text-[#FF0000] transition-colors text-[16px] leading-[19px]"
          >
            info@promacprinting.com
          </a>
        </div>
      </div>
    </section>
  );
};
