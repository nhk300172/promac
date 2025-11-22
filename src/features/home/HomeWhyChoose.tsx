// 1. DỮ LIỆU 6 CAM KẾT (Grid 3 cột x 2 hàng)
const FEATURES = [
  {
    title: "Thiết bị hiện đại",
    desc: "Trang bị máy in và công nghệ tiên tiến, đảm bảo chất lượng hoàn hảo trong từng bản in.",
    iconName: "gear", // Tên để bạn dễ thay ảnh sau này
  },
  {
    title: "Giao hàng đúng hẹn",
    desc: "Đúng hẹn trong từng dự án – cam kết hoàn thành và giao hàng đúng thời gian.",
    iconName: "clock",
  },
  {
    title: "Giá cả hợp lý",
    desc: "Giá cả cạnh tranh – chất lượng vượt trội, xứng đáng với từng khoản đầu tư của bạn.",
    iconName: "money",
  },
  {
    title: "Đội ngũ chuyên nghiệp",
    desc: "Các nhà thiết kế và chuyên gia in ấn giàu kinh nghiệm, với nhiều năm hoạt động trong ngành.",
    iconName: "people",
  },
  {
    title: "Đảm bảo chất lượng",
    desc: "Kiểm tra chất lượng nghiêm ngặt ở mọi giai đoạn để đảm bảo kết quả hoàn hảo, vượt trên mong đợi.",
    iconName: "badge",
  },
  {
    title: "Giải pháp toàn diện",
    desc: "Từ ý tưởng đến thực thi, chúng tôi đảm nhận mọi khâu – thiết kế, in ấn và hoàn thiện sản phẩm.",
    iconName: "bulb",
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
      {/* ============================================================
          1. HEADER SECTION (Title & Desc)
      ============================================================ */}
      <div className="flex flex-col items-center text-center mb-[40px] px-4">
        <h2
          className="font-inter font-bold text-[#0E0E0E]"
          style={{ fontSize: "56px", lineHeight: "110%", marginBottom: "20px" }}
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

      {/* ============================================================
          2. GREY CONTAINER (Rectangle 384)
          Chứa Grid 6 thẻ và Thanh thống kê
      ============================================================ */}
      <div
        className="relative flex flex-col items-center"
        style={{
          width: "1373px",
          // Height để auto để co giãn theo nội dung
          backgroundColor: "#F5F5F5",
          borderRadius: "20px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
          paddingTop: "40px",
          paddingBottom: "40px", // Padding dưới cho đẹp
          marginTop: "50px",
        }}
      >
        {/* Sub-Header bên trong khối xám */}
        <h3
          className="font-inter font-extrabold text-center"
          style={{
            fontSize: "32px",
            lineHeight: "32px",
            letterSpacing: "-0.96px", // tương đương -3%
            opacity: 0.76,
            color: "#000000",
            marginBottom: "30px",
            marginTop: "60px",
          }}
        >
          6 CAM KẾT CHẤT LƯỢNG VÀ RỦI RO CHO KHÁCH HÀNG B2B
        </h3>

        {/* --- FEATURES GRID (3 Cột x 2 Hàng) --- */}
        <div
          className="grid grid-cols-3"
          style={{
            gap: "32px", // Khoảng cách giữa các thẻ
            marginBottom: "80px", // Khoảng cách xuống thanh Stats
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
                padding: "0 20px", // Padding nội bộ thẻ
              }}
            >
              {/* ICON PLACEHOLDER (Ellipse 11) */}
              {/* Bạn sẽ thay background-image vào class này hoặc thẻ img */}
              <div
                className="w-[70px] h-[70px] bg-gray-300 rounded-full mt-[12px] mb-[10px] flex items-center justify-center shrink-0"
                title={`Icon: ${item.iconName}`}
              >
                {/* Placeholder text để bạn biết icon nào */}
                <span className="text-[10px] text-gray-500">
                  {item.iconName}
                </span>
              </div>

              {/* TITLE */}
              <h4
                className="font-inter font-bold text-[#000000] text-center mb-[10px]"
                style={{ fontSize: "24px", lineHeight: "29px" }}
              >
                {item.title}
              </h4>

              {/* DESC */}
              <p
                className="font-inter font-normal text-[#000000] text-center"
                style={{ fontSize: "16px", lineHeight: "19px" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- STATS BAR (Thanh thống kê trắng) --- */}
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
