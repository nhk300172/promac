// src/features/otherservices/winning/WinningScratchContent.tsx
import React from "react";

// --- IMPORT ẢNH ---
import introWinningScratchImg from "../../../assets/printingservices/intro-hardbox.png";

export const WinningScratchContent: React.FC = () => {
  return (
    // Section Container
    <section className="w-full flex justify-center pb-[60px] lg:pb-[100px]">
      {/* WRAPPER CHÍNH:
          - ĐÃ GIẢM margin-top TRÊN MỌI THIẾT BỊ
      */}
      {/* CŨ: mt-[40px] md:mt-[100px] xl:mt-[285px] */}
      {/* MỚI: mt-[20px] md:mt-[50px] xl:mt-[100px] */}
      <div className="flex flex-col items-center mt-[20px] md:mt-[50px] xl:mt-[100px] w-full px-4 xl:px-0">
        {/* 1. TIÊU ĐỀ CHÍNH (Thông Tin Dịch Vụ...) */}
        <h2
          className="font-inter font-semibold text-[#000000] text-center mb-[40px]"
          style={{
            maxWidth: "1024px",
            width: "100%",
            lineHeight: "1.2",
          }}
        >
          <span className="text-[32px] md:text-[40px] xl:text-[50px]">
            Thông Tin Dịch Vụ In Thẻ Cào Biến Đổi
          </span>
        </h2>

        {/* 2. KHỐI ẢNH GIỚI THIỆU */}
        <div
          className="
            relative overflow-hidden rounded-[15px] shadow-lg mb-[60px]
            w-full aspect-video
            md:w-[700px] md:aspect-video
            xl:w-[890px] xl:h-[415px] xl:aspect-auto
          "
        >
          <img
            src={introWinningScratchImg}
            alt="Giới thiệu Hộp cứng cao cấp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. NỘI DUNG CHI TIẾT (Text Content) */}
        <div className="flex flex-col items-center w-full max-w-[868px] gap-[32px]">
          {/* Intro Text */}
          <p
            className="font-lato font-normal text-[#253D4E] text-justify xl:text-left"
            style={{
              fontSize: "24px",
              lineHeight: "32px",
            }}
          >
            Helping everyone live happier, healthier lives at home through their
            kitchen. Kitchn is a daily food magazine on the Web celebrating life
            in the kitchen through home cooking and kitchen intelligence.
          </p>

          {/* Paragraph 1 */}
          <p
            className="font-lato font-normal text-[#253D4E] text-justify xl:text-left"
            style={{
              fontSize: "17px",
              lineHeight: "24px",
            }}
          >
            We've reviewed and ranked all of the best smartwatches on the market
            right now, and we've made a definitive list of the top 10 devices
            you can buy today. One of the 10 picks below may just be your
            perfect next smartwatch.
          </p>

          {/* Paragraph 2 */}
          <p
            className="font-lato font-normal text-[#253D4E] text-justify xl:text-left"
            style={{
              fontSize: "17px",
              lineHeight: "24px",
            }}
          >
            Those top-end wearables span from the Apple Watch to Fitbits, Garmin
            watches to Tizen-sporting Samsung watches. There's also Wear OS
            which is Google's own wearable operating system in the vein of
            Apple's watchOS - you’ll see it show up in a lot of these devices.
          </p>
        </div>
      </div>
    </section>
  );
};
