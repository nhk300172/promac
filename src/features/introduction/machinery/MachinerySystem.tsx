// src/features/introduction/machinery/MachinerySystem.tsx

// --- IMPORT HÌNH ẢNH MÁY MÓC ---
import machine1 from "../../../assets/introduction-machinery/machinery1.png";
import machine2 from "../../../assets/introduction-machinery/machinery2.png";
import machine3 from "../../../assets/introduction-machinery/machinery3.png";

const MACHINES = [
  { id: 1, image: machine1, height: "353px", opacity: 0.5 },
  { id: 2, image: machine2, height: "330px", opacity: 0.8 },
  { id: 3, image: machine3, height: "330px", opacity: 0.5 },
  { id: 4, image: machine1, height: "353px", opacity: 0.5 },
  { id: 5, image: machine2, height: "330px", opacity: 0.8 },
  { id: 6, image: machine3, height: "330px", opacity: 0.5 },
];

export const MachinerySystem = () => {
  return (
    <section className="flex flex-col items-center bg-white w-full px-4 xl:px-0">
      {/* =================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Mobile (< 768px): List dọc, chiều cao so le (nghệ thuật).
          - Tablet (>= 768px): Grid 2 cột, chiều cao BẰNG NHAU (Fix lỗi lệch).
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden pt-[40px] pb-[60px]">
        {/* Header Mobile & Tablet */}
        <div className="flex flex-col items-center text-center mb-[32px] w-full max-w-[700px]">
          <h2 className="font-inter font-semibold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-[#000000]">
            Hệ thống máy móc hiện đại của chúng tôi
          </h2>
        </div>

        {/* Machine List */}
        <div className="w-full max-w-[326px] md:max-w-[700px] flex flex-col md:grid md:grid-cols-2 gap-[18px] md:gap-[24px]">
          {MACHINES.map((item, index) => (
            <div
              key={index}
              // SỬA LỖI Ở ĐÂY: Thêm md:!h-[360px]
              // - Mobile: Dùng style={{ height }} -> So le 353px/330px
              // - Tablet (md): Dùng !h-[360px] -> Ép tất cả cao bằng nhau 360px
              className="relative w-full rounded-[12px] overflow-hidden shadow-sm md:!h-[360px]"
              style={{ height: item.height }}
            >
              <img
                src={item.image}
                alt={`Machine ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Tint Overlay */}
              <div
                className="absolute inset-0 bg-[#0B0706]"
                style={{ opacity: item.opacity }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Grid 3 cột, chiều cao bằng nhau (421px)
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center w-full"
        style={{
          maxWidth: "1440px",
          paddingBottom: "50px",
        }}
      >
        <div className="flex flex-col items-center text-center mb-[68px]">
          <h2
            className="font-lato font-bold text-[#1D2130]"
            style={{
              fontSize: "50px",
              lineHeight: "100%",
              maxWidth: "1023px",
              width: "100%",
              whiteSpace: "normal",
            }}
          >
            Hệ thống máy móc hiện đại của chúng tôi
          </h2>
        </div>

        <div
          className="grid grid-cols-3 w-full"
          style={{
            maxWidth: "1280px",
            columnGap: "24px",
            rowGap: "68px",
          }}
        >
          {MACHINES.map((item, index) => {
            const isMiddleItem = index % 3 === 1;
            const overlayOpacity = isMiddleItem ? 0.8 : 0.5;

            return (
              <div
                key={index}
                className="relative group cursor-pointer w-full"
                style={{
                  height: "421px", // Desktop cao đều nhau
                }}
              >
                <div
                  className="w-full h-full overflow-hidden"
                  style={{ borderRadius: "12px" }}
                >
                  <img
                    src={item.image}
                    alt={`Machine ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-20"
                  style={{
                    backgroundColor: "#0B0706",
                    borderRadius: "12px",
                    opacity: overlayOpacity,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
