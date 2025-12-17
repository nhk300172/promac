// src/features/introduction/history/History.tsx

// --- DỮ LIỆU ---
const HISTORY_DATA = [
  {
    year: "2015",
    title: "Thành lập & định hướng kỹ thuật",
    desc: (
      <>
        <strong>Giá trị Khách hàng Mục tiêu:</strong> Khách hàng B2B/Agency đã
        bắt đầu yêu cầu các tiêu chuẩn cao hơn về độ chính xác màu sắc và gia
        công tinh xảo.
      </>
    ),
    color: "bg-[#FFE8E8]", // Hồng
    align: "left",
  },
  {
    year: "2018",
    title: "Đầu tư công nghệ & thẻ cào",
    desc: (
      <>
        <strong>Quyết định Chiến lược:</strong> Để tồn tại và phát triển bền
        vững, Promac đã đưa ra quyết định chiến lược là không tham gia vào cuộc
        chiến giá rẻ mà tập trung ngay vào phân khúc giá trị cao (premium).
      </>
    ),
    color: "bg-[#F0F5FF]", // Xanh dương
    align: "right",
  },
  {
    year: "2022",
    title: "Mở rộng & chuyên môn hoá",
    desc: "It's about you and your family, having a comfortable payment, exceptional service and a lender.",
    color: "bg-[#FFF9E5]", // Vàng
    align: "left",
  },
  {
    year: "2025",
    title: "Định vị đối tác chiến lược",
    desc: "It's about you and your family, having a comfortable payment, exceptional service and a lender.",
    color: "bg-[#D1F2EB]", // Xanh ngọc
    align: "right",
  },
];

export const History = () => {
  return (
    <section className="w-full bg-white py-20 md:py-16 px-4 md:px-8 overflow-hidden">
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center text-center mb-10 lg:mb-24">
        <h2 className="font-bold text-[32px] md:text-[48px] text-[#1F2937] mb-3 md:mb-4">
          Lịch sử phát triển
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[16px] max-w-[650px] leading-relaxed px-2">
          It's about you and your family, having a comfortable payment,
          exceptional service and a lender.
        </p>
      </div>

      {/* --- BODY TIMELINE --- */}
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-20">
        {HISTORY_DATA.map((item, index) => {
          // Logic kiểm tra bên phải cho Desktop
          const isRight = item.align === "right";

          return (
            <div
              key={index}
              // Removed comments inside className to fix duplicate linting errors
              className={`
                flex flex-col lg:flex-row items-center w-full
                ${isRight ? "lg:flex-row-reverse" : ""} 
                gap-2 lg:gap-8 
              `}
            >
              {/* === 1. KHỐI GRAPHIC (Năm + Hình Bát) === */}
              <div
                // Removed comments inside className
                className={`
                relative flex items-center justify-center shrink-0 
                w-full h-auto
                lg:w-[320px] lg:h-[220px] 
              `}
              >
                {/* A. SỐ NĂM */}
                <span
                  // Removed comments inside className
                  className="
                    relative z-20 font-black text-[#FF0000] leading-none tracking-tighter drop-shadow-sm
                    text-[60px] md:text-[80px] lg:text-[130px] 
                    lg:translate-y-[-10px] 
                  "
                >
                  {item.year}
                </span>

                {/* B. HÌNH BÁT (SEMICIRCLE) */}
                <div
                  className={`
                    hidden lg:block  
                    absolute z-10 ${item.color}
                    w-[320px] h-[160px] rounded-b-[160px]
                  `}
                  style={{
                    top: "55%",
                    transform: "translateY(-10%)",
                  }}
                ></div>
              </div>

              {/* === 2. KHỐI TEXT (Nội dung) === */}
              <div
                // Removed comments inside className
                className={`
                flex flex-col flex-1
                items-center text-center
                ${
                  isRight
                    ? "lg:items-end lg:text-right"
                    : "lg:items-start lg:text-left"
                }
              `}
              >
                <div className="max-w-[480px] px-2 md:px-0">
                  <h3 className="font-bold text-[20px] md:text-[28px] text-[#0F172A] leading-tight mb-2 md:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[14px] md:text-[16px] text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* === 3. SPACER (Chỉ hiện trên Desktop) === */}
              <div className="hidden lg:block lg:flex-1"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
