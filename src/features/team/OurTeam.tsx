// 1. Dữ liệu đội ngũ (Mô phỏng từ CSS của bạn)
const TEAM_MEMBERS = [
  {
    name: "Leonard John Davies",
    role: "Cofounder, CEO",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
  {
    name: "Kyla Obrien",
    role: "Head of Authority",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
  {
    name: "Adrian Dixon",
    role: "Support Executive",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
  // Hàng 2
  {
    name: "Freddy Busby",
    role: "Project Manager",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
  {
    name: "Dale Banks",
    role: "Accountant, Finance",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
  {
    name: "Miriam Middleton",
    role: "Cofounder, CEO",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
  {
    name: "Ellen Walton",
    role: "Vice Chairman",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
  },
];

export const OurTeam = () => {
  return (
    // Section Container
    <section
      className="flex flex-col items-center bg-white"
      style={{
        width: "1440px",
        // Chiều cao tự động co giãn theo nội dung (hoặc set cứng 1094px nếu muốn)
        paddingBottom: "100px",
      }}
    >
      {/* === 1. HEADER SECTION === 
          Width: 1280px (Căn giữa trong 1440px)
      */}
      <div className="flex flex-col items-center text-center mb-[48px]">
        {/* Title: Đội ngũ của chúng tôi */}
        <h2
          className="font-roboto font-bold text-[#1D2130]"
          style={{
            fontSize: "48px",
            lineHeight: "120%", // 58px
            marginBottom: "16px", // Khoảng cách xuống đoạn văn
          }}
        >
          Đội ngũ của chúng tôi
        </h2>

        {/* Description: Lorem ipsum... */}
        <p
          className="font-roboto font-normal text-black opacity-60"
          style={{
            width: "519px",
            fontSize: "16px",
            lineHeight: "160%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>

      {/* === 2. TEAM GRID === 
          Width: 1280px
          Grid 4 cột
      */}
      <div
        className="grid grid-cols-4"
        style={{
          width: "1280px",
          columnGap: "32px", // Khoảng cách ngang giữa các card
          rowGap: "84px", // Khoảng cách dọc giữa 2 hàng
        }}
      >
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative"
            style={{ width: "296px" }}
          >
            {/* --- IMAGE PLACEHOLDER --- 
                Size: 296x320
                Radius: 8px
            */}
            <div
              className="bg-gray-200 flex items-center justify-center mb-[16px]"
              style={{
                width: "296px",
                height: "320px",
                borderRadius: "8px",
              }}
            >
              <span className="text-gray-400">Image</span>
            </div>

            {/* --- INFO --- */}

            {/* Name */}
            <h3
              className="font-roboto font-medium text-[#1D2130] text-center"
              style={{
                fontSize: "20px",
                lineHeight: "160%",
                marginBottom: "4px",
              }}
            >
              {member.name}
            </h3>

            {/* Role */}
            <p
              className="font-roboto font-medium text-[#1D2130] text-center opacity-60 uppercase"
              style={{
                fontSize: "12px",
                lineHeight: "160%",
                marginBottom: "8px",
              }}
            >
              {member.role}
            </p>

            {/* Description (Đậm 900) */}
            <p
              className="font-roboto font-black text-black text-center opacity-60"
              style={{
                width: "270px", // Giới hạn chiều rộng để xuống dòng đẹp
                fontSize: "12px",
                lineHeight: "160%",
              }}
            >
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
