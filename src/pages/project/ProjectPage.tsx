import React from "react";
// Import đúng đường dẫn
import { ProjectHero } from "../../features/projects/ProjectHero";
import { ProjectListing } from "../../features/projects/ProjectListing";

export const ProjectPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      {/* Hero Banner */}
      {/* Nếu bạn chưa tạo ProjectHero riêng thì dùng tạm NewsHero hoặc copy ra sửa */}
      <ProjectHero />

      {/* Listing (3x4) */}
      <ProjectListing />
    </div>
  );
};
