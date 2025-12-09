//src/features/home/HomeServices.tsx
import { Check } from "lucide-react";

import project1 from "../../assets/printingservices/project1.png";
import project2 from "../../assets/printingservices/project2.png";
import project3 from "../../assets/printingservices/project3.png";

// 1. DỮ LIỆU DỊCH VỤ CHÍNH
const MAIN_SERVICES = [
  {
    title: "In hộp cứng cao cấp",
    desc: "The consensus mechanism that connects stacks and bitcoin. The consensus mechanism that connects stacks and b...",
    image: project2,
    features: [
      "Hộp quà, hộp sản phẩm",
      "Thùng carton màu",
      "Hộp custom theo thiết kế",
    ],
  },
  {
    title: "In hộp cứng cao cấp",
    desc: "The consensus mechanism that connects stacks and bitcoin. The consensus mechanism that connects stacks and b...",
    image: project1,
    features: [
      "Hộp quà, hộp sản phẩm",
      "Thùng carton màu",
      "Hộp custom theo thiết kế",
    ],
  },
  {
    title: "In hộp cứng cao cấp",
    desc: "The consensus mechanism that connects stacks and bitcoin. The consensus mechanism that connects stacks and b...",
    image: project3,
    features: [
      "Hộp quà, hộp sản phẩm",
      "Thùng carton màu",
      "Hộp custom theo thiết kế",
    ],
  },
];

// 2. DỮ LIỆU DỊCH VỤ KHÁC
const OTHER_SERVICES = [
  "In thẻ cào biến đổi",
  "In thẻ cào kích hoạt",
  "In thẻ cào trúng thưởng",
  "In thẻ cào ráp chữ",
];

