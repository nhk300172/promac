import React from "react";
import { ChevronRight } from "lucide-react";

export const ProjectDetailContent: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white pb-[100px]">
      {/* ============================================================
          1. BREADCRUMB
          Logic: Home > Dự án > Tag (Bao bì) > Tên Dự Án
      ============================================================ */}
      <div className="w-[1299px] flex items-center gap-[8px] mt-[21px] mb-[40px]">
        <div className="flex items-center gap-[8px] text-[#8E8E8E]">
          <span className="font-inter text-[16px]">Trang chủ</span>
          <ChevronRight size={16} />
        </div>

        <div className="flex items-center gap-[8px] text-[#9E9E9E]">
          <span className="font-inter text-[16px]">Dự án</span>
          <ChevronRight size={16} />
        </div>

        <div className="flex items-center gap-[8px] text-[#9E9E9E]">
          <span className="font-inter text-[16px]">Bao bì</span>
          <ChevronRight size={16} />
        </div>

        <div className="flex items-center">
          <span
            className="font-inter font-semibold text-[16px] truncate max-w-[600px]"
            style={{ color: "rgba(255, 0, 0, 0.8)", letterSpacing: "-0.04em" }}
          >
            Thiết kế bao bì hộp sữa cao cấp Vinamilk
          </span>
        </div>
      </div>

      {/* ============================================================
          2. PROJECT HEADER
      ============================================================ */}
      <div className="relative w-[1299px] h-[145px] mb-[40px]">
        {/* Tag */}
        <span
          className="absolute left-[12px] top-[-1px] font-bold text-[16px] leading-[19px] text-[#FF0000] flex items-center h-[20px]"
          style={{ fontFamily: "Quicksand" }}
        >
          Bao Bì & Hộp Cứng
        </span>

        {/* Title */}
        <h1
          className="absolute left-[12px] top-[28px] w-[1265px] h-[98px] text-[40px] leading-[48px] font-medium text-black flex items-center"
          style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
        >
          Thiết kế bao bì hộp sữa cao cấp Vinamilk
        </h1>
      </div>

      {/* ============================================================
          3. FEATURED IMAGE (Có mt-[-50px] giống Tin tức)
      ============================================================ */}
      <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[60px] mt-[-50px]">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
          Project Featured Image
        </div>
      </div>

      {/* ============================================================
          4. MAIN CONTENT
      ============================================================ */}
      <div className="w-[897px] flex flex-col relative">
        {/* Intro Text */}
        <p
          className="text-[#253D4E] text-[24px] leading-[32px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Helping everyone live happier, healthier lives at home through their
          kitchen. Kitchn is a daily food magazine on the Web celebrating life
          in the kitchen through home cooking and kitchen intelligence.
        </p>

        {/* Paragraph 1 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          We've reviewed and ranked all of the best smartwatches on the market
          right now, and we've made a definitive list of the top 10 devices you
          can buy today. One of the 10 picks below may just be your perfect next
          smartwatch.
        </p>

        {/* Paragraph 2 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[40px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Those top-end wearables span from the Apple Watch to Fitbits, Garmin
          watches to Tizen-sporting Samsung watches. There's also Wear OS which
          is Google's own wearable operating system in the vein of Apple's
          watchOS - you’ll see it show up in a lot of these devices.
        </p>

        {/* Sub-Heading (414) */}
        <h3
          className="text-[#253D4E] font-bold text-[20px] leading-[24px] mb-[24px] pl-[12px]"
          style={{ fontFamily: "Quicksand" }}
        >
          Các Loại Hộp Chúng Tôi Nhận Sản Xuất
        </h3>

        {/* Paragraph 3 */}
        <ul className="list-disc pl-[40px] mb-[40px]">
          <li
            className="text-[#253D4E] text-[20px] leading-[24px] pl-[12px] list" // Removed the comma from original className and kept "list" if it's a custom class
            style={{ fontFamily: "Lato" }}
          >
            Hộp nắp rời / hộp âm dương
          </li>
          {/* If you want more items, add them here like: */}
          <li
            className="text-[#253D4E] text-[20px] leading-[24px] pl-[12px] list"
            style={{ fontFamily: "Lato" }}
          >
            Item thứ hai
          </li>
        </ul>
        {/* Second Image (In-content Thumbnail) */}
        <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[40px] ml-[12px]">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
            In-Content Image
          </div>
        </div>

        {/* Paragraph 4 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
          euismod et diam quis aliquam consequat porttitor integer a nisl, in
          faucibus nunc et aenean turpis dui dignissim nec scelerisque
          ullamcorper eu neque, augue quam quis lacus pretium eros est amet
          turpis nunc in turpis massa et eget facilisis ante molestie penatibus
          dolor volutpat...
        </p>

        {/* Paragraph 5 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim,
          libero sit. Est donec lobortis cursus amet, cras elementum libero
          convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec
          sed sed.
        </p>
      </div>
    </section>
  );
};
