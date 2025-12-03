//src/features/home/HomeExperience.tsx

// --- IMPORT HÌNH ẢNH DỰ ÁN ---
import imgOnca from "../../assets/home-experience/onca.png";
import imgVarne from "../../assets/home-experience/varine.png"; // Lưu ý tên file 'varine.png'
import imgBeetl from "../../assets/home-experience/beetl.png";
import imgCoolfish from "../../assets/home-experience/coolfish.png";
import imgNantes from "../../assets/home-experience/nantesmural.png";
import imgVogue from "../../assets/home-experience/voguearabia2023.png";
import imgFreeletics from "../../assets/home-experience/freeletics2021.png";
import imgArab from "../../assets/home-experience/arabcharactersdesign.png"; // Tên dài đã check
import imgBagel from "../../assets/home-experience/bagel.png";
import imgDomo from "../../assets/home-experience/domo.png";
import imgTvShow from "../../assets/home-experience/tvshowduos.png";
import imgAbcd from "../../assets/home-experience/abcd.png";

// DỮ LIỆU DỰ ÁN (Đã gán ảnh)
const PROJECTS = [
  { title: "Onça", author: "", image: imgOnca },
  { title: "VARNE", author: "", image: imgVarne },
  {
    title: "Sunday Best & Someday Studio for BEETL",
    author: "",
    image: imgBeetl,
  },
  { title: "cool fish", author: "", image: imgCoolfish },

  { title: "NANTES MURAL", author: "", image: imgNantes },
  { title: "VOGUE ARABIA 2023", author: "", image: imgVogue },
  {
    title: "NEVER SETTLE – FREELETICS AD 2021",
    author: "",
    image: imgFreeletics,
  },
  { title: "Arab Character Design", author: "", image: imgArab },

  { title: "Bagel - Metascale", author: "", image: imgBagel },
  { title: "Domo - Brand Identity", author: "", image: imgDomo },
  { title: "TV Show Duos", author: "", image: imgTvShow },
  { title: "ABCD Consulting", author: "", image: imgAbcd },
];

export const HomeExperience = () => {
  return (
    <section className="flex flex-col items-center w-full">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px)
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pt-[40px]">
        {/* HEADER MOBILE */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[331px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] mb-[24px]">
            Kinh nghiệm dự án phong phú
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[25px] text-[#64607D] text-center tracking-[-0.02em]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>
        </div>

        {/* PROJECTS LIST MOBILE (Hiển thị 5 dự án đầu) */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {PROJECTS.slice(0, 5).map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-[331px]"
            >
              {/* Thumbnail - Sử dụng thẻ IMG */}
              <div
                className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[8px]"
                style={{ height: "255px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="font-inter font-bold text-[15px] leading-[18px] text-[#191919] text-center">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        {/* BUTTON "Xem tất cả" */}
        <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
          <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
            Xem tất cả
          </span>
        </button>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center w-full"
        style={{ height: "1280px", width: "1440px" }}
      >
        {/* HEADER SECTION */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: "1392px",
            height: "264px",
            marginBottom: "24px",
          }}
        >
          <h2
            className="font-inter font-extrabold text-[#000000]"
            style={{
              fontSize: "56px",
              lineHeight: "60px",
              marginBottom: "32px",
            }}
          >
            Kinh nghiệm dự án phong phú
          </h2>

          <p
            className="font-inter font-medium text-[#64607D]"
            style={{
              fontSize: "16px",
              lineHeight: "30px",
              marginBottom: "32px",
              maxWidth: "1000px",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>

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

        {/* PROJECTS GRID */}
        <div
          className="grid grid-cols-4"
          style={{
            width: "1392px",
            height: "953px",
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
              }}
            >
              {/* Image Container - Sử dụng thẻ IMG */}
              <div
                className="w-full bg-[#F2F2F2] overflow-hidden relative"
                style={{
                  marginTop: "10px",
                  height: "260.47px",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                className="flex flex-col justify-start"
                style={{ marginTop: "8px" }}
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
      </div>
    </section>
  );
};