export const HomeServices = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* =================================================================
          1. MOBILE & TABLET VERSION (< 1024px)
          - Mobile (< 768px): List dọc.
          - Tablet (768px - 1023px): Grid 2 cột (Hoặc 3 cột nếu đủ chỗ).
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[20px]">
        {/* HEADER */}
        <h2 className="font-inter font-bold text-[28px] leading-[34px] md:text-[40px] text-[#000000] text-center mb-[24px]">
          Dịch vụ cốt lõi
        </h2>

        {/* LIST SERVICES (Responsive Grid) */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-[24px] gap-[32px] w-full items-center md:items-stretch">
          {MAIN_SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F5F5F5] rounded-[40px] p-[22px] w-full max-w-[370px] md:max-w-full mx-auto h-full"
            >
              {/* IMAGE */}
              <div className="w-full h-[228px] mb-[24px] rounded-[15px] overflow-hidden relative shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-start w-full gap-[14px] flex-grow">
                <h3 className="font-inter font-bold text-[18px] leading-[22px] text-[#000000]">
                  {service.title}
                </h3>

                <p className="font-inter font-normal text-[15px] leading-[20px] text-[#000000] line-clamp-3">
                  {service.desc}
                </p>

                <div className="flex flex-col gap-[10px] w-full my-[10px]">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-[12px]">
                      <Check
                        size={20}
                        color="#FF0000"
                        strokeWidth={4}
                        className="shrink-0 mt-[2px]"
                      />
                      <span className="font-inter font-normal text-[15px] leading-[18px] text-[#000000]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button "Xem chi tiết" */}
                <div className="flex flex-col ml-[98px] md:ml-0 md:mt-auto md:self-center items-start cursor-pointer group mt-[10px]">
                  <div className="flex items-center gap-[8px]">
                    <span className="font-inter font-semibold text-[15px] leading-[18px] text-[#FF0000]">
                      Xem chi tiết
                    </span>
                    <div className="transition-transform group-hover:translate-x-1">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5H9"
                          stroke="#FF0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 1L9 4.5L5 8"
                          stroke="#FF0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-[100px] h-[1px] bg-[#FF0000] mt-[2px]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON BÁO GIÁ */}
        <button className="flex items-center justify-center w-[160px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] mt-[42px] mb-[50px] active:scale-95 transition-transform">
          <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
            Yêu cầu báo giá
          </span>
        </button>

        {/* OTHER SERVICES (MOBILE & TABLET) */}
        <div className="flex flex-col items-center w-full max-w-[370px] md:max-w-[600px]">
          <h3 className="font-inter font-semibold text-[24px] text-[#000000] mb-[30px] text-center">
            Các dịch vụ in khác
          </h3>

          <div className="w-full grid grid-cols-2 gap-[15px]">
            {OTHER_SERVICES.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white border border-black cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 group px-2"
                style={{ height: "60px", borderRadius: "100px" }}
              >
                <span className="font-inter font-normal text-[14px] text-center leading-[1.2] line-clamp-2">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          2. DESKTOP & IPAD PRO VERSION (>= 1024px)
          - Đã điều chỉnh Width linh hoạt cho iPad Pro.
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center w-full px-4 xl:px-0">
        <h2
          className="font-inter font-bold text-[#000000] text-center"
          style={{ fontSize: "56px", lineHeight: "110%", marginBottom: "67px" }}
        >
          Dịch vụ cốt lõi
        </h2>

        <div
          className="grid grid-cols-3"
          style={{
            width: "100%",
            maxWidth: "1340px", // Thay width cứng thành max-w
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {MAIN_SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F5F5F5]"
              style={{
                height: "663px",
                borderRadius: "40px",
                padding: "30px 14px",
              }}
            >
              <div
                className="w-full mb-[32px] relative"
                style={{
                  // Dùng aspect ratio hoặc width % để ảnh co giãn trên iPad
                  width: "100%",
                  height: "275px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center w-full px-[16px]">
                <h3
                  className="font-inter font-bold text-[#000000] w-full text-left"
                  style={{
                    fontSize: "24px",
                    lineHeight: "34px",
                    marginBottom: "16px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="font-inter font-normal text-[#000000] w-full text-left line-clamp-3 opacity-80"
                  style={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    marginBottom: "20px",
                  }}
                >
                  {service.desc}
                </p>

                <div className="flex flex-col gap-[10px] w-full mb-[30px]">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-[12px]">
                      <Check
                        size={24}
                        color="#FF0000"
                        strokeWidth={4}
                        className="shrink-0"
                      />
                      <span className="font-inter font-normal text-[18px] text-[#000000] leading-[22px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center cursor-pointer group mt-auto">
                  <div className="flex items-center gap-[8px] mb-[5px]">
                    <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                      Xem chi tiết
                    </span>
                    <div className="transition-transform group-hover:translate-x-1 flex items-center">
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5H17"
                          stroke="#FF0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 1L17 5L13 9"
                          stroke="#FF0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-[126px] h-[2px] bg-[#FF0000]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="flex items-center justify-center bg-[#FF0000] transition-transform hover:scale-105"
          style={{
            width: "215px",
            height: "50px",
            borderRadius: "20px",
            boxShadow: "0px 0px 14px #FF0000",
            marginBottom: "67px",
          }}
        >
          <span className="font-inter font-bold text-[20px] text-[#F5F5F5]">
            Yêu cầu Báo giá
          </span>
        </button>

        <div className="w-full max-w-[1340px] flex flex-col items-start">
          <h3
            className="font-inter font-semibold text-[#000000]"
            style={{
              fontSize: "40px",
              lineHeight: "60px",
              marginBottom: "50px",
            }}
          >
            Các dịch vụ in khác
          </h3>

          <div className="w-full grid grid-cols-4 gap-[20px]">
            {OTHER_SERVICES.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white border border-black cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 group"
                style={{ height: "78px", borderRadius: "100px" }}
              >
                <span className="font-inter font-normal text-[20px] xl:text-[24px] text-center whitespace-nowrap overflow-hidden text-ellipsis px-2">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
