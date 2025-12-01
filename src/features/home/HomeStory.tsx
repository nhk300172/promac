import { ArrowRight } from "lucide-react";

export const HomeStory = () => {
  return (
    <div className="w-full flex justify-center">
      <section
        className="relative"
        style={{
          width: "1379px",
          height: "626px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
        }}
      >
        {/* IMAGE LEFT */}
        <div
          className="absolute bg-gray-300 flex items-center justify-center overflow-hidden"
          style={{
            width: "536px",
            height: "445px",
            borderRadius: "10px",
            left: "32px",
            top: "90px",
          }}
        >
          <span className="text-gray-500 font-medium">m_image placeholder</span>
        </div>

        {/* TITLE: CÂU CHUYỆN CỦA CHÚNG TÔI (Giữ màu đỏ theo thiết kế tiêu đề gốc) */}
        <h2
          className="absolute font-inter font-bold text-[#FF0000]"
          style={{
            width: "363px",
            height: "29px",
            left: "610px",
            top: "143px",
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "left",
          }}
        >
          CÂU CHUYỆN CỦA CHÚNG TÔI
        </h2>

        {/* DESCRIPTION: ĐÃ SỬA MÀU VÀ NGẮT DÒNG 
            - Màu gốc: Đen (#000000)
            - Chữ PROMAC: Đỏ (#FF0000)
        */}
        <p
          className="absolute font-inter font-normal text-[#000000]" // <--- Đổi thành màu Đen
          style={{
            width: "720.44px",
            height: "152px",
            left: "610px",
            top: "203px",
            fontSize: "16px",
            lineHeight: "19px", // Line height hơi khít theo Figma (19px)
            textAlign: "justify",
          }}
        >
          {/* Chỉ chữ PROMAC màu đỏ */}
          <span className="text-[#FF0000] font-bold">PROMAC</span> đã và đang
          đáp ứng nhu cầu in ấn của khu vực Amravati và các vùng lân cận với sự
          tận tâm và chuyên nghiệp.
          <br /> {/* Xuống dòng */}
          Được thành lập với tầm nhìn mang đến các giải pháp in ấn chất lượng
          cao, chúng tôi đã phát triển và trở thành một thương hiệu đáng tin cậy
          trong ngành in ấn.
          <br />
          <br /> {/* Xuống dòng + Cách 1 dòng (Gap) */}
          Cam kết của chúng tôi về chất lượng, giao hàng đúng hẹn và sự hài lòng
          của khách hàng đã giúp chúng tôi trở thành lựa chọn hàng đầu của các
          doanh nghiệp, tổ chức và cá nhân đang tìm kiếm dịch vụ in ấn chuyên
          nghiệp.
        </p>

        {/* BUTTON */}
        <button
          className="absolute flex items-center justify-center transition-transform hover:scale-105"
          style={{
            width: "223px",
            height: "53px",
            left: "851px",
            top: "432px",
            backgroundColor: "#FF0000",
            borderRadius: "20px",
            boxShadow: "0px 0px 14px #FF0000",
            gap: "12px",
          }}
        >
          <span className="font-inter font-bold text-[20px] leading-[24px] text-[#F5F5F5]">
            Tìm hiểu thêm
          </span>
          <ArrowRight size={24} color="#FFFFFF" strokeWidth={3} />
        </button>
      </section>
    </div>
  );
};
