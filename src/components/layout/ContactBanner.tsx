import { useState, useRef } from "react";
import { Link } from "react-router-dom";

// --- IMPORT HÌNH ẢNH SLIDER ---
import footer1 from "../../assets/footer/footer1.jpg";
import footer2 from "../../assets/footer/footer2.jpg";
import footer3 from "../../assets/footer/footer3.jpg";
import footer4 from "../../assets/footer/footer4.png";

// --- DATA ---
const BASE_IMAGES = [footer1, footer2, footer3, footer4];
const DISPLAY_IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];
const ITEM_WIDTH = 490 + 24;
const SET_WIDTH = ITEM_WIDTH * BASE_IMAGES.length;

export const ContactBanner = () => {
  // --- LOGIC KÉO THẢ VÔ TẬN (Desktop Only) ---
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(-SET_WIDTH);
  const [prevTranslate, setPrevTranslate] = useState(-SET_WIDTH);

  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

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
    <section className="w-full flex flex-col items-center overflow-hidden bg-white ">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA MỚI
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden  pb-[100px] relative overflow-hidden h-[700px] mt-[-20px]">
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center text-center w-full px-5 mt-[20px] mb-[40px] z-10 relative">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-black mb-[24px] max-w-[326px]">
            Hãy liên hệ với chúng tôi để được hỗ trợ
          </h2>

          <p className="font-inter font-medium text-[16px] leading-[25px] text-[#64607D] tracking-[-0.02em] max-w-[326px]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>
        </div>

        {/* BUTTONS GROUP (Z-Index 10) */}
        <div className="flex flex-col gap-[24px] z-10 relative">
          <Link to="/bao-gia">
            <button className="flex items-center justify-center w-[156px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] active:scale-95 transition-transform">
              <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
                Yêu cầu báo giá
              </span>
            </button>
          </Link>

          <Link to="/lien-he">
            <button className="flex items-center justify-center w-[156px] h-[45px] bg-white border border-[#FF0000] rounded-[20px] active:scale-95 transition-transform box-border">
              <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                Liên hệ
              </span>
            </button>
          </Link>
        </div>

        {/* --- BACKGROUND IMAGES CONTAINER (Z-Index 0) --- */}
        {/* Figma: Left -255px, Top (tương đối dưới nút) */}
        <div
          className="absolute left-[-255px] bottom-[0px] w-[2030px] h-[258px] pointer-events-none opacity-80 "
          style={{ zIndex: 0 }}
        >
          {/* ROW 1 (Top 0) */}
          <div className="absolute top-0 left-[85px] w-[2030px] h-[115px]">
            {/* Ảnh 1 */}
            <div
              className="absolute top-0 w-[340px] h-[110px] bg-gray-200 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 340px/2 - 695.06px)",
                backgroundImage: `url(${footer4})`,
              }}
            />
            {/* Ảnh 2 */}
            <div
              className="absolute top-0 w-[351px] h-[114px] bg-gray-300 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 351px/2 - 333.56px)",
                backgroundImage: `url(${footer1})`,
              }}
            />
            {/* Ảnh 3 */}
            <div
              className="absolute top-0 w-[341px] h-[110px] bg-gray-200 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 341px/2 + 99.44px)",
                backgroundImage: `url(${footer2})`,
              }}
            />
            {/* Ảnh 4 */}
            <div
              className="absolute top-[1px] w-[326px] h-[113px] bg-gray-300 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 326px/2 + 491.94px)",
                backgroundImage: `url(${footer3})`,
              }}
            />
          </div>

          {/* ROW 2 (Top 138) */}
          <div className="absolute top-[138px] left-[-130px] w-[2030px] h-[120px]">
            {/* Ảnh 5 */}
            <div
              className="absolute top-[-0.39px] w-[343px] h-[111px] bg-gray-200 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 343px/2 - 696.43px)",
                backgroundImage: `url(${footer2})`,
              }}
            />
            {/* Ảnh 6 */}
            <div
              className="absolute top-[-0.39px] w-[348px] h-[113px] bg-gray-300 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 348px/2 - 333.93px)",
                backgroundImage: `url(${footer4})`,
              }}
            />
            {/* Ảnh 7 */}
            <div
              className="absolute top-[-0.39px] w-[352px] h-[114px] bg-gray-200 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 352px/2 + 98.07px)",
                backgroundImage: `url(${footer1})`,
              }}
            />
            {/* Ảnh 8 */}
            <div
              className="absolute top-[-0.39px] w-[368px] h-[120px] bg-gray-300 rounded-[512px] bg-cover bg-center"
              style={{
                left: "calc(50% - 368px/2 + 508.07px)",
                backgroundImage: `url(${footer4})`,
              }}
            />
          </div>
        </div>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <div className="hidden lg:flex w-full pt-[31px] pb-20 flex-col items-center relative z-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2 mb-9 px-4">
          <h2 className="text-[56px] font-normal leading-[115px] tracking-[-5px] text-center text-black">
            Hãy liên hệ với chúng tôi để được hỗ trợ
          </h2>
          <p className="text-[20px] font-normal leading-[31px] text-center text-black/65 max-w-[683px]">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-[36px] mb-[60px] z-20">
          <Link to="/bao-gia">
            <button
              className="group w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300"
              style={{ boxShadow: "none" }}
            >
              <span className="group-hover:drop-shadow-md">
                Yêu cầu Báo giá
              </span>
            </button>
          </Link>

          <Link to="/lien-he">
            <button className="w-[188px] h-[53px] rounded-[20px] bg-white text-[#FF0000] border border-[#FF0000] font-bold text-[20px] leading-[24px] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300">
              Liên hệ
            </button>
          </Link>
        </div>

        {/* KHUNG SLIDER KÉO THẢ */}
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
      </div>
    </section>
  );
};
