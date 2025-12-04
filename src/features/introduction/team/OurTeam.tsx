// src/features/introduction/OurTeam.tsx

import { ArrowLeft, ArrowRight } from "lucide-react";

// IMPORT HÌNH ẢNH
import imgLeonard from "../../../assets/introduction-team/leonardjohndavies.png";
import imgFrancis from "../../../assets/introduction-team/francisweber.png";
import imgKyla from "../../../assets/introduction-team/kylaobrien.png";
import imgAdrian from "../../../assets/introduction-team/adriandixon.png";
import imgFreddy from "../../../assets/introduction-team/freddybusby.png";
import imgDale from "../../../assets/introduction-team/dalebanks.png";
import imgMiriam from "../../../assets/introduction-team/miriammiddleton.png";
import imgEllen from "../../../assets/introduction-team/ellenwalton.png";
import { useState } from "react";

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
  const [currentMember, setCurrentMember] = useState(0);

  const handleNext = () => {
    setCurrentMember((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };

  const handlePrev = () => {
    setCurrentMember(
      (prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length
    );
  };

  return (
    <section className="flex flex-col items-center bg-white w-full">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - SLIDER 1 CỘT
          ================================================================= */}
      <div className="flex flex-col items-center w-full lg:hidden px-[25px] pt-[40px] pb-[60px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[40px] w-full max-w-[326px]">
          <h2 className="font-inter font-bold text-[28px] leading-[36px] text-[#000000] mb-[24px]">
            Đội ngũ của chúng tôi
          </h2>
          <p className="font-inter font-medium text-[16px] leading-[24px] text-black/65">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
        </div>

        {/* Member Card (Hiển thị 1 người tại một thời điểm) */}
        <div className="flex flex-col items-center w-full max-w-[326px] mb-[40px]">
          {/* Image */}
          <div className="w-[296px] h-[320px] rounded-[8px] overflow-hidden mb-[18px] bg-gray-200">
            <img
              src={TEAM_MEMBERS[currentMember].image}
              alt={TEAM_MEMBERS[currentMember].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col items-center text-center gap-[8px]">
            <h3 className="font-inter font-medium text-[18px] text-[#1D2130]">
              {TEAM_MEMBERS[currentMember].name}
            </h3>
            <p className="font-inter font-medium text-[15px] text-[#1D2130]/60">
              {TEAM_MEMBERS[currentMember].role}
            </p>
            <p className="font-inter font-medium text-[15px] text-[#000000]/60 mt-[8px]">
              {TEAM_MEMBERS[currentMember].desc}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-[16px]">
          <button
            onClick={handlePrev}
            className="w-[51px] h-[51px] bg-[#4A5F9F] rounded-full flex items-center justify-center hover:bg-[#1F3A8A] transition-colors"
          >
            <ArrowLeft size={20} color="white" strokeWidth={3} />
          </button>
          <button
            onClick={handleNext}
            className="w-[51px] h-[51px] bg-[#1F3A8A] rounded-full flex items-center justify-center hover:bg-[#4A5F9F] transition-colors"
          >
            <ArrowRight size={20} color="white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GRID 4 CỘT CŨ
          ================================================================= */}
      <div
        className="hidden lg:flex flex-col items-center"
        style={{ width: "1440px", paddingBottom: "100px" }}
      >
        <div className="flex flex-col items-center text-center mb-[48px]">
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
          <p
            className="font-roboto font-normal text-black opacity-60"
            style={{ width: "519px", fontSize: "16px", lineHeight: "160%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div
          className="grid grid-cols-4"
          style={{ width: "1280px", columnGap: "32px", rowGap: "84px" }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative"
              style={{ width: "296px" }}
            >
              <div
                className="mb-[16px] overflow-hidden"
                style={{ width: "296px", height: "320px", borderRadius: "8px" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
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
              <p
                className="font-roboto font-black text-black text-center opacity-60"
                style={{ width: "270px", fontSize: "12px", lineHeight: "160%" }}
              >
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
