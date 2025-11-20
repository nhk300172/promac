import { Header } from "./components/layout/Header";
import { IntroductionHero } from "./features/intro/IntroductionHero";
import { AboutUs } from "./features/about/AboutUs";
import { History } from "./features/history/History";
import { OurTeam } from "./features/team/OurTeam"; // <--- Import mới
import { MachinerySystem } from "./features/machinery/MachinerySystem";

function App() {
  return (
    <main className="min-h-screen w-full bg-black flex justify-center overflow-x-hidden pb-20">
      <div
        className="relative bg-white"
        style={{ width: "1440px", minHeight: "100vh" }}
      >
        <Header />

        <IntroductionHero />

        <div style={{ marginTop: "114px" }}>
          <AboutUs />
        </div>

        <div style={{ marginTop: "40px" }}>
          <History />
        </div>

        {/* --- PHẦN ĐỘI NGŨ --- */}
        <div>
          <OurTeam />
        </div>
        <div style={{ marginTop: "22px" }}>
          <MachinerySystem />
        </div>
      </div>
    </main>
  );
}

export default App;
