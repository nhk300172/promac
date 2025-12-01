import React from "react";
import { ChevronRight } from "lucide-react";

export const NewsDetailContent: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white pb-[100px]">
      {/* ============================================================
          1. BREADCRUMB (Frame 12654)
          Logic: Home > Tin Tức > Tag (In Ấn) > Tên Bài Viết
      ============================================================ */}
      <div className="w-[1299px]  flex items-center gap-[8px] mt-[21px] mb-[40px]">
        {/* Home / 1299 */}
        <div className="flex items-center gap-[8px] text-[#8E8E8E]">
          <span className="font-inter text-[16px]">Trang chủ</span>
          <ChevronRight size={16} />
        </div>

        {/* Tin Tức */}
        <div className="flex items-center gap-[8px] text-[#9E9E9E]">
          <span className="font-inter text-[16px]">Tin Tức</span>
          <ChevronRight size={16} />
        </div>

        {/* Tag: In Ấn (Dynamic Tag) */}
        <div className="flex items-center gap-[8px] text-[#9E9E9E]">
          <span className="font-inter text-[16px]">In Ấn</span>
          <ChevronRight size={16} />
        </div>

        {/* Current Post Title */}
        <div className="flex items-center">
          <span
            className="font-inter font-semibold text-[16px] truncate max-w-[600px]"
            style={{ color: "rgba(255, 0, 0, 0.8)", letterSpacing: "-0.04em" }}
          >
            Our SaaS Product Just Launched!
          </span>
        </div>
      </div>

      {/* ============================================================
  2. ARTICLE HEADER — Tag & Title (Absolute như Figma)
============================================================ */}
      <div className="relative w-[1299px] h-[145px] mb-[40px]">
        {/* Tag (1548) */}
        <span
          className="
      absolute
      left-[12px]
      top-[-1px]
      font-bold
      text-[16px]
      leading-[19px]
      text-[#FF0000]
      flex items-center
      w-[88px] h-[20px]
    "
          style={{ fontFamily: "Quicksand" }}
        >
          In Ấn
        </span>

        {/* Title (412) */}
        <h1
          className="
      absolute
      left-[12px]
      top-[28px]
      w-[1265px] h-[98px]
      text-[40px]
      leading-[48px]
      font-medium
      text-black
      flex items-center
    "
          style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
        >
          Our SaaS Product Just Launched!
        </h1>
      </div>

      {/* ============================================================
          3. FEATURED IMAGE (Thumbnail 1)
          890x415px, Radius 15px
      ============================================================ */}
      <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[60px] mt-[-50px]">
        {/* Placeholder Image */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
          Featured Image
        </div>
      </div>

      {/* ============================================================
          4. MAIN CONTENT (Body Text)
          Width: 897px (Center)
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
          Lorem ipsum dolor sit amet cons
        </h3>

        {/* Paragraph 3 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[40px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Throughout our review process, we look at the design, features,
          battery life, spec, price and more for each smartwatch, rank it
          against the competition and enter it into the list you'll find below.
        </p>

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
