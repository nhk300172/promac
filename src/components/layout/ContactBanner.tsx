// // src/components/layout/ContactBanner.tsx
// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// // --- IMPORT HÌNH ẢNH SLIDER ---
// import footer1 from "../../assets/footer/footer1.jpg";
// import footer2 from "../../assets/footer/footer2.jpg";
// import footer3 from "../../assets/footer/footer3.jpg";
// import footer4 from "../../assets/footer/footer4.png";

// // --- DATA ---
// const BASE_IMAGES = [footer1, footer2, footer3, footer4];
// const DISPLAY_IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];
// const ITEM_WIDTH = 490 + 24;
// const SET_WIDTH = ITEM_WIDTH * BASE_IMAGES.length;

// export const ContactBanner = () => {
//   // --- LOGIC KÉO THẢ VÔ TẬN (Desktop Only) ---
//   const [isDown, setIsDown] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [currentTranslate, setCurrentTranslate] = useState(-SET_WIDTH);
//   const [prevTranslate, setPrevTranslate] = useState(-SET_WIDTH);

//   const sliderRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number | null>(null);

//   const checkBoundary = () => {
//     setCurrentTranslate((prev) => {
//       if (prev > 0) return prev - SET_WIDTH;
//       if (prev < -2 * SET_WIDTH) return prev + SET_WIDTH;
//       return prev;
//     });
//   };

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDown(true);
//     setStartX(e.pageX);
//     setPrevTranslate(currentTranslate);
//     if (animationRef.current) cancelAnimationFrame(animationRef.current);
//   };

//   const handleMouseUpOrLeave = () => {
//     setIsDown(false);
//     checkBoundary();
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX;
//     const walk = (x - startX) * 1.2;
//     setCurrentTranslate(prevTranslate + walk);
//   };

//   return (
//     <section className="w-full flex flex-col items-center overflow-hidden bg-white ">
//       {/* =================================================================
//           1. MOBILE & TABLET VERSION (< 1024px)
//           - Tablet: Tăng kích thước chữ và container
//           ================================================================= */}
//       <div className="flex flex-col items-center w-full lg:hidden pb-[100px] relative overflow-hidden h-[700px] mt-[-20px]">
//         {/* TEXT CONTENT */}
//         <div className="flex flex-col items-center text-center w-full px-5 mt-[20px] mb-[40px] z-10 relative">
//           <h2 className="font-inter text-[28px] md:text-[40px] leading-[34px] md:leading-[48px] text-black mb-[24px] max-w-[326px] md:max-w-[600px]">
//             Hãy liên hệ với chúng tôi để được hỗ trợ
//           </h2>

//           <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[25px] md:leading-[28px] text-[#64607D] tracking-[-0.02em] max-w-[326px] md:max-w-[600px]">
//             Yet bed any for travelling assistance indulgence unpleasing. Not
//             thoughts all exercise blessing. Indulgence way everything joy.
//           </p>
//         </div>

//         {/* BUTTONS GROUP (Z-Index 10) */}
//         <div className="flex flex-col md:flex-row gap-[24px] z-10 relative">
//           <Link to="/bao-gia">
//             <button className="flex items-center justify-center w-[156px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] active:scale-95 transition-transform">
//               <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
//                 Yêu cầu báo giá
//               </span>
//             </button>
//           </Link>

//           <Link to="/lien-he">
//             <button className="flex items-center justify-center w-[156px] h-[45px] bg-white border border-[#FF0000] rounded-[20px] active:scale-95 transition-transform box-border">
//               <span className="font-inter font-bold text-[16px] text-[#FF0000]">
//                 Liên hệ
//               </span>
//             </button>
//           </Link>
//         </div>

//         {/* --- BACKGROUND IMAGES CONTAINER (Z-Index 0) --- */}
//         <div
//           className="absolute left-[-255px] md:left-0 bottom-[0px] w-[2030px] md:w-full h-[258px] pointer-events-none opacity-80 flex justify-center"
//           style={{ zIndex: 0 }}
//         >
//           {/* Tablet: Dùng ảnh tĩnh đơn giản hơn hoặc giữ nguyên layout mobile nhưng căn giữa */}
//           <div className="absolute top-0 left-[85px] md:left-1/2 md:-translate-x-1/2 w-[2030px] h-[115px]">
//             {/* Ảnh 1 */}
//             <div
//               className="absolute top-0 w-[340px] h-[110px] bg-gray-200 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 340px/2 - 695.06px)",
//                 backgroundImage: `url(${footer4})`,
//               }}
//             />
//             {/* Ảnh 2 */}
//             <div
//               className="absolute top-0 w-[351px] h-[114px] bg-gray-300 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 351px/2 - 333.56px)",
//                 backgroundImage: `url(${footer1})`,
//               }}
//             />
//             {/* Ảnh 3 */}
//             <div
//               className="absolute top-0 w-[341px] h-[110px] bg-gray-200 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 341px/2 + 99.44px)",
//                 backgroundImage: `url(${footer2})`,
//               }}
//             />
//             {/* Ảnh 4 */}
//             <div
//               className="absolute top-[1px] w-[326px] h-[113px] bg-gray-300 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 326px/2 + 491.94px)",
//                 backgroundImage: `url(${footer3})`,
//               }}
//             />
//           </div>

