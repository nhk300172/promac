import React from "react";
import { PublicationHero } from "../../features/coreservices/publication/PublicationHero";
import { PublicationContent } from "../../features/coreservices/publication/PublicationContent";
import { PublicationPortfolio } from "../../features/coreservices/publication/PublicationPortfolio";

export const PublicationPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <PublicationHero />
      <PublicationContent />
      <PublicationPortfolio />
    </div>
  );
};
