// src/pages/home/HomePage.tsx
import { HomeBanner } from "../../features/home/HomeBanner";
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
import { HomeEquipment } from "../../features/home/HomeEquipment";

export const HomePage = () => {
  return (
    <div
      // SỬA LẠI: Dùng Tailwind class thay cho inline style width/minHeight
      className="relative bg-white mx-auto overflow-hidden w-full max-w-[1440px] min-h-screen"
    >
      {/* Banner chính */}
      <HomeBanner />

      {/* Welcome Section */}
      {/* Mobile: 20px | Tablet: 30px | Desktop: 39px */}
      <div className="mt-[20px] md:mt-[30px] lg:mt-[39px]">
        <HomeWelcome />
      </div>

      {/* Story Section */}
      {/* Mobile: 20px | Tablet: 30px | Desktop: 41px */}
      <div className="mt-[20px] ">
        <HomeStory />
      </div>

      {/* Why Choose Us */}
      {/* Mobile: 60px | Tablet: 100px | Desktop: 140px (Khoảng cách lớn cần giảm mạnh trên mobile) */}
      <div className="mt-[60px] md:mt-[100px] lg:mt-[140px]">
        <HomeWhyChoose />
      </div>

      {/* Equipment Section */}
      {/* Mobile: 60px | Tablet: 80px | Desktop: 100px */}
      <div className="mt-[60px] md:mt-[80px] lg:mt-[100px]">
        <HomeEquipment />
      </div>

      {/* Process */}
      {/* Giữ nguyên vì khoảng cách nhỏ */}
      <div className="mt-[20px]">
        <HomeProcess />
      </div>

      {/* Services Section */}
      {/* Mobile: 40px | Tablet: 50px | Desktop: 68px */}
      <div className="mt-[60px] md:mt-[100px] lg:mt-[140px]">
        <HomeServices />
      </div>

      {/* Experience */}
      {/* Mobile: 50px | Tablet: 80px | Desktop: 100px */}
      <div className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
        <HomeExperience />
      </div>

      {/* Products */}
      {/* Giữ nguyên */}
      <div className="mt-[30px]">
        <HomeProducts />
      </div>

      {/* News */}
      {/* Mobile: 50px | Tablet: 80px | Desktop: 100px */}
      <div className="mt-[50px] mb-[50px] md:mt-[80px] md:mb-[80px] lg:mt-[100px] lg:mb-[100px]">
        <HomeNews />
      </div>

      {/* Testimonials */}
      {/* Giữ nguyên */}
      <div className="mt-[10px]">
        <HomeTestimonials />
      </div>

      {/* Contact Banner */}
      <div className="w-full">
        <ContactBanner />
      </div>
    </div>
  );
};
