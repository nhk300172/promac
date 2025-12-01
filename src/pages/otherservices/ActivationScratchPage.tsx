import React from "react";

import { ActivationScratchHero } from "../../features/otherservices/activation/ActivationScratchHero";
import { ActivationScratchContent } from "../../features/otherservices/activation/ActivationScratchContent";
import { ActivationScratchPortfolio } from "../../features/otherservices/activation/ActivationScratchPortfolio";

export const ActivationScratchPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <ActivationScratchHero />
      <ActivationScratchContent />
      <ActivationScratchPortfolio />
    </div>
  );
};
