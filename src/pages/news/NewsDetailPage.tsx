import React from "react";
import { NewsDetailContent } from "../../features/news/details/NewsDetailContent";
import { NewsDetailRelated } from "../../features/news/details/NewsDetailRelated";
import { ContactBanner } from "../../components/layout/ContactBanner";

export const NewsDetailPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Nội dung chi tiết bài viết */}
      <NewsDetailContent />
      <NewsDetailRelated />
      {/* (Chờ lệnh tiếp theo: Phần bài viết liên quan sẽ nằm ở đây) */}
      <ContactBanner />
    </div>
  );
};
