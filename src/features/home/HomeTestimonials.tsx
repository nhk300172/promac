// src/features/home/HomeTestimonials.tsx
import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// --- IMPORT HÌNH ẢNH TESTIMONIALS ---
import imgCongTyA from "../../assets/home-testimonials/congtyA.png";
import imgCongTyC from "../../assets/home-testimonials/congtyC.png";
import imgKhachHangB from "../../assets/home-testimonials/khachhangB.png";

// DỮ LIỆU REVIEW
const TESTIMONIALS = [
  {
    id: 1,
    content:
      "PROMAC là đối tác in ấn tin cậy của chúng tôi hơn 2 năm qua. Chất lượng tuyệt vời và luôn giao hàng đúng hẹn. Rất đáng để giới thiệu!",
    name: "Công ty A",
    position: "Sharma Enterprises",
    avatar: imgCongTyA,
  },
  {
    id: 2,
    content:
      "Dịch vụ tuyệt vời! Họ hiểu rõ yêu cầu của chúng tôi và mang đến chính xác những gì cần thiết. Đội ngũ thiết kế rất sáng tạo và chuyên nghiệp.",
    name: "Khách hàng B",
    position: "Sharma Enterprises",
    avatar: imgKhachHangB,
  },
  {
    id: 3,
    content:
      "Dịch vụ in ấn tốt nhất tại HCM. Chất lượng tuyệt hảo, giá cả cạnh tranh và chăm sóc khách hàng xuất sắc. Họ đảm nhận mọi khâu từ thiết kế đến giao hàng.",
    name: "Công ty C",
    position: "Sharma Enterprises",
    avatar: imgCongTyC,
  },
  {
    id: 4,
    content:
      "Sản phẩm in ấn sắc nét, màu sắc trung thực. Chúng tôi đã tăng doanh số bán hàng nhờ bao bì sản phẩm đẹp mắt do PROMAC thiết kế.",
    name: "Đối tác D",
    position: "Retail Group",
    avatar: "bg-yellow-200",
  },
  {
    id: 5,
    content:
      "Quy trình làm việc chuyên nghiệp, báo giá nhanh chóng. Tôi rất ấn tượng với sự hỗ trợ nhiệt tình của đội ngũ tư vấn viên.",
    name: "Khách hàng E",
    position: "Tech Solutions",
    avatar: "bg-purple-200",
  },
  {
    id: 6,
    content:
      "Giao hàng cực kỳ nhanh, cứu nguy cho sự kiện của chúng tôi vào phút chót. Cảm ơn PROMAC rất nhiều!",
    name: "Công ty F",
    position: "Event Agency",
    avatar: "bg-red-200",
  },
];

// --- COMPONENT CON: ICON QUOTE (Tái sử dụng) ---
const QuoteIcon = ({ id }: { id: number }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    className="opacity-80"
  >
    <defs>
      <linearGradient
        id={`quote-gradient-${id}`}
        x1="0"
        y1="0"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#FF7A00" />
        <stop offset="100%" stopColor="#FF0000" />
      </linearGradient>
    </defs>
    <path
      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 7.55228 5.01697 7V3H10.017C12.2261 3 14.017 4.79086 14.017 7V15C14.017 18.3137 11.3307 21 8.01697 21H5.01697Z"
      fill={`url(#quote-gradient-${id})`}
    />
  </svg>
);

