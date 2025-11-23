// Bỏ import Header
import { AboutUs } from "../features/introduction/about/AboutUs";
import { IntroductionHero } from "../features/introduction/intro/IntroductionHero";
import { History } from "../features/introduction/history/History";
import { OurTeam } from "../features/introduction/team/OurTeam";
import { MachinerySystem } from "../features/introduction/machinery/MachinerySystem";

import { OurCustomer } from "../features/introduction/customer/OurCustomer";
import { OurAwards } from "../features/introduction/achievements/OurAwards"; // <--- Import mới
import { LatestNews } from "../features/introduction/news/LatestNews";
=======
import { ContactBanner } from "../components/layout/ContactBanner";


export const IntroPage = () => {
  return (
    <div className="w-full flex flex-col items-center pb-[100px]">
      <IntroductionHero />

      <div style={{ marginTop: "114px" }}>
        <AboutUs />
      </div>

      <div style={{ marginTop: "40px" }}>
        <History />
      </div>

      <div style={{ marginTop: "85px" }}>
        <OurTeam />
      </div>

      <div style={{ marginTop: "142px" }}>
        <MachinerySystem />
      </div>
      {/* Section Khách Hàng */}
      <div style={{ marginTop: "100px" }}>
        <OurCustomer />
      </div>

      {/* 2. Section Giải Thưởng (Mới thêm) */}
      {/* Margin bottom lớn để tách với Footer */}
      <div style={{ marginBottom: "140px" }}>
        <OurAwards />
      </div>

      {/* Tin tức */}
      <div style={{ marginTop: "140px", marginBottom: "140px" }}>
        <LatestNews />
      </div>
      <ContactBanner />
    </div>
  );
};
