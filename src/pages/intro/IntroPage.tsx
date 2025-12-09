// src/pages/intro/IntroPage.tsx

import { AboutUs } from "../../features/introduction/about/AboutUs";
import { IntroductionHero } from "../../features/introduction/intro/IntroductionHero";
import { History } from "../../features/introduction/history/History";
import { OurTeam } from "../../features/introduction/team/OurTeam";
import { MachinerySystem } from "../../features/introduction/machinery/MachinerySystem";
import { OurCustomer } from "../../features/introduction/customer/OurCustomer";
import { OurAwards } from "../../features/introduction/achievements/OurAwards";
import { LatestNews } from "../../features/introduction/news/LatestNews";
import { ContactBanner } from "../../components/layout/ContactBanner";

export const IntroPage = () => {
  return (
    <div
      className="relative bg-white w-full max-w-[1440px] mx-auto overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <IntroductionHero />

      {/* 1. ABOUT US
          - Mobile: 50px
          - Tablet (md): 80px
          - iPad Pro (lg): 100px (Co giãn nhẹ)
          - Desktop (xl): 114px (Chuẩn Figma)
      */}
      <div className="mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[114px]">
        <AboutUs />
      </div>

      {/* 2. HISTORY 
          - Khoảng cách nhỏ, giữ nguyên hoặc tăng nhẹ trên Tablet
      */}
      <div className="mt-[40px] md:mt-[50px] lg:mt-[60px]">
        <History />
      </div>

      {/* 3. TEAM 
          - Liền mạch với History, không cần margin
      */}
      <div>
        <OurTeam />
      </div>

      {/* 4. MACHINERY SYSTEM
          - Mobile: 50px
          - Tablet (md): 100px
          - iPad Pro (lg): 120px
          - Desktop (xl): 142px
      */}
      <div className="mt-[50px] md:mt-[100px] lg:mt-[120px] xl:mt-[142px]">
        <MachinerySystem />
      </div>

      {/* 5. OUR CUSTOMER
          - Mobile: 50px
          - Tablet (md): 75px
          - iPad Pro (lg): 90px
          - Desktop (xl): 100px
      */}
      <div className="mt-[50px] md:mt-[75px] lg:mt-[90px] xl:mt-[100px]">
        <OurCustomer />
      </div>

      {/* 6. AWARDS
          - Mobile: 50px
          - Tablet (md): 100px
          - iPad Pro (lg): 120px
          - Desktop (xl): 140px
      */}
      <div className="mb-[50px] md:mb-[100px] lg:mb-[120px] xl:mb-[140px]">
        <OurAwards />
      </div>

      {/* 7. LATEST NEWS
          - Mobile: 50px
          - Tablet (md): 75px
          - iPad Pro (lg): 90px
          - Desktop (xl): 100px
      */}
      <div className="mb-[50px] md:mb-[75px] lg:mb-[90px] xl:mb-[100px]">
        <LatestNews />
      </div>

      <ContactBanner />
    </div>
  );
};
