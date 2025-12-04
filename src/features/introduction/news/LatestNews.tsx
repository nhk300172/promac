//src/features/introduction/news/LatestNews.tsx
// --- IMPORT ẢNH TIN TỨC ---
import news1 from "../../../assets/news/news1.png";
import news2 from "../../../assets/news/news2.png";
import news3 from "../../../assets/news/news3.png";
import { Link } from "react-router-dom"; // Import Link để chuyển trang

const NEWS_DATA = [
  {
    id: 2,
    image: news1,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    slug: "bai-viet-so-2", // Thêm slug
  },
  {
    id: 3,
    image: news2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    slug: "bai-viet-so-3", // Thêm slug
  },
  {
    id: 4,
    image: news3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    slug: "bai-viet-so-4", // Thêm slug
  },
];

export const LatestNews = () => {
  return (
    <section className="w-full flex justify-center">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA MỚI
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pb-[60px]">
        {/* Header Mobile */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] mb-[24px]">
            Cập nhật tin tức mới nhất
          </h2>
        </div>

        {/* News List Mobile (Vertical) */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {NEWS_DATA.map((news) => (
            <Link
              key={news.id}
              to={`/tin-tuc/${news.slug}`} // Chuyển hướng đến trang chi tiết
              className="flex flex-col w-[326px] group cursor-pointer"
              onClick={() => window.scrollTo(0, 0)} // Cuộn lên đầu trang
            >
              {/* Thumbnail */}
              <div className="w-full h-[230px] bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[12px] relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" // Thêm hiệu ứng hover
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[16px]">
                {/* Meta */}
                <div className="flex items-center gap-[4px]">
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {news.date}
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F] mx-1">
                    |
                  </span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {news.readTime}
                  </span>
                </div>

                {/* Text Group */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-inter font-semibold text-[16px] leading-[19px] text-[#000000] group-hover:text-[#FF0000] transition-colors">
                    {" "}
                    {/* Thêm hiệu ứng hover text */}
                    {news.title}
                  </h3>
                  <p className="font-inter font-normal text-[15px] leading-[24px] text-[#828282] line-clamp-3">
                    {news.desc}
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
            </Link>
          ))}
        </div>

        {/* Button "Xem tin tức" Mobile */}
        <Link to="/tin-tuc">
          <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
            <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center"
        style={{ width: "1260px" }}
      >
        {/* HEADER */}
        <h2
          className="font-inter font-normal text-black"
          style={{
            fontSize: "56px",
            lineHeight: "115px",
            letterSpacing: "-5px",
            marginBottom: "32px",
            alignSelf: "flex-start",
          }}
        >
          Cập nhật tin tức mới nhất
        </h2>

        {/* NEWS LIST */}
        <div className="flex justify-between w-full mb-[60px]">
          {NEWS_DATA.map((news) => (
            <Link
              key={news.id}
              to={`/tin-tuc/${news.slug}`} // Chuyển hướng đến trang chi tiết
              className="flex flex-col w-[380px] group cursor-pointer"
              onClick={() => window.scrollTo(0, 0)} // Cuộn lên đầu trang
            >
              {/* Thumbnail */}
              <div
                className="w-full overflow-hidden mb-[20px]"
                style={{ height: "268px", borderRadius: "4px" }}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-[12px] mb-[12px]">
                <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                  {news.date}
                </span>
                <span className="w-[4px] h-[4px] bg-[#4F4F4F] rounded-full"></span>
                <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                  {news.readTime}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-inter font-medium text-black mb-[12px] group-hover:text-[#FF0000] transition-colors cursor-pointer" // Thêm group-hover
                style={{
                  fontSize: "24px",
                  lineHeight: "29px",
                  letterSpacing: "-0.04em",
                }}
              >
                {news.title}
              </h3>

              {/* Description */}
              <p
                className="font-inter font-normal text-[#828282] mb-[20px]"
                style={{
                  fontSize: "18px",
                  lineHeight: "160%",
                  letterSpacing: "-0.02em",
                }}
              >
                {news.desc}
              </p>

              {/* Button: Đọc ngay */}
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
            </Link>
          ))}
        </div>

        {/* BUTTON: Xem tin tức */}
        <Link to="/tin-tuc">
          <button
            className="bg-[#FF0000] rounded-[47px] flex items-center justify-center hover:bg-red-700 transition-colors"
            style={{ width: "162px", height: "47px" }}
          >
            <span
              className="font-inter font-semibold text-white"
              style={{
                fontSize: "16px",
                lineHeight: "30px",
                letterSpacing: "-0.02em",
              }}
            >
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};
