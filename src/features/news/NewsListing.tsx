// src/features/news/NewsListing.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NewsSearchFilter } from "./NewsSearchFilter"; // Component search

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

// Danh sách ảnh
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

// DỮ LIỆU MẪU (75 bài)
const NEWS_DATA = Array.from({ length: 75 }).map((_, i) => ({
  id: i + 1,
  date: "22 July 2024",
  readTime: "Read 4 min",
  title: `Bài viết số ${i + 1}: Our SaaS Product Just Launched!`,
  slug: `bai-viet-so-${i + 1}`,
  desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
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

  // Style responsive cho nút phân trang (nhỏ hơn trên mobile)
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
      {/* 1. MOBILE LIST (< 768px) */}
      <div className="flex flex-col items-center w-full md:hidden px-[20px] pt-[40px] pb-[40px]">
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px]">
          <h2 className="font-inter font-bold text-[28px] leading-[36px] text-[#000000] mb-[24px]">
            Trung tâm kiến thức
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[19px] text-[#000000] text-center">
            Khám phá danh mục sản phẩm đa dạng của chúng tôi, thể hiện chất
            lượng in ấn vượt trội...
          </p>
        </div>

        {/* Search Bar Mobile */}
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

        {/* List Items */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[20px]">
          {currentNews.map((item) => (
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
                  <span className="mx-1">|</span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {item.readTime}
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
                  <span className="font-inter font-bold text-[16px] text-[#FF0000] leading-[19px]">
                    Đọc ngay
                  </span>
                  <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ĐÃ XÓA NÚT "XEM THÊM" Ở ĐÂY ĐỂ DÙNG PHÂN TRANG CHUNG */}
      </div>

      {/* 2. TABLET LIST (768px - 1280px) */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[1000px] mb-[40px]">
        <div className="flex flex-col items-center text-center mt-[60px] mb-[60px] w-full max-w-[800px]">
          <h2 className="font-bold text-[#0E0E0E] text-[40px] leading-[140%]">
            Trung Tâm Kiến Thức
          </h2>
          <p className="font-semibold text-[#000000] mt-[20px] text-[18px] leading-[24px]">
            Khám phá danh mục sản phẩm đa dạng...
          </p>
        </div>
        <div className="mb-[60px] w-full">
          <NewsSearchFilter onSearch={handleSearchFilter} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
          {currentNews.map((item) => (
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
              {/* ... (Các phần nội dung khác giữ nguyên) ... */}
              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[16px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="mx-1">|</span>
                  <span className="font-inter font-semibold text-[16px] text-[#4F4F4F]">
                    {item.readTime}
                  </span>
                </div>
                <h3 className="font-inter font-medium text-[#000000] text-[20px] leading-[1.3] mb-[12px] group-hover:text-[#FF0000] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[#828282] text-[16px] leading-[160%] mb-[20px] line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center gap-[8px] group/btn">
                  <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                    Đọc ngay
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DESKTOP LIST (>= 1280px) */}
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
            Khám phá danh mục sản phẩm đa dạng...
          </p>
        </div>
        <div className="mb-[100px] w-full flex justify-center">
          <NewsSearchFilter onSearch={handleSearchFilter} />
        </div>
        <div
          className="grid grid-cols-3 mb-[60px]"
          style={{ width: "1318px", columnGap: "22px", rowGap: "50px" }}
        >
          {currentNews.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[380px] group cursor-pointer"
              onClick={() => goToDetail(item.slug)}
            >
              <div className="w-full h-[268px] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* ... (Nội dung Desktop giữ nguyên) ... */}
              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="mx-1">|</span>
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
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
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ĐÃ XÓA PAGINATION CỤC BỘ Ở ĐÂY */}
      </div>

      {/* =================================================================
          4. SHARED PAGINATION (HIỂN THỊ CHUNG CHO MỌI MÀN HÌNH)
          ================================================================= */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-[15px] md:gap-[32px] mb-[60px] lg:mb-[100px] w-full">
          {/* Nút Prev */}
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

          {/* Các số trang */}
          <div className="flex items-center gap-[5px] md:gap-[10px]">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-[36px] h-[36px] md:w-[40px] md:h-[40px] flex items-center justify-center border rounded-[10px] font-inter text-[14px] transition-all
                    ${
                      isActive
                        ? "border-[#FF0000] text-[#FF0000] font-bold"
                        : "border-[#828282] text-[#828282] hover:bg-gray-100"
                    }
                  `}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Nút Next */}
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