//           {/* ROW 2 (Top 138) */}
//           <div className="absolute top-[138px] left-[-130px] md:left-1/2 md:-translate-x-1/2 w-[2030px] h-[120px]">
//             {/* Ảnh 5 */}
//             <div
//               className="absolute top-[-0.39px] w-[343px] h-[111px] bg-gray-200 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 343px/2 - 696.43px)",
//                 backgroundImage: `url(${footer2})`,
//               }}
//             />
//             {/* Ảnh 6 */}
//             <div
//               className="absolute top-[-0.39px] w-[348px] h-[113px] bg-gray-300 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 348px/2 - 333.93px)",
//                 backgroundImage: `url(${footer4})`,
//               }}
//             />
//             {/* Ảnh 7 */}
//             <div
//               className="absolute top-[-0.39px] w-[352px] h-[114px] bg-gray-200 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 352px/2 + 98.07px)",
//                 backgroundImage: `url(${footer1})`,
//               }}
//             />
//             {/* Ảnh 8 */}
//             <div
//               className="absolute top-[-0.39px] w-[368px] h-[120px] bg-gray-300 rounded-[512px] bg-cover bg-center"
//               style={{
//                 left: "calc(50% - 368px/2 + 508.07px)",
//                 backgroundImage: `url(${footer4})`,
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* =================================================================
//           2. DESKTOP & IPAD PRO VERSION (>= 1024px)
//           - Sử dụng w-full để hỗ trợ màn hình iPad Pro mà không bị tràn
//           ================================================================= */}
//       <div className="hidden lg:flex w-full pt-[31px] pb-20 flex-col items-center relative z-10 overflow-hidden">
//         {/* Title Section */}
//         <div className="flex flex-col items-center gap-2 mb-9 px-4">
//           <h2 className="text-[40px] md:text-[56px] font-normal leading-[115%] tracking-[-2px] md:tracking-[-5px] text-center text-black">
//             Hãy liên hệ với chúng tôi để được hỗ trợ
//           </h2>
//           <p className="text-[18px] md:text-[20px] font-normal leading-[31px] text-center text-black/65 max-w-[683px]">
//             A webinar platform designed for marketers to host jaw-dropping
//             experiences that drive revenue.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center gap-[36px] mb-[60px] z-20">
//           <Link to="/bao-gia">
//             <button
//               className="group w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300"
//               style={{ boxShadow: "none" }}
//             >
//               <span className="group-hover:drop-shadow-md">
//                 Yêu cầu Báo giá
//               </span>
//             </button>
//           </Link>

//           <Link to="/lien-he">
//             <button className="w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300">
//               Liên hệ
//             </button>
//           </Link>
//         </div>

//         {/* KHUNG SLIDER KÉO THẢ (Full Width) */}
//         <div
//           className={`w-full relative h-[360px] !overflow-hidden select-none ${
//             isDown ? "cursor-grabbing" : "cursor-grab"
//           }`}
//           style={{ overflow: "hidden" }}
//           ref={sliderRef}
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseUpOrLeave}
//           onMouseUp={handleMouseUpOrLeave}
//           onMouseMove={handleMouseMove}
//         >
//           <div
//             className="absolute top-0 left-0 h-full flex flex-col justify-between w-full"
//             style={{
//               transform: `translateX(${currentTranslate}px)`,
//               width: `${ITEM_WIDTH * DISPLAY_IMAGES.length}px`, // Chiều rộng tổng của slider
//             }}
//           >
//             {/* Hàng 1 */}
//             <div className="flex gap-[24px] pl-[calc(50vw-245px)]">
//               {DISPLAY_IMAGES.map((imgSrc, idx) => (
//                 <div
//                   key={`row1-${idx}`}
//                   className="w-[490px] h-[158px] bg-gray-200 bg-cover bg-center shrink-0 pointer-events-none"
//                   style={{
//                     borderRadius: "512px",
//                     backgroundImage: `url(${imgSrc})`,
//                   }}
//                 />
//               ))}
//             </div>
//             {/* Hàng 2 */}
//             <div className="flex gap-[24px] pl-[calc(50vw-245px)] ml-[245px]">
//               {DISPLAY_IMAGES.map((imgSrc, idx) => (
//                 <div
//                   key={`row2-${idx}`}
//                   className="w-[490px] h-[158px] bg-gray-200 bg-cover bg-center shrink-0 pointer-events-none"
//                   style={{
//                     borderRadius: "512px",
//                     backgroundImage: `url(${imgSrc})`,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// src/components/layout/ContactBanner.tsx
import { Link } from "react-router-dom";

