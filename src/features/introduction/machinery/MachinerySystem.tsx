// src/features/introduction/machinery/MachinerySystem.tsx

import machine1 from "../../../assets/introduction-machinery/machinery1.jpg";
import machine2 from "../../../assets/introduction-machinery/machinery2.jpg";
import machine3 from "../../../assets/introduction-machinery/machinery3.jpg";
import machine4 from "../../../assets/introduction-machinery/machinery4.jpg";
import machine5 from "../../../assets/introduction-machinery/machinery5.png";
import machine6 from "../../../assets/introduction-machinery/machinery6.jpg";

// --- CẬP NHẬT DỮ LIỆU MÁY MÓC THỰC TẾ ---
const MACHINES = [
  { id: 1, image: machine1, name: "A107W - Dán nhãn tròn - Dán thùng son" },
  { id: 2, image: machine2, name: "A751LC - Dán và in thùng carton" },
  { id: 3, image: machine3, name: "A910 - Dán nhãn quanh chai tròn" },
  { id: 4, image: machine4, name: "A920 - Dán nhãn 2 mặt" },
  { id: 5, image: machine5, name: "Versmark - Máy dán thẻ" },
  { id: 6, image: machine6, name: "Máy kiểm tra chất lượng (KCS)" },
];

export const MachinerySystem = () => {
  return (
    <section className="flex flex-col items-center bg-white w-full px-4 xl:px-0 py-10 lg:pt-20 lg:pb-0">
      {/* =================================================================
          1. HEADER SECTION
          ================================================================= */}
      <div className="flex flex-col items-center text-center gap-6 mb-12 lg:mb-[60px] max-w-[720px]">
        <h2 className="font-inter font-bold text-[#0E0E0E] text-[28px] md:text-[36px] lg:text-[48px] leading-[140%]">
          Dàn máy móc hiện đại
        </h2>
        <p className="font-inter font-medium text-[#555555] text-[14px] lg:text-[16px] leading-[19px]">
          Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp.
          <br />
          PROMAC mang đến dịch vụ chất lượng với công nghệ hiện đại và tay nghề
          chuyên môn cao.
        </p>
      </div>

      {/* =================================================================
          2. MOBILE & TABLET VERSION (< 1024px)
          ================================================================= */}
      <div className="lg:hidden w-full grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        {MACHINES.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            {/* THÊM VIỀN ĐEN Ở ĐÂY: thêm 'border border-black' */}
            <div className="w-full h-[300px] rounded-[20px] overflow-hidden shadow-sm border border-black">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {item.name && (
              <h3 className="text-center font-inter text-[18px] text-black/80 font-medium px-2">
                {item.name}
              </h3>
            )}
          </div>
        ))}
      </div>

      {/* =================================================================
          3. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center w-full relative"
        style={{
          maxWidth: "1379px",
        }}
      >
        <div
          className="w-full p-[40px] xl:p-[60px]"
          style={{
            border: "5px solid #E5E5E5",
            borderRadius: "30px",
            marginBottom: "40px",
          }}
        >
          <div
            className="grid grid-cols-3"
            style={{
              columnGap: "24px",
              rowGap: "40px",
            }}
          >
            {MACHINES.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{
                  gap: "28px",
                }}
              >
                {/* Image Container */}
                {/* THÊM VIỀN ĐEN Ở ĐÂY: thêm 'border border-black' vào className */}
                <div
                  className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-black"
                  style={{
                    width: "100%",
                    maxWidth: "405px",
                    height: "358px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Tên Máy */}
                <h3
                  className="font-inter font-normal text-center"
                  style={{
                    fontSize: "24px",
                    lineHeight: "140%",
                    color: "rgba(0, 0, 0, 0.7)",
                    padding: "0 10px",
                  }}
                >
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
