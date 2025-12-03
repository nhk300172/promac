//src/features/home/HomeWelcome.tsx

export const HomeWelcome = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 lg:px-0">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA MỚI
          - Width: 328px (max), Center alignment
          ================================================================= */}
      <div className="flex flex-col items-center gap-[24px] w-full max-w-[328px] lg:hidden">
        {/* Title */}
        <h2 className="font-inter font-bold text-[28px] leading-[34px] text-center text-[#000000]">
          Sơ lược về PROMAC
        </h2>
        {/* Description */}
        <p className="font-inter font-medium text-[16px] leading-[19px] text-[#64607D]">
          Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp
          tại Amravati, mang đến dịch vụ chất lượng với công nghệ hiện đại và
          tay nghề chuyên môn cao.
        </p>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center">
        {/* 1. HEADING */}
        <h2
          className="font-inter font-bold text-center"
          style={{
            width: "589px",
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
          className="font-inter font-medium text-center"
          style={{
            width: "720.44px",
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
