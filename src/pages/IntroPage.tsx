// Bỏ import Header
import { AboutUs } from "../features/introduction/about/AboutUs";
import { IntroductionHero } from "../features/introduction/intro/IntroductionHero";
import { History } from "../features/introduction/history/History";
import { OurTeam } from "../features/introduction/team/OurTeam";
import { MachinerySystem } from "../features/introduction/machinery/MachinerySystem";

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
    </div>
  );
};
