// src/features/introduction/history/History.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

export const History = () => {
  return (
    <section className="flex flex-col items-center w-full px-3 xl:px-0">
      {/* =================================================================
          1. MOBILE VERSION (< 768px)
          ================================================================= */}
      <div className="flex flex-col items-center w-full md:hidden px-[4px] mb-[60px]">
        {/* HEADER MOBILE */}
        <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] text-center mb-[32px]">
          Lịch Sử Phát Triển
        </h2>

        {/* CARD MOBILE */}
        <div
          className="relative flex flex-col w-full max-w-[368px] rounded-[40px] shadow-[0px_10px_20px_rgba(0,0,0,0.25)] overflow-hidden"
          style={{
            minHeight: "550px", // Giảm chiều cao tổng thể một chút
            background:
              "linear-gradient(180deg, rgba(251, 249, 240, 0.5) 29.33%, rgba(205, 234, 228, 0.5) 99.99%)",
            paddingBottom: "40px",
          }}
        >
          {/* --- RED SHAPE (ĐÃ THU NHỎ) --- */}
          <div
            className="absolute top-0 left-0 w-full z-0 flex items-center justify-center"
            style={{
              height: "69px",
              background: "rgba(255, 0, 0, 0.7)",
              borderRadius: "0px 0px 40px 40px",
            }}
          >
            {/* --- YEAR 2015 --- */}
            <span className="font-inter font-bold text-white text-[24px] leading-[120%] z-10 mt-2">
              2015
            </span>
          </div>
          <div className="flex flex-col items-center px-[20px] pt-[140px] gap-[24px] z-10">
            <h3 className="font-inter font-semibold text-[16px] leading-[120%] text-[#0F172A]">
              Thành lập & định hướng kỹ thuật
            </h3>
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
        </div>
        <div className="flex items-center justify-center gap-[16px] mt-[35px] pb-[40px]">
          <button className="w-[51px] h-[51px] bg-[#4A5F9F] rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
            <ArrowLeft size={20} color="white" strokeWidth={3} />
          </button>
          <button className="w-[51px] h-[51px] bg-[#1F3A8A] rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
            <ArrowRight size={20} color="white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1279px) - ĐÃ SỬA LỖI LỆCH
          ================================================================= */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full mb-[80px]">
        <h2 className="font-poppins font-bold text-black text-[40px] mb-[40px] w-full text-center">
          Lịch sử phát triển
        </h2>

        <div
          className="relative overflow-hidden w-full max-w-[900px] h-auto min-h-[500px] rounded-[40px] shadow-xl flex"
          style={{
            background:
              "linear-gradient(180deg, rgba(251, 249, 240, 0.5) 29.33%, rgba(205, 234, 228, 0.5) 99.99%)",
          }}
        >
          {/* LEFT SIDE (CỐ ĐỊNH WIDTH 240px) */}
          <div className="relative w-[240px] min-w-[240px] shrink-0 bg-transparent overflow-hidden flex items-center justify-center">
            {/* Red Shape: Hình elip lớn làm nền đỏ */}
            <div
              className="absolute bg-[rgba(255,0,0,0.7)]"
              style={{
                width: "400px",
                height: "800px",
                borderRadius: "50%",
                right: "20px", // Đẩy sát mép phải của cột này
                top: "50%",
                transform: "translateY(-50%)", // Căn giữa theo chiều dọc
              }}
            />
            {/* Year: Căn chỉnh vị trí thủ công so với hình đỏ */}
            <div className="relative z-10 text-white font-bold text-[70px] leading-none pr-[20px]">
              2015
            </div>
          </div>

          {/* RIGHT SIDE (CONTENT) - Tự động giãn phần còn lại */}
          <div className="flex-1 p-[30px] md:p-[40px] flex flex-col justify-center">
            <h3 className="font-roboto font-extrabold text-[#0F172A] text-[24px] md:text-[32px] mb-[20px]">
              Thành lập & định hướng kỹ thuật
            </h3>

            <p className="font-lexend font-light text-black text-[15px] md:text-[16px] leading-[1.6] text-justify mb-[20px]">
              Quyết định Chiến lược: Để tồn tại và phát triển bền vững, Promac
              đã đưa ra quyết định chiến lược là không tham gia vào cuộc chiến
              giá rẻ mà tập trung ngay vào phân khúc giá trị cao (premium).
            </p>

            <p className="font-lexend font-light text-black text-[15px] md:text-[16px] leading-[1.6] text-justify mb-[30px]">
              Giá trị Khách hàng Mục tiêu: Khách hàng B2B/Agency đã bắt đầu yêu
              cầu các tiêu chuẩn cao hơn về độ chính xác màu sắc và gia công
              tinh xảo.
            </p>

            <p className="font-roboto font-semibold text-black text-[20px] md:text-[24px] leading-[1.3]">
              Công ty TNHH Kỹ thuật In Promac chính thức được thành lập vào năm
              2015
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-[20px] mt-[40px]">
          <button className="w-[60px] h-[60px] bg-[#4A5F9F] hover:bg-[#384b85] rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-md">
            <ArrowLeft size={28} color="white" strokeWidth={3} />
          </button>
          <button className="w-[60px] h-[60px] bg-[#4A5F9F] hover:bg-[#384b85] rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-md">
            <ArrowRight size={28} color="white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* 3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN */}
      <div
        className="hidden xl:flex flex-col items-center relative"
        style={{ width: "1440px", height: "950px" }}
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
