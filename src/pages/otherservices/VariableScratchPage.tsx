import React from "react";

import { VariableScratchHero } from "../../features/otherservices/variable/VariableScratchHero";
import { VariableScratchContent } from "../../features/otherservices/variable/VariableScratchContent";
import { VariableScratchPortfolio } from "../../features/otherservices/variable/VariableScratchPortfolio";

export const VariableScratchPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <VariableScratchHero />
      <VariableScratchContent />
      <VariableScratchPortfolio />
    </div>
  );
};
