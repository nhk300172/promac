// src/features/home/HomeProcess.tsx

// Dữ liệu Quy trình
import { motion } from "framer-motion";

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

  {
    title: "Design & Prototyping",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
  },
  {
    title: "Design & Prototyping",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
  },
];

// --- 1. COMPONENT MOBILE (< 768px) --- (GIỮ NGUYÊN KHÔNG ĐỔI)
const MobileProcess = () => {
  const stepCount = STEPS_DATA.length;
  const ITEM_GAP = 203;
  const START_TOP = 54;
  const dynamicLineHeight = (stepCount - 1) * ITEM_GAP;
  const dynamicContainerHeight = START_TOP + (stepCount - 1) * ITEM_GAP + 160;

  return (
    <div className="flex flex-col items-center w-full md:hidden px-[20px] pt-[40px] pb-[60px] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-[50px] w-full max-w-[328px]"
      >
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
      </motion.div>

      <div
        className="relative w-full max-w-[340px]"
        style={{ height: `${dynamicContainerHeight}px` }}
      >
        <div
          className="absolute w-[3px] bg-gray-100"
          style={{
            height: `${dynamicLineHeight}px`,
            left: "21px",
            top: "75px",
            zIndex: 0,
          }}
        />
        <motion.div
          className="absolute w-[3px] bg-[#F57059] shadow-[6px_0px_4px_rgba(0,0,0,0.25)] origin-top"
          style={{
            height: `${dynamicLineHeight}px`,
            left: "21px",
            top: "75px",
            zIndex: 1,
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {STEPS_DATA.map((step, index) => {
          const topPos = START_TOP + index * ITEM_GAP;
          const stepId = index + 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.5, duration: 0.5 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
              }}
            >
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
              <motion.div
                className="absolute z-10"
                style={{
                  left: "0px",
                  top: `${topPos}px`,
                  width: "43px",
                  height: "43px",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.5, type: "spring" }}
              >
                <div className="w-full h-full bg-white rounded-full shadow-sm relative border border-gray-100">
                  <div className="absolute w-[15.45px] h-[15.45px] bg-[#C4C4C4] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </motion.div>
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// --- 2. COMPONENT TABLET & IPAD (768px -> 1279px) --- (GIỮ NGUYÊN KHÔNG ĐỔI)
const TabletAndIpadProcess = () => {
  return (
    <div className="hidden md:flex xl:hidden flex-col items-center w-full px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-[60px] max-w-[800px]"
      >
        <h2 className="font-inter font-bold text-[32px] leading-[48px] text-[#000000] mb-[24px]">
          Quy trình làm việc chuyên nghiệp
        </h2>
        <p className="font-manrope font-medium text-[18px] leading-[28px] text-[#64607D] tracking-[-0.02em]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-8 w-full">
        {STEPS_DATA.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center relative group"
          >
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-[120px] font-black text-black opacity-[0.03] z-0">
              {index + 1}
            </div>
            <div className="relative w-[60px] h-[60px] bg-white rounded-full shadow-md flex items-center justify-center mb-6 z-10">
              <div className="w-[20px] h-[20px] bg-[#C4C4C4] rounded-full"></div>
            </div>
            <h3 className="font-manrope font-extrabold text-[20px] mb-3 text-black z-10">
              {step.title}
            </h3>
            <p className="font-manrope text-[16px] text-[#64607D] z-10">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[162px] h-[47px] mt-[60px] shadow-lg hover:bg-red-700 transition-colors">
        <span className="font-inter font-semibold text-[16px] text-white">
          Xem chi tiết
        </span>
      </button>
    </div>
  );
};

// --- 3. COMPONENT DESKTOP (>= 1280px) ---

type Position = { left: string; top: string };

const LAYOUT_CONFIG: Record<number, Position[]> = {
  3: [
    // Step 1: Đặt thấp xuống (600px) để đường line có chỗ "đổ dốc" từ trên cao xuống
    { left: "150px", top: "680px" },
    // Step 2: Đẩy lên cao tạo đỉnh sóng
    { left: "600px", top: "500px" },
    // Step 3: Thấp xuống lại để kết thúc mềm mại
    { left: "1050px", top: "280px" },
  ],
  4: [
    { left: "100px", top: "650px" },
    { left: "450px", top: "400px" },
    { left: "800px", top: "550px" },
    { left: "1150px", top: "350px" },
  ],
  5: [
    { left: "40px", top: "700px" }, // 1. Thấp
    { left: "320px", top: "400px" }, // 2. Cao (Đỉnh sóng 1)
    { left: "600px", top: "650px" }, // 3. Thấp (Thung lũng)
    { left: "880px", top: "420px" }, // 4. Cao (Đỉnh sóng 2 - cao hơn chút)
    { left: "1140px", top: "650px" }, // 5. Hạ xuống vừa phải để kết thúc
  ],
};

const DesktopProcess = () => {
  const stepCount = STEPS_DATA.length;
  const layout = LAYOUT_CONFIG[stepCount] || LAYOUT_CONFIG[3];

  const generateSmoothPath = () => {
    if (!layout || layout.length === 0) return "";

    // Lấy tâm của icon (+32px)
    const points = layout.map((pos) => ({
      x: parseInt(pos.left) + 32,
      y: parseInt(pos.top) + 32,
    }));

    // --- ĐIỂM QUAN TRỌNG: TẠO DỐC ĐỔ TỪ TRÊN CAO XUỐNG ---
    // Start Point (M): x = -100 (ngoài màn hình trái), y = points[0].y - 250 (Cao hơn điểm 1 250px)
    // Bezier Curve (C): Uốn cong mềm mại từ trên cao đáp xuống điểm 1
    let d = `M -100 ${points[0].y - 280} C ${points[0].x - 20} ${
      points[0].y - 280
    }, ${points[0].x - 250} ${points[0].y}, ${points[0].x} ${points[0].y}`;

    // Vẽ tiếp các đoạn còn lại (Sóng lượn)
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];

      const dist = next.x - curr.x;
      const tension = 0.5;

      const cp1x = curr.x + dist * tension;
      const cp1y = curr.y;

      const cp2x = next.x - dist * tension;
      const cp2y = next.y;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }

    // Điểm kết thúc (Lượn ra ngoài)
    const last = points[points.length - 1];
    d += ` C ${last.x + 200} ${last.y}, ${last.x + 220} ${last.y - 190}, ${
      last.x + 420
    } ${last.y - 200}`;

    return d;
  };

  return (
    <section
      className="hidden xl:flex relative w-full justify-center overflow-hidden"
      style={{ height: "926px" }}
    >
      <div className="relative w-[1440px] h-full z-10">
        {/* HEADER TEXT */}
        <div className="absolute left-[100px] top-[80px] z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-inter font-bold text-black"
              style={{
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
                width: "400px",
                fontSize: "16px",
                lineHeight: "28px",
                marginTop: "20px",
              }}
            >
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy.
            </p>
            <button
              className="mt-8 bg-[#FF0000] rounded-[47px] flex items-center justify-center transition-transform hover:scale-105 shadow-lg"
              style={{ width: "162px", height: "47px" }}
            >
              <span className="font-inter font-semibold text-[16px] text-white">
                Xem chi tiết
              </span>
            </button>
          </motion.div>
        </div>

        {/* SVG CURVE & STEPS */}
        <div className="absolute w-full top-[0px]" style={{ height: "100%" }}>
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="10"
                  floodColor="#F57059"
                  floodOpacity="0.3"
                />
              </filter>
            </defs>

            {/* Background Path */}
            <path
              d={generateSmoothPath()}
              stroke="#F57059"
              strokeWidth="5"
              strokeOpacity="0.1"
              fill="none"
              strokeLinecap="round"
            />

            {/* Main Animation Path */}
            <motion.path
              d={generateSmoothPath()}
              stroke="#F57059"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {STEPS_DATA.map((step, index) => {
            const pos = layout[index] || { left: "0", top: "0" };
            const delayTime = 0.5 + index * 0.7;

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col w-[280px]"
                style={{ left: pos.left, top: pos.top }}
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: delayTime,
                  type: "spring",
                  stiffness: 80,
                }}
              >
                <div
                  className="absolute font-inter font-black text-[#000000] opacity-[0.04] select-none pointer-events-none"
                  style={{
                    fontSize: "200px",
                    lineHeight: "200px",
                    left: "40%",
                    top: "-90px",
                    zIndex: 0,
                  }}
                >
                  {index + 1}
                </div>
                <div className="relative w-[64px] h-[64px] bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center mb-[20px] z-10">
                  <div className="w-[24px] h-[24px] bg-[#C4C4C4] rounded-[8px]" />
                </div>
                <div className="relative z-10 pr-4">
                  <h3
                    className="font-manrope font-extrabold text-[#000000] mb-2"
                    style={{ fontSize: "18px", lineHeight: "26px" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-manrope font-medium text-[#64607D]"
                    style={{ fontSize: "15px", lineHeight: "26px" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
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
      <TabletAndIpadProcess />
      <DesktopProcess />
    </>
  );
};
