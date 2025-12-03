//src/features/home/HomeWhyChoose.tsx

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

export const HomeWhyChoose = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px)
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[10px]">
        {/* HEADER MOBILE */}
        <div className="flex flex-col items-center text-center mb-[40px]">
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] mb-[24px]">
            Tại sao lựa chọn PROMAC
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[19px] text-[#64607D] text-center max-w-[321px]">
            Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp
            tại Amravati, mang đến dịch vụ chất lượng với công nghệ hiện đại và
            tay nghề chuyên môn cao.
          </p>
        </div>

        {/* GREY CONTAINER MOBILE */}
        <div className="flex flex-col items-center bg-[#F5F5F5] rounded-[20px] w-full max-w-[383px] py-[52px] px-[14px]">
          <h3 className="font-inter font-bold text-[20px] leading-[24px] text-center text-[#000000] mb-[40px]">
            6 Cam kết chất lượng và rủi ro cho khách hàng B2B
          </h3>

          <div className="flex flex-col gap-[32px] w-full items-center mb-[40px]">
            {FEATURES.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#F9FAFB] rounded-[30px] p-[20px] w-full max-w-[330px] shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
                style={{ minHeight: "212px" }}
              >
                <div className="w-[55px] h-[55px] mb-[10px] flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-inter font-bold text-[18px] leading-[22px] text-[#000000] text-center mb-[10px]">
                  {item.title}
                </h4>
                <p className="font-inter font-normal text-[15px] leading-[18px] text-[#000000] text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-[28px] w-full">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span
                  className={`font-inter font-bold text-[24px] leading-[29px] ${stat.color} mb-[8px]`}
                >
                  {stat.number}
                </span>
                <span className="font-inter font-normal text-[15px] leading-[18px] text-[#4A5464] text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px)
          ================================================================= */}
      <div className="hidden lg:flex flex-col items-center text-center mb-[40px] px-4">
        <h2
          className="font-inter font-bold text-[#0E0E0E]"
          style={{
            fontSize: "56px",
            lineHeight: "110%",
            marginBottom: "20px",
          }}
        >
          Tại sao lại lựa chọn PROMAC
        </h2>
        <p
          className="font-inter font-medium text-[#64607D]"
          style={{
            fontSize: "20px",
            lineHeight: "24px",
            maxWidth: "1244px",
            whiteSpace: "nowrap",
          }}
        >
          “Kết hợp công nghệ hiện đại và tay nghề tinh xảo, chúng tôi mang đến
          giải pháp in ấn đẳng cấp giúp thương hiệu của bạn tỏa sáng.”
        </p>
      </div>

      <div
        className="hidden lg:flex relative flex-col items-center"
        style={{
          width: "1373px",
          backgroundColor: "#F5F5F5",
          borderRadius: "20px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
          paddingTop: "40px",
          paddingBottom: "40px",
          marginTop: "50px",
        }}
      >
        <h3
          className="font-inter font-extrabold text-center"
          style={{
            fontSize: "32px",
            lineHeight: "32px",
            letterSpacing: "-0.96px",
            opacity: 0.76,
            color: "#000000",
            marginBottom: "30px",
            marginTop: "60px",
          }}
        >
          6 CAM KẾT CHẤT LƯỢNG VÀ RỦI RO CHO KHÁCH HÀNG B2B
        </h3>

        <div
          className="grid grid-cols-3"
          style={{
            gap: "32px",
            marginBottom: "80px",
          }}
        >
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F9FAFB] relative transition-transform hover:scale-105 duration-300"
              style={{
                width: "394px",
                height: "259px",
                borderRadius: "30px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                // Padding 20px 2 bên như cũ
                padding: "0 20px",
              }}
            >
              {/* Icon Container (Frame 81) - Top: 12px */}
              <div className="w-[90px] h-[90px] p-[10px] flex items-center justify-center shrink-0 mt-[12px] mb-[10px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[70px] h-[70px] object-contain"
                />
              </div>

              {/* Title - Font Size 24px */}
              <h4
                className="font-inter font-bold text-[#000000] text-center mb-[10px]"
                style={{ fontSize: "24px", lineHeight: "29px" }}
              >
                {item.title}
              </h4>

              {/* Description Container (Frame 82) */}
              <div
                className="flex flex-row justify-center items-center"
                style={{
                  // Kích thước Frame 82 từ Figma
                  width: "345px",
                  height: "77px",
                  padding: "10px",
                  gap: "10px",
                }}
              >
                {/* Text Content */}
                <p
                  className="font-inter font-normal text-[#000000] text-center"
                  style={{
                    // Thông số text chính xác
                    width: "309px",
                    height: "57px", // Chiều cao cố định để ép dòng giống thiết kế
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className="bg-white flex items-center justify-around"
          style={{
            width: "1231px",
            height: "153px",
            borderRadius: "20px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
          }}
        >
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[200px]"
            >
              <span
                className={`font-inter font-bold ${stat.color} mb-[8px]`}
                style={{ fontSize: "40px", lineHeight: "48px" }}
              >
                {stat.number}
              </span>
              <span
                className="font-inter font-normal text-[#4A5464]"
                style={{ fontSize: "16px", lineHeight: "19px" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
