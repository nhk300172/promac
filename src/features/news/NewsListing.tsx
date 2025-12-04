//src/features/news/NewsListing.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NewsSearchFilter } from "./NewsSearchFilter"; // Component search của Desktop

// --- IMPORT HÌNH ẢNH TIN TỨC ---
import news1 from "../../assets/home-experience/onca.png";
import news2 from "../../assets/news/news1.png";
import news3 from "../../assets/news/news2.png";
import news4 from "../../assets/news/news3.png";
import news5 from "../../assets/home-experience/voguearabia2023.png";
import news6 from "../../assets/home-experience/coolfish.png";
import news7 from "../../assets/home-experience/domo.png";
import news8 from "../../assets/home-experience/freeletics2021.png";
import news9 from "../../assets/home-experience/bagel.png";
import news10 from "../../assets/news/news10.png";
import news11 from "../../assets/news/news11.png";
import news12 from "../../assets/news/news12.png";

// Danh sách ảnh để dùng vòng lặp
const newsImages = [
  news1,
  news2,
  news3,
  news4,
  news5,
  news6,
  news7,
  news8,
  news9,
  news10,
  news11,
  news12,
];

// DỮ LIỆU MẪU (Tăng lên 75 bài để đủ full 5 trang)
const NEWS_DATA = Array.from({ length: 75 }).map((_, i) => ({
  id: i + 1,
  date: "22 July 2024",
  readTime: "Read 4 min",
  title: `Bài viết số ${i + 1}: Our SaaS Product Just Launched!`,
  slug: `bai-viet-so-${i + 1}`,
  desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
  // Lấy ảnh theo thứ tự vòng lặp
  image: newsImages[i % newsImages.length],
  tag: i % 2 === 0 ? "In ấn" : "Voucher",
}));

const ITEMS_PER_PAGE = 15;

export const NewsListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Logic lọc & phân trang
  const filteredNews = NEWS_DATA.filter((item) => {
    if (!searchTerm || searchTerm === "Tất cả") return true;
    const lowerTerm = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerTerm) ||
      item.tag.toLowerCase().includes(lowerTerm)
    );
  });

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(
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
    navigate(`/tin-tuc/${slug}`);
    window.scrollTo(0, 0);
  };

  const navBtnStyle = (disabled: boolean) => `
    flex items-center justify-center gap-[4px] h-[40px] rounded-[10px] transition-all border
    ${
      disabled
        ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
        : "border-[#828282] text-[#7D7D7D] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white cursor-pointer"
    }
  `;

  return (
    <section className="w-full flex flex-col items-center">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px)
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pt-[40px] pb-[60px]">
        {/* HEADER MOBILE */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px]">
          <h2 className="font-inter font-bold text-[28px] leading-[36px] text-[#000000] mb-[24px]">
            Trung tâm kiến thức
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

        {/* NEWS LIST MOBILE */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {currentNews.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetail(item.slug)}
              className="flex flex-col w-[326px] cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="w-full h-[230px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden mb-[12px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[16px]">
                {/* Meta */}
                <div className="flex items-center gap-[4px]">
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F] mx-1">
                    |
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {item.readTime}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-inter font-semibold text-[16px] leading-[19px] text-[#000000]">
                    {item.title}
                  </h3>
                  <p className="font-inter font-normal text-[15px] leading-[24px] text-[#828282] line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Button "Đọc ngay" */}
                <div className="flex flex-col items-start group/btn">
                  <div className="flex items-center gap-[8px]">
                    <span className="font-inter font-bold text-[16px] text-[#FF0000] leading-[19px]">
                      Đọc ngay
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

        {/* BUTTON "Xem thêm" (MOBILE) */}
        <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
          <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
            Xem thêm
          </span>
        </button>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center">
        {/* Title & Search */}
        <div className="flex flex-col items-center text-center mt-[100px] mb-[80px] w-[1074px]">
          <h2
            className="font-bold text-[#0E0E0E]"
            style={{
              fontFamily: "Inter",
              fontSize: "56px",
              lineHeight: "140%",
            }}
          >
            Trung Tâm Kiến Thức
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

        <div className="mb-[100px]">
          <NewsSearchFilter onSearch={handleSearchFilter} />
        </div>

        {/* Grid Section */}
        <div
          className="grid grid-cols-3 mb-[100px]"
          style={{ width: "1318px", columnGap: "22px", rowGap: "50px" }}
        >
          {currentNews.length > 0 ? (
            currentNews.map((item) => (
              <div
                key={item.id}
                className="flex flex-col w-[380px] group cursor-pointer"
                onClick={() => goToDetail(item.slug)}
              >
                {/* Thumbnail */}
                <div className="w-full h-[268px] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-[4px] mb-[12px]">
                    <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                      {item.date}
                    </span>
                    <span className="mx-1">|</span>
                    <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                      {item.readTime}
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
                      Đọc ngay
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
                  <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 text-xl py-10">
              Không tìm thấy bài viết nào phù hợp.
            </div>
          )}
        </div>

        {/* Pagination Desktop - Đã test với 75 items */}
        {totalPages > 1 && (
          <div className="flex items-center gap-[32px] mb-[100px]">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`${navBtnStyle(currentPage === 1)} w-[115px]`}
            >
              <ChevronLeft className="w-[16px] h-[16px]" />
              <span className="font-inter font-normal text-[14px]">
                Previous
              </span>
            </button>

            <div className="flex items-center gap-[10px]">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNum = index + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-[40px] h-[40px] flex items-center justify-center border rounded-[10px] font-inter text-[14px] transition-all
                      ${
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
              className={`${navBtnStyle(currentPage === totalPages)} w-[91px]`}
            >
              <span className="font-inter font-normal text-[14px]">Next</span>
              <ChevronRight className="w-[16px] h-[16px]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
