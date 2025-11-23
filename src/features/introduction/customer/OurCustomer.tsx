// src/features/introduction/customer/OurCustomer.tsx

// --- IMPORT HÌNH ẢNH LOGO ---
// Lưu ý: Đường dẫn ../../../assets/ourcustomer/... là từ file hiện tại đi ra 3 cấp thư mục
import strongbow from "../../../assets/ourcustomer/strongbow.png";
import usgboral from "../../../assets/ourcustomer/usgboral.png";
import sensodyne from "../../../assets/ourcustomer/sensodyne.png";
import nhasach from "../../../assets/ourcustomer/nhasach.png";
import nhasachphuongnam from "../../../assets/ourcustomer/nhasachphuongnam.png";
import vietbank from "../../../assets/ourcustomer/vietbank.png";
import nescafe from "../../../assets/ourcustomer/nescafe.png";
import futabuslines from "../../../assets/ourcustomer/futabuslines.png";

// Danh sách logo (2 hàng x 4 cột)
const CLIENT_LOGOS = [
  { name: "Strongbow", img: strongbow },
  { name: "USG Boral", img: usgboral },
  { name: "Sensodyne", img: sensodyne },
  { name: "Nha Sach", img: nhasach },
  // Row 2
  { name: "Nha Sach Phuong Nam", img: nhasachphuongnam },
  { name: "Vietbank", img: vietbank },
  { name: "Nescafe", img: nescafe },
  { name: "FUTA Bus Lines", img: futabuslines },
];

export const OurCustomer = () => {
  return (
    <section
      className="w-full flex justify-center"
      style={{ paddingBottom: "50px" }}
    >
      {/* MAIN CONTAINER (Rectangle 707) 
          Width: 1277px; Height: 517px
      */}
      <div
        className="relative flex flex-col items-center"
        style={{
          width: "1277px",
          height: "517px",
          backgroundColor: "#F5F5F5",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
          borderRadius: "30px",
          paddingTop: "65px", // Căn chỉnh nội dung bên trong
        }}
      >
        {/* === 1. HEADER SECTION === */}
        <div className="flex flex-col items-center text-center mb-[35px]">
          {/* Title: Khách hàng của chúng tôi */}
          <h2
            className="font-lato font-bold text-[#313131]"
            style={{
              fontSize: "56px",
              lineHeight: "100%", // 56px
              letterSpacing: "-3px",
              marginBottom: "20px",
            }}
          >
            Khách hàng của chúng tôi
          </h2>

          {/* Subtitle */}
          <p
            className="font-inter font-normal text-[#575757]"
            style={{
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            Những thương hiệu hàng đầu đã và đang tin tưởng sử dụng dịch vụ của
            chúng tôi.
          </p>
        </div>

        {/* === 2. LOGO GRID (2 Hàng) === 
            Width: 1131px
        */}
        <div
          className="grid grid-cols-4"
          style={{
            width: "1131px",
            columnGap: "29px", // Khoảng cách ngang
            rowGap: "32px", // Khoảng cách dọc
          }}
        >
          {CLIENT_LOGOS.map((logo, index) => (
            <div
              key={index}
              // Thêm bg-white để tạo khung trắng cho logo (giống trong thiết kế Rectangle 449 -> 452)
              className="flex items-center justify-center overflow-hidden bg-white transition-transform hover:scale-105 duration-300 cursor-pointer"
              style={{
                width: "261px",
                height: "108px",
                borderRadius: "10px",
                // Shadow nhẹ nếu cần, hoặc bỏ đi nếu ảnh đã có border
                boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              {/* Hiển thị ảnh thật */}
              <img
                src={logo.img}
                alt={logo.name}
                className="w-full h-full object-cover" // Hoặc object-contain tùy vào tỉ lệ ảnh gốc của bạn
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
