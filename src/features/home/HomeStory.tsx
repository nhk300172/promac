//src/features/home/HomeStory.tsx
import { ArrowRight } from "lucide-react";

import mainVisual from "../../assets/main-visual.jpg";

export const HomeStory = () => {
  return (
    <div className="w-full flex justify-center mt-[20px] lg:mt-[0]">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO HÌNH ẢNH THỰC TẾ
          - Text màu đen, chỉ từ PROMAC màu đỏ.
          ================================================================= */}
      <section className="flex flex-col items-center bg-[#F5F5F5] rounded-[40px] px-[23px] py-[55px] w-full max-w-[375px] mx-auto lg:hidden">
        {/* Container nội dung */}
        <div className="flex flex-col items-center gap-[50px] w-full">
          {/* 1. IMAGE */}
          <div className="w-full h-[242px] bg-gray-300 rounded-[10px] flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={mainVisual}
              alt="Promac Story Mobile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. TEXT CONTENT */}
          <div className="flex flex-col items-center gap-[32px] w-full">
            {/* Title & Desc Group */}
            <div className="flex flex-col items-center gap-[24px] w-full ">
              <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#FF0000] text-center">
                Câu chuyện của chúng tôi
              </h2>

              {/* SỬA MÀU TEXT: Đen (#000000), PROMAC Đỏ (#FF0000) */}
              <p className="font-inter font-normal text-[15px] leading-[18px] text-[#000000] ">
                <span className="text-[#FF0000] font-bold">PROMAC</span> đã và
                đang đáp ứng nhu cầu in ấn của khu vực Amravati và các vùng lân
                cận với sự tận tâm và chuyên nghiệp. Được thành lập với tầm nhìn
                mang đến các giải pháp in ấn chất lượng cao, chúng tôi đã phát
                triển và trở thành một thương hiệu đáng tin cậy trong ngành in
                ấn.
                <br />
                <br />
                Cam kết của chúng tôi về chất lượng, giao hàng đúng hẹn và sự
                hài lòng của khách hàng đã giúp chúng tôi trở thành lựa chọn
                hàng đầu của các doanh nghiệp, tổ chức và cá nhân đang tìm kiếm
                dịch vụ in ấn chuyên nghiệp.
              </p>
            </div>

            {/* Button */}
            <button className="flex items-center justify-center gap-2 w-[171px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] active:scale-95 transition-transform">
              <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
                Tìm hiểu thêm
              </span>
              <ArrowRight size={20} className="text-white" strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <section
        className="hidden lg:block relative"
        style={{
          width: "1379px",
          height: "626px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
        }}
      >
        {/* IMAGE LEFT */}
        <div
          className="absolute bg-gray-300 flex items-center justify-center overflow-hidden"
          style={{
            width: "536px",
            height: "445px",
            borderRadius: "10px",
            left: "32px",
            top: "90px",
          }}
        >
          <img
            src={mainVisual}
            alt="Promac Story Desktop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TITLE */}
        <h2
          className="absolute font-inter font-bold text-[#FF0000]"
          style={{
            width: "363px",
            height: "29px",
            left: "610px",
            top: "143px",
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "left",
          }}
        >
          CÂU CHUYỆN CỦA CHÚNG TÔI
        </h2>

        {/* DESCRIPTION */}
        <p
          className="absolute font-inter font-normal text-[#000000]"
          style={{
            width: "720.44px",
            height: "152px",
            left: "610px",
            top: "203px",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "justify",
          }}
        >
          <span className="text-[#FF0000] font-bold">PROMAC</span> đã và đang
          đáp ứng nhu cầu in ấn của khu vực Amravati và các vùng lân cận với sự
          tận tâm và chuyên nghiệp.
          <br />
          Được thành lập với tầm nhìn mang đến các giải pháp in ấn chất lượng
          cao, chúng tôi đã phát triển và trở thành một thương hiệu đáng tin cậy
          trong ngành in ấn.
          <br />
          <br />
          Cam kết của chúng tôi về chất lượng, giao hàng đúng hẹn và sự hài lòng
          của khách hàng đã giúp chúng tôi trở thành lựa chọn hàng đầu của các
          doanh nghiệp, tổ chức và cá nhân đang tìm kiếm dịch vụ in ấn chuyên
          nghiệp.
        </p>

        {/* BUTTON */}
        <button
          className="absolute flex items-center justify-center transition-transform hover:scale-105"
          style={{
            width: "223px",
            height: "53px",
            left: "851px",
            top: "432px",
            backgroundColor: "#FF0000",
            borderRadius: "20px",
            boxShadow: "0px 0px 14px #FF0000",
            gap: "12px",
          }}
        >
          <span className="font-inter font-bold text-[20px] leading-[24px] text-[#F5F5F5]">
            Tìm hiểu thêm
          </span>
          <ArrowRight size={24} color="#FFFFFF" strokeWidth={3} />
        </button>
      </section>
    </div>
  );
};
