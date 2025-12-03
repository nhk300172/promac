// src/features/introduction/OurTeam.tsx

// --- IMPORT HÌNH ẢNH ĐỘI NGŨ ---
import imgLeonard from "../../../assets/introduction-team/leonardjohndavies.png";
import imgFrancis from "../../../assets/introduction-team/francisweber.png";
import imgKyla from "../../../assets/introduction-team/kylaobrien.png";
import imgAdrian from "../../../assets/introduction-team/adriandixon.png";
import imgFreddy from "../../../assets/introduction-team/freddybusby.png";
import imgDale from "../../../assets/introduction-team/dalebanks.png";
import imgMiriam from "../../../assets/introduction-team/miriammiddleton.png";
import imgEllen from "../../../assets/introduction-team/ellenwalton.png";

// 1. Dữ liệu đội ngũ (Đã gán ảnh)
const TEAM_MEMBERS = [
  {
    name: "Leonard John Davies",
    role: "Cofounder, CEO",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgLeonard,
  },
  {
    name: "Francis Weber",
    role: "Vice Chairman",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgFrancis,
  },
  {
    name: "Kyla Obrien",
    role: "Head of Authority",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgKyla,
  },
  {
    name: "Adrian Dixon",
    role: "Support Executive",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgAdrian,
  },
  // Hàng 2
  {
    name: "Freddy Busby",
    role: "Project Manager",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgFreddy,
  },
  {
    name: "Dale Banks",
    role: "Accountant, Finance",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgDale,
  },
  {
    name: "Miriam Middleton",
    role: "Cofounder, CEO",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgMiriam,
  },
  {
    name: "Ellen Walton",
    role: "Vice Chairman",
    desc: "Với những kinh nghiệm dày dặn quản lý nhiều công ty in ấn",
    image: imgEllen,
  },
];

export const OurTeam = () => {
  return (
    // Section Container
    <section
      className="flex flex-col items-center bg-white"
      style={{
        width: "1440px",
        paddingBottom: "100px",
      }}
    >
      {/* === 1. HEADER SECTION === */}
      <div className="flex flex-col items-center text-center mb-[48px]">
        {/* Title */}
        <h2
          className="font-roboto font-bold text-[#1D2130]"
          style={{
            fontSize: "48px",
            lineHeight: "120%",
            marginBottom: "16px",
          }}
        >
          Đội ngũ của chúng tôi
        </h2>

        {/* Description */}
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

      {/* === 2. TEAM GRID === */}
      <div
        className="grid grid-cols-4"
        style={{
          width: "1280px",
          columnGap: "32px",
          rowGap: "84px",
        }}
      >
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative"
            style={{ width: "296px" }}
          >
            {/* --- IMAGE --- */}
            <div
              className="mb-[16px] overflow-hidden"
              style={{
                width: "296px",
                height: "320px",
                borderRadius: "8px",
              }}
            >
              {/* Thay thế placeholder bằng ảnh thật */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
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

            {/* Description */}
            <p
              className="font-roboto font-black text-black text-center opacity-60"
              style={{
                width: "270px",
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
