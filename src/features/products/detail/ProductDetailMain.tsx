// src/features/products/detail/ProductDetailMain.tsx
import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";

// --- IMPORT ẢNH SẢN PHẨM CHÍNH ---
import product1 from "../../../assets/products/product1.png";
import product2 from "../../../assets/products/product2.png";
import product3 from "../../../assets/products/product3.png";

// --- IMPORT ẢNH SẢN PHẨM ĐỀ XUẤT (Mới thêm) ---
import recommendedProductImage1 from "../../../assets/products/recommended-product1.jpg";
import recommendedProductImage2 from "../../../assets/products/recommended-product2.jpg";
import recommendedProductImage3 from "../../../assets/products/recommended-product3.jpg";
import recommendedProductImage4 from "../../../assets/products/recommended-product4.jpg";
import recommendedProductImage5 from "../../../assets/products/recommended-product5.jpg";

// Danh sách ảnh
const productImages = [product1, product2, product3];
const recommendedImages = [
  recommendedProductImage1,
  recommendedProductImage2,
  recommendedProductImage3,
  recommendedProductImage4,
  recommendedProductImage5,
];

interface ProductItemType {
  id: number;
  title: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  intro: string;
}

// --- LOGIC LẤY DỮ LIỆU ---
const getProductData = (slug: string): ProductItemType | null => {
  const parts = slug.split("-");
  const id = parseInt(parts[parts.length - 1]);

  if (isNaN(id)) return null;

  let image;
  let title;

  // Nếu ID > 100 -> Là sản phẩm đề xuất (Sidebar)
  if (id > 100) {
    const index = (id - 101) % recommendedImages.length;
    image = recommendedImages[index];
    title = `Sản phẩm đề xuất: Mẫu số ${id}`;
  }
  // Ngược lại -> Là sản phẩm chính (Listing)
  else {
    const index = (id - 1) % productImages.length;
    image = productImages[index];
    title = `Sản phẩm số ${id}: Our SaaS Product Just Launched!`;
  }

  return {
    id: id,
    title: title,
    image: image,
    oldPrice: "45.000đ",
    newPrice: "39.000đ/cái",
    intro:
      "Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.",
  };
};

export const ProductDetailMain: React.FC = () => {
  const { slug } = useParams();

  const productItem = useMemo(() => {
    if (!slug) return null;
    return getProductData(slug);
  }, [slug]);

  if (!productItem) {
    return (
      <div className="w-full h-[300px] flex flex-col items-center justify-center text-gray-500">
        <p>Đang tải hoặc không tìm thấy sản phẩm...</p>
        <Link to="/san-pham" className="text-red-500 mt-2 underline">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start w-[897px]">
      {/* --- 1. HÌNH ẢNH CHÍNH --- */}
      <div
        className="bg-[#F2F2F2] rounded-[15px] mb-[40px] relative overflow-hidden shrink-0"
        style={{ width: "890px", height: "415px" }}
      >
        <img
          src={productItem.image}
          alt={productItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- 2. NỘI DUNG --- */}
      <div className="flex flex-col w-full">
        <p className="font-normal text-[24px] text-[#253D4E] leading-[32px] mb-[32px] pl-[12px] font-lato">
          {productItem.intro}
        </p>
        {/* Paragraph 1 */}
        <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px] font-lato">
          We've reviewed and ranked all of the best smartwatches on the market
          right now, and we've made a definitive list of the top 10 devices you
          can buy today. One of the 10 picks below may just be your perfect next
          smartwatch.
        </p>
        {/* Paragraph 2 */}
        <p className="font-normal text-[17spx] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px] font-lato">
          Those top-end wearables span from the Apple Watch to Fitbits, Garmin
          watches to Tizen-sporting Samsung watches. There's also Wear OS which
          is Google's own wearable operating system in the vein of Apple's
          watchOS - you’ll see it show up in a lot of these devices.
        </p>

        <h3 className="font-bold text-[20px] text-[#253D4E] leading-[24px] mb-[24px] pl-[12px] font-quicksand">
          Lorem ipsum dolor sit amet cons
        </h3>
        {/* Paragraph 3 */}
        <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px] font-lato">
          Throughout our review process, we look at the design, features,
          battery life, spec, price and more for each smartwatch, rank it
          against the competition and enter it into the list you'll find below.
        </p>
        {/* Ảnh phụ (dùng lại ảnh chính) */}
        <div
          className="bg-[#F2F2F2] rounded-[15px] mb-[60px] relative overflow-hidden shrink-0"
          style={{ width: "890px", height: "415px" }}
        >
          <img
            src={productItem.image}
            alt="Product detail"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Paragraph 4 */}
        <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px] font-lato">
          Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
          euismod et diam quis aliquam consequat porttitor integer a nisl, in
          faucibus nunc et aenean turpis dui dignissim nec scelerisque
          ullamcorper eu neque, augue quam quis lacus pretium eros est amet
          turpis nunc in turpis massa et eget facilisis ante molestie penatibus
          dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt
          cras feugiat tempor lectus
        </p>
        {/* Paragraph 5 */}
        <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] pl-[12px] font-lato">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim,
          libero sit. Est donec lobortis cursus amet, cras elementum libero
          convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec
          sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel
          augue. Facilisi diam consequat amet, commodo lorem nisl, odio
          malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus
          elit sit sit.
        </p>
      </div>
    </div>
  );
};
