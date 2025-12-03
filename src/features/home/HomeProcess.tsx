//src/features/home/HomeProcess.tsx

// Dữ liệu Quy trình (Thử thêm 1 bước nữa thành 4 để test)
const STEPS_DATA = [
  {
    title: "Project Discovery Call",
    desc: "Party we years to order allow asked of. We so opinion friends me message as delight.",
  },
  {
    title: "Research & Analysis",
    desc: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
  },
  {
    title: "Design & Prototyping",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
  },
];

// --- 1. COMPONENT MOBILE (DYNAMIC HEIGHT) ---
const MobileProcess = () => {
  const stepCount = STEPS_DATA.length;

  // Kích thước chuẩn từ Figma
  const ITEM_GAP = 203; // Khoảng cách giữa các bước
  const START_TOP = 54; // Vị trí bắt đầu của bước 1

  // Tính toán chiều cao đường kẻ đỏ (Nối từ tâm icon đầu đến tâm icon cuối)
  const dynamicLineHeight = (stepCount - 1) * ITEM_GAP;

  // Tính toán chiều cao tổng của khung chứa (Để không bị cắt mất bước cuối)
  // = Vị trí top bước cuối + Chiều cao của 1 item (~160px)
  const dynamicContainerHeight = START_TOP + (stepCount - 1) * ITEM_GAP + 160;

  return (
    <div className="flex flex-col items-center w-full lg:hidden px-[20px] pt-[40px] pb-[60px] relative overflow-hidden">
      {/* HEADER MOBILE */}
      <div className="flex flex-col items-center text-center mb-[50px] w-full max-w-[328px] ">
        <h2 className="font-inter font-bold text-[28px] leading-[32px] text-[#000000] mb-[24px] white-space-nowrap">
          Quy trình làm việc chuyên nghiệp, Chính sách rõ ràng.
        </h2>
        <p className="font-manrope font-medium text-[16px] leading-[24px] text-[#64607D] tracking-[-0.02em]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>
        <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] mt-[24px] shadow-lg active:scale-95 transition-transform">
          <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
            Xem chi tiết
          </span>
        </button>
      </div>

      {/* PROCESS LIST CONTAINER (DYNAMIC HEIGHT) */}
      <div
        className="relative w-full max-w-[340px]"
        style={{ height: `${dynamicContainerHeight}px` }} // Chiều cao tự động
      >
        {/* LINE NỐI DỌC (DYNAMIC HEIGHT) */}
        <div
          className="absolute w-[3px] bg-[#F57059] shadow-[6px_0px_4px_rgba(0,0,0,0.25)]"
          style={{
            height: `${dynamicLineHeight}px`, // Chiều cao tự động theo số bước
            left: "21px", // Căn giữa icon (43px / 2)
            top: "75px", // Bắt đầu từ tâm icon 1 (54px + 43px/2)
            zIndex: 0,
          }}
        />

        {/* STEPS LOOP */}
        {STEPS_DATA.map((step, index) => {
          // Tính vị trí Top cho từng bước
          const topPos = START_TOP + index * ITEM_GAP;
          const stepId = index + 1;

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              {/* 1. SỐ NỀN (Watermark) */}
              <div
                className="absolute font-inter font-black text-[#000000] opacity-[0.05] pointer-events-none"
                style={{
                  fontSize: "204px",
                  lineHeight: "204px",
                  letterSpacing: "-0.02em",
                  left: "254px",
                  top: `${topPos - 54}px`,
                }}
              >
                {stepId}
              </div>

              {/* 2. ICON GROUP */}
              <div
                className="absolute z-10"
                style={{
                  left: "0px",
                  top: `${topPos}px`,
                  width: "43px",
                  height: "43px",
                }}
              >
                <div className="w-full h-full bg-white rounded-full shadow-sm relative">
                  <div className="absolute w-[15.45px] h-[15.45px] bg-[#C4C4C4] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* 3. CONTENT */}
              <div
                className="absolute flex flex-col items-start"
                style={{
                  left: "59px",
                  top: `${topPos}px`,
                  width: "279px",
                }}
              >
                <h3 className="font-manrope font-extrabold text-[15px] leading-[30px] tracking-[-0.03em] text-[#000000]">
                  {step.title}
                </h3>
                <p className="font-manrope font-medium text-[15px] leading-[24px] tracking-[-0.02em] text-[#64607D]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- 2. COMPONENT DESKTOP (GIỮ NGUYÊN CODE CŨ) ---
type Position = { left: string; top: string };

const LAYOUT_CONFIG: Record<number, Position[]> = {
  3: [
    { left: "188px", top: "587px" },
    { left: "609px", top: "433px" },
    { left: "1084px", top: "305px" },
  ],
  4: [
    { left: "100px", top: "706px" },
    { left: "468px", top: "600px" },
    { left: "867px", top: "500px" },
    { left: "1147px", top: "330px" },
  ],
  5: [
    { left: "70px", top: "680px" },
    { left: "350px", top: "720px" },
    { left: "550px", top: "550px" },
    { left: "830px", top: "500px" },
    { left: "1110px", top: "300px" },
  ],
};

const DesktopProcess = () => {
  const stepCount = STEPS_DATA.length;
  const layout = LAYOUT_CONFIG[stepCount] || LAYOUT_CONFIG[4];

  const generateSCurvePath = () => {
    if (!layout || layout.length === 0) return "";

    const points = layout.map((pos) => ({
      x: parseInt(pos.left) + 31,
      y: parseInt(pos.top) + 31,
    }));

    let d = `M 0 ${points[1].y - 100} 
             C 20 ${points[0].y - 50}, 
               ${points[0].x - 100} ${points[0].y}, 
               ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const dist = (next.x - curr.x) / 2;

      const cp1x = curr.x + dist;
      const cp1y = curr.y + 40;

      const cp2x = next.x - dist - 10;
      const cp2y = next.y;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }

    const last = points[points.length - 1];

    d += ` C ${last.x + 100} ${last.y}, 
           ${last.x + 300} ${last.y - 150}, 
           ${last.x + 400} ${last.y + 0}`;

    return d;
  };

  return (
    <section
      className="hidden lg:flex relative w-full justify-center overflow-hidden"
      style={{ height: "926px" }}
    >
      <div
        className="absolute rounded-full bg-[#F5F8FF]"
        style={{
          width: "456px",
          height: "456px",
          left: "1115px",
          top: "182px",
          zIndex: 0,
        }}
      />

      <div className="relative w-[1440px] h-full z-10">
        <div className="absolute left-[125px] top-[126px] z-20">
          <h2
            className="font-inter font-extrabold text-black"
            style={{
              width: "940px",
              fontSize: "56px",
              lineHeight: "60px",
              whiteSpace: "nowrap",
            }}
          >
            Quy trình làm việc chuyên nghiệp,
            <br />
            Chính sách rõ ràng.
          </h2>

          <p
            className="font-manrope font-medium text-[#64607D]"
            style={{
              width: "367px",
              fontSize: "16px",
              lineHeight: "30px",
              letterSpacing: "-0.02em",
              marginTop: "21px",
            }}
          >
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>

          <button
            className="absolute bg-[#FF0000] rounded-[47px] flex items-center justify-center transition-transform hover:scale-105"
            style={{
              width: "162px",
              height: "47px",
              left: "0px",
              top: "250px",
            }}
          >
            <span className="font-inter font-semibold text-[16px] text-white">
              Xem chi tiết
            </span>
          </button>
        </div>

        <div className="absolute w-full top-[0px]" style={{ height: "100%" }}>
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="24"
                  stdDeviation="24"
                  floodColor="#3734A9"
                  floodOpacity="0.3"
                />
              </filter>
            </defs>

            <path
              d={generateSCurvePath()}
              stroke="#F57059"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              filter="url(#glow)"
            />
          </svg>

          {STEPS_DATA.map((step, index) => {
            const pos = layout[index] || { left: "0", top: "0" };

            return (
              <div
                key={index}
                className="absolute flex flex-col w-[280px]"
                style={{ left: pos.left, top: pos.top }}
              >
                <div
                  className="absolute font-inter font-black text-[#000000] opacity-[0.05] select-none pointer-events-none"
                  style={{
                    fontSize: "204px",
                    lineHeight: "204px",
                    letterSpacing: "-0.02em",
                    left: "170px",
                    top: "-13px",
                    zIndex: 0,
                  }}
                >
                  {index + 1}
                </div>

                <div
                  className="relative w-[64px] h-[64px] bg-white rounded-[20px] shadow-sm flex items-center justify-center mb-[20px] z-10"
                  style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.05)" }}
                >
                  <div className="w-[23px] h-[23px] bg-[#C4C4C4] rounded-[10px]" />
                </div>

                <div className="relative z-10">
                  <h3
                    className="font-manrope font-extrabold text-[#000000]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "30px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-manrope font-medium text-[#64607D]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "30px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const HomeProcess = () => {
  return (
    <>
      <MobileProcess />
      <DesktopProcess />
    </>
  );
};
