import React from "react";
import { HardBoxHero } from "../../features/coreservices/hardbox/HardBoxHero";
import { HardBoxContent } from "../../features/coreservices/hardbox/HardBoxContent";
import { HardBoxPortfolio } from "../../features/coreservices/hardbox/HardBoxPortfolio";

export const HardBoxPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <HardBoxHero />
      <HardBoxContent />
      <HardBoxPortfolio />
    </div>
  );
};
