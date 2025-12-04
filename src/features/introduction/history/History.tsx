//src/features/introduction/history/History.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

export const History = () => {
  return (
    <section className="flex flex-col items-center w-full">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px)
          - Đã sửa phần Red Shape theo đúng CSS bạn gửi
          - Đã căn chỉnh lại Text 2015 cho khớp
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[4px] mb-[60px]">
        {/* HEADER MOBILE */}
        <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] text-center mb-[32px]">
          Lịch Sử Phát Triển
        </h2>

        {/* CARD MOBILE */}
        <div
          className="relative flex flex-col w-full max-w-[368px] rounded-[50px] shadow-[0px_10px_20px_rgba(0,0,0,0.25)] overflow-hidden"
          style={{
            minHeight: "590px", // Chiều cao chuẩn Figma
            background:
              "linear-gradient(180deg, rgba(251, 249, 240, 0.5) 29.33%, rgba(205, 234, 228, 0.5) 99.99%)",
            paddingBottom: "40px",
          }}
        >
          {/* --- RED SHAPE (ĐÃ SỬA THEO CSS CỦA BẠN) --- */}
          {/* Rectangle 1 */}
          <div
            className="absolute"
            style={{
              position: "absolute",
              width: "107px",
              height: "368px",

              // CSS GỐC TỪ FIGMA BẠN GỬI:
              left: "0px",
              top: "-290px",
              background: "rgba(255, 0, 0, 0.7)",
              borderRadius: "0px 50px 50px 0px",
              transform: "rotate(90deg)",

              // QUAN TRỌNG: Để nó nằm ngang ở đỉnh đầu đúng ý bạn,
              // ta cần set điểm xoay (origin) phù hợp để nó lật lên trên.
              transformOrigin: "0% 100%", // Xoay từ góc dưới trái
              marginTop: "-107px", // Bù trừ chiều cao để nó nằm đúng mép trên
            }}
          />

          {/* --- YEAR 2015 --- */}
          <div
            className="absolute font-inter font-bold text-white text-center z-10"
            style={{
              fontSize: "24px",
              lineHeight: "120%",
              // Canh chỉnh vị trí thủ công cho khớp với thanh đỏ nằm ngang
              top: "20px",
              right: "auto",
              left: "50%",
              transform: "translateX(-50%)", // Căn giữa theo chiều ngang
              width: "100%",
            }}
          >
            2015
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-center px-[20px] pt-[140px] gap-[24px]  z-10">
            {/* Subtitle */}
            <h3 className="font-inter font-semibold text-[16px] leading-[120%] text-[#0F172A]">
              Thành lập & định hướng kỹ thuật
            </h3>

            {/* Desc 1 */}
            <p className="font-inter font-normal text-[15px] leading-[28px] text-[#000000]">
              Quyết định Chiến lược: Để tồn tại và phát triển bền vững, Promac
              đã đưa ra quyết định chiến lược là không tham gia vào cuộc chiến
              giá rẻ mà tập trung ngay vào phân khúc giá trị cao (premium).{" "}
              <br /> <br />
              Giá trị Khách hàng Mục tiêu: Khách hàng B2B/Agency đã bắt đầu yêu
              cầu các tiêu chuẩn cao hơn về độ chính xác màu sắc và gia công
              tinh xảo.
            </p>

            <p className="font-inter font-semibold text-[16px] leading-[120%] text-[#0F172A] mt-[15px] text-center">
              Công ty TNHH Kỹ thuật In Promac chính thức được thành lập vào năm
              2015
            </p>
          </div>

          {/* Navigation Buttons */}
        </div>
        <div className="flex items-center justify-center gap-[16px] mt-[35px] pb-[40px]">
          <button className="w-[51px] h-[51px] bg-[#4A5F9F] rounded-full flex items-center justify-center">
            <ArrowLeft size={20} color="white" strokeWidth={3} />
          </button>
          <button className="w-[51px] h-[51px] bg-[#1F3A8A] rounded-full flex items-center justify-center">
            <ArrowRight size={20} color="white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center relative"
        style={{
          width: "1440px",
          height: "950px",
        }}
      >
        <h2
          className="font-poppins font-bold text-black capitalize flex items-center"
          style={{
            width: "468px",
            height: "78px",
            fontSize: "51.74px",
            lineHeight: "78px",
            marginBottom: "54px",
          }}
        >
          Lịch sử phát triển
        </h2>

        <div
          className="relative overflow-hidden"
          style={{
            width: "1270px",
            height: "581px",
            borderRadius: "50px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
            background:
              "linear-gradient(180deg, rgba(251, 249, 240, 0.5) 29.33%, rgba(205, 234, 228, 0.5) 99.99%)",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "780px",
              height: "582px",
              left: "-390px",
              top: "0px",
              backgroundColor: "rgba(255, 0, 0, 0.7)",
              borderRadius: "187.316px",
            }}
          />

          <div
            className="absolute font-roboto-slab font-bold text-white text-center"
            style={{
              width: "211px",
              height: "120px",
              left: "68px",
              top: "221px",
              fontSize: "100px",
              lineHeight: "120%",
            }}
          >
            2015
          </div>

          <h3
            className="absolute font-roboto font-extrabold text-[#0F172A] text-center"
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

          <p
            className="absolute font-lexend font-light text-black flex items-center"
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
            Giá trị Khách hàng Mục tiêu: Khách hàng B2B/Agency đã bắt đầu yêu
            cầu các tiêu chuẩn cao hơn về độ chính xác màu sắc và gia công tinh
            xảo.
          </p>

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
            Công ty TNHH Kỹ thuật In Promac chính thức được thành lập vào năm
            2015
          </p>
        </div>

        <div className="flex items-center gap-[20px] mt-[46px]">
          <button
            className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 bg-[#4A5F9F] hover:bg-[#1F3A8A]"
            style={{ width: "80px", height: "80px" }}
          >
            <ArrowLeft size={34} color="#FFFFFF" strokeWidth={3} />
          </button>

          <button
            className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 bg-[#4A5F9F] hover:bg-[#1F3A8A]"
            style={{ width: "80px", height: "80px" }}
          >
            <ArrowRight size={34} color="#FFFFFF" strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};
