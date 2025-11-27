import React from "react";
import { DecalHero } from "../../features/coreservices/decal/DecalHero";
import { DecalContent } from "../../features/coreservices/decal/DecalContent";
import { DecalPortfolio } from "../../features/coreservices/decal/DecalPortfolio";

export const DecalPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <DecalHero />
      <DecalContent />
      <DecalPortfolio />
    </div>
  );
};
