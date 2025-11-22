// DỮ LIỆU DỰ ÁN
const PROJECTS = [
  // Row 1
  { title: "Onça", author: "" },
  { title: "VARNE", author: "" },
  { title: "Sunday Best & Someday Studio for BEETL", author: "" },
  { title: "cool fish", author: "" },
  // Row 2
  { title: "NANTES MURAL", author: "" },
  { title: "VOGUE ARABIA 2023", author: "" },
  { title: "NEVER SETTLE – FREELETICS AD 2021", author: "" },
  { title: "Arab Character Design", author: "" },
  // Row 3
  { title: "Bagel - Metascale", author: "" },
  { title: "Domo - Brand Identity", author: "" },
  { title: "TV Show Duos", author: "" },
  { title: "ABCD Consulting", author: "" },
];

export const HomeExperience = () => {
  return (
    <section
      className="flex flex-col items-center w-full"
      style={{ height: "1280px", width: "1440px" }}
    >
      {/* ============================================================
          1. HEADER SECTION (Frame 396)
          Width: 1392px; Height: 264px;
      ============================================================ */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          width: "1392px",
          height: "264px", // Chiều cao cố định theo Figma
          marginBottom: "24px", // GAP giữa Header và Grid (theo Frame 397)
        }}
      >
        {/* Frame 395 Content */}

        {/* Title */}
        <h2
          className="font-inter font-extrabold text-[#000000]"
          style={{ fontSize: "56px", lineHeight: "60px", marginBottom: "32px" }}
        >
          Kinh nghiệm dự án phong phú
        </h2>

        {/* Description */}
        <p
          className="font-inter font-medium text-[#64607D]"
          style={{
            fontSize: "16px",
            lineHeight: "30px",
            marginBottom: "32px",
            maxWidth: "1000px", // Cho phép rộng hơn để không bị ngắt dòng sớm
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>

        {/* Button */}
        <button
          className="flex items-center justify-center bg-[#FF0000] rounded-full hover:bg-red-700 transition-colors"
          style={{
            width: "162px",
            height: "47px",
          }}
        >
          <span className="font-inter font-semibold text-[16px] text-white">
            Xem tất cả
          </span>
        </button>
      </div>

      {/* ============================================================
          2. PROJECTS GRID (Posts)
          Width: 1392px; Height: 953px;
          Grid 4 Cột, Gap 20px
      ============================================================ */}
      <div
        className="grid grid-cols-4"
        style={{
          width: "1392px",
          height: "953px", // Chiều cao tổng của lưới
          gap: "20px",
        }}
      >
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col group cursor-pointer relative"
            style={{
              width: "333px",
              height: "321.47px",
              // Không background, để trong suốt
            }}
          >
            {/* THUMBNAIL (Ảnh)
               Top: 10px
               Height: 260.47px
            */}
            <div
              className="w-full bg-[#F2F2F2] overflow-hidden relative"
              style={{
                marginTop: "10px", // Cách đỉnh card 10px
                height: "260.47px",
                borderRadius: "4px",
              }}
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-gray-500 text-sm">Project Img</span>
              </div>
            </div>

            {/* POST INFORMATION (Tiêu đề)
               Vị trí Figma: Top 278.47px
               Tính toán margin-top: 278.47 - (10 + 260.47) = 8px
            */}
            <div
              className="flex flex-col justify-start"
              style={{ marginTop: "8px" }} // Khoảng cách từ đáy ảnh xuống chữ
            >
              <h3
                className="font-inter font-bold text-[#191919] truncate"
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  textAlign: "left",
                }}
                title={project.title}
              >
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