// --- IMPORT HÌNH ẢNH SLIDER ---
import footer1 from "../../assets/footer/footer1.jpg";
import footer2 from "../../assets/footer/footer2.jpg";
import footer3 from "../../assets/footer/footer3.jpg";
import footer4 from "../../assets/footer/footer4.png";

// --- DATA ---
// Nhân đôi danh sách nhiều lần để đảm bảo không bị khoảng trắng khi chạy loop
const BASE_IMAGES = [footer1, footer2, footer3, footer4];
const DISPLAY_IMAGES = [
  ...BASE_IMAGES,
  ...BASE_IMAGES,
  ...BASE_IMAGES,
  ...BASE_IMAGES,
];

export const ContactBanner = () => {
  return (
    <section className="w-full flex flex-col items-center overflow-hidden bg-white pb-[60px] md:pb-[100px]">
      {/* Inject CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        /* Hover to pause (tùy chọn) */
        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* =================================================================
          HEADER & BUTTONS (Chung cho Mobile & Desktop)
          ================================================================= */}
      <div className="flex flex-col items-center text-center w-full px-5 mt-[40px] mb-[40px] z-10 relative">
        <h2 className="font-inter text-[28px] md:text-[40px] lg:text-[56px] leading-[1.2] font-bold md:font-normal text-black mb-[24px] max-w-[800px]">
          Hãy liên hệ với chúng tôi để được hỗ trợ
        </h2>

        <p className="font-inter font-medium text-[16px] md:text-[20px] leading-[1.5] text-[#64607D] tracking-[-0.02em] max-w-[680px]">
          A webinar platform designed for marketers to host jaw-dropping
          experiences that drive revenue.
        </p>
      </div>

      <div className="flex flex-row gap-[24px] md:gap-[36px] mb-[60px] z-20 relative">
        <Link to="/bao-gia">
          <button className="group flex items-center justify-center w-[160px] md:w-[188px] h-[45px] md:h-[53px] bg-white text-[#FF0000] border border-[#FF0000] rounded-[20px] font-bold text-[16px] md:text-[20px] hover:bg-[#FF0000] hover:text-white transition-all duration-300">
            Yêu cầu báo giá
          </button>
        </Link>

        <Link to="/lien-he">
          <button className="flex items-center justify-center w-[160px] md:w-[188px] h-[45px] md:h-[53px] bg-white text-[#FF0000] border border-[#FF0000] rounded-[20px] font-bold text-[16px] md:text-[20px] hover:bg-[#FF0000] hover:text-white transition-all duration-300">
            Liên hệ
          </button>
        </Link>
      </div>

      {/* =================================================================
          AUTO-PLAY SLIDERS
          ================================================================= */}
      <div className="w-full flex flex-col gap-[20px] overflow-hidden group">
        {/* --- ROW 1: Right to Left (Trái sang) --- */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee-left gap-[20px]">
            {DISPLAY_IMAGES.map((imgSrc, idx) => (
              <div
                key={`row1-${idx}`}
                className="bg-gray-200 bg-cover bg-center shrink-0"
                style={{
                  // Kích thước nhỏ hơn: Giảm từ 490px -> 300px (Desktop) / 200px (Mobile)
                  width: "clamp(200px, 25vw, 300px)",
                  height: "clamp(80px, 10vw, 100px)",
                  borderRadius: "100px",
                  backgroundImage: `url(${imgSrc})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* --- ROW 2: Left to Right (Phải sang) --- */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee-right gap-[20px]">
            {DISPLAY_IMAGES.map((imgSrc, idx) => (
              <div
                key={`row2-${idx}`}
                className="bg-gray-200 bg-cover bg-center shrink-0"
                style={{
                  // Kích thước nhỏ hơn tương tự row 1
                  width: "clamp(200px, 25vw, 300px)",
                  height: "clamp(80px, 10vw, 100px)",
                  borderRadius: "100px",
                  backgroundImage: `url(${imgSrc})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
