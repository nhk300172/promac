import React from "react";

import { MatchingScratchHero } from "../../features/otherservices/matching/MatchingScratchHero";
import { MatchingScratchContent } from "../../features/otherservices/matching/MatchingScratchContent";
import { MatchingScratchPortfolio } from "../../features/otherservices/matching/MatchingScratchPortfolio";

export const MatchingScratchPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <MatchingScratchHero />
      <MatchingScratchContent />
      <MatchingScratchPortfolio />
    </div>
  );
};
