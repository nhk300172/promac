//src/features/home/HomeProducts.tsx
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
          1. MOBILE VERSION (< 1024px)
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pt-[40px] pb-[60px]">
        {/* HEADER MOBILE */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[331px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] mb-[24px]">
            Danh mục sản phẩm
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[25px] text-[#64607D] text-center tracking-[-0.02em]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>
        </div>

        {/* PRODUCT LIST MOBILE */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {PRODUCTS.map((product, index) => (
            <Link
              key={index}
              to={`/san-pham/${product.id}`} // Link chi tiết sản phẩm
              className="flex flex-col items-start w-full max-w-[331px] group"
            >
              <div
                className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[8px]"
                style={{ height: "255px" }}
              >
                {/* Thay thế placeholder bằng ảnh thật */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-inter font-medium text-[15px] leading-[18px] text-[#000000] tracking-[-0.04em] group-hover:text-red-500 transition-colors">
                {product.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* BUTTON MOBILE */}
        <Link to="/san-pham">
          <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
            <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
              Xem tất cả
            </span>
          </button>
        </Link>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full">
        {/* HEADER DESKTOP */}
        <div className="flex flex-col items-center text-center mb-[100px]">
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
            <p
              className="font-inter font-normal text-center"
              style={{
                fontSize: "20px",
                lineHeight: "31px",
                color: "rgba(0, 0, 0, 0.65)",
                maxWidth: "683px",
              }}
            >
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

        {/* PRODUCT GRID DESKTOP */}
        <div
          className="grid grid-cols-3"
          style={{ width: "1260px", columnGap: "60px", rowGap: "50px" }}
        >
          {PRODUCTS.map((product, index) => (
            <Link
              key={index}
              to={`/san-pham/${product.id}`} // Link Desktop
              className="flex flex-col cursor-pointer group"
              style={{ width: "380px" }}
            >
              <div
                className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden relative mb-[24px]"
                style={{ height: "268px" }}
              >
                {/* Thay thế placeholder bằng ảnh thật & hiệu ứng zoom */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3
                className="font-inter font-medium text-[#000000] text-left line-clamp-2 group-hover:text-red-500 transition-colors"
                style={{
                  fontSize: "24px",
                  lineHeight: "29px",
                  letterSpacing: "-0.04em",
                }}
              >
                {product.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
