// src/features/products/detail/ProductDetailMain.tsx
import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";

// IMPORT ẢNH (Giữ nguyên)
import product1 from "../../../assets/products/product1.png";
import product2 from "../../../assets/products/product2.png";
import product3 from "../../../assets/products/product3.png";
import recommendedProductImage1 from "../../../assets/products/recommended-product1.jpg";
import recommendedProductImage2 from "../../../assets/products/recommended-product2.jpg";
import recommendedProductImage3 from "../../../assets/products/recommended-product3.jpg";
import recommendedProductImage4 from "../../../assets/products/recommended-product4.jpg";
import recommendedProductImage5 from "../../../assets/products/recommended-product5.jpg";

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

const getProductData = (slug: string): ProductItemType | null => {
  const parts = slug.split("-");
  const id = parseInt(parts[parts.length - 1]);
  if (isNaN(id)) return null;

  let image;
  let title;
  if (id > 100) {
    const index = (id - 101) % recommendedImages.length;
    image = recommendedImages[index];
    title = `Sản phẩm đề xuất: Mẫu số ${id}`;
  } else {
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
    <div className="w-full flex flex-col items-start lg:w-[897px]">
      {/* ============================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA DỌC
          ============================================================ */}
      <div className="flex flex-col w-full px-[24px] lg:hidden">
        {/* Main Image Mobile (315x149) */}
        <div className="w-full aspect-[2/1] bg-[#F2F2F2] rounded-[15px] overflow-hidden mb-[24px] relative">
          <img
            src={productItem.image}
            alt={productItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Mobile */}
        <div className="flex flex-col gap-[24px]">
          <p className="font-inter font-normal text-[15px] leading-[24px] text-[#253D4E]">
            {productItem.intro}
          </p>
          <p className="font-inter font-normal text-[15px] leading-[24px] text-[#253D4E]">
            We've reviewed and ranked all of the best smartwatches on the market
            right now...
          </p>

          {/* Second Image Mobile (315x147) */}
          <div className="w-full aspect-[2/1] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative">
            <img
              src={productItem.image}
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
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ============================================================ */}
      <div className="hidden lg:flex flex-col w-full">
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

        <div className="flex flex-col w-full">
          <p className="font-normal text-[24px] text-[#253D4E] leading-[32px] mb-[32px] pl-[12px] font-lato">
            {productItem.intro}
          </p>
          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px] font-lato">
            We've reviewed and ranked all of the best smartwatches on the market
            right now...
          </p>
          <p className="font-normal text-[17spx] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px] font-lato">
            Those top-end wearables span from the Apple Watch to Fitbits...
          </p>
          <h3 className="font-bold text-[20px] text-[#253D4E] leading-[24px] mb-[24px] pl-[12px] font-quicksand">
            Lorem ipsum dolor sit amet cons
          </h3>
          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px] font-lato">
            Throughout our review process, we look at the design, features,
            battery life...
          </p>

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

          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px] font-lato">
            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
            euismod...
          </p>
          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] pl-[12px] font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
            enim, libero sit...
          </p>
        </div>
      </div>
    </div>
  );
};
