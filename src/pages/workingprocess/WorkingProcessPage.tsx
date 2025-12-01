import React from "react";
import { WorkingProcessHero } from "../../features/policies/workingprocess/WorkingProcessHero";
import { WorkingProcessContent } from "../../features/policies/workingprocess/WorkingProcessContent";

export const WorkingProcessPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <WorkingProcessHero />
      <WorkingProcessContent />
    </div>
  );
};
