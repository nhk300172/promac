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
  // Slug mẫu: "du-an-so-1" -> lấy ID = 1
  const parts = slug.split("-");
  const id = parseInt(parts[parts.length - 1]);

  if (isNaN(id)) return null;

  return {
    id: id,
    title: `Dự án số ${id}: Thiết kế bao bì hộp sữa cao cấp`,
    // Logic lấy ảnh giống hệt bên ProjectListing: i % 12
    image: projectImages[(id - 1) % projectImages.length],
    tag: id % 2 === 0 ? "Bao bì" : "In ấn",
    desc: "Dự án thiết kế và in ấn bao bì hộp cứng 5 lớp với công nghệ in UV định hình, đảm bảo độ bền và tính thẩm mỹ cao cho sản phẩm.",
    intro:
      "Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.",
  };
};

export const ProjectDetailContent: React.FC = () => {
  const { slug } = useParams();

  // Dùng useMemo để tính toán dữ liệu ngay lập tức
  const projectItem = useMemo(() => {
    if (!slug) return null;
    return getProjectData(slug);
  }, [slug]);

  // Nếu không tìm thấy dự án
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
    <section className="w-full flex flex-col items-center bg-white pb-[100px]">
      {/* ============================================================
          1. BREADCRUMB
      ============================================================ */}
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
            style={{ color: "rgba(255, 0, 0, 0.8)", letterSpacing: "-0.04em" }}
          >
            {projectItem.title}
          </span>
        </div>
      </div>

      {/* ============================================================
          2. PROJECT HEADER
      ============================================================ */}
      <div className="relative w-[1299px] h-[145px] mb-[40px]">
        {/* Tag */}
        <span
          className="absolute left-[12px] top-[-1px] font-bold text-[16px] leading-[19px] text-[#FF0000] flex items-center h-[20px]"
          style={{ fontFamily: "Quicksand" }}
        >
          {projectItem.tag}
        </span>

        {/* Title */}
        <h1
          className="absolute left-[12px] top-[28px] w-[1265px] h-[98px] text-[40px] leading-[48px] font-medium text-black flex items-center"
          style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
        >
          {projectItem.title}
        </h1>
      </div>

      {/* ============================================================
          3. FEATURED IMAGE (Ảnh Chính)
      ============================================================ */}
      <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[60px] mt-[-50px]">
        {/* Thay thế placeholder bằng ảnh thật */}
        <img
          src={projectItem.image}
          alt={projectItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ============================================================
          4. MAIN CONTENT
      ============================================================ */}
      <div className="w-[897px] flex flex-col relative">
        {/* Intro Text */}
        <p
          className="text-[#253D4E] text-[24px] leading-[32px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          {projectItem.intro}
        </p>

        {/* Paragraph 1 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          We've reviewed and ranked all of the best smartwatches on the market
          right now, and we've made a definitive list of the top 10 devices you
          can buy today. One of the 10 picks below may just be your perfect next
          smartwatch.
        </p>

        {/* Paragraph 2 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[40px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Those top-end wearables span from the Apple Watch to Fitbits, Garmin
          watches to Tizen-sporting Samsung watches. There's also Wear OS which
          is Google's own wearable operating system in the vein of Apple's
          watchOS - you’ll see it show up in a lot of these devices.
        </p>

        {/* Sub-Heading */}
        <h3
          className="text-[#253D4E] font-bold text-[20px] leading-[24px] mb-[24px] pl-[12px]"
          style={{ fontFamily: "Quicksand" }}
        >
          Các Loại Hộp Chúng Tôi Nhận Sản Xuất
        </h3>

        {/* List Items (Demo) */}
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

        {/* Second Image (Ảnh phụ - dùng lại ảnh chính) */}
        <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[40px] ml-[12px]">
          <img
            src={projectItem.image}
            alt="Project detail view"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Paragraph 4 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
          euismod et diam quis aliquam consequat porttitor integer a nisl, in
          faucibus nunc et aenean turpis dui dignissim nec scelerisque
          ullamcorper eu neque, augue quam quis lacus pretium eros est amet
          turpis nunc in turpis massa et eget facilisis ante molestie penatibus
          dolor volutpat...
        </p>

        {/* Paragraph 5 */}
        <p
          className="text-[#253D4E] text-[17px] leading-[24px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim,
          libero sit. Est donec lobortis cursus amet, cras elementum libero
          convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec
          sed sed.
        </p>
      </div>
    </section>
  );
};
