// 1. DỮ LIỆU TIN TỨC (3 Bài viết)
const NEWS_DATA = [
  {
    id: 1,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: "bg-gray-200",
  },
  {
    id: 2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: "bg-gray-200",
  },
  {
    id: 3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: "bg-gray-200",
  },
];

export const HomeNews = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* ============================================================
          1. HEADER SECTION (Frame 12657)
          Gap: 32px (Từ Header xuống Grid)
      ============================================================ */}
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

      {/* ============================================================
          2. NEWS GRID (Frame 12656)
          Width: 1260px
          Gap: 60px
      ============================================================ */}
      <div
        className="grid grid-cols-3 mb-[60px]"
        style={{ width: "1260px", gap: "60px", marginTop: "-30px" }}
      >
        {NEWS_DATA.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[380px] group cursor-pointer"
          >
            {/* THUMBNAIL */}
            <div
              className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden mb-[20px] relative"
              style={{ height: "268px" }}
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-gray-400 font-medium">News Img</span>
              </div>
            </div>

            {/* CONTENT GROUP */}
            <div className="flex flex-col">
              {/* Meta Info (Date | Time) */}
              <div className="flex items-center gap-[4px] mb-[12px]">
                <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
                  {item.date}
                </span>
                <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] mx-1">
                  |
                </span>{" "}
                {/* Dấu gạch đứng giả lập */}
                <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
                  {item.readTime}
                </span>
              </div>

              {/* Title */}
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

              {/* Description */}
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

              {/* Button: Đọc ngay */}
              <div className="flex items-center gap-[8px] group/btn">
                <span className="font-inter font-bold text-[16px] text-[#FF0000] leading-[19px]">
                  Đọc ngay
                </span>

                {/* Icon Mũi tên đỏ custom (Vẽ bằng SVG để giống Figma nhất) */}
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
              {/* Gạch chân đỏ (Line 8) */}
              <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]" />
            </div>
          </div>
        ))}
      </div>

      {/* ============================================================
          3. BUTTON: XEM TIN TỨC (Center Bottom)
      ============================================================ */}
      <button
        className="flex items-center justify-center bg-[#FF0000] rounded-[47px] transition-transform hover:scale-105"
        style={{
          width: "162px",
          height: "47px",
        }}
      >
        <span className="font-inter font-semibold text-[16px] text-[#FFFFFF]">
          Xem tin tức
        </span>
      </button>
    </section>
  );
};
