// src/features/introduction/MachinerySystem.tsx

// --- IMPORT HÌNH ẢNH MÁY MÓC ---
import machine1 from "../../../assets/introduction-machinery/machinery1.png";
import machine2 from "../../../assets/introduction-machinery/machinery2.png";
import machine3 from "../../../assets/introduction-machinery/machinery3.png";

// Tạo mảng dữ liệu 6 phần tử bằng cách lặp lại 3 ảnh
const MACHINES = [
  { id: 1, image: machine1 },
  { id: 2, image: machine2 },
  { id: 3, image: machine3 },
  { id: 4, image: machine1 }, // Lặp lại
  { id: 5, image: machine2 }, // Lặp lại
  { id: 6, image: machine3 }, // Lặp lại
];

export const MachinerySystem = () => {
  return (
    <section
      className="flex flex-col items-center bg-white"
      style={{
        width: "1440px",
        // Height theo Figma 1045px, nhưng để auto cho flex
        paddingBottom: "50px",
      }}
    >
      {/* === 1. HEADER === */}
      <div className="flex flex-col items-center text-center mb-[68px]">
        {/* Margin Bottom = 68px */}

        <h2
          className="font-lato font-bold text-[#1D2130]"
          style={{
            fontSize: "50px",
            lineHeight: "100%", // 67px
            width: "1023px",
            whiteSpace: "nowrap",
          }}
        >
          Hệ thống máy móc hiện đại của chúng tôi
        </h2>
      </div>

      {/* === 2. MACHINE GRID === */}
      <div
        className="grid grid-cols-3"
        style={{
          width: "1280px",
          columnGap: "23.5px",
          rowGap: "68px",
        }}
      >
        {MACHINES.map((item, index) => {
          // Logic cũ: Phần tử giữa (index 1, 4...) có opacity đậm hơn
          const isMiddleItem = index % 3 === 1;
          const overlayOpacity = isMiddleItem ? 0.8 : 0.5;

          return (
            <div
              key={index}
              className="relative group cursor-pointer" // Thêm group để hover ảnh hưởng con
              style={{
                width: "411px",
                height: "421px",
              }}
            >
              {/* --- 1. IMAGE --- */}
              <div
                className="w-full h-full overflow-hidden"
                style={{ borderRadius: "12px" }}
              >
                {/* Thay thế placeholder bằng ảnh thật */}
                <img
                  src={item.image}
                  alt={`Machine ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" // Thêm hiệu ứng zoom nhẹ
                />
              </div>

              {/* --- 2. TINT (Lớp phủ màu đen) --- */}
              <div
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-20" // Giảm độ tối khi hover để nhìn rõ ảnh hơn
                style={{
                  backgroundColor: "#0B0706",
                  borderRadius: "12px",
                  opacity: overlayOpacity, // Áp dụng logic opacity ban đầu
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
