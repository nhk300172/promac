// src/features/projects/detail/ProjectDetailRelated.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

// --- IMPORT HÌNH ẢNH DỰ ÁN KHÁC ---
import otherProject1 from "../../../assets/projects/other-project1.png";
import otherProject2 from "../../../assets/projects/other-project2.png";
import otherProject3 from "../../../assets/projects/other-project3.png";

// Dữ liệu giả cho dự án liên quan
const RELATED_PROJECTS = [
  {
    id: 1,
    date: "July 2024",
    client: "Viettel Group",
    title: "Bộ quà tặng doanh nghiệp cao cấp",
    slug: "du-an-so-2",
    desc: "Thiết kế và sản xuất bộ Giftset sổ tay, bút ký và bình giữ nhiệt...",
    image: otherProject1,
  },
  {
    id: 2,
    date: "June 2024",
    client: "NovaLand",
    title: "Catalogue dự án Aqua City",
    slug: "du-an-so-3",
    desc: "In ấn Catalogue khổ lớn, bìa cứng, gia công gáy keo nhiệt...",
    image: otherProject2,
  },
  {
    id: 3,
    date: "May 2024",
    client: "Techcombank",
    title: "Lịch để bàn độc quyền 2025",
    slug: "du-an-so-4",
    desc: "Bộ lịch tết thiết kế riêng với phong cách tối giản, hiện đại...",
    image: otherProject3,
  },
];

export const ProjectDetailRelated: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug: string) => {
    navigate(`/du-an/${slug}`);
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
            Tìm hiểu thêm nhiều dự án khác
          </h2>
        </div>

        {/* List Mobile (Vertical) */}
        <div className="flex flex-col gap-[40px] w-full items-center mb-[40px]">
          {RELATED_PROJECTS.map((item) => (
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
                    {item.client}
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

                {/* Button "Xem chi tiết" */}
                <div className="flex flex-col items-start group/btn">
                  <div className="flex items-center gap-[8px]">
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
                  <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1279px) - KHỐI MỚI
          - Fluid Layout, Grid 3 cột
          ================================================================= */}
      <div className="hidden md:flex xl:hidden flex-col items-center w-full max-w-[1000px] mb-[100px]">
        <h2 className="font-inter font-bold text-[#000000] text-[40px] leading-[1.2] tracking-[-1px] mb-[48px] text-center">
          Tìm hiểu thêm nhiều dự án khác
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
          {RELATED_PROJECTS.map((item) => (
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
                    {item.client}
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
        {/* Header */}
        <h2 className="font-inter font-normal text-[#000000] text-[56px] leading-[115px] tracking-[-5px]">
          Tìm hiểu thêm nhiều dự án khác
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
