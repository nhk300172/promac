//src/features/home/HomeWelcome.tsx

export const HomeWelcome = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 lg:px-0">
      {/* =================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Mobile (< 768px): Max-width 328px.
          - Tablet (768px -> 1023px): Max-width 700px (Rộng hơn cho dễ đọc).
          ================================================================= */}
      <div className="flex flex-col items-center gap-[24px] w-full max-w-[328px] md:max-w-[700px] lg:hidden">
        {/* Title */}
        <h2 className="font-inter font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[48px] text-center text-[#000000]">
          Sơ lược về PROMAC
        </h2>
        {/* Description */}
        <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[19px] md:leading-[26px] text-[#64607D] text-center">
          Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp
          tại Amravati, mang đến dịch vụ chất lượng với công nghệ hiện đại và
          tay nghề chuyên môn cao.
        </p>
      </div>

      {/* =================================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Đã chuyển width cố định sang max-w để hỗ trợ iPad Pro tốt hơn.
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full">
        {/* 1. HEADING */}
        <h2
          className="font-inter font-bold text-center w-full max-w-[589px]" // Thay width thành max-w
          style={{
            fontSize: "56px",
            lineHeight: "140%",
            color: "#0E0E0E",
            marginBottom: "12px",
            whiteSpace: "nowrap",
          }}
        >
          Sơ lược về PROMAC
        </h2>

        {/* 2. DESCRIPTION */}
        <p
          className="font-inter font-medium text-center w-full max-w-[720px]" // Thay width thành max-w
          style={{
            fontSize: "16px",
            lineHeight: "19px",
            color: "#64607D",
          }}
        >
          Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp
          tại Amravati, mang đến dịch vụ chất lượng với công nghệ hiện đại và
          tay nghề chuyên môn cao.
        </p>
      </div>
    </div>
  );
};
