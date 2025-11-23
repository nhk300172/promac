import { ArrowRight } from "lucide-react";

// --- IMPORT ẢNH TIN TỨC ---
import news1 from "../../../assets/news/news1.png";
import news2 from "../../../assets/news/news2.png";
import news3 from "../../../assets/news/news3.png";

const NEWS_DATA = [
  {
    id: 1,
    image: news1,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
  },
  {
    id: 2,
    image: news2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
  },
  {
    id: 3,
    image: news3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
  },
];

export const LatestNews = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col items-center" style={{ width: "1260px" }}>
        {/* 1. HEADER */}
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

        {/* 2. NEWS LIST */}
        <div className="flex justify-between w-full mb-[60px]">
          {NEWS_DATA.map((news) => (
            <div
              key={news.id}
              className="flex flex-col items-start"
              style={{ width: "380px" }}
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
                className="font-inter font-medium text-black mb-[12px] hover:text-[#FF0000] transition-colors cursor-pointer"
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

              {/* Read More Link */}
              <a href="#" className="flex items-center gap-[8px] group w-fit">
                {/* Container riêng cho Text + Gạch chân */}
                <div className="relative flex flex-col">
                  <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                    Đọc ngay
                  </span>
                  {/* Line gạch chân: Mặc định w-0, khi group hover -> w-full */}
                  <div className="h-[2px] bg-[#FF0000] w-0 group-hover:w-full transition-all duration-300 mt-[1px]"></div>
                </div>

                <ArrowRight
                  size={18}
                  color="#FF0000"
                  strokeWidth={3}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>

        {/* 3. BUTTON: Xem tin tức */}
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
      </div>
    </section>
  );
};
