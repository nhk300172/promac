import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// 1. DỮ LIỆU REVIEW
const TESTIMONIALS = [
  {
    id: 1,
    content:
      "PROMAC là đối tác in ấn tin cậy của chúng tôi hơn 2 năm qua. Chất lượng tuyệt vời và luôn giao hàng đúng hẹn. Rất đáng để giới thiệu!",
    name: "Công ty A",
    position: "Sharma Enterprises",
    avatar: "bg-blue-200",
  },
  {
    id: 2,
    content:
      "Dịch vụ tuyệt vời! Họ hiểu rõ yêu cầu của chúng tôi và mang đến chính xác những gì cần thiết. Đội ngũ thiết kế rất sáng tạo và chuyên nghiệp.",
    name: "Khách hàng B",
    position: "Sharma Enterprises",
    avatar: "bg-pink-200",
  },
  {
    id: 3,
    content:
      "Dịch vụ in ấn tốt nhất tại HCM. Chất lượng tuyệt hảo, giá cả cạnh tranh và chăm sóc khách hàng xuất sắc. Họ đảm nhận mọi khâu từ thiết kế đến giao hàng.",
    name: "Công ty C",
    position: "Sharma Enterprises",
    avatar: "bg-green-200",
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

export const HomeTestimonials = () => {
  // --- CẤU HÌNH SLIDER ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const CARD_WIDTH = 380;
  const GAP = 40;
  const VISIBLE_ITEMS = 3;

  // PADDING_SHADOW: Khoảng mở rộng để bóng đổ không bị cắt
  // Shadow y=8px, blur=16px => Cần ít nhất 16px padding các chiều
  const PADDING_SHADOW = 20;

  // Tính toán chiều rộng thực tế của khung nhìn (bao gồm cả padding cho shadow)
  const CONTENT_WIDTH = CARD_WIDTH * VISIBLE_ITEMS + GAP * (VISIBLE_ITEMS - 1);
  const CONTAINER_WIDTH = CONTENT_WIDTH + PADDING_SHADOW * 2;

  // Logic chuyển trang (Nhảy 3 thẻ)
  const handleNext = () => {
    if (currentIndex + VISIBLE_ITEMS < TESTIMONIALS.length) {
      setCurrentIndex((prev) => prev + VISIBLE_ITEMS);
    }
  };

  const handlePrev = () => {
    if (currentIndex - VISIBLE_ITEMS >= 0) {
      setCurrentIndex((prev) => prev - VISIBLE_ITEMS);
    }
  };

  const isStart = currentIndex === 0;
  const isEnd = currentIndex + VISIBLE_ITEMS >= TESTIMONIALS.length;

  return (
    <section className="w-full flex flex-col items-center">
      {/* RECTANGLE 438 (NỀN XÁM LỚN) */}
      <div
        className="relative flex flex-col items-center"
        style={{
          width: "1373px",
          height: "772px",
          backgroundColor: "#F5F5F5", // Nền xám của khung to
          borderRadius: "30px",
          paddingTop: "55px",
        }}
      >
        {/* HEADER */}
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

        {/* --- SLIDER WINDOW --- */}
        {/* Ở đây ta thêm padding để shadow của thẻ con không bị overflow-hidden cắt mất */}
        <div
          className="overflow-hidden"
          style={{
            width: `${CONTAINER_WIDTH}px`,
            height: "400px", // Cao hơn thẻ (355px) để chứa đủ shadow dưới
            padding: `${PADDING_SHADOW}px`, // Padding đều 4 phía
          }}
        >
          {/* TRACK TRƯỢT */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              gap: `${GAP}px`,
              // Khi trượt, ta chỉ trượt phần nội dung, padding vẫn đứng yên giữ khung
              transform: `translateX(-${currentIndex * (CARD_WIDTH + GAP)}px)`,
            }}
          >
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col relative shrink-0"
                style={{
                  width: "380px", // Rectangle 439
                  height: "355.14px", // Rectangle 439
                  borderRadius: "20px",
                  // ĐÂY LÀ SHADOW CỦA TỪNG BOX (Theo Figma)
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)", // #00000040
                  padding: "35px 32px",
                }}
              >
                {/* Icon Quotation (SVG Gradient Cam-Đỏ) */}
                <div className="mb-[14px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-80"
                  >
                    <defs>
                      <linearGradient
                        id={`quote-gradient-${index}`}
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
                      fill={`url(#quote-gradient-${index})`}
                    />
                  </svg>
                </div>

                {/* 5 Stars */}
                <div className="flex gap-[4px] mb-[20px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>

                {/* Content */}
                <p
                  className="font-inter italic font-normal text-[#000000] mb-[30px] line-clamp-4"
                  style={{ fontSize: "16px", lineHeight: "19px" }}
                >
                  “{item.content}”
                </p>

                {/* User Info */}
                <div className="flex items-center mt-auto">
                  <div
                    className={`w-[50px] h-[50px] rounded-full ${item.avatar} mr-[16px]`}
                  />
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

        {/* NAVIGATION BUTTONS */}
        <div
          className="absolute flex items-center gap-[20px]"
          style={{ bottom: "60px" }}
        >
          {/* Nút Trái */}
          <button
            onClick={handlePrev}
            disabled={isStart}
            className={`flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 
                    ${
                      isStart
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#4A5F9F] hover:bg-[#1F3A8A] cursor-pointer"
                    }
                `}
            style={{ width: "80px", height: "80px" }}
            aria-label="Xem đánh giá trước"
          >
            <ArrowLeft size={34} color="#FFFFFF" strokeWidth={3} />
          </button>

          {/* Nút Phải */}
          <button
            onClick={handleNext}
            disabled={isEnd}
            className={`flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110
                    ${
                      isEnd
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#4A5F9F] hover:bg-[#1F3A8A] cursor-pointer"
                    }
                `}
            style={{ width: "80px", height: "80px" }}
            aria-label="Xem đánh giá tiếp theo"
          >
            <ArrowRight size={34} color="#FFFFFF" strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};
