import React, { useMemo } from "react"; // Thêm useMemo
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

// --- 1. KHAI BÁO KIỂU DỮ LIỆU (Fix lỗi no-explicit-any) ---
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

// --- GIẢ LẬP LẠI DỮ LIỆU ---
// Hàm này trả về NewsItemType hoặc null
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

  // --- 2. FIX LỖI set-state-in-effect ---
  // Thay vì dùng useState + useEffect, ta dùng useMemo để tính toán dữ liệu trực tiếp.
  // Dữ liệu sẽ tự động cập nhật khi 'slug' thay đổi.
  const newsItem = useMemo(() => {
    if (!slug) return null;
    return getNewsData(slug);
  }, [slug]);

  // Nếu không tìm thấy bài viết
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
    <section className="w-full flex flex-col items-center bg-white pb-[100px]">
      {/* ============================================================
          BREADCRUMB
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
            className="font-inter font-semibold text-[16px] truncate max-w-[600px]"
            style={{ color: "rgba(255, 0, 0, 0.8)", letterSpacing: "-0.04em" }}
          >
            {newsItem.title}
          </span>
        </div>
      </div>

      {/* ============================================================
          ARTICLE HEADER
      ============================================================ */}
      <div className="relative w-[1299px] h-[145px] mb-[40px]">
        <span
          className="
            absolute left-[12px] top-[-1px]
            font-bold text-[16px] leading-[19px] text-[#FF0000]
            flex items-center w-[88px] h-[20px]
          "
          style={{ fontFamily: "Quicksand" }}
        >
          {newsItem.tag}
        </span>

        <h1
          className="
            absolute left-[12px] top-[28px]
            w-[1265px] h-[98px]
            text-[40px] leading-[48px] font-medium text-black
            flex items-center
          "
          style={{ fontFamily: "Inter", letterSpacing: "-0.04em" }}
        >
          {newsItem.title}
        </h1>
      </div>

      {/* ============================================================
          FEATURED IMAGE
      ============================================================ */}
      <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[60px] mt-[-50px]">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}
      <div className="w-[897px] flex flex-col relative">
        <p
          className="text-[#253D4E] text-[24px] leading-[32px] mb-[32px] pl-[12px] font-bold"
          style={{ fontFamily: "Lato" }}
        >
          {newsItem.intro}
        </p>

        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[32px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          We've reviewed and ranked all of the best smartwatches on the market
          right now, and we've made a definitive list of the top 10 devices you
          can buy today. One of the 10 picks below may just be your perfect next
          smartwatch.
        </p>

        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[40px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Those top-end wearables span from the Apple Watch to Fitbits, Garmin
          watches to Tizen-sporting Samsung watches. There's also Wear OS which
          is Google's own wearable operating system in the vein of Apple's
          watchOS - you’ll see it show up in a lot of these devices.
        </p>

        <h3
          className="text-[#253D4E] font-bold text-[20px] leading-[24px] mb-[24px] pl-[12px]"
          style={{ fontFamily: "Quicksand" }}
        >
          Lorem ipsum dolor sit amet cons
        </h3>

        <p
          className="text-[#253D4E] text-[17px] leading-[24px] mb-[40px] pl-[12px]"
          style={{ fontFamily: "Lato" }}
        >
          Throughout our review process, we look at the design, features,
          battery life, spec, price and more for each smartwatch, rank it
          against the competition and enter it into the list you'll find below.
        </p>

        {/* Second Image */}
        <div className="w-[890px] h-[415px] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative mb-[40px] ml-[12px]">
          <img
            src={newsItem.image}
            alt="Content detail"
            className="w-full h-full object-cover"
          />
        </div>

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
