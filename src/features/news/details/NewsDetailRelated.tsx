// src/features/news/details/NewsDetailRelated.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

// --- IMPORT ẢNH ---
import news2 from "../../../assets/news/news1.png";
import news3 from "../../../assets/news/news2.png";
import news4 from "../../../assets/news/news3.png";

// Dữ liệu 3 bài viết liên quan
const RELATED_NEWS = [
  {
    id: 2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Bài viết số 2: Our SaaS Product Just Launched!",
    slug: "bai-viet-so-2",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news2,
  },
  {
    id: 3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Bài viết số 3: Our SaaS Product Just Launched!",
    slug: "bai-viet-so-3",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news3,
  },
  {
    id: 4,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Bài viết số 4: Our SaaS Product Just Launched!",
    slug: "bai-viet-so-4",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: news4,
  },
];

export const NewsDetailRelated: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug: string) => {
    navigate(`/tin-tuc/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full flex flex-col items-center px-4 xl:px-0">
      {/* =================================================================
          1. MOBILE VERSION (< 768px)
          - Changed lg:hidden to md:hidden
          ================================================================= */}
      <div className="flex flex-col items-center w-full md:hidden px-[23px] mb-[60px]">
        {/* Header Mobile */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] mb-[24px]">
            Tin tức khác cùng chủ đề
          </h2>
        </div>

        {/* List Mobile (Vertical) */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {RELATED_NEWS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.slug)}
              className="flex flex-col w-[326px] cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="w-full h-[230px] bg-[#F2F2F2] rounded-[4px] relative overflow-hidden mb-[12px]">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[16px]">
                {/* Meta */}
                <div className="flex items-center gap-[4px]">
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="mx-1 text-[#4F4F4F]">|</span>
                  <span className="font-inter font-medium text-[15px] text-[#4F4F4F]">
                    {item.readTime}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-inter font-semibold text-[16px] leading-[19px] text-[#000000]">
                    {item.title}
                  </h3>
                  <p className="font-inter font-normal text-[15px] leading-[24px] text-[#828282] line-clamp-3">
                    {item.desc}
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
            </div>
          ))}
        </div>

        {/* Button "Xem tin tức" Mobile */}
        <button className="flex items-center justify-center bg-[#FF0000] rounded-[47px] w-[132px] h-[45px] shadow-lg active:scale-95 transition-transform">
          <span className="font-inter font-semibold text-[16px] text-white tracking-[-0.02em]">
            Xem tin tức
          </span>
        </button>
      </div>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1279px) - KHỐI MỚI
          - Fluid Layout
          - Tablet (md): Grid 2 hoặc 3 cột tùy ý (3 cột thường đẹp hơn cho related)
          ================================================================= */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[1000px] mb-[100px]">
        <h2 className="font-inter font-bold text-[#000000] text-[40px] leading-[1.2] tracking-[-1px] mb-[48px] text-center">
          Tin tức khác cùng chủ đề
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
          {RELATED_NEWS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.slug)}
              className="flex flex-col w-full group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-full aspect-[380/268] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[16px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="mx-1">|</span>
                  <span className="font-inter font-semibold text-[16px] text-[#4F4F4F]">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="font-inter font-medium text-[#000000] text-[20px] leading-[1.3] mb-[12px] group-hover:text-[#FF0000] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="font-inter font-normal text-[#828282] text-[16px] leading-[1.6] mb-[20px] line-clamp-3">
                  {item.desc}
                </p>

                <div className="flex items-center gap-[8px] group/btn">
                  <span className="font-inter font-bold text-[16px] text-[#FF0000]">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================
          3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN CODE CŨ
          - Changed hidden lg:flex to hidden xl:flex
          ================================================================= */}
      <div className="hidden xl:flex w-[1260px] flex-col gap-[32px] mb-[100px]">
        {/* HEADER */}
        <h2 className="font-inter font-normal text-[#000000] text-[56px] leading-[115px] tracking-[-5px]">
          Tin tức khác cùng chủ đề
        </h2>

        {/* GRID */}
        <div className="flex items-center gap-[60px]">
          {RELATED_NEWS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[380px] group cursor-pointer"
              onClick={() => handleCardClick(item.slug)}
            >
              {/* Thumbnail */}
              <div className="w-full h-[268px] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
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

                <h3 className="font-inter font-medium text-[#000000] text-[24px] leading-[29px] tracking-[-0.04em] mb-[12px] group-hover:text-[#FF0000] transition-colors">
                  {item.title}
                </h3>

                <p className="font-inter font-normal text-[#828282] text-[18px] leading-[160%] tracking-[-0.02em] mb-[20px] line-clamp-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
