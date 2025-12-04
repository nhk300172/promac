// Bỏ import Header vì nó nằm ở Layout chung rồi
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
      className="relative bg-white w-full lg:max-w-[1440px] mx-auto overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* LƯU Ý QUAN TRỌNG: 
          - Đã xóa style={{ width: "1440px" }} gây lỗi trên mobile.
          - Thay bằng className="w-full lg:max-w-[1440px] mx-auto".
          - overflow-x-hidden: Ngăn chặn thanh cuộn ngang nếu có phần tử nào bị tràn.
      */}

      <IntroductionHero />

      {/* Responsive Margin: Mobile cách 50px, Desktop giữ nguyên 114px */}
      <div className="mt-[50px] lg:mt-[114px]">
        <AboutUs />
      </div>

      <div className="mt-[40px]">
        <History />
      </div>

      <div>
        <OurTeam />
      </div>

      {/* Responsive Margin: Mobile cách 50px, Desktop giữ nguyên 142px */}
      <div className="mt-[50px] lg:mt-[142px]">
        <MachinerySystem />
      </div>

      {/* Section Khách Hàng */}
      <div className="mt-[50px] lg:mt-[100px]">
        <OurCustomer />
      </div>

      {/* Section Giải Thưởng */}
      <div className="mb-[50px] lg:mb-[140px]">
        <OurAwards />
      </div>

      {/* Tin tức */}
      <div className="mb-[50px] lg:mb-[100px]">
        <LatestNews />
      </div>

      <ContactBanner />
    </div>
  );
};
