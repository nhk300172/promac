import { HomeBanner } from "../../features/home/HomeBanner"; // <--- IMPORT
import { HomeExperience } from "../../features/home/HomeExperience";
import { HomeNews } from "../../features/home/HomeNews";
import { HomeProcess } from "../../features/home/HomeProcess";
import { HomeProducts } from "../../features/home/HomeProducts";
import { HomeServices } from "../../features/home/HomeServices";
import { HomeStory } from "../../features/home/HomeStory";
import { HomeTestimonials } from "../../features/home/HomeTestimonials";
import { HomeWelcome } from "../../features/home/HomeWelcome";
import { HomeWhyChoose } from "../../features/home/HomeWhyChoose";
import { ContactBanner } from "../../components/layout/ContactBanner";

export const HomePage = () => {
  return (
    <div
      className="relative bg-white"
      style={{ width: "1440px", minHeight: "100vh" }}
    >
      {/* Banner chính của trang chủ */}
      <HomeBanner />

      <div style={{ marginTop: "39px" }}>
        <HomeWelcome />
      </div>
      <div style={{ marginTop: "41px" }}>
        <HomeStory />
      </div>

      <div style={{ marginTop: "68px" }}>
        <HomeServices />
      </div>

      <div style={{ marginTop: "140px" }}>
        <HomeWhyChoose />
      </div>

      <div style={{ marginTop: "100px" }}>
        <HomeExperience />
      </div>
      <div style={{ marginTop: "20px" }}>
        <HomeProcess />
      </div>
      <div style={{ marginTop: "10px" }}>
        <HomeTestimonials />
      </div>
      <div style={{ marginTop: "30px" }}>
        <HomeProducts />
      </div>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        {" "}
        {/* Margin bottom để cách Footer */}
        <HomeNews />
      </div>
      <ContactBanner />
    </div>
  );
};
