// src/features/products/ProductListing.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectSearchFilter } from "../projects/ProjectSearchFilter";

// --- IMPORT HÌNH ẢNH SẢN PHẨM ---
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";

// Danh sách ảnh để lặp
const productImages = [product1, product2, product3];

// 1. DỮ LIỆU MẪU (60 sản phẩm)
const PRODUCT_DATA = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  title: `Sản phẩm số ${i + 1}: Our SaaS Product Just Launched!`,
  slug: `san-pham-so-${i + 1}`,
  image: productImages[i % productImages.length],
  oldPrice: "45.000đ",
  newPrice: "39.000đ/cái",
}));

const ITEMS_PER_PAGE = 12;

export const ProductListing: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredProducts = PRODUCT_DATA.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
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
    navigate(`/san-pham/${slug}`);
    window.scrollTo(0, 0);
  };

  // Style nút phân trang responsive
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
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] mb-[24px]">
            Danh mục sản phẩm
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[25px] text-[#64607D] text-center tracking-[-0.02em]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
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
          {currentProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetail(item.slug)}
              className="flex flex-col w-[326px] cursor-pointer group"
            >
              <div className="w-full h-[230px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden mb-[8px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-[#000000] tracking-[-0.04em] mb-[8px] line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-[5px]">
                <span className="font-montserrat font-bold text-[16px] text-[#BDBDBD] line-through decoration-transparent">
                  {item.oldPrice}
                </span>
                <span className="font-montserrat font-bold text-[16px] text-[#FF0000]">
                  {item.newPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ĐÃ XÓA NÚT "XEM THÊM" */}
      </div>

      {/* 2. TABLET LIST (768px - 1280px) */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[1000px] mb-[40px]">
        <div className="flex flex-col items-center text-center mt-[60px] mb-[60px] w-full max-w-[800px]">
          <h2 className="font-bold text-[#0E0E0E] text-[40px] leading-[140%]">
            Danh mục sản phẩm
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
          {currentProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetail(item.slug)}
              className="flex flex-col w-full group cursor-pointer"
            >
              <div className="w-full aspect-[380/266] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden mb-[16px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-inter font-medium text-[#000000] text-[20px] leading-[1.3] mb-[12px] group-hover:text-[#FF0000] transition-colors line-clamp-2 min-h-[52px]">
                {item.title}
              </h3>
              <div className="flex items-center gap-[5px]">
                <span className="font-montserrat font-bold text-[16px] text-[#BDBDBD] line-through decoration-transparent">
                  {item.oldPrice}
                </span>
                <span className="font-montserrat font-bold text-[18px] text-[#FF0000]">
                  {item.newPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DESKTOP LIST (>= 1280px) */}
      <div className="hidden xl:flex flex-col items-center w-full">
        <div className="flex flex-col items-center text-center mt-[100px] mb-[80px] w-[1074px]">
          <h2
            className="font-bold text-[#0E0E0E]"
            style={{
              fontFamily: "Inter",
              fontSize: "56px",
              lineHeight: "140%",
            }}
          >
            Danh mục sản phẩm
          </h2>
          <p
            className="font-semibold text-[#000000] mt-[20px]"
            style={{
              fontFamily: "Inter",
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
          {currentProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[380px] cursor-pointer group"
              onClick={() => goToDetail(item.slug)}
              style={{ gap: "24px", height: "406px" }}
            >
              <div className="w-[380px] h-[266px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                style={{
                  width: "380px",
                  height: "58px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  className="group-hover:text-[#FF0000] transition-colors line-clamp-2"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#BDBDBD",
                    textDecoration: "line-through",
                  }}
                >
                  {item.oldPrice}
                </span>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#FF0000",
                  }}
                >
                  {item.newPrice}
                </span>
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
