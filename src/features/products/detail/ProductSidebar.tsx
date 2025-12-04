// src/features/products/detail/ProductSidebar.tsx
import React from "react";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- IMPORT HÌNH ẢNH ---
import recommendedProductImage1 from "../../../assets/products/recommended-product1.jpg";
import recommendedProductImage2 from "../../../assets/products/recommended-product2.jpg";
import recommendedProductImage3 from "../../../assets/products/recommended-product3.jpg";
import recommendedProductImage4 from "../../../assets/products/recommended-product4.jpg";
import recommendedProductImage5 from "../../../assets/products/recommended-product5.jpg";

// --- DỮ LIỆU SẢN PHẨM ĐỀ XUẤT (Đổi ID lên đầu 100 để tránh trùng) ---
const SUGGESTED_PRODUCTS = [
  {
    id: 101, // Đổi từ 1 -> 101
    title: "Chen Cardigan",
    image: recommendedProductImage1,
    price: "99.000đ",
    slug: "san-pham-so-101", // Slug tương ứng
  },
  {
    id: 102,
    title: "Chen Sweater",
    image: recommendedProductImage2,
    price: "89.000đ",
    slug: "san-pham-so-102",
  },
  {
    id: 103,
    title: "Colorful Jacket",
    image: recommendedProductImage3,
    price: "25.000đ",
    slug: "san-pham-so-103",
  },
  {
    id: 104,
    title: "T-Shirt Men",
    image: recommendedProductImage4,
    price: "220.000đ",
    slug: "san-pham-so-104",
  },
  {
    id: 105,
    title: "Blue Jeans",
    image: recommendedProductImage5,
    price: "399.000đ",
    slug: "san-pham-so-105",
  },
];

export const ProductSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleRecommendedClick = (slug: string) => {
    navigate(`/san-pham/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col gap-[17px] w-[371px]">
      {/* --- BOX 1: ĐẶT MUA HÀNG --- */}
      <div
        className="w-full h-[295px] rounded-[15px] border-[2px] border-[#ECECEC] bg-white relative"
        style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="absolute top-[31px] left-[25px] right-[37px] h-[50px] border-b border-[#ECECEC]">
          <h5 className="font-inter font-bold text-[24px] text-[#253D4E] leading-[29px]">
            Đặt mua hàng
          </h5>
          <div className="absolute bottom-[-1px] left-0 w-[80px] h-[2px] bg-[#BCE3C9]" />
        </div>

        <div className="absolute top-[100px] left-[25px] w-[309px]">
          <p className="font-inter font-normal text-[18px] text-[#687188] leading-[24px]">
            Để đặt mua hàng, hãy gọi điện trực tiếp qua số: 0903 006 409 hoặc
            qua form liên hệ online.
          </p>
        </div>

        <button className="absolute top-[207px] left-[92px] w-[188px] h-[53px] bg-[#FF0000] rounded-[20px] flex items-center justify-center gap-[10px] shadow-[0px_0px_14px_#FF0000] hover:scale-105 transition-transform">
          <Phone className="text-white w-[20px] h-[20px]" />
          <span className="font-inter font-bold text-[20px] text-[#F5F5F5]">
            Gọi điện
          </span>
        </button>
      </div>

      {/* --- BOX 2: SẢN PHẨM ĐỀ XUẤT --- */}
      <div
        className="w-full h-[575px] rounded-[15px] border-[2px] border-[#ECECEC] bg-white relative"
        style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="absolute top-[31px] left-[25px] right-[37px] h-[50px] border-b border-[#ECECEC]">
          <h5 className="font-inter font-bold text-[24px] text-[#253D4E] leading-[29px]">
            Sản phẩm đề xuất
          </h5>
          <div className="absolute bottom-[-1px] left-0 w-[80px] h-[2px] bg-[#BCE3C9]" />
        </div>

        <div className="absolute top-[88px] left-[19px] w-[331px] flex flex-col gap-[8px]">
          {SUGGESTED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => handleRecommendedClick(product.slug)}
              className="w-full h-[85px] border-b-[1.5px] border-[#F2F3F4] flex items-center gap-[13px] pl-[6px] cursor-pointer hover:bg-gray-50 transition-colors group"
            >
              <div className="w-[117px] h-[69px] bg-[#F2F2F2] rounded-[10px] overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-inter font-normal text-[18px] text-[#253D4E] leading-[21px] group-hover:text-[#FF0000] transition-colors line-clamp-2">
                  {product.title}
                </span>
                <span className="text-sm text-gray-500 font-inter">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
