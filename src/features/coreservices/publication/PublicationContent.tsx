// src/features/coreservices/hardbox/HardBoxContent.tsx
import React from "react";

// --- IMPORT ẢNH TỪ FOLDER printingservices ---
import introHardBoxImg from "../../../assets/printingservices/intro-hardbox.png";

export const PublicationContent: React.FC = () => {
  return (
    // Section Container
    <section className="w-full flex justify-center pb-[100px]">
      {/* Tính toán vị trí:
         - Theo Figma: Top ảnh là 1071px.
         - Hero Section cao khoảng 746px + 40px margin = 786px.
         - Khoảng cách (Gap) cần thiết = 1071 - 786 = 285px.
         => Tôi set margin-top cho section này khoảng 280px để khớp vị trí.
      */}
      <div
        className="flex flex-col items-center"
        style={{ marginTop: "285px" }}
      >
        {/* --- KHỐI ẢNH GIỚI THIỆU (Rectangle 299) --- 
            Width: 890px; Height: 415px; Radius: 15px
        */}
        <div
          style={{
            width: "890px",
            height: "415px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Thêm chút shadow cho đẹp
          }}
        >
          <img
            src={introHardBoxImg}
            alt="Giới thiệu Hộp cứng cao cấp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* (Chỗ này để dành cho các nội dung tiếp theo nếu có) */}
      </div>
    </section>
  );
};
