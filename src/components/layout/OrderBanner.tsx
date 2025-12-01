import { useState, useRef } from "react";

// --- IMPORT HÌNH ẢNH SLIDER (Chuyển từ Footer sang) ---
import footer1 from "../../assets/footer/footer1.jpg";
import footer2 from "../../assets/footer/footer2.jpg";
import footer3 from "../../assets/footer/footer3.jpg";
import footer4 from "../../assets/footer/footer4.png";

// --- DATA ---
const BASE_IMAGES = [footer1, footer2, footer3, footer4];
const DISPLAY_IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];
const ITEM_WIDTH = 490 + 24;
const SET_WIDTH = ITEM_WIDTH * BASE_IMAGES.length;

export const OrderBanner = () => {
  // --- LOGIC KÉO THẢ VÔ TẬN (Giữ nguyên) ---
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(-SET_WIDTH);
  const [prevTranslate, setPrevTranslate] = useState(-SET_WIDTH);

  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null); // Fix type typescript

  const checkBoundary = () => {
    setCurrentTranslate((prev) => {
      if (prev > 0) return prev - SET_WIDTH;
      if (prev < -2 * SET_WIDTH) return prev + SET_WIDTH;
      return prev;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX);
    setPrevTranslate(currentTranslate);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  const handleMouseUpOrLeave = () => {
    setIsDown(false);
    checkBoundary();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.2;
    setCurrentTranslate(prevTranslate + walk);
  };

  return (
    <section className="w-full pt-[31px] pb-20 flex flex-col items-center relative z-10 bg-white !overflow-hidden">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-2 mb-9 px-4">
        <h2 className="text-[40px] md:text-[56px] font-normal leading-tight md:leading-[115px] tracking-[-2px] md:tracking-[-5px] text-center text-black">
          Hãy gọi trực tiếp để đặt mua hàng
        </h2>
        <p className="text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[31px] text-center text-black/65 max-w-[683px]">
          Hãy gọi đến số 0903 006 409 hoặc qua form liên hệ online.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-[20px] md:gap-[36px] mb-[60px] z-20">
        <button
          className="group w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300"
          style={{ boxShadow: "none" }}
        >
          <span className="group-hover:drop-shadow-md">Gọi điện</span>
        </button>
        <button className="w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300">
          Liên hệ
        </button>
      </div>

      {/* KHUNG SLIDER */}
      <div
        className={`w-full relative h-[360px] !overflow-hidden select-none ${
          isDown ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ overflow: "hidden" }}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute top-0 left-0 h-full flex flex-col justify-between"
          style={{
            transform: `translateX(${currentTranslate}px)`,
            width: `${ITEM_WIDTH * DISPLAY_IMAGES.length}px`,
          }}
        >
          <div className="flex gap-[24px] pl-[calc(50vw-245px)]">
            {DISPLAY_IMAGES.map((imgSrc, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[490px] h-[158px] bg-gray-200 bg-cover bg-center shrink-0 pointer-events-none"
                style={{
                  borderRadius: "512px",
                  backgroundImage: `url(${imgSrc})`,
                }}
              />
            ))}
          </div>
          <div className="flex gap-[24px] pl-[calc(50vw-245px)] ml-[245px]">
            {DISPLAY_IMAGES.map((imgSrc, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[490px] h-[158px] bg-gray-200 bg-cover bg-center shrink-0 pointer-events-none"
                style={{
                  borderRadius: "512px",
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
