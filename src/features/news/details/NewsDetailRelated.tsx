import React from "react";
import { useNavigate } from "react-router-dom"; // Import hook điều hướng

// Dữ liệu giả 3 bài viết liên quan
const RELATED_NEWS = [
  {
    id: 1,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    slug: "bai-viet-lien-quan-1",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: "bg-gray-200",
  },
  {
    id: 2,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    slug: "bai-viet-lien-quan-2",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: "bg-gray-200",
  },
  {
    id: 3,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: "Our SaaS Product Just Launched!",
    slug: "bai-viet-lien-quan-3",
    desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    image: "bg-gray-200",
  },
];

export const NewsDetailRelated: React.FC = () => {
  const navigate = useNavigate();

  // Hàm xử lý chuyển hướng khi click
  const handleCardClick = (slug: string) => {
    // Chuyển hướng sang bài viết khác
    navigate(`/tin-tuc/${slug}`);
    // Cuộn lên đầu trang để người dùng đọc từ đầu
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full flex flex-col items-center">
      {/* CONTAINER (Frame 12657) */}
      <div className="w-[1260px] flex flex-col gap-[32px] mb-[100px]">
        {/* HEADER (Tin tức khác cùng chủ đề) */}
        <h2 className="font-inter font-normal text-[#000000] text-[56px] leading-[115px] tracking-[-5px]">
          Tin tức khác cùng chủ đề
        </h2>

        {/* GRID (Frame 12656) */}
        <div className="flex items-center gap-[60px]">
          {RELATED_NEWS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[380px] group cursor-pointer"
              onClick={() => handleCardClick(item.slug)} // Gắn sự kiện click
            >
              {/* Thumbnail */}
              <div className="w-full h-[268px] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-400">Related Img</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                {/* Meta */}
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

                {/* Title (Hover Red) */}
                <h3 className="font-inter font-medium text-[#000000] text-[24px] leading-[29px] tracking-[-0.04em] mb-[12px] group-hover:text-[#FF0000] transition-colors">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="font-inter font-normal text-[#828282] text-[18px] leading-[160%] tracking-[-0.02em] mb-[20px] line-clamp-3">
                  {item.desc}
                </p>

                {/* Button Read More */}
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
                {/* Underline */}
                <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
