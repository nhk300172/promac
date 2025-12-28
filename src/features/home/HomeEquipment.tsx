// src/features/home/HomeEquipment.tsx
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import machine1 from "../../assets/introduction-machinery/machinery1.jpg";
import machine2 from "../../assets/introduction-machinery/machinery2.jpg";
import machine3 from "../../assets/introduction-machinery/machinery3.jpg";
import machine4 from "../../assets/introduction-machinery/machinery4.jpg";

// --- 1. CONFIG DATA ---
const CONTENT = {
  header: {
    title: "Dàn máy móc hiện đại",
    subtitle:
      "Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp. PROMAC mang đến dịch vụ chất lượng với công nghệ hiện đại và tay nghề chuyên môn cao.",
  },
  machines: [
    { id: 1, image: machine1, name: "A107W - Dán nhãn tròn - Dán thùng son" },
    { id: 2, image: machine2, name: "A751LC - Dán và in thùng carton" },
    { id: 3, image: machine3, name: "A910 - Dán nhãn quanh chai tròn" },
    { id: 4, image: machine4, name: "A920 - Dán nhãn 2 mặt" },
  ],
  info: {
    description:
      "Hệ thống máy móc hiện đại – thiết bị đa dạng, đảm bảo chất lượng in vượt trội và hoàn thành đúng tiến độ từng đơn hàng.",
    buttonText: "Tìm hiểu thêm",
  },
};

export const HomeEquipment = () => {
  // 2. Khởi tạo hook navigate
  const navigate = useNavigate();

  return (
    <div className="flex justify-center py-[40px] mx-8 px-4 xl:px-0 bg-white">
      {/* --- CONTAINER CHÍNH --- */}
      <div className="w-full  flex flex-col items-center gap-[40px] xl:gap-[40px]">
        {/* --- PHẦN 1: HEADER (Title & Subtitle) --- */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[800px]">
          <h2
            className="font-inter font-bold text-center text-[#000000]
          text-[28px] leading-[34px]               /* Mobile */
          md:text-[40px] md:leading-[48px]         /* Tablet */
          lg:text-[48px] lg:leading-[140%]         /* Desktop */
          lg:max-w-[600px] lg:whitespace-nowrap    /* Desktop tweak */
        "
          >
            {CONTENT.header.title}
          </h2>
          <p
            className="font-inter font-medium text-center text-[#555555]
          text-[16px] leading-[19px]               /* Mobile */
          md:text-[18px] md:leading-[26px]         /* Tablet */
          lg:text-[20px] lg:leading-[26px]         /* Desktop */
          max-w-[328px] md:max-w-[700px] lg:max-w-[800px] /* Width constraints */
        "
          >
            {CONTENT.header.subtitle}
          </p>
        </div>

        {/* --- PHẦN 2: CONTENT BODY (Card chứa Grid ảnh & Info) --- */}
        <div
          className="
          w-full bg-white border border-gray-100 rounded-[30px] 
          shadow-[0px_20px_50px_rgba(0,0,0,0.05)]
          p-[24px] md:p-[30px] 
          flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]
        "
        >
          {/* --- CỘT TRÁI: GRID MÁY MÓC (2x2) --- */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
            {CONTENT.machines.map((machine) => (
              <div
                key={machine.id}
                className="flex flex-col items-center gap-3"
              >
                {/* Khung ảnh */}
                <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Tên máy */}
                <span className="text-[#555555] text-[16px] font-medium">
                  {machine.name}
                </span>
              </div>
            ))}
          </div>

          {/* --- CỘT PHẢI: THÔNG TIN & NÚT --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            {/* DESCRIPTION BOX */}
            <div
              className="
              w-full
              text-center lg:text-left                 /* Mobile: Giữa | Desktop: Trái */
              py-2
              pl-0 lg:pl-6                             /* Mobile: Không padding | Desktop: Padding trái 24px */
              border-l-0 lg:border-l-[4px]             /* Mobile: Không viền | Desktop: Viền trái */
              border-[#FF0000]
            "
            >
              <p className="font-inter text-[16px] md:text-[20px] font-semibold text-gray-800 italic leading-relaxed">
                {CONTENT.info.description}
              </p>
            </div>

            {/* BUTTON */}
            <button
              // 3. Sự kiện chuyển trang
              onClick={() => navigate("/gioi-thieu")}
              className="
              flex items-center justify-center gap-3 
              h-[50px] px-8
              bg-[#FF0000] rounded-[25px] 
              text-white font-bold text-[16px]
              transition-all duration-300
              hover:scale-105 active:scale-95
              shadow-[0px_10px_20px_rgba(255,0,0,0.4)]
              hover:shadow-[0px_15px_30px_rgba(255,0,0,0.6)]
            "
            >
              {CONTENT.info.buttonText}
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
