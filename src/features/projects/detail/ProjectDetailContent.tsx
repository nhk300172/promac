// src/features/projects/detail/ProjectDetailContent.tsx
import React, { useMemo } from "react";
import { ChevronRight } from "lucide-react";
import { useParams, Link } from "react-router-dom";

// --- IMPORT 12 HÌNH ẢNH DỰ ÁN ---
import project1 from "../../../assets/projects/project1.png";
import project2 from "../../../assets/projects/project2.png";
import project3 from "../../../assets/projects/project3.png";
import project4 from "../../../assets/projects/project4.png";
import project5 from "../../../assets/projects/project5.png";
import project6 from "../../../assets/projects/project6.png";
import project7 from "../../../assets/projects/project7.png";
import project8 from "../../../assets/projects/project8.png";
import project9 from "../../../assets/projects/project9.png";
import project10 from "../../../assets/projects/project10.png";
import project11 from "../../../assets/projects/project11.png";
import project12 from "../../../assets/projects/project12.png";

// Danh sách ảnh để lặp
const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
];

// --- KHAI BÁO KIỂU DỮ LIỆU ---
interface ProjectItemType {
  id: number;
  title: string;
  image: string;
  desc: string;
  tag: string;
  intro: string;
}

// --- GIẢ LẬP LẠI DỮ LIỆU ĐỂ TÌM DỰ ÁN ---
const getProjectData = (slug: string): ProjectItemType | null => {
  const parts = slug.split("-");
  const id = parseInt(parts[parts.length - 1]);

  if (isNaN(id)) return null;

  return {
    id: id,
    title: `Dự án số ${id}: Thiết kế bao bì hộp sữa cao cấp`,
    image: projectImages[(id - 1) % projectImages.length],
    tag: id % 2 === 0 ? "Bao bì" : "In ấn",
    desc: "Dự án thiết kế và in ấn bao bì hộp cứng 5 lớp với công nghệ in UV định hình, đảm bảo độ bền và tính thẩm mỹ cao cho sản phẩm.",
    intro:
      "Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.",
  };
};

