import React from "react";
import { CheckCircle, Users, ShieldCheck, Zap } from "lucide-react";
import { inan } from "../../../assets";

// Component con cho Item Giá trị cốt lõi (Dùng chung cho gọn)
const CoreValueItem = ({
  icon,
  title,
  desc,
  isMobile = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isMobile?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-[16px] ${
        isMobile ? "w-full max-w-[326px]" : "w-[355px] h-[50px] items-start"
      }`}
    >
      <div className="flex-shrink-0 w-[50px] h-[50px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-start gap-[8px]">
        <span className="font-inter font-medium text-[16px] leading-[19px] text-black">
          {title}
        </span>
        <span
          className={`font-inter font-normal text-[15px] leading-[18px] text-black ${
            !isMobile && "text-center italic text-[14px]"
          }`}
        >
          {desc}
        </span>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="w-full flex justify-center">
      {/* =================================================================
          1. MOBILE VERSION (< 1024px) - THEO FIGMA MỚI
          ================================================================= */}
      <section className="flex flex-col items-center w-full px-[20px] lg:hidden mb-[60px]">
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center w-full max-w-[328px] gap-[40px] mb-[40px]">
          {/* Intro Text */}
          <div className="flex flex-col items-center gap-[24px]">
            <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] text-center">
              Chúng Tôi Là AI
            </h2>
            <p className="font-inter font-normal text-[15px] leading-[28px] text-[#000000] text-justify">
              Công Ty TNHH Kỹ Thuật In Promac thành lập từ năm 2015 cho đến nay
              là sự kết hợp của nhiều chuyên gia trong lĩnh vực in ấn, thiết kế,
              kỹ thuật số, bảo mật thông tin,.. có nhiều năm kinh nghiệm. Chúng
              tôi là đối tác của các nhà cung cấp máy in, máy dán nhãn, nguyên
              vật liệu có công nghệ tiên tiến nhất trên thị trường. Năng lực của
              chúng tôi là đã thực hiện được những đơn hàng lớn đối với những
              khách hàng danh tiếng trong nước.
              <br />- IN PROMAC có thể cung cấp tất cả các giải pháp in thẻ cào
              của quý khách. Từ in thẻ cào trúng thưởng, phiếu bốc thăm trúng
              thưởng, in voucher phiếu mua hàng, voucher tích điểm tích hợp
              nhiều tiện ích như thẻ có mã vạch, in code QR,.. mời quý khách
              tham khảo thêm chi tiết trong mục sản phẩm của trang website.
            </p>
          </div>

          {/* Core Values */}
          <div className="flex flex-col items-center w-full gap-[32px]">
            <h3 className="font-inter font-bold text-[24px] leading-[29px] text-[#FF0000] text-center">
              Gía trị cốt lõi
            </h3>

            <div className="flex flex-col items-end gap-[24px] w-full">
              <CoreValueItem
                isMobile
                icon={<ShieldCheck size={46} className="text-black" />}
                title="Sự hài lòng của khách hàng"
                desc="Thành công của bạn là ưu tiên của chúng tôi."
              />
              <CoreValueItem
                isMobile
                icon={<Users size={50} className="text-black" />}
                title="Đảm bảo chất lượng"
                desc="Hoàn hảo trong từng sản phẩm in."
              />
              <CoreValueItem
                isMobile
                icon={<Zap size={50} className="text-black" />}
                title="Giao hàng đúng hạn"
                desc="Luôn đúng thời gian trong mọi đơn hàng"
              />
              <CoreValueItem
                isMobile
                icon={<CheckCircle size={50} className="text-black" />}
                title="Đội ngũ chuyên nghiệp"
                desc="Những chuyên gia lành nghề và tận tâm."
              />
            </div>
          </div>
        </div>

        {/* IMAGE (MOBILE) */}
        {/* Frame 100 Mobile */}
        <div className="relative w-[315px] h-[341px]">
          {/* Background Red Circle */}
          <div
            className="absolute rounded-full bg-[#FF383C]"
            style={{
              width: "149px",
              height: "149px",
              left: "135px",
              top: "1px",
              zIndex: 0,
            }}
          />
          {/* Main Image Circle */}
          <div
            className="absolute rounded-full overflow-hidden border-[5px] border-[#FF383C] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            style={{
              width: "313px",
              height: "312px",
              left: "2px",
              top: "25px",
              zIndex: 1,
            }}
          >
            <img
              src={inan}
              alt="Promac Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =================================================================
          2. DESKTOP VERSION (>= 1024px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <section
        className="hidden lg:flex justify-center items-center bg-white"
        style={{
          width: "1436px",
          height: "704px",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div className="flex w-full h-full items-start justify-between">
          {/* LEFT COLUMN */}
          <div
            className="flex flex-col relative"
            style={{
              width: "894px",
              height: "644px",
              padding: "10px 30px",
              gap: "10px",
            }}
          >
            <h2
              className="font-poppins font-bold text-black "
              style={{
                width: "404px",
                height: "78px",
                fontSize: "51.74px",
                lineHeight: "100%",
              }}
            >
              Chúng tôi là ai
            </h2>

            <p
              className="font-roboto font-normal text-black text-justify"
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                marginTop: "-15px",
              }}
            >
              Công Ty TNHH Kỹ Thuật In Promac thành lập từ năm 2015 cho đến nay
              là sự kết hợp của nhiều chuyên gia trong lĩnh vực in ấn, thiết kế,
              kỹ thuật số, bảo mật thông tin,.. có nhiều năm kinh nghiệm. Chúng
              tôi là đối tác của các nhà cung cấp máy in, máy dán nhãn, nguyên
              vật liệu có công nghệ tiên tiến nhất trên thị trường. Năng lực của
              chúng tôi là đã thực hiện được những đơn hàng lớn đối với những
              khách hàng danh tiếng trong nước.
              <br />- IN PROMAC có thể cung cấp tất cả các giải pháp in thẻ cào
              của quý khách. Từ in thẻ cào trúng thưởng, phiếu bốc thăm trúng
              thưởng, in voucher phiếu mua hàng, voucher tích điểm tích hợp
              nhiều tiện ích như thẻ có mã vạch, in code QR,.. mời quý khách
              tham khảo thêm chi tiết trong mục sản phẩm của trang website.
            </p>

            <div
              className="relative mt-[40px]"
              style={{ width: "744px", height: "205px" }}
            >
              <h3
                className="font-inter font-semibold text-[#FF0000]"
                style={{
                  fontSize: "40px",
                  lineHeight: "100%",
                  marginBottom: "30px",
                }}
              >
                Giá trị cốt lõi
              </h3>

              <div className="grid grid-cols-2 gap-x-[50px] gap-y-[30px]">
                <CoreValueItem
                  icon={<ShieldCheck size={40} className="text-black" />}
                  title="Đảm bảo chất lượng"
                  desc="Hoàn hảo trong từng sản phẩm in."
                />
                <CoreValueItem
                  icon={<Users size={40} className="text-black" />}
                  title="Đội ngũ chuyên nghiệp"
                  desc="Những chuyên gia lành nghề và tận tâm."
                />
                <CoreValueItem
                  icon={<Zap size={40} className="text-black" />}
                  title="Công nghệ tiên tiến"
                  desc="Hệ thống máy móc hiện đại nhất."
                />
                <CoreValueItem
                  icon={<CheckCircle size={40} className="text-black" />}
                  title="Uy tín hàng đầu"
                  desc="Cam kết đúng tiến độ và chất lượng."
                />
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 w-full"
              style={{
                width: "834px",
                height: "50px",
                borderBottom: "1px solid #FFC0CB",
              }}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "542px",
              height: "566px",
              backgroundColor: "transparent",
            }}
          >
            <div
              className="relative"
              style={{ width: "503px", height: "566px" }}
            >
              <div
                className="absolute"
                style={{
                  width: "379.56px",
                  height: "380.53px",
                  backgroundColor: "#FF383C",
                  borderRadius: "50%",
                  top: "0px",
                  left: "124.01px",
                  zIndex: 1,
                }}
              />
              <img
                src={inan}
                alt="Promac Team"
                className="absolute object-cover"
                style={{
                  width: "475.66px",
                  height: "475.66px",
                  borderRadius: "500px",
                  border: "5px solid #FF383C",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  top: "71.84px",
                  left: "0px",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
