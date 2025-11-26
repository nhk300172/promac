import React from "react";

export const ProductDetailMain: React.FC = () => {
  return (
    // Width 897px theo CSS Frame Main
    <div className="flex flex-col items-start w-[897px]">
      {/* --- 1. HÌNH ẢNH (Rectangle 299) --- */}
      {/* Width: 890px, Height: 415px, Radius: 15px */}
      <div
        className="bg-[#F2F2F2] rounded-[15px] mb-[60px] relative overflow-hidden shrink-0"
        style={{ width: "890px", height: "415px" }}
      >
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-inter">
          {/* Placeholder cho ảnh background: url(...) */}
          Main Product Image
        </div>
      </div>

      {/* --- 2. NỘI DUNG BÀI VIẾT (Main Text) --- */}
      <div className="flex flex-col w-full">
        {/* Intro Text (Lato, 24px, #253D4E) */}
        <p
          className="font-normal text-[24px] text-[#253D4E] leading-[32px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Helping everyone live happier, healthier lives at home through their
          kitchen. Kitchn is a daily food magazine on the Web celebrating life
          in the kitchen through home cooking and kitchen intelligence.
        </p>

        {/* Paragraph 1 (Lato, 17px) */}
        <p
          className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          We've reviewed and ranked all of the best smartwatches on the market
          right now, and we've made a definitive list of the top 10 devices you
          can buy today. One of the 10 picks below may just be your perfect next
          smartwatch.
        </p>

        {/* Paragraph 2 */}
        <p
          className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Those top-end wearables span from the Apple Watch to Fitbits, Garmin
          watches to Tizen-sporting Samsung watches. There's also Wear OS which
          is Google's own wearable operating system in the vein of Apple's
          watchOS - you’ll see it show up in a lot of these devices.
        </p>

        {/* Subheading (414 - Quicksand, 20px Bold) */}
        <h3
          className="font-bold text-[20px] text-[#253D4E] leading-[24px] mb-[24px] pl-[12px]"
          style={{ fontFamily: "Quicksand" }}
        >
          Lorem ipsum dolor sit amet cons
        </h3>

        {/* Paragraph 3 */}
        <p
          className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Throughout our review process, we look at the design, features,
          battery life, spec, price and more for each smartwatch, rank it
          against the competition and enter it into the list you'll find below.
        </p>

        {/* Paragraph 4 */}
        <p
          className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px]"
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
          className="font-normal text-[17px] text-[#253D4E] leading-[24px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim,
          libero sit. Est donec lobortis cursus amet, cras elementum libero
          convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec
          sed sed.
        </p>
      </div>
    </div>
  );
};