export const ProjectDetailContent: React.FC = () => {
  const { slug } = useParams();

  const projectItem = useMemo(() => {
    if (!slug) return null;
    return getProjectData(slug);
  }, [slug]);

  if (!projectItem) {
    return (
      <div className="w-full h-[300px] flex flex-col items-center justify-center text-gray-500">
        <p>Đang tải hoặc không tìm thấy dự án...</p>
        <Link to="/du-an" className="text-red-500 mt-2 underline">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col items-center bg-white pb-[60px] lg:pb-[100px]">
      {/* ============================================================
          1. MOBILE VERSION (< 1024px)
          ============================================================ */}
      <div className="flex flex-col w-full px-[24px] lg:hidden">
        {/* Breadcrumb Mobile */}
        <div className="flex flex-col items-start gap-[4px] mt-[12px] mb-[20px]">
          <div className="flex items-center flex-wrap gap-[4px] w-full">
            <Link
              to="/"
              className="font-inter font-normal text-[15px] leading-[24px] text-[#8E8E8E]"
            >
              Trang chủ
            </Link>
            <ChevronRight size={14} className="text-[#8E8E8E]" />
            <Link
              to="/du-an"
              className="font-inter font-normal text-[15px] leading-[24px] text-[#9E9E9E]"
            >
              Dự án
            </Link>
            <ChevronRight size={14} className="text-[#9E9E9E]" />
            <span className="font-inter font-normal text-[15px] leading-[24px] text-[#9E9E9E]">
              {projectItem.tag}
            </span>
          </div>

          <div className="flex items-center gap-[4px] w-full">
            <ChevronRight size={14} className="text-[#9E9E9E]" />
            <span className="font-inter font-semibold text-[15px] leading-[18px] text-[#FF0000]/80 tracking-[-0.04em] line-clamp-1">
              {projectItem.title}
            </span>
          </div>
        </div>

        {/* Header Mobile */}
        <div className="flex flex-col gap-[16px] mb-[24px]">
          <span className="font-quicksand font-bold text-[16px] leading-[19px] text-[#FF0000]">
            {projectItem.tag}
          </span>
          <h1 className="font-inter font-medium text-[28px] leading-[34px] text-black tracking-[-0.04em]">
            {projectItem.title}
          </h1>
        </div>

        {/* Featured Image Mobile */}
        <div className="w-full h-[228px] bg-[#F2F2F2] rounded-[4px] overflow-hidden relative mb-[24px]">
          <img
            src={projectItem.image}
            alt={projectItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Mobile */}
        <div className="flex flex-col gap-[24px]">
          <p className="font-lato font-bold text-[18px] leading-[26px] text-[#253D4E]">
            {projectItem.intro}
          </p>
          <p className="font-lato font-normal text-[15px] leading-[24px] text-[#253D4E]">
            We've reviewed and ranked all of the best smartwatches on the market
            right now, and we've made a definitive list of the top 10 devices
            you can buy today.
          </p>

          {/* List Mobile */}
          <div className="pl-[10px]">
            <h3 className="font-quicksand font-bold text-[18px] text-[#253D4E] mb-[12px]">
              Các Loại Hộp Chúng Tôi Nhận Sản Xuất
            </h3>
            <ul className="list-disc pl-[20px] font-lato text-[15px] text-[#253D4E]">
              <li className="mb-2">Hộp nắp rời / hộp âm dương</li>
              <li>Hộp nắp nam châm</li>
            </ul>
          </div>

          {/* Second Image Mobile */}
          <div className="w-full h-[228px] bg-[#F2F2F2] rounded-[4px] overflow-hidden relative my-[10px]">
            <img
              src={projectItem.image}
              alt="Detail view"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="font-lato font-normal text-[17px] leading-[24px] text-[#253D4E]">
            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
            euismod...
          </p>
        </div>
      </div>

      {/* ============================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ CỦA BẠN
          ============================================================ */}
      <div className="hidden lg:flex flex-col items-center w-full">
        {/* BREADCRUMB */}
        <div className="w-[1299px] flex items-center gap-[8px] mt-[21px] mb-[40px]">
          <Link
            to="/"
            className="flex items-center gap-[8px] text-[#8E8E8E] hover:text-red-500 transition-colors"
          >
            <span className="font-inter text-[16px]">Trang chủ</span>
            <ChevronRight size={16} />
          </Link>
          <Link
            to="/du-an"
            className="flex items-center gap-[8px] text-[#9E9E9E] hover:text-red-500 transition-colors"
          >
            <span className="font-inter text-[16px]">Dự án</span>
            <ChevronRight size={16} />
          </Link>
          <div className="flex items-center gap-[8px] text-[#9E9E9E]">
            <span className="font-inter text-[16px]">{projectItem.tag}</span>
            <ChevronRight size={16} />
          </div>
          <div className="flex items-center">
            <span
              className="font-inter font-semibold text-[16px] truncate max-w-[600px]"
              style={{
                color: "rgba(255, 0, 0, 0.8)",
                letterSpacing: "-0.04em",
              }}
            >
              {projectItem.title}
            </span>
          </div>
        </div>

        {/* PROJECT HEADER */}
        <div className="relative w-[1299px] h-[145px] mb-[40px]">
          <span
            className="absolute left-[12px] top-[-1px] font-bold text-[16px] leading-[19px] text-[#FF0000] flex items-center h-[20px]"
            style={{ fontFamily: "Quicksand" }}
          >
            {projectItem.tag}
          </span>
          <h1
            className="absolute left-[12px] top-[28px] w-[1265px] h-[98px] text-[40px] leading-[48px] font-medium text-black flex items-center"
            style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
          >
            {projectItem.title}
          </h1>
        </div>

        {/* FEATURED IMAGE */}
        <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[60px] mt-[-50px]">
          <img
            src={projectItem.image}
            alt={projectItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="w-[897px] flex flex-col relative">
          <p
            className="text-[#253D4E] text-[24px] leading-[32px] mb-[32px] pl-[12px]"
            style={{ fontFamily: "Lato" }}
          >
            {projectItem.intro}
          </p>
          <p
            className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px] pl-[12px]"
            style={{ fontFamily: "Lato" }}
          >
            We've reviewed and ranked all of the best smartwatches on the market
            right now...
          </p>
          <p
            className="text-[#253D4E] text-[17px] leading-[24px] mb-[40px] pl-[12px]"
            style={{ fontFamily: "Lato" }}
          >
            Those top-end wearables span from the Apple Watch to Fitbits, Garmin
            watches...
          </p>
          <h3
            className="text-[#253D4E] font-bold text-[20px] leading-[24px] mb-[24px] pl-[12px]"
            style={{ fontFamily: "Quicksand" }}
          >
            Các Loại Hộp Chúng Tôi Nhận Sản Xuất
          </h3>
          <ul className="list-disc pl-[40px] mb-[40px]">
            <li
              className="text-[#253D4E] text-[20px] leading-[24px] pl-[12px] mb-2"
              style={{ fontFamily: "Lato" }}
            >
              Hộp nắp rời / hộp âm dương
            </li>
            <li
              className="text-[#253D4E] text-[20px] leading-[24px] pl-[12px]"
              style={{ fontFamily: "Lato" }}
            >
              Hộp nắp nam châm
            </li>
          </ul>

          {/* Second Image Desktop */}
          <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[40px] ml-[12px]">
            <img
              src={projectItem.image}
              alt="Project detail view"
              className="w-full h-full object-cover"
            />
          </div>

          <p
            className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px] pl-[12px]"
            style={{ fontFamily: "Lato" }}
          >
            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
            euismod...
          </p>
          <p
            className="text-[#253D4E] text-[17px] leading-[24px] pl-[12px]"
            style={{ fontFamily: "Lato" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>
    </section>
  );
};
