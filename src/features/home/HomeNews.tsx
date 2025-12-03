//src/features/home/HomeNews.tsx
import { Link } from "react-router-dom"; // Import Link để chuyển trang

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";

// DỮ LIỆU TIN TỨC
const NEWS_DATA = [
  {
    id: 1,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news1,
    slug: "our-saas-product-just-launched", // Thêm slug để link đẹp hơn
  },
  {
    id: 2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news2,
    slug: "our-saas-product-just-launched-2",
  },
  {
    id: 3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news3,
    slug: "our-saas-product-just-launched-3",
  },
];

export const HomeNews = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px)
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pb-[60px]">
        {/* HEADER MOBILE */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000]">
            Tin tức khuyến mãi
          </h2>
        </div>

        {/* NEWS LIST MOBILE (Vertical) */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {NEWS_DATA.map((item, index) => (
            <Link
              key={index}
              to={`/tin-tuc/${item.slug}`} // Link chi tiết tin tức
              className="flex flex-col w-full max-w-[326px] group"
            >
              {/* Thumbnail */}
              <div
                className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[12px]"
                style={{ height: "230px" }}
              >
                {/* Thay thế placeholder bằng ảnh thật */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-start gap-[16px]">
                {/* Meta */}
                <div className="flex items-center gap-[4px]">
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F] tracking-[-0.02em]">
                    {item.date}
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F] tracking-[-0.02em] mx-1">
                    |
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F] tracking-[-0.02em]">
                    {item.readTime}
                  </span>
                </div>

                {/* Text Group */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-inter font-semibold text-[16px] leading-[19px] text-[#000000] tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="font-inter font-normal text-[15px] leading-[24px] text-[#828282] tracking-[-0.02em] line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Button "Đọc ngay" */}
                <div className="flex flex-col items-start group/btn">
                  <div className="flex items-center gap-[8px]">
                    <span className="font-inter font-bold text-[16px] text-[#FF0000] leading-[19px]">
                      Đọc ngay
                    </span>
                    <div className="transition-transform group-hover/btn:translate-x-1">
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
            </Link>
          ))}
        </div>

        {/* BUTTON "Xem tin tức" (MOBILE nằm dưới cùng) */}
        <Link to="/tin-tuc">
          <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
            <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full">
        {/* HEADER SECTION */}
        <div className="w-[1260px] flex flex-col items-start mb-[60px]">
          <h2
            className="font-inter font-normal text-[#000000]"
            style={{
              fontSize: "56px",
              lineHeight: "115px",
              letterSpacing: "-5px",
            }}
          >
            Tin tức khuyến mãi
          </h2>
        </div>

        {/* NEWS GRID */}
        <div
          className="grid grid-cols-3 mb-[60px]"
          style={{ width: "1260px", gap: "60px", marginTop: "-30px" }}
        >
          {NEWS_DATA.map((item, index) => (
            <Link
              key={index}
              to={`/tin-tuc/${item.slug}`} // Wrap Link cho Desktop
              className="flex flex-col w-[380px] group cursor-pointer"
            >
              {/* Thumbnail Desktop */}
              <div
                className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[20px] relative"
                style={{ height: "268px" }}
              >
                {/* Thay thế placeholder bằng ảnh thật */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] mx-1">
                    |
                  </span>
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
                    {item.readTime}
                  </span>
                </div>

                <h3
                  className="font-inter font-medium text-[#000000] mb-[12px]"
                  style={{
                    fontSize: "24px",
                    lineHeight: "29px",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="font-inter font-normal text-[#828282] mb-[20px] line-clamp-3"
                  style={{
                    fontSize: "18px",
                    lineHeight: "160%",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.desc}
                </p>

                <div className="flex items-center gap-[8px] group/btn">
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
                <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]" />
              </div>
            </Link>
          ))}
        </div>

        {/* BUTTON XEM TIN TỨC */}
        <Link to="/tin-tuc">
          <button
            className="flex items-center justify-center bg-[#FF0000] rounded-[20px] transition-transform hover:scale-105"
            style={{
              width: "162px",
              height: "47px",
            }}
          >
            <span className="font-inter font-semibold text-[16px] text-[#FFFFFF]">
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};
