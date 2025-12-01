import React from "react";
import { ProjectDetailContent } from "../../features/projects/detail/ProjectDetailContent";
import { ProjectDetailRelated } from "../../features/projects/detail/ProjectDetailRelated";
import { ContactBanner } from "./../../components/layout/ContactBanner";

export const ProjectDetailPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectDetailContent />
      <div className="mt-[80px]">
        <ProjectDetailRelated />
        <ContactBanner />
      </div>
    </div>
  );
};
