import { ArrowLeft, ArrowRight } from "lucide-react";

export const History = () => {
  return (
    <section
      className="flex flex-col items-center bg-white relative"
      style={{
        width: "1440px",
        // Height 839px + khoảng cách top (1565px) -> App.tsx sẽ lo margin
        height: "950px", // Dư ra một chút cho button
      }}
    >
      {/* 1. TIÊU ĐỀ: Lịch sử phát triển */}
      <h2
        className="font-poppins font-bold text-black capitalize flex items-center"
        style={{
          width: "468px",
          height: "78px",
          fontSize: "51.74px",
          lineHeight: "78px",
          marginBottom: "54px", // Khoảng cách xuống Card (1697 - 1565 - 78 = 54px)
        }}
      >
        Lịch sử phát triển
      </h2>

      {/* 2. MAIN CARD (74161441) */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "1270px",
          height: "581px",
          borderRadius: "50px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
          // Gradient Background
          background:
            "linear-gradient(180deg, rgba(251, 249, 240, 0.5) 29.33%, rgba(205, 234, 228, 0.5) 99.99%)",
        }}
      >
        {/* --- LEFT SHAPE: Rectangle 1 (Mảng màu đỏ) --- 
                Left: -390px; Top: 0px; Width: 780px
            */}
        <div
          className="absolute"
          style={{
            width: "780px",
            height: "582px",
            left: "-390px",
            top: "0px",
            backgroundColor: "rgba(255, 0, 0, 0.7)", // Đỏ 70%
            borderRadius: "187.316px",
          }}
        />

        {/* --- NĂM: 2015 --- 
                Right: 991px -> Left = 1270 - 991 - 211 = 68px
            */}
        <div
          className="absolute font-roboto-slab font-bold text-white text-center"
          style={{
            width: "211px",
            height: "120px",
            left: "68px", // Tính toán từ Right: 991px
            top: "221px",
            fontSize: "100px",
            lineHeight: "120%",
          }}
        >
          2015
        </div>

        {/* --- HEADING: Thành lập & định hướng kỹ thuật --- 
                Right: 184px -> Left = 1270 - 184 - 588 = 498px
            */}
        <h3
          className="absolute font-roboto font-extrabold text-[#0F172A] text-center" // Font-weight 800
          style={{
            width: "588px",
            height: "48px",
            left: "498px",
            top: "55px",
            fontSize: "40px",
            lineHeight: "120%",
            whiteSpace: "nowrap",
          }}
        >
          Thành lập & định hướng kỹ thuật
        </h3>

        {/* --- TEXT 1: Quyết định Chiến lược --- */}
        <p
          className="absolute font-lexend font-light text-black flex items-center" // Font weight 300
          style={{
            width: "742px",
            height: "84px",
            left: "450px",
            top: "144px",
            fontSize: "18px",
            lineHeight: "28px",
          }}
        >
          Quyết định Chiến lược: Để tồn tại và phát triển bền vững, Promac đã
          đưa ra quyết định chiến lược là không tham gia vào cuộc chiến giá rẻ
          mà tập trung ngay vào phân khúc giá trị cao (premium).
        </p>

        {/* --- TEXT 2: Giá trị Khách hàng Mục tiêu --- */}
        <p
          className="absolute font-lexend font-light text-black flex items-center"
          style={{
            width: "742px",
            height: "56px",
            left: "450px",
            top: "260px",
            fontSize: "18px",
            lineHeight: "28px",
          }}
        >
          Giá trị Khách hàng Mục tiêu: Khách hàng B2B/Agency đã bắt đầu yêu cầu
          các tiêu chuẩn cao hơn về độ chính xác màu sắc và gia công tinh xảo.
        </p>

        {/* --- TEXT 3: Công ty TNHH... (Footer text) --- */}
        <p
          className="absolute font-roboto font-semibold text-black text-center"
          style={{
            width: "730px",
            height: "76px",
            left: "442px",
            top: "384px",
            fontSize: "32px",
            lineHeight: "38px",
          }}
        >
          Công ty TNHH Kỹ thuật In Promac chính thức được thành lập vào năm 2015
        </p>
      </div>

      {/* 3. NAVIGATION BUTTONS (Group 40060) */}
      <div className="flex items-center gap-[20px] mt-[46px]">
        {/* Nút Trái (Prev) */}
        <button
          // Thêm class: bg-[#4A5F9F] (Mặc định), hover:bg-[#1F3A8A] (Hover), transition-colors (Mượt)
          className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 bg-[#4A5F9F] hover:bg-[#1F3A8A]"
          style={{
            width: "80px",
            height: "80px",
            // Đã xóa backgroundColor ở đây để dùng Tailwind bên trên
          }}
          aria-label="Xem năm trước"
        >
          <ArrowLeft size={34} color="#FFFFFF" strokeWidth={3} />
        </button>

        {/* Nút Phải (Next) */}
        <button
          // Thêm class tương tự nút trên
          className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 bg-[#4A5F9F] hover:bg-[#1F3A8A]"
          style={{
            width: "80px",
            height: "80px",
            // Đã xóa backgroundColor ở đây
          }}
          aria-label="Xem năm tiếp theo"
        >
          <ArrowRight size={34} color="#FFFFFF" strokeWidth={3} />
        </button>
      </div>
    </section>
  );
};
