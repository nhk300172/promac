// src/features/news/details/NewsDetailContent.tsx
import React, { useMemo } from "react";
import { ChevronRight } from "lucide-react";
import { useParams, Link } from "react-router-dom";

// --- IMPORT HÌNH ẢNH ---
import news1 from "../../../assets/home-experience/onca.png";
import news2 from "../../../assets/news/news1.png";
import news3 from "../../../assets/news/news2.png";
import news4 from "../../../assets/news/news3.png";
import news5 from "../../../assets/home-experience/voguearabia2023.png";
import news6 from "../../../assets/home-experience/coolfish.png";
import news7 from "../../../assets/home-experience/domo.png";
import news8 from "../../../assets/home-experience/freeletics2021.png";
import news9 from "../../../assets/home-experience/bagel.png";
import news10 from "../../../assets/news/news10.png";
import news11 from "../../../assets/news/news11.png";
import news12 from "../../../assets/news/news12.png";

// Danh sách ảnh
const newsImages = [
  news1,
  news2,
  news3,
  news4,
  news5,
  news6,
  news7,
  news8,
  news9,
  news10,
  news11,
  news12,
];

interface NewsItemType {
  id: number;
  date: string;
  readTime: string;
  title: string;
  tag: string;
  image: string;
  secondaryImage: string;
  intro: string;
}

const getNewsData = (slug: string): NewsItemType | null => {
  const parts = slug.split("-");
  const id = parseInt(parts[parts.length - 1]);
  if (isNaN(id)) return null;

  return {
    id: id,
    date: "22 July 2024",
    readTime: "Read 4 min",
    title: `Our SaaS Product Just Launched!`,
    tag: id % 2 === 0 ? "In ấn" : "Voucher",
    image: newsImages[(id - 1) % newsImages.length],
    secondaryImage: newsImages[id % newsImages.length],
    intro:
      "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
  };
};

