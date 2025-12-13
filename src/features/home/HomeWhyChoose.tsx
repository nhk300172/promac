// src/features/home/HomeWhyChoose.tsx

// --- IMPORT ICON ẢNH ---
import iconGear from "../../assets/home-whychooseus/home-gear.png";
import iconClock from "../../assets/home-whychooseus/home-clock.png";
import iconMoney from "../../assets/home-whychooseus/home-moneybags.png";
import iconPeople from "../../assets/home-whychooseus/home-people.png";
import iconBadge from "../../assets/home-whychooseus/home-qualitybadge.png";
import iconInnovation from "../../assets/home-whychooseus/home-innovation.png";

// 1. DỮ LIỆU 6 CAM KẾT
const FEATURES = [
  {
    title: "Thiết bị hiện đại",
    desc: "Trang bị máy in và công nghệ tiên tiến, đảm bảo chất lượng hoàn hảo trong từng bản in.",
    icon: iconGear,
  },
  {
    title: "Giao hàng đúng hẹn",
    desc: "Đúng hẹn trong từng dự án – cam kết hoàn thành và giao hàng đúng thời gian.",
    icon: iconClock,
  },
  {
    title: "Giá cả hợp lý",
    desc: "Giá cả cạnh tranh – chất lượng vượt trội, xứng đáng với từng khoản đầu tư của bạn.",
    icon: iconMoney,
  },
  {
    title: "Đội ngũ chuyên nghiệp",
    desc: "Các nhà thiết kế và chuyên gia in ấn giàu kinh nghiệm, với nhiều năm hoạt động trong ngành.",
    icon: iconPeople,
  },
  {
    title: "Đảm bảo chất lượng",
    desc: "Kiểm tra chất lượng nghiêm ngặt ở mọi giai đoạn để đảm bảo kết quả hoàn hảo, vượt trên mong đợi.",
    icon: iconBadge,
  },
  {
    title: "Giải pháp toàn diện",
    desc: "Từ ý tưởng đến thực thi, chúng tôi đảm nhận mọi khâu – thiết kế, in ấn và hoàn thiện sản phẩm.",
    icon: iconInnovation,
  },
];

// 2. DỮ LIỆU THỐNG KÊ
const STATS = [
  { number: "500+", label: "Khách hàng hài lòng", color: "text-[#0D90B2]" },
  { number: "1000+", label: "Dự án đã hoàn thành", color: "text-[#EC4799]" },
  { number: "10+", label: "Năm kinh nghiệm", color: "text-[#C98905]" },
  { number: "24/7", label: "Hỗ trợ mọi lúc", color: "text-[#00A63E]" },
];
const CONTENT = {
  title: "Tại sao lại lựa chọn PROMAC",
  description:
    "Kết hợp công nghệ hiện đại và tay nghề tinh xảo, chúng tôi mang đến giải pháp in ấn đẳng cấp giúp thương hiệu của bạn toả sáng.",
};
export const HomeWhyChoose = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 xl:px-0">
      <div
        className="
        flex flex-col items-center 
        w-full 
        gap-[24px] lg:gap-[12px] 
        pb-[40px]
      "
      >
        {/* 1. HEADING */}
        <h2
          className="
          font-inter font-bold text-center text-[#000000]
          text-[28px] leading-[34px]               /* Mobile */
          md:text-[40px] md:leading-[48px]         /* Tablet */
          lg:text-[48px] lg:leading-[140%]         /* Desktop */
          lg:max-w-[600px] lg:whitespace-nowrap    /* Desktop tweak */
        "
        >
          {CONTENT.title}
        </h2>

        {/* 2. DESCRIPTION */}
        <p
          className="
          font-inter font-medium text-center text-[#555555]
          text-[16px] leading-[19px]               /* Mobile */
          md:text-[18px] md:leading-[26px]         /* Tablet */
          lg:text-[20px] lg:leading-[26px]         /* Desktop */
          max-w-[328px] md:max-w-[700px] lg:max-w-[800px] /* Width constraints */
        "
        >
          {CONTENT.description}
        </p>
      </div>

      {/* =================================================================
          RESPONSIVE CONTAINER
          - Mobile (< 768px): Flex cột
          - Tablet & iPad Pro (768px -> 1280px): Grid 2 cột
          - Desktop Large (>= 1280px): Grid 3 cột (Layout gốc 1373px)
          ================================================================= */}

      <div className="flex flex-col items-center bg-[#FFD1D1] rounded-[20px] shadow-lg w-full max-w-[1373px] py-[40px] px-[20px] xl:px-0">
        <h3 className="font-inter font-extrabold text-center text-[#000000] opacity-80 text-[20px] md:text-[28px] xl:text-[32px] mb-[40px]">
          6 CAM KẾT CHẤT LƯỢNG VÀ RỦI RO CHO KHÁCH HÀNG B2B
        </h3>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] w-full max-w-[1200px] mb-[60px]">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F9FAFB] rounded-[30px] p-[20px] shadow-sm hover:scale-105 transition-transform duration-300 mx-auto w-full max-w-[394px]"
              style={{ minHeight: "259px" }}
            >
              <div className="w-[90px] h-[90px] p-[10px] flex items-center justify-center mt-[12px] mb-[10px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[70px] h-[70px] object-contain"
                />
              </div>
              <h4 className="font-inter font-bold text-[#000000] text-center mb-[10px] text-[20px] xl:text-[24px]">
                {item.title}
              </h4>
              <p className="font-inter font-normal text-[#000000] text-center text-[15px] xl:text-[16px] leading-[140%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* STATS BAR */}
        <div className="bg-white rounded-[20px] shadow-md w-full max-w-[1231px] p-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[40px] xl:gap-0">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r last:border-0 border-gray-200 py-4 xl:py-0"
            >
              <span
                className={`font-inter font-bold ${stat.color} mb-[8px] text-[32px] xl:text-[40px]`}
              >
                {stat.number}
              </span>
              <span className="font-inter font-normal text-[#4A5464] text-[16px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
