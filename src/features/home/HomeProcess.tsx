// 1. CẤU HÌNH TOẠ ĐỘ (Giữ nguyên thông số chuẩn bạn gửi)
const LAYOUT_CONFIG: Record<number, { left: string; top: string }[]> = {
  3: [
    { left: "180px", top: "450px" },
    { left: "609px", top: "234px" },
    { left: "1084px", top: "106px" },
  ],
  4: [
    { left: "100px", top: "436px" },
    { left: "468px", top: "300px" },
    { left: "867px", top: "200px" },
    { left: "1147px", top: "30px" },
  ],
  5: [
    { left: "50px", top: "380px" },
    { left: "400px", top: "430px" },
    { left: "600px", top: "250px" },
    { left: "850px", top: "200px" },
    { left: "1100px", top: "70px" },
  ],
};

// 2. DỮ LIỆU BƯỚC
const STEPS_DATA = [
  {
    title: "Project Discovery Call",
    desc: "Party we years to order allow asked of.",
  },
  {
    title: "Project Discovery Call",
    desc: "His defective nor convinced residence own.",
  },
  {
    title: "Project Discovery Call",
    desc: "From they fine john he give of rich he.",
  },

  // { title: "Step 5 Test", desc: "Testing auto connect line." },
];
export const HomeProcess = () => {
  const stepCount = STEPS_DATA.length;
  const layout = LAYOUT_CONFIG[stepCount] || LAYOUT_CONFIG[4];

  // --- HÀM VẼ S-CURVE HOÀN HẢO (FIXED PARAMS) ---
  const generateSCurvePath = () => {
    if (!layout || layout.length === 0) return "";

    // 1. Lấy toạ độ TÂM của các Icon
    const points = layout.map((pos) => ({
      x: parseInt(pos.left) + 32,
      y: parseInt(pos.top) + 32,
    }));

    // 2. ĐIỂM BẮT ĐẦU:
    // - Xuất phát từ mép trái (x=0).
    // - Độ cao: Cao hơn điểm 1 khoảng 150px (y - 150).
    // - Uốn cong mềm mại vào tâm điểm 1.
    let d = `M 0 ${points[0].y - 150} 
             C 100 ${points[0].y - 150}, 
               ${points[0].x - 100} ${points[0].y}, 
               ${points[0].x} ${points[0].y}`;

    // 3. CÁC ĐOẠN GIỮA (PURE S-CURVE):
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];

      // LOGIC: Đường cong luôn đi ngang tại các điểm nối (Tangent = 0)
      // Giúp đường dây mượt mà, không bị gãy khúc.
      const dist = (next.x - curr.x) / 2; // Điểm uốn nằm chính giữa chiều ngang

      // Control Point 1: Từ điểm hiện tại kéo ngang sang phải
      const cp1x = curr.x + dist;
      const cp1y = curr.y;

      // Control Point 2: Từ điểm tiếp theo kéo ngang sang trái
      const cp2x = next.x - dist;
      const cp2y = next.y;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }

    // 4. ĐIỂM KẾT THÚC:
    // - Từ điểm cuối cùng, lượn tiếp lên trên và ra ngoài màn hình phải.
    const last = points[points.length - 1];

    // Kéo ra xa 200px, nâng lên cao 100px so với điểm cuối
    d += ` C ${last.x + 150} ${last.y}, 
             1350 ${last.y - 100}, 
             1440 ${last.y - 150}`;

    return d;
  };

  return (
    <section
      className="relative w-full flex justify-center overflow-hidden"
      style={{ height: "926px" }}
    >
      {/* Background Ellipse */}
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

      {/* CONTAINER CHÍNH */}
      <div className="relative w-[1440px] h-full z-10">
        {/* HEADER LEFT */}
        <div className="absolute left-[125px] top-[126px] z-20">
          {/* HEADING */}
          <h2
            className="font-inter font-extrabold text-black"
            style={{
              width: "940px",
              fontSize: "56px",
              lineHeight: "60px",
            }}
          >
            Quy trình làm việc chuyên nghiệp,
            <br />
            Chính sách rõ ràng.
          </h2>

          {/* DESCRIPTION */}
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

          {/* BUTTON */}
          <button
            className="absolute bg-[#FF0000] rounded-[47px] flex items-center justify-center"
            style={{
              width: "162px",
              height: "47px",
              left: "0px",
              top: "250px", // 126 + 120 + ~4 spacing ≈ 376px Figma
            }}
          >
            <span className="font-inter font-semibold text-[16px] text-white">
              Xem chi tiết
            </span>
          </button>
        </div>

        {/* PROCESS STEPS AREA */}
        <div
          className="absolute w-full top-[223px]"
          style={{ height: "658px" }}
        >
          {/* --- VECTOR LINE (SVG) --- */}
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

          {/* RENDER STEPS */}
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
                    fontSize: "190px",
                    lineHeight: "204px",
                    letterSpacing: "-0.02em",
                    right: "-20px",
                    top: "-10px",
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