export const NewsDetailContent: React.FC = () => {
  const { slug } = useParams();

  const newsItem = useMemo(() => {
    if (!slug) return null;
    return getNewsData(slug);
  }, [slug]);

  if (!newsItem) {
    return (
      <div className="w-full h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-400">
          Đang tải hoặc không tìm thấy bài viết...
        </h2>
        <Link to="/tin-tuc" className="text-red-500 mt-4 underline">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col items-center bg-white pb-[60px] lg:pb-[100px]">
      {/* ============================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Changed lg:hidden to lg:hidden (Giữ nguyên vì Tablet < 1024px vẫn dùng layout dọc này tốt)
          - Tablet: Tăng max-w lên 700px để không bị bé quá
          ============================================================ */}
      <div className="flex flex-col w-full px-[24px] lg:hidden items-center">
        <div className="w-full max-w-[700px]">
          {" "}
          {/* Wrapper giới hạn width cho Tablet */}
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
                to="/tin-tuc"
                className="font-inter font-normal text-[15px] leading-[24px] text-[#9E9E9E]"
              >
                Tin Tức
              </Link>
              <ChevronRight size={14} className="text-[#9E9E9E]" />
              <span className="font-inter font-normal text-[15px] leading-[24px] text-[#9E9E9E]">
                {newsItem.tag}
              </span>
            </div>
            <div className="flex items-center gap-[4px] w-full">
              <ChevronRight size={14} className="text-[#9E9E9E]" />
              <span className="font-inter font-semibold text-[15px] leading-[18px] text-[#FF0000]/80 tracking-[-0.04em] line-clamp-1">
                {newsItem.title}
              </span>
            </div>
          </div>
          {/* Header Mobile */}
          <div className="flex flex-col gap-[16px] mb-[24px]">
            <span className="font-quicksand font-bold text-[16px] leading-[19px] text-[#FF0000]">
              {newsItem.tag}
            </span>
            <h1 className="font-inter font-medium text-[28px] md:text-[36px] leading-[34px] md:leading-[44px] text-black tracking-[-0.04em]">
              {newsItem.title}
            </h1>
          </div>
          {/* Featured Image Mobile */}
          <div className="w-full aspect-[327/228] bg-[#F2F2F2] rounded-[4px] overflow-hidden relative mb-[24px]">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content Mobile */}
          <div className="flex flex-col gap-[24px]">
            <p className="font-inter text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#253D4E] font-bold">
              {newsItem.intro}
            </p>
            <p className="font-inter font-normal text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#253D4E]">
              We've reviewed and ranked all of the best smartwatches on the
              market right now...
            </p>

            {/* Image In-Content Mobile */}
            <div className="w-full aspect-[327/228] bg-[#F2F2F2] rounded-[4px] overflow-hidden relative my-[10px]">
              <img
                src={newsItem.secondaryImage}
                alt="Content detail"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-lato font-normal text-[17px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#253D4E]">
              Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
              euismod...
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Sử dụng Fluid Width để hỗ trợ iPad Pro
          ============================================================ */}
      <div className="hidden lg:flex flex-col items-center w-full px-8 xl:px-0">
        {/* BREADCRUMB (Fluid max-w-1299px) */}
        <div className="w-full max-w-[1299px] flex items-center gap-[8px] mt-[21px] mb-[40px] flex-wrap">
          <Link
            to="/"
            className="flex items-center gap-[8px] text-[#8E8E8E] hover:text-red-500 transition-colors"
          >
            <span className="font-inter text-[16px]">Trang chủ</span>
            <ChevronRight size={16} />
          </Link>
          <Link
            to="/tin-tuc"
            className="flex items-center gap-[8px] text-[#9E9E9E] hover:text-red-500 transition-colors"
          >
            <span className="font-inter text-[16px]">Tin Tức</span>
            <ChevronRight size={16} />
          </Link>
          <div className="flex items-center gap-[8px] text-[#9E9E9E]">
            <span className="font-inter text-[16px]">{newsItem.tag}</span>
            <ChevronRight size={16} />
          </div>
          <div className="flex items-center">
            <span
              className="font-inter font-semibold text-[16px] truncate max-w-[300px] xl:max-w-[600px]"
              style={{
                color: "rgba(255, 0, 0, 0.8)",
                letterSpacing: "-0.04em",
              }}
            >
              {newsItem.title}
            </span>
          </div>
        </div>

        {/* ARTICLE HEADER (Fluid) */}
        <div className="relative w-full max-w-[1299px] h-auto mb-[40px] flex flex-col items-start gap-4">
          <span
            className="font-bold text-[16px] leading-[19px] text-[#FF0000] flex items-center h-[20px]"
            style={{ fontFamily: "Quicksand" }}
          >
            {newsItem.tag}
          </span>
          <h1
            className="w-full text-[32px] lg:text-[40px] leading-[1.2] font-medium text-black"
            style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
          >
            {newsItem.title}
          </h1>
        </div>

        {/* FEATURED IMAGE (Fluid max-w-890px) */}
        <div className="w-full max-w-[890px] aspect-[890/415] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[60px]">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* MAIN CONTENT (Fluid max-w-897px) */}
        <div className="w-full max-w-[897px] flex flex-col relative px-4 lg:px-0">
          <p
            className="text-[#253D4E] text-[20px] lg:text-[24px] leading-[32px] mb-[32px] font-bold"
            style={{ fontFamily: "Lato" }}
          >
            {newsItem.intro}
          </p>
          <p
            className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px]"
            style={{ fontFamily: "Lato" }}
          >
            We've reviewed and ranked all of the best smartwatches on the market
            right now...
          </p>

          {/* Second Image */}
          <div className="w-full aspect-[890/415] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[40px]">
            <img
              src={newsItem.secondaryImage}
              alt="Content detail"
              className="w-full h-full object-cover"
            />
          </div>

          <p
            className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px]"
            style={{ fontFamily: "Lato" }}
          >
            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet...
          </p>
        </div>
      </div>
    </section>
  );
};
