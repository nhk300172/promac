// src/features/projects/ProjectListing.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectSearchFilter } from "./ProjectSearchFilter";

// --- IMPORT 12 HÌNH ẢNH DỰ ÁN ---
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";
import project7 from "../../assets/projects/project7.png";
import project8 from "../../assets/projects/project8.png";
import project9 from "../../assets/projects/project9.png";
import project10 from "../../assets/projects/project10.png";
import project11 from "../../assets/projects/project11.png";
import project12 from "../../assets/projects/project12.png";

// Danh sách ảnh để lặp
const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
];

// DỮ LIỆU GIẢ: 60 Dự án
const PROJECT_DATA = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  date: "August 2024",
  client: "Vinamilk Corp",
  title: `Dự án số ${i + 1}: Thiết kế bao bì hộp sữa cao cấp`,
  slug: `du-an-so-${i + 1}`,
  desc: "Dự án thiết kế và in ấn bao bì hộp cứng 5 lớp với công nghệ in UV định hình, đảm bảo độ bền và tính thẩm mỹ cao cho sản phẩm.",
  image: projectImages[i % projectImages.length],
  tag: i % 2 === 0 ? "Bao bì" : "In ấn",
}));

const ITEMS_PER_PAGE = 12;

export const ProjectListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // 1. Filter Logic
  const filteredProjects = PROJECT_DATA.filter((item) => {
    if (!searchTerm || searchTerm === "Tất cả") return true;
    const lowerTerm = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerTerm) ||
      item.tag.toLowerCase().includes(lowerTerm)
    );
  });

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleSearchFilter = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const goToDetail = (slug: string) => {
    navigate(`/du-an/${slug}`);
    window.scrollTo(0, 0);
  };

  // Style responsive cho nút phân trang
  const navBtnStyle = (disabled: boolean) => `
    flex items-center justify-center gap-[4px] h-[36px] md:h-[40px] rounded-[10px] transition-all border px-3
    ${
      disabled
        ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
        : "border-[#828282] text-[#7D7D7D] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white cursor-pointer"
    }
  `;

  return (
    <section className="w-full flex flex-col items-center px-4 xl:px-0">
      {/* 1. MOBILE VERSION (< 768px) */}
      <div className="flex flex-col items-center w-full md:hidden px-[20px] pt-[40px] pb-[40px]">
        {/* HEADER MOBILE */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px]">
          <h2 className="font-inter font-bold text-[28px] leading-[36px] text-[#000000] mb-[24px]">
            Danh mục dự án
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[19px] text-[#000000] text-center">
            Khám phá danh mục sản phẩm đa dạng của chúng tôi, thể hiện chất
            lượng in ấn vượt trội trên nhiều lĩnh vực và ngành nghề khác nhau.
          </p>
        </div>

        {/* SEARCH BAR MOBILE */}
        <div className="w-[322px] h-[56px] relative mb-[40px]">
          <div className="w-full h-full border border-[#4D80C4] rounded-[6px] bg-white flex items-center pl-[12px] pr-[60px]">
            <input
              type="text"
              placeholder="Chọn chủ đề hoặc gõ từ khóa"
              className="w-full h-full outline-none text-[15px] text-black placeholder-[#959595] font-inter"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="absolute right-[8px] top-[8px] w-[46px] h-[40px] bg-[#FF0000] rounded-[3px] flex items-center justify-center">
            <Search className="w-[20px] h-[20px] text-white" strokeWidth={3} />
          </button>
        </div>

        {/* PROJECT LIST MOBILE */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[20px]">
          {currentProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetail(item.slug)}
              className="flex flex-col w-[326px] cursor-pointer group"
            >
              <div className="w-full h-[230px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden mb-[12px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[4px]">
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F] mx-1">
                    |
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {item.client}
                  </span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-inter font-semibold text-[16px] leading-[19px] text-[#000000]">
                    {item.title}
                  </h3>
                  <p className="font-inter font-normal text-[15px] leading-[24px] text-[#828282] line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-col items-start group/btn">
                  <div className="flex items-center gap-[8px]">
                    <span className="font-inter font-bold text-[16px] text-[#FF0000] leading-[19px]">
                      Xem chi tiết
                    </span>
                    <div className="relative w-[18px] h-[10px] flex items-center transition-transform group-hover/btn:translate-x-1">
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5H17"
                          stroke="#FF0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 1L17 5L13 9"
                          stroke="#FF0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ĐÃ XÓA NÚT "XEM THÊM" */}
      </div>

      {/* 2. TABLET & IPAD PRO VERSION (768px -> 1279px) */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[1000px] mb-[40px]">
        <div className="flex flex-col items-center text-center mt-[60px] mb-[60px] w-full max-w-[800px]">
          <h2 className="font-bold text-[#0E0E0E] text-[40px] leading-[140%]">
            Danh mục dự án
          </h2>
          <p className="font-semibold text-[#000000] mt-[20px] text-[18px] leading-[24px]">
            Khám phá danh mục sản phẩm đa dạng của chúng tôi, thể hiện chất
            lượng in ấn vượt trội.
          </p>
        </div>
        <div className="mb-[60px] w-full flex justify-center">
          <ProjectSearchFilter onSearch={handleSearchFilter} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
          {currentProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetail(item.slug)}
              className="flex flex-col w-full group cursor-pointer"
            >
              <div className="w-full aspect-[380/268] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[16px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="mx-1">|</span>
                  <span className="font-inter font-semibold text-[16px] text-[#4F4F4F]">
                    {item.client}
                  </span>
                </div>
                <h3 className="font-inter font-medium text-[#000000] text-[20px] leading-[1.3] mb-[12px] group-hover:text-[#FF0000] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[#828282] text-[16px] leading-[1.6] mb-[20px] line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center gap-[8px] group/btn">
                  <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                    Xem chi tiết
                  </span>
                  <div className="relative w-[18px] h-[10px] flex items-center transition-transform group-hover/btn:translate-x-1">
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5H17"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 1L17 5L13 9"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ĐÃ XÓA PAGINATION RIÊNG */}
      </div>

      {/* 3. DESKTOP VERSION (>= 1280px) */}
      <div className="hidden xl:flex flex-col items-center">
        <div className="flex flex-col items-center text-center mt-[100px] mb-[80px] w-[1074px]">
          <h2
            className="font-bold text-[#0E0E0E]"
            style={{
              fontFamily: "Inter",
              fontSize: "56px",
              lineHeight: "140%",
            }}
          >
            Danh mục dự án
          </h2>
          <p
            className="font-semibold text-[#000000] mt-[20px]"
            style={{
              fontFamily: "inter",
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Khám phá danh mục sản phẩm đa dạng của chúng tôi, thể hiện chất
            lượng in ấn vượt trội trên nhiều lĩnh vực và ngành nghề khác nhau.
          </p>
        </div>
        <div className="mb-[100px] w-full flex justify-center">
          <ProjectSearchFilter onSearch={handleSearchFilter} />
        </div>
        <div
          className="grid grid-cols-3 mb-[60px]"
          style={{ width: "1318px", columnGap: "22px", rowGap: "50px" }}
        >
          {currentProjects.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[380px] group cursor-pointer"
              onClick={() => goToDetail(item.slug)}
            >
              {/* ... (Nội dung Desktop giữ nguyên) ... */}
              <div className="w-full h-[268px] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                    {item.date}
                  </span>
                  <span className="mx-1">|</span>
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                    {item.client}
                  </span>
                </div>
                <h3 className="font-inter font-medium text-[#000000] text-[24px] leading-[29px] mb-[12px] group-hover:text-[#FF0000] transition-colors">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[#828282] text-[18px] leading-[160%] mb-[20px] line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center gap-[8px] group/btn">
                  <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                    Xem chi tiết
                  </span>
                  <div className="relative w-[18px] h-[10px] flex items-center transition-transform group-hover/btn:translate-x-1">
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5H17"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 1L17 5L13 9"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SHARED PAGINATION (HIỂN THỊ CHUNG) */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-[15px] md:gap-[32px] mb-[60px] lg:mb-[100px] w-full">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`${navBtnStyle(
              currentPage === 1
            )} w-auto min-w-[40px] md:w-[115px]`}
          >
            <ChevronLeft className="w-[16px] h-[16px]" />
            <span className="hidden md:inline font-inter font-normal text-[14px]">
              Previous
            </span>
          </button>

          <div className="flex items-center gap-[5px] md:gap-[10px]">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-[36px] h-[36px] md:w-[40px] md:h-[40px] flex items-center justify-center border rounded-[10px] font-inter text-[14px] transition-all ${
                    isActive
                      ? "border-[#FF0000] text-[#FF0000] font-bold"
                      : "border-[#828282] text-[#828282] hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`${navBtnStyle(
              currentPage === totalPages
            )} w-auto min-w-[40px] md:w-[91px]`}
          >
            <span className="hidden md:inline font-inter font-normal text-[14px]">
              Next
            </span>
            <ChevronRight className="w-[16px] h-[16px]" />
          </button>
        </div>
      )}
    </section>
  );
};
