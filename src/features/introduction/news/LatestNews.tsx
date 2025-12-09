// src/features/introduction/news/LatestNews.tsx
import { Link } from "react-router-dom"; // Import Link để chuyển trang

// --- IMPORT ẢNH TIN TỨC ---
import news1 from "../../../assets/news/news1.png";
import news2 from "../../../assets/news/news2.png";
import news3 from "../../../assets/news/news3.png";

const NEWS_DATA = [
  {
    id: 2,
    image: news1,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    slug: "bai-viet-so-2",
  },
  {
    id: 3,
    image: news2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    slug: "bai-viet-so-3",
  },
  {
    id: 4,
    image: news3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    slug: "bai-viet-so-4",
  },
];

export const LatestNews = () => {
  return (
    <section className="w-full flex justify-center px-3 xl:px-0">
      {/* =================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Mobile (< 768px): List dọc.
          - Tablet (768px -> 1023px): Grid 3 cột (Vì có 3 tin, chia 3 cột đẹp hơn 2).
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px] pb-[60px]">
        {/* Header Mobile & Tablet */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[700px]">
          <h2 className="font-inter font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[48px] text-[#000000] mb-[24px]">
            Cập nhật tin tức mới nhất
          </h2>
        </div>

        {/* News List: Mobile (Flex Col) -> Tablet (Grid 3 Cols) */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-[40px] md:gap-[20px] w-full items-center md:items-start mb-[40px]">
          {NEWS_DATA.map((news) => (
            <Link
              key={news.id}
              to={`/tin-tuc/${news.slug}`}
              // Mobile: Width cứng 326px -> Tablet: Width full để theo grid
              className="flex flex-col w-full max-w-[326px] md:max-w-full group cursor-pointer mx-auto"
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Thumbnail */}
              <div className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[12px] relative aspect-[326/230]">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[12px]">
                {/* Meta */}
                <div className="flex items-center gap-[4px]">
                  <span className="font-inter font-medium text-[14px] md:text-[13px] text-[#4F4F4F]">
                    {news.date}
                  </span>
                  <span className="font-inter font-medium text-[14px] md:text-[13px] text-[#4F4F4F] mx-1">
                    |
                  </span>
                  <span className="font-inter font-medium text-[14px] md:text-[13px] text-[#4F4F4F]">
                    {news.readTime}
                  </span>
                </div>

                {/* Text Group */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-inter font-semibold text-[16px] md:text-[18px] leading-[1.2] text-[#000000] group-hover:text-[#FF0000] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="font-inter font-normal text-[15px] md:text-[14px] leading-[1.5] text-[#828282] line-clamp-3">
                    {news.desc}
                  </p>
                </div>

                {/* Button "Đọc ngay" */}
                <div className="flex flex-col items-start group/btn mt-2">
                  <div className="flex items-center gap-[8px]">
                    <span className="font-inter font-bold text-[16px] md:text-[15px] text-[#FF0000] leading-[19px]">
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
                  <div className="w-[100px] h-[1px] bg-[#FF0000] mt-[2px]"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Button "Xem tất cả" */}
        <Link to="/tin-tuc">
          <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform hover:bg-red-700">
            <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>

      {/* =================================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Đã điều chỉnh Width linh hoạt để hỗ trợ iPad Pro
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center w-full"
        style={{
          width: "100%",
          maxWidth: "1260px", // Fluid width cho iPad Pro
        }}
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
            // iPad Pro: Giảm size chữ chút nếu cần, hoặc giữ nguyên 56px vì không gian khá rộng
          }}
        >
          Cập nhật tin tức mới nhất
        </h2>

        {/* NEWS LIST GRID (iPad: 3 cột co giãn, Desktop: 3 cột chuẩn) */}
        <div
          className="grid grid-cols-3 w-full mb-[60px]"
          style={{ gap: "30px" }} // Thay gap space-between bằng gap grid chuẩn
        >
          {NEWS_DATA.map((news) => (
            <Link
              key={news.id}
              to={`/tin-tuc/${news.slug}`}
              // Bỏ width cứng 380px -> dùng w-full để co giãn theo Grid
              className="flex flex-col w-full group cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Thumbnail */}
              <div className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[20px] relative aspect-[380/268]">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-[12px] mb-[12px]">
                <span className="font-inter font-semibold text-[16px] xl:text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                  {news.date}
                </span>
                <span className="w-[4px] h-[4px] bg-[#4F4F4F] rounded-full"></span>
                <span className="font-inter font-semibold text-[16px] xl:text-[18px] text-[#4F4F4F] tracking-[-0.02em]">
                  {news.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-inter font-medium text-black mb-[12px] group-hover:text-[#FF0000] transition-colors cursor-pointer text-[20px] xl:text-[24px] leading-[1.2] tracking-[-0.04em]">
                {news.title}
              </h3>

              {/* Description */}
              <p className="font-inter font-normal text-[#828282] mb-[20px] text-[16px] xl:text-[18px] leading-[1.6] tracking-[-0.02em] line-clamp-3">
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

        {/* BUTTON: Xem tất cả */}
        <Link to="/tin-tuc">
          <button className="bg-[#FF0000] rounded-[47px] flex items-center justify-center hover:bg-red-700 transition-colors w-[162px] h-[47px]">
            <span className="font-inter font-semibold text-white text-[16px] tracking-[-0.02em]">
              Xem tin tức
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};
