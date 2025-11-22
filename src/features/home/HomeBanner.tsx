import { Mail, Phone } from "lucide-react";

export const HomeBanner = () => {
  return (
    // Wrapper căn giữa
    // Margin Top tính theo Figma: 143px (Start Banner) - 102px (End Header) = 41px
    <div className="w-full flex justify-center mt-[41px]">
      {/* ============================================================
          ROOT CONTAINER (Group 1000003008)
          Width: 1437px; Height: 600px
          Background: #FFF5F6; Radius: 30px
      ============================================================ */}
      <section
        className="relative"
        style={{
          width: "1437px",
          height: "600px",
          backgroundColor: "#FFF5F6",
          borderRadius: "30px",
        }}
      >
        {/* --- IMAGE RIGHT (m_image) --- 
            Left: 813px
            Top: 200 - 143 = 57px
            Size: 591x506
        */}
        <div
          className="absolute bg-gray-200 flex items-center justify-center overflow-hidden"
          style={{
            width: "591px",
            height: "506px",
            borderRadius: "10px",
            left: "813px",
            top: "57px",
          }}
        >
          <span className="text-gray-500 font-medium">m_image placeholder</span>
        </div>

        {/* ============================================================
            LEFT CONTENT AREA
        ============================================================ */}

        {/* 1. TITLE: PROMAC: In ấn Kỹ thuật Cao 
            Left: 51px
            Top: 233 - 143 = 90px
        */}
        <h1
          className="absolute font-inter font-bold text-[#FF0000]"
          style={{
            width: "742px",
            height: "64px",
            left: "51px",
            top: "90px",
            fontSize: "50px",
            lineHeight: "61px",
          }}
        >
          PROMAC: In ấn Kỹ thuật Cao
        </h1>

        {/* 2. SUBTITLE: Đối tác đáng tin cậy...
            Left: 51px
            Top: 317 - 143 = 174px
        */}
        <p
          className="absolute font-inter font-semibold text-[#374151]"
          style={{
            width: "707px",
            height: "46px",
            left: "51px",
            top: "174px",
            fontSize: "16px",
            lineHeight: "19px",
          }}
        >
          Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp tại PROMAC
        </p>

        {/* 3. BUTTON: Yêu cầu Báo giá
            Left: 51px
            Top: 389 - 143 = 246px
        */}
        <button
          className="absolute flex flex-col justify-center items-center transition-transform hover:scale-105"
          style={{
            width: "211px",
            height: "53px",
            left: "51px",
            top: "246px",
            backgroundColor: "#FF0000",
            borderRadius: "20px",
            boxShadow: "0px 0px 14px #FF0000", // Hiệu ứng phát sáng đỏ
            gap: "12px",
          }}
        >
          <span className="font-inter font-bold text-[20px] leading-[24px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        {/* 4. VECTOR 27 (Divider Line)
            Left: 34px
            Top: 588.51 - 143 = 445.51px
        */}
        <div
          className="absolute"
          style={{
            width: "487px",
            height: "0px",
            left: "34px",
            top: "445.51px",
            borderTop: "1px solid rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* 5. PHONE INFO (Group 302)
            Left: 54.56px
            Top: 611.18 - 143 = 468.18px
        */}
        <div
          className="absolute flex items-center"
          style={{
            left: "54.56px",
            top: "468.18px",
            height: "21.07px",
          }}
        >
          {/* Icon Phone */}
          <div
            className="flex items-center justify-center"
            style={{ width: "20px", height: "21px" }}
          >
            <Phone size={20} color="rgba(0,0,0,0.5)" />
          </div>

          {/* Phone 1 */}
          <a
            href="tel:02822272416"
            className="font-inter font-normal underline ml-[12px]"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            (028) 22272416
          </a>

          {/* Vector 28 (Vertical Line) */}
          <div
            className="mx-[12px]"
            style={{
              width: "0px",
              height: "20px",
              borderLeft: "1px solid rgba(0,0,0,0.5)",
            }}
          />

          {/* Phone 2 */}
          <a
            href="tel:0906838869"
            className="font-inter font-normal underline"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            0906838869
          </a>
        </div>

        {/* 6. EMAIL INFO (Group 303)
            Left: 55px
            Top: 652 - 143 = 509px
        */}
        <div
          className="absolute flex items-center"
          style={{
            left: "55px",
            top: "509px",
            height: "21.07px",
          }}
        >
          {/* Icon Mail */}
          <div
            className="flex items-center justify-center"
            style={{ width: "22.1px", height: "21.07px" }}
          >
            <Mail size={20} color="rgba(0,0,0,0.5)" />
          </div>

          {/* Email Text */}
          <a
            href="mailto:info@promacprinting.com"
            className="font-inter font-normal ml-[12px]"
            style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)" }}
          >
            info@promacprinting.com
          </a>
        </div>
      </section>
    </div>
  );
};
