// src/features/home/HomeProducts.tsx
import { Link } from "react-router-dom"; // Import Link

import product1 from "../../assets/home-experience/onca.png";
import product2 from "../../assets/printingservices/project2.png";
import product3 from "../../assets/printingservices/project3.png";

// DỮ LIỆU GIẢ LẬP
const PRODUCTS = [
  {
    id: 1,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: product1,
  },
  {
    id: 2,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: product2,
  },
  {
    id: 3,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: product3,
  },
  {
    id: 4,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: product1,
  },
  {
    id: 5,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: product2,
  },
  {
    id: 6,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: product3,
  },
];

export const HomeProducts = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* =================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Mobile (< 768px): List dọc.
          - Tablet (768px -> 1023px): Grid 2 cột.
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pt-[40px] pb-[60px]">
        {/* HEADER MOBILE & TABLET */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[331px] md:max-w-[700px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] md:text-[40px] md:leading-[48px] text-[#000000] mb-[24px]">
            Danh mục sản phẩm
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[25px] md:text-[18px] md:leading-[28px] text-[#64607D] text-center tracking-[-0.02em]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>
        </div>

        {/* PRODUCT LIST MOBILE (Vertical) -> TABLET (Grid 2) */}
        <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-[30px] items-center mb-[40px]">
          {PRODUCTS.map((product, index) => (
            <Link
              key={index}
              to={`/san-pham/${product.id}`}
              // Mobile: max-w-[331px], Tablet: max-w-full (tự dãn theo grid)
              className="flex flex-col items-start w-full max-w-[331px] md:max-w-full group mx-auto"
            >
              <div className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[8px] relative aspect-[331/255]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-inter font-medium text-[15px] leading-[18px] md:text-[18px] md:leading-[24px] text-[#000000] tracking-[-0.04em] group-hover:text-red-500 transition-colors line-clamp-2">
                {product.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* BUTTON "Xem tất cả" */}
        <Link to="/san-pham">
          <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
            <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
              Xem tất cả
            </span>
          </button>
        </Link>
      </div>

      {/* =================================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Đã điều chỉnh width linh hoạt để hỗ trợ iPad Pro.
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full px-4 xl:px-0">
        {/* HEADER DESKTOP */}
        <div className="flex flex-col items-center text-center mb-[100px] w-full max-w-[1260px]">
          <div className="flex flex-col items-center gap-[8px] mb-[40px]">
            <h2
              className="font-inter font-normal text-[#000000]"
              style={{
                fontSize: "56px",
                lineHeight: "115px",
                letterSpacing: "-5px",
              }}
            >
              Danh mục sản phẩm
            </h2>
            <p className="font-inter font-normal text-center text-[20px] leading-[31px] text-black/65 max-w-[683px]">
              A webinar platform designed for marketers to host jaw-dropping
              experiences that drive revenue.
            </p>
          </div>

          <Link to="/san-pham">
            <button
              className="flex items-center justify-center bg-[#FF0000] rounded-[20px] transition-transform hover:scale-105"
              style={{
                width: "188px",
                height: "53px",
                boxShadow: "0px 0px 14px #FF0000",
              }}
            >
              <span className="font-inter font-bold text-[20px] text-[#F5F5F5]">
                Xem tất cả
              </span>
            </button>
          </Link>
        </div>

        {/* PRODUCT GRID DESKTOP (Fluid for iPad Pro) */}
        <div className="grid grid-cols-3 gap-[30px] xl:gap-[60px] w-full max-w-[1260px]">
          {PRODUCTS.map((product, index) => (
            <Link
              key={index}
              to={`/san-pham/${product.id}`}
              // Bỏ width cứng 380px -> Dùng w-full để co giãn theo grid
              className="flex flex-col cursor-pointer group w-full"
            >
              <div className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden relative mb-[24px] aspect-[380/268]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-inter font-medium text-[#000000] text-left line-clamp-2 group-hover:text-red-500 transition-colors text-[20px] xl:text-[24px] leading-[120%] tracking-[-0.04em]">
                {product.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
