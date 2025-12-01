import React from "react";
import { NewsHero } from "../../features/news/NewsHero";
import { NewsListing } from "../../features/news/NewsListing";
import { ContactBanner } from ".././../components/layout/ContactBanner";

export const NewsPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      {/* 1. Hero Banner */}
      <NewsHero />

      <NewsListing />
      <ContactBanner />
    </div>
  );
};
