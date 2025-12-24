// src/features/home/HomeServices.tsx
import React, { useRef, useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";

// --- IMPORT ẢNH ---
// Import hình ảnh từ thư mục assets để sử dụng cho các thẻ dịch vụ
import project1 from "../../assets/printingservices/project1.png";
import project2 from "../../assets/printingservices/project2.png";
import project3 from "../../assets/printingservices/project3.png";

// --- DỮ LIỆU ---
// Danh sách các dịch vụ chính (Main Services) được hiển thị dạng lưới (Grid)
const MAIN_SERVICES = [
  {
    title: "In hộp cứng cao cấp",
    desc: "Bao bì hộp cứng sang trọng, nâng tầm giá trị sản phẩm với kỹ thuật in ấn hiện đại.",
    image: project2,
    features: [
      "Hộp quà, hộp sản phẩm",
      "Thùng carton màu",
      "Hộp custom theo thiết kế",
    ],
  },
  {
    title: "In bao bì giấy",
    desc: "Giải pháp bao bì giấy thân thiện môi trường, thiết kế bắt mắt và bền bỉ.",
    image: project1,
    features: ["Túi giấy kraft", "Túi giấy thời trang", "Túi giấy thực phẩm"],
  },
  {
    title: "In ấn phẩm văn phòng",
    desc: "Đồng bộ nhận diện thương hiệu qua các ấn phẩm văn phòng chuyên nghiệp.",
    image: project3,
    features: [
      "Catalogue, Brochure",
      "Namecard, Phong bì",
      "Kẹp file, Tiêu đề thư",
    ],
  },
];

// Danh sách các dịch vụ khác (Other Services) được hiển thị dạng thanh cuộn ngang (Marquee)
const OTHER_SERVICES_RAW = [
  "In thẻ cào biến đổi",
  "In thẻ cào kích hoạt",
  "In thẻ cào trúng thưởng",
  "In thẻ cào ráp chữ",
  "In tem nhãn decal",
  "In lịch tết",
  "In bao lì xì",
  "In phiếu bảo hành",
];
// [Technique] Array.fill().flat(): Nhân bản mảng dữ liệu lên 6 lần
// Mục đích: Tạo danh sách đủ dài để thực hiện hiệu ứng cuộn vô tận (Infinite Scroll Loop)
const OTHER_SERVICES = Array(6).fill(OTHER_SERVICES_RAW).flat();

export const HomeServices = () => {
  // --- LOGIC SCROLL ---
  // Sử dụng useRef để tham chiếu trực tiếp đến thẻ div chứa slider
  const sliderRef = useRef<HTMLDivElement>(null);

  // State quản lý trạng thái kéo thả (Drag)
  const [isDown, setIsDown] = useState(false); // Chuột có đang nhấn xuống không?
  const [startX, setStartX] = useState(0); // Vị trí X ban đầu khi nhấn chuột
  const [scrollLeft, setScrollLeft] = useState(0); // Vị trí thanh cuộn ban đầu
  const [isPaused, setIsPaused] = useState(false); // Tạm dừng cuộn khi hover

  // useRef lưu giá trị scroll dạng số thực để tính toán mượt mà hơn
  const scrollFloat = useRef(0);
  // Tốc độ cuộn tự động (0.5px mỗi frame)
  const SCROLL_SPEED = 0.5;

  // [Hook] useEffect: Quản lý vòng lặp Animation Frame cho Auto Scroll
  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      // Chỉ thực hiện cuộn nếu không bị tạm dừng (isPaused) và không đang kéo chuột (isDown)
      if (!isPaused && !isDown && sliderRef.current) {
        // Tăng vị trí cuộn
        scrollFloat.current += SCROLL_SPEED;
        sliderRef.current.scrollLeft = scrollFloat.current;

        // [Technique] Infinite Loop Reset:
        // Nếu đã cuộn đến cuối danh sách -> Reset ngay lập tức về vị trí đầu (0)
        // Kết hợp với dữ liệu nhân bản sẽ tạo cảm giác danh sách dài vô tận
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          scrollFloat.current = 0;
          sliderRef.current.scrollLeft = 0;
        }
      }
      // Đệ quy gọi lại hàm autoScroll ở frame tiếp theo (tương tự setInterval nhưng tối ưu hơn)
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Bắt đầu vòng lặp
    animationFrameId = requestAnimationFrame(autoScroll);

    // Cleanup: Hủy vòng lặp khi component unmount để tránh rò rỉ bộ nhớ
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDown]);

  // [Event Handler] Xử lý khi nhấn chuột xuống (Bắt đầu Drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setIsPaused(true); // Dừng auto scroll khi đang kéo
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    scrollFloat.current = sliderRef.current.scrollLeft; // Đồng bộ vị trí
  };

  // [Event Handler] Xử lý khi chuột rời khỏi khu vực slider
  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false); // Tiếp tục auto scroll
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };

  // [Event Handler] Xử lý khi thả chuột ra
  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };

  // [Event Handler] Xử lý di chuyển chuột (Thực hiện Drag)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault(); // Ngăn chặn hành vi bôi đen văn bản mặc định

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // [Technique] Velocity: Nhân 2 để tăng tốc độ kéo cho cảm giác nhạy hơn
    sliderRef.current.scrollLeft = scrollLeft - walk;
    scrollFloat.current = sliderRef.current.scrollLeft; // Cập nhật vị trí mới
  };

  // [Event Handler] Xử lý cảm ứng trên Mobile (Touch)
  const handleTouchStart = () => {
    setIsPaused(true); // Dừng auto scroll khi chạm tay vào
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };
  const handleTouchEnd = () => {
    setIsPaused(false); // Tiếp tục auto scroll khi thả tay ra
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };

  return (
    <section className="w-full flex justify-center py-[60px] lg:py-[100px] overflow-hidden bg-white">
      {/* CSS Inline để ẩn thanh cuộn mặc định của trình duyệt nhưng vẫn cho phép cuộn */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="w-full max-w-[1340px] px-4 md:px-6 flex flex-col items-center">
        {/* --- HEADER --- */}
        <h2 className="font-inter font-bold text-[#000000] text-center text-[28px] md:text-[40px] lg:text-[48px] leading-tight mb-[40px] lg:mb-[60px]">
          Dịch vụ cốt lõi
        </h2>

        {/* --- MAIN SERVICES GRID --- */}
        {/* Responsive Grid: 1 cột (Mobile) -> 2 cột (Tablet) -> 3 cột (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px] w-full mb-[50px]">
          {MAIN_SERVICES.map((service, index) => (
            <div
              key={index}
              className="
                group relative flex flex-col 
                bg-[#F5F5F5] 
                rounded-[20px] 
                p-[20px] lg:p-[30px] 
                h-full 
                transition-all duration-300 ease-out
                
                /* --- [UI Effect] HIỆU ỨNG HOVER THEO FIGMA --- */
                /* Đổi màu nền sang đỏ nhạt */
                hover:bg-[#FFD1D1] 
                /* Dịch chuyển card lên trên 3px (Elevation) */
                hover:-translate-y-3 
                /* Đổ bóng lớn tạo chiều sâu */
                hover:shadow-[0px 4px 50px rgba(0,0,0,0.25)]
              "
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] lg:h-[275px] mb-[24px] rounded-[15px] overflow-hidden shadow-sm bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Zoom ảnh khi hover card
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-inter font-bold text-[20px] lg:text-[24px] text-black mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-[15px] lg:text-[16px] text-gray-600 line-clamp-3 mb-4 flex-grow group-hover:text-gray-800">
                  {service.desc}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="bg-white rounded-full p-1 shrink-0 shadow-sm group-hover:bg-[#FFEDED]">
                        <Check
                          size={16}
                          className="text-[#FF0000]"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="font-inter text-[15px] lg:text-[16px] text-gray-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Link 'Xem chi tiết' với hiệu ứng mũi tên chạy */}
                <div className="mt-auto pt-4 border-t border-gray-200 group-hover:border-[#FF0000]/20">
                  <div className="flex items-center gap-2 cursor-pointer w-fit">
                    <span className="font-bold text-[15px] text-[#FF0000]">
                      Xem chi tiết
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#FF0000] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BUTTON BÁO GIÁ --- */}
        <button className="bg-[#FF0000] text-white font-bold text-[16px] lg:text-[18px] px-8 py-3 rounded-full shadow-[0px_4px_15px_rgba(255,0,0,0.4)] hover:scale-105 hover:shadow-[0px_8px_25px_rgba(255,0,0,0.5)] transition-all mb-[80px]">
          Yêu cầu báo giá
        </button>

        {/* --- OTHER SERVICES (DRAGGABLE SLIDER) --- */}
        <div className="w-full flex flex-col items-center overflow-hidden">
          <h3 className="font-inter font-semibold text-[24px] lg:text-[40px] text-black mb-[40px] text-center">
            Các dịch vụ in khác
          </h3>

          <div className="relative w-full group">
            {/* Fade Effect: Lớp phủ mờ 2 bên cạnh để làm mềm mép cắt */}
            <div className="absolute left-0 top-0 bottom-0 w-[50px] lg:w-[150px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[50px] lg:w-[150px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              ref={sliderRef}
              className="flex overflow-x-auto no-scrollbar py-6 cursor-grab active:cursor-grabbing pl-4"
              // Các sự kiện chuột và cảm ứng để điều khiển việc cuộn
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsPaused(true)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {OTHER_SERVICES.map((item, index) => (
                <div
                  key={index}
                  className="mx-[10px] lg:mx-[15px] flex-shrink-0"
                >
                  <div
                    className="
                    cursor-pointer 
                    px-6 py-3 lg:px-8 lg:py-4 
                    rounded-full 
                    transition-all duration-300 
                    bg-white 
                    border border-[#FF0000] 
                    text-[#FF0000] 
                    shadow-md
                    /* Hover Effect cho các pill dịch vụ phụ */
                    hover:bg-[#FF0000] 
                    hover:text-white 
                    hover:shadow-lg
                    hover:-translate-y-1
                    group/item
                    select-none
                  "
                  >
                    <span className="font-inter font-medium text-[15px] lg:text-[18px] whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
