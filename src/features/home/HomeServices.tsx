import { Check } from "lucide-react";

// 1. DỮ LIỆU DỊCH VỤ CHÍNH (3 Cột)
const MAIN_SERVICES = [
  {
    title: "In hộp cứng cao cấp",
    desc: "The consensus mechanism that connects stacks and bitcoin. The consensus mechanism that connects stacks and b...",
    image: "bg-gray-300",
    features: [
      "Hộp quà, hộp sản phẩm",
      "Thùng carton màu",
      "Hộp custom theo thiết kế",
    ],
  },
  {
    title: "In hộp cứng cao cấp",
    desc: "The consensus mechanism that connects stacks and bitcoin. The consensus mechanism that connects stacks and b...",
    image: "bg-gray-300",
    features: [
      "Hộp quà, hộp sản phẩm",
      "Thùng carton màu",
      "Hộp custom theo thiết kế",
    ],
  },
  {
    title: "In hộp cứng cao cấp",
    desc: "The consensus mechanism that connects stacks and bitcoin. The consensus mechanism that connects stacks and b...",
    image: "bg-gray-300",
    features: [
      "Hộp quà, hộp sản phẩm",
      "Thùng carton màu",
      "Hộp custom theo thiết kế",
    ],
  },
];

// 2. DỮ LIỆU DỊCH VỤ KHÁC
const OTHER_SERVICES = [
  "Thẻ cào trúng thưởng",
  "In Voucher",
  "Thẻ cào trúng thưởng",
  "Thẻ cào trúng thưởng",
];

export const HomeServices = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* HEADER */}
      <h2
        className="font-inter font-bold text-[#000000] text-center"
        style={{ fontSize: "56px", lineHeight: "110%", marginBottom: "67px" }}
      >
        Dịch vụ cốt lõi
      </h2>

      {/* MAIN SERVICES GRID */}
      <div
        className="grid grid-cols-3"
        style={{
          width: "1340px",
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
            {/* IMAGE */}
            <div
              className={`w-full ${service.image} mb-[32px]`}
              style={{ width: "392px", height: "275px", borderRadius: "15px" }}
            />

            {/* CONTENT */}
            {/* Parent đã là flex-col items-center nên con cái sẽ tự động căn giữa */}
            <div className="flex flex-col items-center w-full px-[16px]">
              {/* Title */}
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

              {/* Description */}
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

              {/* Features List */}
              <div className="flex flex-col gap-[10px] w-full mb-[30px]">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-[12px]">
                    <Check size={24} color="#FF0000" strokeWidth={4} />
                    <span className="font-inter font-normal text-[18px] text-[#000000] leading-[22px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* --- BUTTON GROUP (ĐÃ SỬA: Căn giữa + Gạch đỏ nằm dưới) --- */}
              {/* --- BUTTON GROUP --- */}
              <div className="flex flex-col items-center cursor-pointer group mt-auto">
                {/* Nút Chữ + Mũi tên */}
                <div className="flex items-center gap-[8px] mb-[5px]">
                  <span className="font-inter font-bold text-[16px] text-[#FF0000]">
                    Xem chi tiết
                  </span>

                  {/* ICON MŨI TÊN CUSTOM (Thay thế Lucide) 
                            - Width: 18px
                            - Height: 10px
                            - Stroke: 2px (#FF0000)
                        */}
                  <div className="transition-transform group-hover:translate-x-1 flex items-center">
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Vẽ đường thẳng ngang */}
                      <path
                        d="M1 5H17"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Vẽ 2 cánh mũi tên */}
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

                {/* Gạch chân đỏ */}
                <div className="w-[126px] h-[2px] bg-[#FF0000]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON BÁO GIÁ */}
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

      {/* OTHER SERVICES */}
      <div className="w-[1340px] flex flex-col items-start">
        <h3
          className="font-inter font-semibold text-[#000000]"
          style={{ fontSize: "40px", lineHeight: "60px", marginBottom: "50px" }}
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
    </section>
  );
};
