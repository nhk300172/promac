// src/features/introduction/MachinerySystem.tsx

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
    <section className="flex flex-col items-center bg-white w-full">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - DỌC 1 CỘT
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[25px] pt-[40px] pb-[60px]">
        {/* Header Mobile */}
        <div className="flex flex-col items-center text-center mb-[32px] w-full max-w-[326px]">
          <h2 className="font-inter font-semibold text-[28px] leading-[36px] text-[#000000]">
            Hệ thống máy móc hiện đại của chúng tôi
          </h2>
        </div>

        {/* Machine List Mobile (Vertical) */}
        <div className="flex flex-col gap-[18px] w-full max-w-[326px]">
          {MACHINES.map((item, index) => (
            <div
              key={index}
              className="relative w-full rounded-[12px] overflow-hidden shadow-sm"
              style={{ height: item.height }} // Chiều cao so le theo Figma
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
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center"
        style={{ width: "1440px", paddingBottom: "50px" }}
      >
        <div className="flex flex-col items-center text-center mb-[68px]">
          <h2
            className="font-lato font-bold text-[#1D2130]"
            style={{
              fontSize: "50px",
              lineHeight: "100%",
              width: "1023px",
              whiteSpace: "nowrap",
            }}
          >
            Hệ thống máy móc hiện đại của chúng tôi
          </h2>
        </div>

        <div
          className="grid grid-cols-3"
          style={{ width: "1280px", columnGap: "23.5px", rowGap: "68px" }}
        >
          {MACHINES.map((item, index) => {
            const isMiddleItem = index % 3 === 1;
            const overlayOpacity = isMiddleItem ? 0.8 : 0.5;

            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                style={{ width: "411px", height: "421px" }}
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
