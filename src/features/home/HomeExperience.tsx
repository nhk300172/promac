// src/features/home/HomeExperience.tsx

// ... (Import ảnh giữ nguyên)
import imgOnca from "../../assets/home-experience/onca.png";
import imgVarne from "../../assets/home-experience/varine.png";
import imgBeetl from "../../assets/home-experience/beetl.png";
import imgCoolfish from "../../assets/home-experience/coolfish.png";
import imgNantes from "../../assets/home-experience/nantesmural.png";
import imgVogue from "../../assets/home-experience/voguearabia2023.png";
import imgFreeletics from "../../assets/home-experience/freeletics2021.png";
import imgArab from "../../assets/home-experience/arabcharactersdesign.png";
import imgBagel from "../../assets/home-experience/bagel.png";
import imgDomo from "../../assets/home-experience/domo.png";
import imgTvShow from "../../assets/home-experience/tvshowduos.png";
import imgAbcd from "../../assets/home-experience/abcd.png";

const PROJECTS = [
  // ... (Data giữ nguyên)
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
    <section className="flex flex-col items-center w-full px-4 xl:px-0">
      {/* =================================================================
          1. HEADER SECTION (CHUNG CHO TABLET & DESKTOP)
          ================================================================= */}
      <div className="flex flex-col items-center text-center mb-[40px] xl:mb-[60px] w-full max-w-[1392px]">
        {/* Title */}
        <h2 className="font-inter font-bold  text-[#000000] text-[28px] md:text-[40px] lg:text-[48px] leading-[110%] mb-[24px] lg:mb-[32px]">
          Kinh nghiệm dự án phong phú
        </h2>

        {/* Desc */}
        <p className="font-inter font-medium text-[#64607D] text-[16px] md:text-[18px] lg:text-[20px] leading-[150%] max-w-[90%] lg:max-w-[1000px] mb-[32px]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>

        {/* Button - Chỉ hiện trên Mobile (theo thiết kế cũ), nhưng nếu muốn hiện trên Tablet/iPad cũng được */}
        <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] lg:w-[162px] lg:h-[47px] shadow-lg active:scale-95 transition-transform">
          <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
            Xem tất cả
          </span>
        </button>
      </div>

      {/* =================================================================
          2. PROJECTS GRID (RESPONSIVE)
          - Mobile (< 768px): Flex cột (hoặc Grid 1 cột)
          - Tablet (768px -> 1024px): Grid 2 cột
          - iPad Pro (1024px -> 1280px): Grid 3 cột (Cho thoáng)
          - Desktop (>= 1280px): Grid 4 cột (Chuẩn thiết kế gốc)
          ================================================================= */}
      <div
        className="w-full max-w-[1392px] grid gap-[20px] mb-[40px] xl:mb-0
                   grid-cols-1 
                   md:grid-cols-2 
                   lg:grid-cols-3 
                   xl:grid-cols-4"
      >
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col group cursor-pointer relative mx-auto w-full max-w-[333px]"
          >
            {/* Thumbnail */}
            <div className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[8px] relative aspect-[333/260]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title */}
            <div className="flex flex-col justify-start mt-[8px]">
              <h3
                className="font-inter font-bold text-[#191919] truncate text-[15px] md:text-[16px] xl:text-[14px] leading-[120%]"
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
