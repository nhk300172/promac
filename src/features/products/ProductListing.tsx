//src/features/products/ProductListing.tsx
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

// 1. DỮ LIỆU MẪU (Tăng lên 60 sản phẩm để đủ 5 trang)
const PRODUCT_DATA = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  title: `Sản phẩm số ${i + 1}: Our SaaS Product Just Launched!`, // Thêm số để dễ phân biệt
  slug: `san-pham-so-${i + 1}`,
  // Lấy ảnh theo vòng lặp 1, 2, 3...
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
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] mb-[24px]">
            Danh mục sản phẩm
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[25px] text-[#64607D] text-center tracking-[-0.02em]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>
        </div>

        {/* SEARCH BAR MOBILE */}
        <div className="w-[322px] h-[56px] relative mb-[40px]">
          <div className="w-full h-full border border-[#4D80C4] rounded-[6px] bg-white flex items-center pl-[20px] pr-[60px]">
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

        {/* PRODUCT LIST MOBILE */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {currentProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetail(item.slug)}
              className="flex flex-col w-[326px] cursor-pointer group"
            >
              {/* Image */}
              <div className="w-full h-[230px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden mb-[8px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-[#000000] tracking-[-0.04em] mb-[8px] line-clamp-2">
                {item.title}
              </h3>

              {/* Price */}
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

        {/* BUTTON MOBILE */}
        <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
          <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
            Xem thêm
          </span>
        </button>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full">
        {/* TITLE */}
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

        {/* SEARCH */}
        <div className="mb-[100px]">
          <ProjectSearchFilter onSearch={handleSearchFilter} />
        </div>

        {/* GRID */}
        <div
          className="grid grid-cols-3 mb-[100px]"
          style={{ width: "1318px", columnGap: "22px", rowGap: "50px" }}
        >
          {currentProducts.length > 0 ? (
            currentProducts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col w-[380px] cursor-pointer group"
                onClick={() => goToDetail(item.slug)}
                style={{ gap: "24px", height: "406px" }}
              >
                {/* 1. Image */}
                <div className="w-[380px] h-[266px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 2. Title */}
                <div
                  style={{
                    width: "380px",
                    height: "58px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "12px",
                  }}
                >
                  <h3
                    className="group-hover:text-[#FF0000] transition-colors line-clamp-2"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "24px",
                      lineHeight: "29px",
                      letterSpacing: "-0.04em",
                      color: "#000000",
                      width: "380px",
                      height: "58px",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* 3. Prices */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "5px 3px",
                    gap: "5px",
                    width: "240px",
                    height: "34px",
                  }}
                >
                  <span
                    style={{
                      width: "106px",
                      height: "24px",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      textAlign: "center",
                      letterSpacing: "0.1px",
                      color: "#BDBDBD",
                      textDecoration: "line-through",
                    }}
                  >
                    {item.oldPrice}
                  </span>
                  <span
                    style={{
                      width: "123px",
                      height: "24px",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      textAlign: "center",
                      letterSpacing: "0.1px",
                      color: "#FF0000",
                    }}
                  >
                    {item.newPrice}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 text-xl py-10">
              Không tìm thấy sản phẩm nào.
            </div>
          )}
        </div>

        {/* PAGINATION */}
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
