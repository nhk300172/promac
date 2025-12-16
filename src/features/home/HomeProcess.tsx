// src/features/home/HomeProcess.tsx

// Dữ liệu Quy trình
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

// --- 1. COMPONENT MOBILE (< 768px) ---
const MobileProcess = () => {
  const stepCount = STEPS_DATA.length;
  const ITEM_GAP = 203;
  const START_TOP = 54;
  const dynamicLineHeight = (stepCount - 1) * ITEM_GAP;
  const dynamicContainerHeight = START_TOP + (stepCount - 1) * ITEM_GAP + 160;

  return (
    <div className="flex flex-col items-center w-full md:hidden px-[20px] pt-[40px] pb-[60px] relative overflow-hidden">
      {/* HEADER MOBILE */}
      <div className="flex flex-col items-center text-center mb-[50px] w-full max-w-[328px]">
        <h2 className="font-inter font-bold text-[28px] leading-[32px] text-[#000000] mb-[24px]">
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

      {/* PROCESS LIST CONTAINER */}
      <div
        className="relative w-full max-w-[340px]"
        style={{ height: `${dynamicContainerHeight}px` }}
      >
        <div
          className="absolute w-[3px] bg-[#F57059] shadow-[6px_0px_4px_rgba(0,0,0,0.25)]"
          style={{
            height: `${dynamicLineHeight}px`,
            left: "21px",
            top: "75px",
            zIndex: 0,
          }}
        />

        {STEPS_DATA.map((step, index) => {
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
              {/* WATERMARK NUMBER */}
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

              {/* ICON */}
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

              {/* CONTENT */}
              <div
                className="absolute flex flex-col items-start"
                style={{ left: "59px", top: `${topPos}px`, width: "279px" }}
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

// --- 2. COMPONENT TABLET & IPAD (768px -> 1279px) ---
// Dùng Grid đơn giản thay vì SVG phức tạp để đảm bảo responsive tốt
const TabletAndIpadProcess = () => {
  return (
    <div className="hidden md:flex xl:hidden flex-col items-center w-full px-8 py-10">
      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-[60px] max-w-[800px]">
        <h2 className="font-inter font-bold text-[32px] leading-[48px] text-[#000000] mb-[24px]">
          Quy trình làm việc chuyên nghiệp
        </h2>
        <p className="font-manrope font-medium text-[18px] leading-[28px] text-[#64607D] tracking-[-0.02em]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>
      </div>

      {/* STEPS GRID (3 Cột) */}
      <div className="grid grid-cols-3 gap-8 w-full">
        {STEPS_DATA.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative group"
          >
            {/* Number Background */}
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-[120px] font-black text-black opacity-[0.03] z-0">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="relative w-[60px] h-[60px] bg-white rounded-full shadow-md flex items-center justify-center mb-6 z-10">
              <div className="w-[20px] h-[20px] bg-[#C4C4C4] rounded-full"></div>
            </div>

            {/* Content */}
            <h3 className="font-manrope font-extrabold text-[20px] mb-3 text-black z-10">
              {step.title}
            </h3>
            <p className="font-manrope text-[16px] text-[#64607D] z-10">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[162px] h-[47px] mt-[60px] shadow-lg hover:bg-red-700 transition-colors">
        <span className="font-inter font-semibold text-[16px] text-white">
          Xem chi tiết
        </span>
      </button>
    </div>
  );
};

// --- 3. COMPONENT DESKTOP (>= 1280px) - GIỮ NGUYÊN CODE CŨ ---
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

    let d = `M 0 ${points[1].y - 100} C 20 ${points[0].y - 50}, ${
      points[0].x - 100
    } ${points[0].y}, ${points[0].x} ${points[0].y}`;
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
    d += ` C ${last.x + 100} ${last.y}, ${last.x + 300} ${last.y - 150}, ${
      last.x + 400
    } ${last.y + 0}`;
    return d;
  };

  return (
    <section
      className="hidden xl:flex relative w-full justify-center overflow-hidden"
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
            className="font-inter font-bold text-black"
            style={{
              width: "940px",
              fontSize: "48px",
              lineHeight: "60px",
              whiteSpace: "nowrap",
            }}
          >
            Quy trình làm việc chuyên nghiệp, <br /> Chính sách rõ ràng.
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
      <TabletAndIpadProcess /> {/* Component mới */}
      <DesktopProcess />
    </>
  );
};
