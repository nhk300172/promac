import React from "react";
import { useNavigate } from "react-router-dom";

// Dữ liệu giả cho dự án liên quan
const RELATED_PROJECTS = [
  {
    id: 1,
    date: "July 2024",
    client: "Viettel Group",
    title: "Bộ quà tặng doanh nghiệp cao cấp",
    slug: "bo-qua-tang-viettel",
    desc: "Thiết kế và sản xuất bộ Giftset sổ tay, bút ký và bình giữ nhiệt...",
    image: "bg-gray-200",
  },
  {
    id: 2,
    date: "June 2024",
    client: "NovaLand",
    title: "Catalogue dự án Aqua City",
    slug: "catalogue-novaland",
    desc: "In ấn Catalogue khổ lớn, bìa cứng, gia công gáy keo nhiệt...",
    image: "bg-gray-200",
  },
  {
    id: 3,
    date: "May 2024",
    client: "Techcombank",
    title: "Lịch để bàn độc quyền 2025",
    slug: "lich-tet-techcombank",
    desc: "Bộ lịch tết thiết kế riêng với phong cách tối giản, hiện đại...",
    image: "bg-gray-200",
  },
];

export const ProjectDetailRelated: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug: string) => {
    navigate(`/du-an/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-[1260px] flex flex-col gap-[32px] mb-[100px]">
        {/* Header */}
        <h2 className="font-inter font-normal text-[#000000] text-[56px] leading-[115px] tracking-[-5px]">
          Tìm hiểu thêm nhiều dự án khác{" "}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-[60px]">
          {RELATED_PROJECTS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[380px] group cursor-pointer"
              onClick={() => handleCardClick(item.slug)}
            >
              {/* Thumbnail */}
              <div className="w-full h-[268px] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-400">Project Img</span>
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
                    {item.client}
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
                    Xem chi tiết
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
