// src/features/home/HomeNews.tsx
import { Link } from "react-router-dom"; // Import Link để chuyển trang

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";

// DỮ LIỆU TIN TỨC
const NEWS_DATA = [
  {
    id: 2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news1,
    slug: "bai-viet-so-2",
  },
  {
    id: 3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news2,
    slug: "bai-viet-so-3",
  },
  {
    id: 4,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news3,
    slug: "bai-viet-so-4",
  },
];

export const HomeNews = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* =================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Mobile (< 768px): List dọc.
          - Tablet (768px - 1023px): Grid 2 cột.
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pb-[60px]">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px] md:max-w-[700px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] md:text-[40px] md:leading-[48px] text-[#000000]">
            Tin tức khuyến mãi
          </h2>
        </div>

        {/* NEWS LIST (Mobile Col -> Tablet Grid 2) */}
        <div className="w-full flex flex-col md:grid md:grid-cols-2 md:gap-[30px] items-center mb-[40px]">
          {NEWS_DATA.map((item, index) => (
            <Link
              key={index}
              to={`/tin-tuc/${item.slug}`}
              // Mobile: max-w-[326px], Tablet: max-w-full
              className="flex flex-col w-full max-w-[326px] md:max-w-full group cursor-pointer mx-auto"
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Thumbnail */}
              <div className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[12px] relative aspect-[326/230]">
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
                  <h3 className="font-inter font-semibold text-[16px] leading-[19px] md:text-[20px] md:leading-[26px] text-[#000000] tracking-[-0.04em] group-hover:text-[#FF0000] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-inter font-normal text-[15px] leading-[24px] md:text-[16px] text-[#828282] tracking-[-0.02em] line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Button "Đọc ngay" */}
                <div className="flex flex-col items-start group/btn mt-2">
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

        {/* BUTTON "Xem tin tức" */}
        <Link to="/tin-tuc">
          <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
            <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>

      {/* =================================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Đã chỉnh sửa để hỗ trợ iPad Pro (Fluid Width)
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full px-4 xl:px-0">
        {/* HEADER SECTION */}
        <div className="w-full max-w-[1260px] flex flex-col items-start mb-[60px]">
          <h2 className="font-inter font-normal text-[#000000] text-[48px] xl:text-[48px] leading-[115%] tracking-[-2px] xl:tracking-[-5px]">
            Tin tức khuyến mãi
          </h2>
        </div>

        {/* NEWS GRID (iPad: 3 cột co giãn, Desktop: 3 cột chuẩn) */}
        <div
          className="grid grid-cols-3 gap-[30px] xl:gap-[60px] mb-[60px] w-full max-w-[1260px]"
          style={{ marginTop: "-30px" }}
        >
          {NEWS_DATA.map((item, index) => (
            <Link
              key={index}
              to={`/tin-tuc/${item.slug}`}
              // Bỏ w-[380px] cứng -> dùng w-full để co giãn theo grid
              className="flex flex-col w-full group cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Thumbnail Desktop */}
              <div className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[20px] relative aspect-[380/268]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[16px] xl:text-[18px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="font-inter font-semibold text-[16px] xl:text-[18px] text-[#4F4F4F] mx-1">
                    |
                  </span>
                  <span className="font-inter font-semibold text-[16px] xl:text-[18px] text-[#4F4F4F]">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="font-inter font-medium text-[#000000] mb-[12px] group-hover:text-[#FF0000] transition-colors text-[20px] xl:text-[24px] leading-[120%] tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="font-inter font-normal text-[#828282] mb-[20px] line-clamp-3 text-[16px] xl:text-[18px] leading-[160%] tracking-[-0.02em]">
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
          <button className="flex items-center justify-center bg-[#FF0000] rounded-[20px] transition-transform hover:scale-105 w-[162px] h-[47px]">
            <span className="font-inter font-semibold text-[16px] text-[#FFFFFF]">
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};
