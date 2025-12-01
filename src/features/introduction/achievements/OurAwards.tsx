// Không cần import Lucide icons nữa
// import { Trophy, Award, Medal, Star } from "lucide-react";

// --- IMPORT 4 ẢNH GIẢI THƯỞNG ---
// Bạn hãy đổi tên file trong thư mục assets/awards tương ứng hoặc sửa dòng import này
import award1 from "../../../assets/awards/award1.jpg"; // Best NGO Award
import award2 from "../../../assets/awards/award2.jpg"; // Global Award
import award3 from "../../../assets/awards/award3.jpg"; // Foresto Award
import award4 from "../../../assets/awards/award4.jpg"; // Earth Saver Award

// Dữ liệu giải thưởng
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
      {/* === CONTAINER CHÍNH === */}
      <div className="flex flex-col items-center" style={{ width: "1127px" }}>
        {/* 1. HEADER */}
        <h2
          className="font-lato font-bold text-[#1D2130] text-center"
          style={{
            fontSize: "48px",
            lineHeight: "120%",
            marginBottom: "48px",
          }}
        >
          Giải thưởng & sự công nhận
        </h2>

        {/* 2. AWARDS ROW */}
        <div className="flex justify-between w-full items-start">
          {AWARDS_DATA.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ width: "136px" }}
              >
                {/* --- ICON BADGE AREA (Dùng Ảnh) --- */}
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

                {/* --- YEAR --- */}
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

                {/* --- TITLE --- */}
                <h3
                  className="font-roboto font-bold text-[#1D2130] text-center"
                  style={{
                    fontSize: "16px",
                    lineHeight: "160%",
                  }}
                >
                  {item.title}
                </h3>

                {/* --- LOCATION --- */}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
