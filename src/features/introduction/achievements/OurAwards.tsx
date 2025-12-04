// --- IMPORT 4 ẢNH GIẢI THƯỞNG ---
import award1 from "../../../assets/awards/award1.jpg";
import award2 from "../../../assets/awards/award2.jpg";
import award3 from "../../../assets/awards/award3.jpg";
import award4 from "../../../assets/awards/award4.jpg";

const AWARDS_DATA = [
  {
    year: "2021",
    title: "Best NGO Award",
    location: "Berlin, Germany",
    img: award1,
  },
  {
    year: "2018",
    title: "Global Award",
    location: "New York, USA",
    img: award2,
  },
  {
    year: "2014",
    title: "Foresto Award",
    location: "New Delhi, India",
    img: award3,
  },
  {
    year: "2010",
    title: "Earth Saver Award",
    location: "Vienna, Austria",
    img: award4,
  },
];

export const OurAwards = () => {
  return (
    <section className="w-full flex justify-center">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA MỚI
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[24px]">
        {/* Header Mobile */}
        <h2 className="font-lato font-bold text-[#000000] text-[28px] leading-[34px] text-center mb-[32px]">
          Giải thưởng & Sự công nhận
        </h2>

        {/* Awards List Mobile (Vertical) */}
        <div className="flex flex-col gap-[32px] w-full items-center">
          {AWARDS_DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[327px]">
              {/* Badge Image */}
              <div className="flex items-center justify-center mb-[8px] h-[92px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              {/* Info */}
              <span className="font-inter font-bold text-[#1D2130] text-[24px] leading-[160%] text-center">
                {item.year}
              </span>
              <h3 className="font-inter font-bold text-[#1D2130] text-[16px] leading-[160%] text-center">
                {item.title}
              </h3>
              <p className="font-inter font-medium text-[#1D2130] text-[16px] leading-[160%] text-center uppercase opacity-60">
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center"
        style={{ width: "1127px" }}
      >
        <h2
          className="font-lato font-bold text-[#1D2130] text-center"
          style={{ fontSize: "48px", lineHeight: "120%", marginBottom: "48px" }}
        >
          Giải thưởng & sự công nhận
        </h2>

        <div className="flex justify-between w-full items-start">
          {AWARDS_DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              style={{ width: "136px" }}
            >
              <div
                className="flex items-center justify-center mb-[18px]"
                style={{ height: "92px", width: "100%" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span
                className="font-roboto font-bold text-[#1D2130] text-center"
                style={{
                  fontSize: "24px",
                  lineHeight: "160%",
                  marginBottom: "4px",
                }}
              >
                {item.year}
              </span>
              <h3
                className="font-roboto font-bold text-[#1D2130] text-center"
                style={{ fontSize: "16px", lineHeight: "160%" }}
              >
                {item.title}
              </h3>
              <p
                className="font-roboto font-medium text-[#1D2130] text-center uppercase opacity-60"
                style={{
                  fontSize: "12px",
                  lineHeight: "160%",
                  marginTop: "4px",
                }}
              >
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