export const HomeTestimonials = () => {
  // State cho Desktop Slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const VISIBLE_ITEMS = 3;
  const isStart = currentIndex === 0;
  const isEnd = currentIndex + VISIBLE_ITEMS >= TESTIMONIALS.length;

  const handleNext = () => {
    if (!isEnd) setCurrentIndex((prev) => prev + VISIBLE_ITEMS);
  };

  const handlePrev = () => {
    if (!isStart) setCurrentIndex((prev) => prev - VISIBLE_ITEMS);
  };

  return (
    <section className="w-full flex flex-col items-center">
      {/* =================================================================
          1. RESPONSIVE SWIPE VERSION (Mobile + Tablet + iPad Pro)
          - Hiển thị cho màn hình < 1280px (xl)
          - Tablet/iPad sẽ có thẻ to hơn và padding rộng hơn
          ================================================================= */}
      <div className="flex flex-col items-center w-full xl:hidden px-[20px] md:px-[40px]">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-[24px] md:mb-[40px] max-w-[337px] md:max-w-[700px]">
          <h2 className="font-inter font-bold text-[28px] leading-[32px] md:text-[40px] md:leading-[48px] text-[#000000] mb-[24px]">
            Khách hàng nói gì về PROMAC
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[19px] md:text-[18px] md:leading-[26px] text-[#64607D] text-center">
            Hãy xem khách hàng nói gì về PROMAC – những đánh giá chân thực về
            chất lượng và dịch vụ in ấn của chúng tôi.
          </p>
        </div>

        {/* SWIPE CONTAINER */}
        <div
          className="flex w-full overflow-x-auto gap-[14px] md:gap-[24px] pb-[40px] px-[4px] snap-x snap-mandatory hide-scrollbar"
          style={{ scrollPaddingLeft: "0px" }}
        >
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col shrink-0 bg-white rounded-[20px] p-[25px] md:p-[32px] snap-center shadow-[0px_8px_16px_rgba(0,0,0,0.15)]"
              style={{
                // Responsive Width: Mobile 269px -> Tablet/iPad 340px
                width: "clamp(269px, 45vw, 340px)",
                height: "367px", // Giữ nguyên chiều cao hoặc tăng nếu cần
              }}
            >
              <div className="mb-[8px]">
                <QuoteIcon id={index + 100} />
              </div>

              <div className="flex gap-[4px] mb-[24px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="#FFC107" color="#FFC107" />
                ))}
              </div>

              <p className="font-inter font-normal text-[15px] md:text-[16px] leading-[18px] md:leading-[22px] text-[#000000] mb-[24px] flex-grow">
                “{item.content}”
              </p>

              <div className="flex flex-col items-center gap-[11px] mt-auto">
                {/* Avatar */}
                {item.avatar.startsWith("/") ||
                item.avatar.startsWith("data") ? (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-[37px] h-[41px] rounded-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-[37px] h-[41px] rounded-full ${item.avatar}`}
                  />
                )}

                <div className="flex flex-col items-center">
                  <span className="font-inter font-medium text-[15px] md:text-[16px] text-[#000000] text-center">
                    {item.name}
                  </span>
                  <span className="font-inter font-normal text-[15px] text-[#000000] text-center opacity-70">
                    {item.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hide Scrollbar CSS */}
        <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1280px) - Slider Nút Bấm
          - Chỉ hiển thị từ breakpoint xl trở lên để không bị vỡ trên iPad Pro
          ================================================================= */}
      <div
        className="hidden xl:flex relative flex-col items-center"
        style={{
          width: "1373px",
          height: "772px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
          paddingTop: "55px",
        }}
      >
        <div className="flex flex-col items-center text-center mb-[60px]">
          <h2
            className="font-manrope font-bold text-[#0E0E0E]"
            style={{ fontSize: "56px", lineHeight: "140%" }}
          >
            Khách hàng nói gì về PROMAC
          </h2>
          <p
            className="font-inter font-semibold text-[#000000] mt-[12px]"
            style={{ fontSize: "20px", lineHeight: "24px", width: "1088px" }}
          >
            Hãy xem khách hàng nói gì về PROMAC – những đánh giá chân thực về
            chất lượng và dịch vụ in ấn của chúng tôi.
          </p>
        </div>

        <div
          className="overflow-hidden"
          style={{
            width: `${380 * 3 + 40 * 2 + 40}px`,
            height: "400px",
            padding: "20px",
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              gap: "40px",
              transform: `translateX(-${currentIndex * (380 + 40)}px)`,
            }}
          >
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col relative shrink-0"
                style={{
                  width: "380px",
                  height: "355.14px",
                  borderRadius: "20px",
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
                  padding: "35px 32px",
                }}
              >
                <div className="mb-[14px]">
                  <QuoteIcon id={index} />
                </div>

                <div className="flex gap-[4px] mb-[20px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>

                <p
                  className="font-inter italic font-normal text-[#000000] mb-[30px] line-clamp-4"
                  style={{ fontSize: "16px", lineHeight: "19px" }}
                >
                  “{item.content}”
                </p>

                <div className="flex items-center mt-auto">
                  {item.avatar.startsWith("/") ||
                  item.avatar.startsWith("data") ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[50px] h-[50px] rounded-full object-cover mr-[16px]"
                    />
                  ) : (
                    <div
                      className={`w-[50px] h-[50px] rounded-full ${item.avatar} mr-[16px]`}
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="font-inter font-semibold text-[16px] text-[#000000]">
                      {item.name}
                    </span>
                    <span className="font-inter font-normal text-[12px] text-[#000000]">
                      {item.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute flex items-center gap-[20px]"
          style={{ bottom: "60px" }}
        >
          <button
            onClick={handlePrev}
            disabled={isStart}
            className={`flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 
                    ${
                      isStart
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#4A5F9F] hover:bg-[#1F3A8A] cursor-pointer"
                    }`}
            style={{ width: "80px", height: "80px" }}
          >
            <ArrowLeft size={34} color="#FFFFFF" strokeWidth={3} />
          </button>

          <button
            onClick={handleNext}
            disabled={isEnd}
            className={`flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110
                    ${
                      isEnd
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#4A5F9F] hover:bg-[#1F3A8A] cursor-pointer"
                    }`}
            style={{ width: "80px", height: "80px" }}
          >
            <ArrowRight size={34} color="#FFFFFF" strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};
