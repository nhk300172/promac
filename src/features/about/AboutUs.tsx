import { CheckCircle, Users, ShieldCheck, Zap } from "lucide-react"; // Icons đại diện
import { inan } from "../../assets";

export const AboutUs = () => {
  return (
    // Frame 146: Container chính
    // Width 1436px (Gần bằng khung 1440px)
    // Top 821px (Margin top sẽ tính sau khi ghép vào App)
    <section
      className="flex justify-center items-center bg-white"
      style={{
        width: "1436px",
        height: "704px",
        paddingLeft: "15px",
        paddingRight: "15px",
        // margin top sẽ do App.tsx quyết định khoảng cách
      }}
    >
      {/* Grid 2 cột: Frame 147 (Trái) - Frame 99 (Phải) */}
      <div className="flex w-full h-full items-start justify-between">
        {/* =================================================================
            CỘT TRÁI: Frame 147
            Width: 894px; Height: 644px
        ================================================================= */}
        <div
          className="flex flex-col relative"
          style={{
            width: "894px",
            height: "644px",
            padding: "10px 30px", // Padding trên/dưới 10, trái/phải 30
            gap: "10px",
          }}
        >
          {/* 1. TEXT: Chúng tôi là ai */}
          <h2
            className="font-poppins font-bold text-black "
            style={{
              width: "404px",
              height: "78px",
              fontSize: "51.74px",
              lineHeight: "100%",
              // vertical-align middle thường dùng cho table cell, ở đây flex col đã lo layout
            }}
          >
            Chúng tôi là ai
          </h2>

          {/* 2. TEXT: Công Ty TNHH... (Đoạn văn dài) */}
          <p
            className="font-roboto font-normal text-black text-justify"
            style={{
              // width auto để nó fill theo khung cha, hoặc set cứng nếu muốn
              fontSize: "18px",
              lineHeight: "28px",
              marginTop: "-15px",
            }}
          >
            Công Ty TNHH Kỹ Thuật In Promac thành lập từ năm 2015 cho đến nay là
            sự kết hợp của nhiều chuyên gia trong lĩnh vực in ấn, thiết kế, kỹ
            thuật số, bảo mật thông tin,.. có nhiều năm kinh nghiệm. Chúng tôi
            là đối tác của các nhà cung cấp máy in, máy dán nhãn, nguyên vật
            liệu có công nghệ tiên tiến nhất trên thị trường. Năng lực của chúng
            tôi là đã thực hiện được những đơn hàng lớn đối với những khách hàng
            danh tiếng trong nước.
            <br />- IN PROMAC có thể cung cấp tất cả các giải pháp in thẻ cào
            của quý khách. Từ in thẻ cào trúng thưởng, phiếu bốc thăm trúng
            thưởng, in voucher phiếu mua hàng, voucher tích điểm tích hợp nhiều
            tiện ích như thẻ có mã vạch, in code QR,.. mời quý khách tham khảo
            thêm chi tiết trong mục sản phẩm của trang website.
          </p>

          {/* 3. GROUP 391: Giá trị cốt lõi 
                Trong Figma: Width 744, Height 205
                Vị trí tương đối: Chúng ta sẽ dùng margin-top để đẩy nó xuống đúng vị trí visual
            */}
          <div
            className="relative mt-[40px]" // Tự canh chỉnh khoảng cách hợp lý
            style={{ width: "744px", height: "205px" }}
          >
            {/* TIÊU ĐỀ: Giá trị cốt lõi */}
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

            {/* GRID 4 ITEM (Group 309, 310...) 
                    Tôi dùng Grid 2 cột để xếp 4 item này
                */}
            <div className="grid grid-cols-2 gap-x-[50px] gap-y-[30px]">
              {/* --- ITEM 1: Group 309 (Đảm bảo chất lượng) --- */}
              <CoreValueItem
                icon={<ShieldCheck size={40} className="text-black" />} // Thay icon quality-assurance.png
                title="Đảm bảo chất lượng"
                desc="Hoàn hảo trong từng sản phẩm in."
              />

              {/* --- ITEM 2: Group 310 (Đội ngũ chuyên nghiệp) --- */}
              <CoreValueItem
                icon={<Users size={40} className="text-black" />}
                title="Đội ngũ chuyên nghiệp"
                desc="Những chuyên gia lành nghề và tận tâm."
              />

              {/* --- ITEM 3 (Ví dụ tự thêm cho đủ bộ 4) --- */}
              <CoreValueItem
                icon={<Zap size={40} className="text-black" />}
                title="Công nghệ tiên tiến"
                desc="Hệ thống máy móc hiện đại nhất."
              />

              {/* --- ITEM 4 (Ví dụ tự thêm) --- */}
              <CoreValueItem
                icon={<CheckCircle size={40} className="text-black" />}
                title="Uy tín hàng đầu"
                desc="Cam kết đúng tiến độ và chất lượng."
              />
            </div>
          </div>

          {/* Frame 101: Border bottom pink (Cuối cùng) */}
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              width: "834px", // Width bé hơn cha tí
              height: "50px",
              borderBottom: "1px solid #FFC0CB", // Màu hồng nhạt
            }}
          />
        </div>

        {/* =================================================================
            CỘT PHẢI: Frame 99 (KHUNG CHỨA)
            Width: 542px; Height: 566px
        ================================================================= */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "542px",
            height: "566px",
            // borderRadius: '400px', // Frame 99 gốc có thể không cần border-radius nếu nó trong suốt
            backgroundColor: "transparent",
          }}
        >
          {/* =================================================================
                Frame 100 (CONTAINER CHÍNH CỦA ẢNH)
                Width: 503px; Height: 566px
                Vị trí: Left 1px, Top 0px (Theo Figma) -> Ta cho relative để chứa con
            ================================================================= */}
          <div
            className="relative"
            style={{
              width: "503px",
              height: "566px",
            }}
          >
            {/* --- Ellipse 11 (Vòng tròn đỏ nền) --- 
                    Top: 0px (Sát đỉnh)
                    Left: 124.01px
                */}
            <div
              className="absolute"
              style={{
                width: "379.56px",
                height: "380.53px",
                backgroundColor: "#FF383C", // Màu đỏ
                borderRadius: "50%",

                // TOẠ ĐỘ CHUẨN FIGMA:
                top: "0px", // <--- ĐÃ SỬA (Code cũ là 92px)
                left: "124.01px",

                zIndex: 1, // Nằm dưới
              }}
            />

            {/* --- 111555 1 (Hình ảnh chính) --- 
                    Top: 71.84px
                    Left: 0px
                */}
            <img
              src={inan}
              alt="Promac Team"
              className="absolute object-cover"
              style={{
                width: "475.66px",
                height: "475.66px",
                borderRadius: "500px", // Theo Figma border-radius: 500px
                border: "5px solid #FF383C",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

                // TOẠ ĐỘ CHUẨN FIGMA:
                top: "71.84px",
                left: "0px", // <--- ĐÃ SỬA (Code cũ là 13px)

                zIndex: 2, // Nằm trên
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Component con để render từng Item Giá trị cốt lõi (Tránh lặp code)
const CoreValueItem = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className="flex items-start gap-[8px]"
      style={{ width: "355px", height: "50px" }}
    >
      {/* Icon Box (Rectangle 427) */}
      <div className="flex-shrink-0 w-[50px] h-[50px] flex items-center justify-center">
        {icon}
      </div>

      {/* Frame 306 (Text) */}
      <div className="flex flex-col items-start gap-[8px]">
        <span className="font-roboto font-semibold text-[16px] leading-[19px] text-black">
          {title}
        </span>
        <span className="font-roboto italic font-normal text-[14px] leading-[16px] text-black text-center">
          {desc}
        </span>
      </div>
    </div>
  );
};
