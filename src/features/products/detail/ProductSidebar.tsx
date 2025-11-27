import React from "react";
import { Phone } from "lucide-react";

export const ProductSidebar: React.FC = () => {
  // Dữ liệu giả cho list sản phẩm đề xuất
  const SUGGESTED_PRODUCTS = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-[17px] w-[371px]">
      {/* --- BOX 1: ĐẶT MUA HÀNG --- */}
      <div
        className="w-full h-[295px] rounded-[15px] border-[2px] border-[#ECECEC] bg-white relative"
        style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.05)" }}
      >
        {/* Header Box */}
        <div className="absolute top-[31px] left-[25px] right-[37px] h-[50px] border-b border-[#ECECEC]">
          <h5 className="font-inter font-bold text-[24px] text-[#253D4E] leading-[29px]">
            Đặt mua hàng
          </h5>
          <div className="absolute bottom-[-1px] left-0 w-[80px] h-[2px] bg-[#BCE3C9]" />
        </div>

        {/* Content */}
        <div className="absolute top-[100px] left-[25px] w-[309px]">
          <p className="font-inter font-normal text-[18px] text-[#687188] leading-[24px]">
            Để đặt mua hàng, hãy gọi điện trực tiếp qua số: 0903 006 409 hoặc
            qua form liên hệ online.
          </p>
        </div>

        {/* Button Gọi điện */}
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
        {/* Header Box */}
        <div className="absolute top-[31px] left-[25px] right-[37px] h-[50px] border-b border-[#ECECEC]">
          <h5 className="font-inter font-bold text-[24px] text-[#253D4E] leading-[29px]">
            Sản phẩm đề xuất
          </h5>
          <div className="absolute bottom-[-1px] left-0 w-[80px] h-[2px] bg-[#BCE3C9]" />
        </div>

        {/* List Items (Frame 12653) */}
        <div className="absolute top-[88px] left-[19px] w-[331px] flex flex-col gap-[8px]">
          {SUGGESTED_PRODUCTS.map((_item, index) => (
            <div
              key={index}
              className="w-full h-[85px] border-b-[1.5px] border-[#F2F3F4] flex items-center gap-[13px] pl-[6px] cursor-pointer hover:bg-gray-50 transition-colors"
            >
              {/* Thumbnail (Rectangle 300) */}
              <div
                className="w-[117px] h-[69px] bg-[#F2F2F2] rounded-[10px] bg-cover bg-center"
                style={{ backgroundImage: "url('/path-to-image.jpg')" }} // Placeholder
              >
                <div className="w-full h-full bg-gray-200 rounded-[10px]" />
              </div>

              {/* Title */}
              <span className="font-inter font-normal text-[18px] text-[#253D4E] leading-[21px]">
                Milks & Dairies
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
