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
    // THAY ĐỔI QUAN TRỌNG:
    // - w-full: Chiếm hết chiều rộng cha.
    // - xl:max-w-[897px]: Chỉ giới hạn width trên màn hình Desktop Lớn (>= 1280px).
    // - Trên iPad (lg), nó sẽ là w-full (không giới hạn 897px), giúp ảnh tràn full khung như bạn muốn.
    <div className="w-full flex flex-col items-start xl:max-w-[897px]">
      {/* ============================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Tablet: Tăng max-w container để đẹp hơn
          ============================================================ */}
      <div className="flex flex-col w-full px-[24px] lg:hidden items-center">
        <div className="w-full max-w-[700px]">
          {" "}
          {/* Wrapper cho Tablet */}
          {/* Main Image Mobile */}
          <div className="w-full aspect-[2/1] bg-[#F2F2F2] rounded-[15px] overflow-hidden mb-[24px] relative">
            <img
              src={productItem.image}
              alt={productItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content Mobile */}
          <div className="flex flex-col gap-[24px]">
            <p className="font-inter font-normal text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#253D4E]">
              {productItem.intro}
            </p>
            <p className="font-inter font-normal text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#253D4E]">
              We've reviewed and ranked all of the best smartwatches on the
              market right now, and we've made a definitive list of the top 10
              devices you can buy today. One of the 10 picks below may just be
              your perfect next smartwatch.
            </p>

            {/* Second Image Mobile */}
            <div className="w-full aspect-[2/1] bg-[#F2F2F2] rounded-[15px] overflow-hidden relative">
              <img
                src={productItem.image}
                alt="Detail view"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-lato font-normal text-[17px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#253D4E]">
              Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
              euismod et diam quis aliquam consequat porttitor integer a nisl,
              in faucibus nunc et aenean turpis dui dignissim nec scelerisque
              ullamcorper eu neque, augue quam quis lacus pretium eros est amet
              turpis nunc in turpis massa et eget facilisis ante molestie
              penatibus dolor volutpat, porta pellentesque scelerisque at ornare
              dui tincidunt cras feugiat tempor lectus
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Sử dụng Fluid Width để hỗ trợ iPad Pro
          ============================================================ */}
      <div className="hidden lg:flex flex-col w-full">
        {/* Main Image (Fluid) */}
        {/* w-full aspect-[890/415]: Tự động co giãn theo width cha nhưng giữ tỷ lệ */}
        <div className="w-full bg-[#F2F2F2] rounded-[15px] mb-[40px] relative overflow-hidden shrink-0 aspect-[890/415]">
          <img
            src={productItem.image}
            alt={productItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content (Fluid) */}
        <div className="flex flex-col w-full">
          <p className="font-normal text-[24px] text-[#253D4E] leading-[32px] mb-[32px] pl-[12px] font-lato">
            {productItem.intro}
          </p>
          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px] font-lato">
            We've reviewed and ranked all of the best smartwatches on the market
            right now, and we've made a definitive list of the top 10 devices
            you can buy today. One of the 10 picks below may just be your
            perfect next smartwatch.
          </p>
          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px] font-lato">
            Those top-end wearables span from the Apple Watch to Fitbits, Garmin
            watches to Tizen-sporting Samsung watches. There's also Wear OS
            which is Google's own wearable operating system in the vein of
            Apple's watchOS - you’ll see it show up in a lot of these devices.
          </p>
          <h3 className="font-bold text-[20px] text-[#253D4E] leading-[24px] mb-[24px] pl-[12px] font-quicksand">
            Lorem ipsum dolor sit amet cons
          </h3>
          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[40px] pl-[12px] font-lato">
            Throughout our review process, we look at the design, features,
            battery life, spec, price and more for each smartwatch, rank it
            against the competition and enter it into the list you'll find
            below.
          </p>

          {/* Second Image (Fluid) */}
          <div className="bg-[#F2F2F2] rounded-[15px] mb-[40px] relative overflow-hidden shrink-0 w-full  aspect-[890/415]">
            <img
              src={productItem.image}
              alt="Product detail"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] mb-[32px] pl-[12px] font-lato">
            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
            euismod et diam quis aliquam consequat porttitor integer a nisl, in
            faucibus nunc et aenean turpis dui dignissim nec scelerisque
            ullamcorper eu neque, augue quam quis lacus pretium eros est amet
            turpis nunc in turpis massa et eget facilisis ante molestie
            penatibus dolor volutpat, porta pellentesque scelerisque at ornare
            dui tincidunt cras feugiat tempor lectus
          </p>
          <p className="font-normal text-[17px] text-[#253D4E] leading-[24px] pl-[12px] font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
            enim, libero sit. Est donec lobortis cursus amet, cras elementum
            libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu,
            sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo
            mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl,
            odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi
            rhoncus elit sit sit.
          </p>
        </div>
      </div>
    </div>
  );
};
