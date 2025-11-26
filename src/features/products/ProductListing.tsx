import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectSearchFilter } from "../projects//ProjectSearchFilter";

// 1. DỮ LIỆU MẪU (CẬP NHẬT TEXT VÀ GIÁ CHUẨN)
const PRODUCT_DATA = Array.from({ length: 26 }).map((_, i) => ({
  id: i + 1,
  // Text chuẩn theo yêu cầu
  title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!...",
  slug: `san-pham-so-${i + 1}`,
  image: "bg-gray-200",
  oldPrice: "45.000đ", // Giá cũ chuẩn
  newPrice: "39.000đ/cái", // Giá mới chuẩn
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
      {/* TITLE */}
      <div className="flex flex-col items-center text-center mt-[100px] mb-[80px] w-[1074px]">
        <h2
          className="font-bold text-[#0E0E0E]"
          style={{ fontFamily: "Inter", fontSize: "56px", lineHeight: "140%" }}
        >
          Danh mục sản phẩm
        </h2>
        <p
          className="font-semibold text-[#000000] mt-[20px]"
          style={{ fontFamily: "Inter", fontSize: "20px", lineHeight: "24px" }}
        >
          Khám phá danh mục sản phẩm đa dạng của chúng tôi, thể hiện chất lượng
          in ấn vượt trội trên nhiều lĩnh vực và ngành nghề khác nhau.
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
              // Frame 12645: gap 24px (Khoảng cách giữa Ảnh - Tên - Giá)
              style={{
                gap: "24px",
                height: "406px", // Chiều cao tổng thể chuẩn
              }}
            >
              {/* 1. Image (Rectangle 299) */}
              <div className="w-[380px] h-[266px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden shrink-0">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-400">Image {item.id}</span>
                </div>
              </div>

              {/* 2. Title (Group 1 -> Frame 9) */}
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

              {/* 3. Prices (Frame prices) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: "5px 3px",
                  gap: "5px",
                  width: "240px", // Width 240px chuẩn
                  height: "34px",
                }}
              >
                {/* Giá Gốc (Width 106px) */}
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
                    color: "#BDBDBD", // Muted color
                    textDecoration: "none",
                  }}
                >
                  {item.oldPrice}
                </span>

                {/* Giá Mới (Width 123px) */}
                <span
                  style={{
                    width: "123px", // Width 123px chuẩn
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
            <span className="font-inter font-normal text-[14px]">Previous</span>
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
    </section>
  );
};
