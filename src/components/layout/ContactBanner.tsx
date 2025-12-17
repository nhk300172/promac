// src/components/layout/ContactBanner.tsx
import { Link } from "react-router-dom";

// --- IMPORT HÌNH ẢNH SLIDER ---
import footer1 from "../../assets/footer/footer1.jpg";
import footer2 from "../../assets/footer/footer2.jpg";
import footer3 from "../../assets/footer/footer3.jpg";
import footer4 from "../../assets/footer/footer4.png";

// --- DATA ---
// Nhân đôi danh sách nhiều lần để đảm bảo không bị khoảng trắng khi chạy loop
const BASE_IMAGES = [footer1, footer2, footer3, footer4];
const DISPLAY_IMAGES = [
  ...BASE_IMAGES,
  ...BASE_IMAGES,
  ...BASE_IMAGES,
  ...BASE_IMAGES,
];

export const ContactBanner = () => {
  return (
    <section className="w-full flex flex-col items-center overflow-hidden bg-white pb-[60px] md:pb-[100px]">
      {/* Inject CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        /* Hover to pause (tùy chọn) */
        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* =================================================================
          HEADER & BUTTONS (Chung cho Mobile & Desktop)
          ================================================================= */}
      <div className="flex flex-col items-center text-center w-full px-5 mt-[40px] mb-[40px] z-10 relative">
        <h2 className="font-inter text-[28px] md:text-[40px] lg:text-[56px] leading-[1.2] font-bold md:font-normal text-black mb-[24px] max-w-[800px]">
          Hãy liên hệ với chúng tôi để được hỗ trợ
        </h2>

        <p className="font-inter font-medium text-[16px] md:text-[20px] leading-[1.5] text-[#64607D] tracking-[-0.02em] max-w-[680px]">
          A webinar platform designed for marketers to host jaw-dropping
          experiences that drive revenue.
        </p>
      </div>

      <div className="flex flex-row gap-[24px] md:gap-[36px] mb-[60px] z-20 relative">
        <Link to="/lien-he">
          <button className="flex items-center justify-center w-[160px] md:w-[188px] h-[45px] md:h-[53px] bg-white text-[#FF0000] border border-[#FF0000] rounded-[20px] font-bold text-[16px] md:text-[20px] hover:bg-[#FF0000] hover:text-white transition-all duration-300">
            Liên hệ
          </button>
        </Link>
      </div>

      {/* =================================================================
          AUTO-PLAY SLIDERS
          ================================================================= */}
      <div className="w-full flex flex-col gap-[20px] overflow-hidden group">
        {/* --- ROW 1: Right to Left (Trái sang) --- */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee-left gap-[20px]">
            {DISPLAY_IMAGES.map((imgSrc, idx) => (
              <div
                key={`row1-${idx}`}
                className="bg-gray-200 bg-cover bg-center shrink-0"
                style={{
                  // Kích thước nhỏ hơn: Giảm từ 490px -> 300px (Desktop) / 200px (Mobile)
                  width: "clamp(200px, 25vw, 300px)",
                  height: "clamp(80px, 10vw, 100px)",
                  borderRadius: "100px",
                  backgroundImage: `url(${imgSrc})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* --- ROW 2: Left to Right (Phải sang) --- */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee-right gap-[20px]">
            {DISPLAY_IMAGES.map((imgSrc, idx) => (
              <div
                key={`row2-${idx}`}
                className="bg-gray-200 bg-cover bg-center shrink-0"
                style={{
                  // Kích thước nhỏ hơn tương tự row 1
                  width: "clamp(200px, 25vw, 300px)",
                  height: "clamp(80px, 10vw, 100px)",
                  borderRadius: "100px",
                  backgroundImage: `url(${imgSrc})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
