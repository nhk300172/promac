// Tạo mảng 6 phần tử rỗng để render layout
const MACHINES = Array(6).fill(null);

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
      {/* === 1. HEADER === 
          Top: 3725px (Trong Figma)
      */}
      <div className="flex flex-col items-center text-center mb-[68px]">
        {/* Margin Bottom = 3860 (Top Row 1) - 3725 (Top Text) - 67 (Height Text) = 68px */}

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

      {/* === 2. MACHINE GRID === 
          Width: 1280px
          Project Row: Height 421px
      */}
      <div
        className="grid grid-cols-3"
        style={{
          width: "1280px",

          columnGap: "23.5px",
          rowGap: "68px",
        }}
      >
        {MACHINES.map((_, index) => {
          const isMiddleItem = index % 3 === 1;
          const overlayOpacity = isMiddleItem ? 0.8 : 0.5;

          return (
            <div
              key={index}
              className="relative"
              style={{
                width: "411px",
                height: "421px",
              }}
            >
              {/* --- 1. IMAGE (Placeholder) --- 
                        Radius: 12px
                    */}
              <div
                className="w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden"
                style={{ borderRadius: "12px" }}
              >
                <span className="text-gray-500 font-medium text-lg">
                  Machine Image {index + 1}
                </span>
                {/* Sau này thay bằng: <img src="..." className="w-full h-full object-cover" /> */}
              </div>

              {/* --- 2. TINT (Lớp phủ màu đen) --- 
                      
                    */}
              <div
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 hover:opacity-30" // Hiệu ứng hover cho đẹp
                style={{
                  backgroundColor: "#0B0706",
                  borderRadius: "12px",
                  opacity: overlayOpacity, // Áp dụng logic opacity
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
