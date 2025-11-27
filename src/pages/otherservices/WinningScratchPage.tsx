import React from "react";

import { WinningScratchHero } from "../../features/otherservices/winning/WinningScratchHero";
import { WinningScratchContent } from "../../features/otherservices/winning/WinningScratchContent";
import { WinningScratchPortfolio } from "../../features/otherservices/winning/WinningScratchPortfolio";

export const WinningScratchPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <WinningScratchHero />
      <WinningScratchContent />
      <WinningScratchPortfolio />
    </div>
  );
};
