// //src/features/home/HomeWelcome.tsx

// export const HomeWelcome = () => {
//   return (
//     <div className="w-full flex flex-col items-center px-4 lg:px-0">
//       {/* =================================================================
//           1. MOBILE & TABLET VERSION (< 1024px)
//           - Mobile (< 768px): Max-width 328px.
//           - Tablet (768px -> 1023px): Max-width 700px (Rộng hơn cho dễ đọc).
//           ================================================================= */}
//       <div className="flex flex-col items-center gap-[24px] w-full max-w-[328px] md:max-w-[700px] lg:hidden">
//         {/* Title */}
//         <h2 className="font-inter font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[48px] text-center text-[#000000]">
//           Sơ lược về PROMAC
//         </h2>
//         {/* Description */}
//         <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[19px] md:leading-[26px] text-[#555555] text-center">
//           Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp.
//           PROMAC mang đến dịch vụ chất lượng với công nghệ hiện đại và tay nghề
//           chuyên môn cao.
//         </p>
//       </div>

//       {/* =================================================================
//           2. DESKTOP & IPAD PRO VERSION (>= 1024px)
//           - Đã chuyển width cố định sang max-w để hỗ trợ iPad Pro tốt hơn.
//           ================================================================= */}
//       <div className="hidden lg:flex flex-col items-center w-full">
//         {/* 1. HEADING */}
//         <h2
//           className="font-inter font-bold text-center w-full max-w-[589px]" // Thay width thành max-w
//           style={{
//             fontSize: "48px",
//             lineHeight: "140%",
//             color: "#black",
//             marginBottom: "12px",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Sơ lược về PROMAC
//         </h2>

//         {/* 2. DESCRIPTION */}
//         <p
//           className="font-inter font-medium text-center w-full max-w-[800px]" // Thay width thành max-w
//           style={{
//             fontSize: "20px",
//             lineHeight: "26px",
//             color: "#555555",
//           }}
//         >
//           Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp.
//           PROMAC mang đến dịch vụ chất lượng với công nghệ hiện đại và tay nghề
//           chuyên môn cao.
//         </p>
//       </div>
//     </div>
//   );
// };
// src/features/home/HomeWelcome.tsx

// --- 1. DATA CONTENT (Dễ dàng chỉnh sửa text tại đây) ---
const CONTENT = {
  title: "Sơ lược về PROMAC",
  description:
    "Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp. PROMAC mang đến dịch vụ chất lượng với công nghệ hiện đại và tay nghề chuyên môn cao.",
};

export const HomeWelcome = () => {
  return (
    <div className="w-full flex justify-center px-4 lg:px-0">
      {/* --- CONTAINER CHÍNH (Responsive Single Block) --- */}
      <div
        className="
        flex flex-col items-center 
        w-full 
        gap-[24px] lg:gap-[12px] 
      "
      >
        {/* 1. HEADING */}
        <h2
          className="
          font-inter font-bold text-center text-[#000000]
          text-[28px] leading-[34px]               /* Mobile */
          md:text-[40px] md:leading-[48px]         /* Tablet */
          lg:text-[48px] lg:leading-[140%]         /* Desktop */
          lg:max-w-[600px] lg:whitespace-nowrap    /* Desktop tweak */
        "
        >
          {CONTENT.title}
        </h2>

        {/* 2. DESCRIPTION */}
        <p
          className="
          font-inter font-medium text-center text-[#555555]
          text-[16px] leading-[19px]               /* Mobile */
          md:text-[18px] md:leading-[26px]         /* Tablet */
          lg:text-[20px] lg:leading-[26px]         /* Desktop */
          max-w-[328px] md:max-w-[700px] lg:max-w-[800px] /* Width constraints */
        "
        >
          {CONTENT.description}
        </p>
      </div>
    </div>
  );
};
