//src/features/home/HomeServices.tsx
import React, { useRef, useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";

// --- IMPORT ẢNH (Giữ nguyên) ---
import project1 from "../../assets/printingservices/project1.png";
import project2 from "../../assets/printingservices/project2.png";
import project3 from "../../assets/printingservices/project3.png";

// --- 1. DỮ LIỆU ---
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

// Nhân bản danh sách nhiều lần để tạo cảm giác vô tận khi user kéo
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
// Nhân 6 lần để đủ dài cho việc scroll
const OTHER_SERVICES = Array(6).fill(OTHER_SERVICES_RAW).flat();

export const HomeServices = () => {
  // --- LOGIC KÉO THẢ & AUTO SCROLL ---
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Biến này để lưu vị trí chính xác (số thực) để scroll mượt khi tốc độ thấp
  const scrollFloat = useRef(0);

  // TỐC ĐỘ SCROLL (Càng nhỏ càng chậm)
  // 1 = Bình thường (~60px/s)
  // 0.5 = Chậm
  // 0.3 = Rất chậm
  const SCROLL_SPEED = 0.5;

  // Auto Scroll Effect
  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (!isPaused && !isDown && sliderRef.current) {
        // Cộng dồn vị trí vào biến float
        scrollFloat.current += SCROLL_SPEED;

        // Gán giá trị float vào scrollLeft (trình duyệt sẽ tự làm tròn visual nhưng ta giữ logic ở ref)
        sliderRef.current.scrollLeft = scrollFloat.current;

        // Logic lặp vô tận (Optional: Nếu muốn cuộn hết thì quay về đầu ngay lập tức)
        // Nếu cuộn đến kịch đường biên -> reset về 0 (nếu bạn muốn vòng lặp hoàn hảo cần nhân bản list nhiều hơn nữa)
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          scrollFloat.current = 0;
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDown]);

  // Mouse Events (Desktop Drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setIsPaused(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    // Đồng bộ lại biến float khi bắt đầu kéo để tránh bị giật khi thả ra
    scrollFloat.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false);
    // Đồng bộ lại khi chuột rời đi
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
    // Đồng bộ lại khi thả chuột
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Tốc độ kéo tay (nhân 2 cho nhạy)
    sliderRef.current.scrollLeft = scrollLeft - walk;
    // Cập nhật luôn biến float khi kéo
    scrollFloat.current = sliderRef.current.scrollLeft;
  };

  // Touch Events (Mobile)
  const handleTouchStart = () => {
    setIsPaused(true);
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };
  const handleTouchEnd = () => {
    setIsPaused(false);
    if (sliderRef.current) scrollFloat.current = sliderRef.current.scrollLeft;
  };

  return (
    <section className="w-full flex justify-center py-[60px] lg:py-[100px] overflow-hidden bg-white">
      {/* Ẩn thanh cuộn mặc định */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="w-full max-w-[1340px] px-4 md:px-6 flex flex-col items-center">
        {/* --- 1. HEADER --- */}
        <h2 className="font-inter font-bold text-[#000000] text-center text-[28px] md:text-[40px] lg:text-[48px] leading-tight mb-[40px] lg:mb-[60px]">
          Dịch vụ cốt lõi
        </h2>

        {/* --- 2. MAIN SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px] w-full mb-[50px]">
          {MAIN_SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#F5F5F5] rounded-[30px] lg:rounded-[40px] p-[20px] lg:p-[30px] h-full transition-transform hover:-translate-y-2 duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] lg:h-[275px] mb-[24px] rounded-[15px] overflow-hidden shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-inter font-bold text-[20px] lg:text-[24px] text-black mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-[15px] lg:text-[16px] text-gray-600 line-clamp-3 mb-4 flex-grow">
                  {service.desc}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check
                        size={20}
                        className="text-[#FF0000] shrink-0"
                        strokeWidth={3}
                      />
                      <span className="font-inter text-[15px] lg:text-[16px] text-gray-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Link 'Xem chi tiết' */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="group flex items-center gap-2 cursor-pointer w-fit">
                    <span className="font-bold text-[15px] text-[#FF0000]">
                      Xem chi tiết
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#FF0000] transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="w-[0px] group-hover:w-[100px] h-[2px] bg-[#FF0000] mt-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BUTTON BÁO GIÁ --- */}
        <button className="bg-[#FF0000] text-white font-bold text-[16px] lg:text-[18px] px-8 py-3 rounded-full shadow-[0px_4px_15px_rgba(255,0,0,0.4)] hover:scale-105 hover:shadow-[0px_8px_25px_rgba(255,0,0,0.5)] transition-all mb-[80px]">
          Yêu cầu báo giá
        </button>

        {/* --- 3. OTHER SERVICES (DRAGGABLE SLIDER) --- */}
        <div className="w-full flex flex-col items-center overflow-hidden">
          <h3 className="font-inter font-semibold text-[24px] lg:text-[40px] text-black mb-[40px] text-center">
            Các dịch vụ in khác
          </h3>

          <div className="relative w-full group">
            {/* Fade effect 2 bên */}
            <div className="absolute left-0 top-0 bottom-0 w-[50px] lg:w-[150px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[50px] lg:w-[150px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* DRAGGABLE CONTAINER */}
            <div
              ref={sliderRef}
              className="flex overflow-x-auto no-scrollbar py-6 cursor-grab active:cursor-grabbing pl-4"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsPaused(true)} // Hover chuột vào thì dừng
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
                    
                    /* --- DEFAULT STATE (Chữ đỏ, Viền đỏ, Nền trắng, Shadow nhẹ) --- */
                    bg-white 
                    border border-[#FF0000] 
                    text-[#FF0000] 
                    shadow-md
                    
                    /* --- HOVER STATE (Nền đỏ, Chữ trắng) --- */
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
