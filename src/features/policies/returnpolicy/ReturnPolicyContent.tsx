// src/features/policies/privacypolicy/ReturnPolicyContent.tsx
import React from "react";

// --- IMPORT HÌNH ẢNH ---
import policy1Img from "../../../assets/policy/policy1.png";
import policy2Img from "../../../assets/policy/policy2.jpg";
import policy4Img from "../../../assets/policy/policy4.jpg";
import policy6Img from "../../../assets/policy/policy6.jpg";

const TERMS_DATA = [
  {
    id: 1,
    title: "ĐIỀU 1: THÔNG TIN KHÁCH HÀNG CHÍNH XÁC",
    content: [
      "Khi đặt hàng, quý khách vui lòng cung cấp đầy đủ thông tin về tên, địa chỉ, email, số điện thoại,… Đây là những thông tin bắt buộc.",
      "- Quý khách hàng phải cung cấp đầy đủ thông tin để Promac căn cứ theo đó mà phục vụ quý khách một cách tốt nhất và đảm bảo Tiến độ SLA (Service Level Agreement) cho đơn hàng.",
      "- Những trường hợp điền thiếu thông tin hoặc thông tin sai sự thật có thể ảnh hưởng đến chất lượng chế bản hoặc thời gian giao hàng và sẽ không được Promac giải quyết.",
    ],
    image: policy1Img,
  },
  {
    id: 2,
    title: "ĐIỀU 2: BẢO MẤT THÔNG TIN KHÁCH HÀNG",
    content: [
      "Mọi thông tin cá nhân của khách hàng sẽ được Promac bảo mật và cam kết không tiết lộ, mua bán hay trao đổi những thông tin này với bất kỳ một bên thứ ba nào khác.",
      "Nguyên tắc Bảo mật Nâng cao: Đối với các đơn hàng liên quan đến Mã Code Biến đổi (Thẻ Cào, Voucher), chúng tôi áp dụng quy trình bảo mật khép kín nghiêm ngặt nhất.",
      "Trong trường hợp cơ quan pháp luật yêu cầu bằng văn bản, chúng tôi sẽ buộc phải cung cấp những thông tin này cho các cơ quan pháp luật có thẩm quyền.",
    ],
    image: policy2Img,
  },
  {
    id: 3,
    title: "ĐIỀU 3: CAM KẾT SẢN PHẨM TRÍ TUỆ",
    content: [
      "Công ty Promac cam kết sáng tạo và cung cấp dịch vụ sản phẩm trí tuệ, không sử dụng lặp lại mẫu mã hoặc thiết kế độc quyền của khách hàng A cho khách hàng B.",
    ],
    image: null,
  },
  {
    id: 4,
    title: "ĐIỀU 4: BÀN GIAO DỮ LIỆU & LƯU TRỮ FILE GỐC",
    content: [
      "Sau khi hoàn thiện và nghiệm thu đơn hàng (bao gồm các file thiết kế, chế bản cuối cùng), Promac sẽ bàn giao dữ liệu gốc.",
      "Quý khách hàng vui lòng lưu trữ lại file gốc của thiết kế. Promac không có trách nhiệm lưu trữ dữ liệu cho khách hàng sau khi đã bàn giao.",
      "Trường hợp khách hàng có nhu cầu lưu trữ dài hạn, vui lòng liên hệ bộ phận Kỹ thuật của Promac để thỏa thuận dịch vụ lưu trữ.",
    ],
    image: policy4Img,
  },
  {
    id: 5,
    title: "ĐIỀU 5: LƯU TRỮ HÀNG HOÁ VẬT LÝ",
    content: [
      "Đối với những đơn hàng đã hoàn tất hoặc chưa hoàn tất (thành phẩm), Promac chỉ lưu trữ hàng in ấn trong vòng tối đa 1 tháng, sau đó đơn hàng sẽ được tiêu hủy.",
      "- Nếu khách hàng có nhu cầu nhờ lưu trữ hàng hóa lâu hơn (quá 1 tháng), vui lòng liên hệ với bộ phận kinh doanh của Promac để thỏa thuận.",
    ],
    image: null,
  },
  {
    id: 6,
    title: "ĐIỀU 6: NỘI DUNG VI PHẠM & PHÁP LÝ",
    content: [
      "Công ty Promac có quyền từ chối hoặc phủ định trách nhiệm đối với các đơn hàng vi phạm các mục sau:",
      "- Cung cấp nội dung cá nhân sai hoặc cố tình spam.",
      "- Nội dung in ấn tuyên truyền, chống phá và xuyên tạc chính quyền, hoặc các nội dung liên quan đến chính trị, tôn giáo, thuần phong mỹ tục trái pháp luật.",
    ],
    image: policy6Img,
  },
  {
    id: 7,
    title: "ĐIỀU 7: CẬP NHẬP NỘI DUNG",
    content: [
      "Công ty Promac có thể thay đổi, bổ sung hoặc sửa chữa các điều khoản trên bất cứ lúc nào và sẽ công bố rõ trên Website promacprinting.com.",
    ],
    image: null,
  },
];

export const ReturnPolicyContent: React.FC = () => {
  return (
    <section className="w-full flex justify-center pb-[60px] lg:pb-[100px] px-4 xl:px-0">
      {/* =================================================================
          1. MOBILE VERSION (< 768px)
          - ĐÃ SỬA LỖI: Dùng Flexbox thay vì Absolute cho tiêu đề
          ================================================================= */}
      <div className="flex flex-col items-center w-full md:hidden px-[20px]">
        {/* CONTAINER TRẮNG MOBILE */}
        <div className="flex flex-col items-center bg-white rounded-[50px] shadow-[0px_12px_8px_rgba(0,0,0,0.25)] w-full max-w-[375px] px-[23px] py-[47px]">
          {/* Header Mobile */}
          <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#000000] text-center mb-[40px]">
            Đổi Trả Hàng Hóa
          </h2>

          {/* Terms List Mobile */}
          <div className="flex flex-col gap-[40px] w-full">
            {TERMS_DATA.map((term) => (
              <div key={term.id} className="flex flex-col w-full">
                {/* Title Group - SỬA LỖI Ở ĐÂY */}
                <div className="flex items-start gap-[12px] mb-[16px] w-full">
                  {/* Border Red Left */}
                  <div className="w-[3px] h-[24px] bg-[#FF0000] -rotate-1 shrink-0 mt-1"></div>

                  {/* Title Right - Tự động xuống dòng, không bị fix width */}
                  <h3 className="font-roboto font-extrabold text-[18px] leading-[1.3] text-[#FF0000] uppercase text-left">
                    {term.title}
                  </h3>
                </div>

                {/* Content Text */}
                <div className="w-full mb-[24px]">
                  {term.content.map((paragraph, idx) => {
                    const isBullet = paragraph.trim().startsWith("-");
                    const displayText = isBullet
                      ? paragraph.replace("-", "").trim()
                      : paragraph;
                    return (
                      <p
                        key={idx}
                        className="font-inter font-normal text-[15px] leading-[28px] text-[#000000] mb-[10px] text-justify"
                      >
                        {isBullet ? `• ${displayText}` : displayText}
                      </p>
                    );
                  })}
                </div>

                {/* Image Mobile */}
                {term.image && (
                  <div className="w-full h-[159px] rounded-[12px] overflow-hidden bg-gray-200">
                    <img
                      src={term.image}
                      alt={term.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          2. TABLET & IPAD PRO VERSION (768px -> 1279px)
          - Đã có Flexbox, không bị lỗi
          ================================================================= */}
      <div className="hidden md:flex xl:hidden relative bg-white flex-col items-center w-full max-w-[1000px] rounded-[50px] shadow-lg p-[40px] lg:p-[60px]">
        <h2 className="font-inter font-semibold text-center text-[#253D4E] text-[32px] lg:text-[40px] leading-[1.2] mb-[40px]">
          Chính Sách Đổi Trả Hàng Hóa
        </h2>

        <div className="flex flex-col gap-[40px] w-full">
          {TERMS_DATA.map((term) => (
            <div key={term.id} className="flex flex-col w-full">
              <div className="flex items-start gap-[15px] mb-[20px]">
                <div className="w-[3px] h-[29px] bg-[#FF0000] -rotate-1 mt-1 shrink-0" />
                <h2 className="font-roboto font-extrabold text-[#FF0000] uppercase text-[20px] lg:text-[24px] leading-[1.2]">
                  {term.title}
                </h2>
              </div>

              <div className="pl-[20px] mb-[20px]">
                {term.content.map((paragraph, idx) => {
                  const isBullet = paragraph.trim().startsWith("-");
                  const displayText = isBullet
                    ? paragraph.replace("-", "").trim()
                    : paragraph;
                  return isBullet ? (
                    <ul key={idx} className="list-disc pl-8 mb-[10px]">
                      <li className="font-lexend font-light text-black text-justify text-[16px] lg:text-[18px] leading-[1.6]">
                        {displayText}
                      </li>
                    </ul>
                  ) : (
                    <p
                      key={idx}
                      className="font-lexend font-light text-black mb-[10px] text-justify text-[16px] lg:text-[18px] leading-[1.6]"
                    >
                      {displayText}
                    </p>
                  );
                })}
              </div>

              {term.image && (
                <div className="w-full flex justify-center mb-[20px]">
                  <div className="overflow-hidden flex items-center justify-center w-full max-w-[800px] rounded-[12px] shadow-sm aspect-[2/1]">
                    <img
                      src={term.image}
                      alt={term.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================
          3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN CODE CŨ
          ================================================================= */}
      <div
        className="hidden xl:flex relative bg-white flex-col items-center"
        style={{
          width: "1376px",
          minHeight: "1000px",
          boxShadow: "0px 12px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "50px",
          padding: "50px 60px 80px 60px",
        }}
      >
        <h2
          className="font-inter font-semibold text-center text-[#253D4E]"
          style={{
            width: "1252px",
            fontSize: "40px",
            lineHeight: "48px",
            marginBottom: "60px",
          }}
        >
          Chính Sách Đổi Trả Hàng Hóa
        </h2>

        <div className="flex flex-col gap-[60px] w-full max-w-[1252px]">
          {TERMS_DATA.map((term) => (
            <div key={term.id} className="flex flex-col w-full">
              <div className="flex items-start gap-[15px] mb-[20px]">
                <div
                  style={{
                    width: "3px",
                    height: "29px",
                    backgroundColor: "#FF0000",
                    transform: "rotate(-0.92deg)",
                    marginTop: "2px",
                  }}
                />
                <h2
                  className="font-roboto font-extrabold text-[#FF0000] uppercase"
                  style={{ fontSize: "24px", lineHeight: "120%" }}
                >
                  {term.title}
                </h2>
              </div>

              <div className="pl-[20px] mb-[40px]">
                {term.content.map((paragraph, idx) => {
                  const isBullet = paragraph.trim().startsWith("-");
                  const displayText = isBullet
                    ? paragraph.replace("-", "").trim()
                    : paragraph;
                  if (isBullet) {
                    return (
                      <ul key={idx} className="list-disc pl-8 mb-[10px]">
                        <li
                          className="font-lexend font-light text-black text-justify"
                          style={{ fontSize: "20px", lineHeight: "28px" }}
                        >
                          {displayText}
                        </li>
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className="font-lexend font-light text-black mb-[10px] text-justify"
                      style={{ fontSize: "20px", lineHeight: "28px" }}
                    >
                      {displayText}
                    </p>
                  );
                })}
              </div>

              {term.image && (
                <div className="w-full flex justify-center mb-[40px]">
                  <div
                    className="overflow-hidden flex items-center justify-center"
                    style={{
                      width: "937px",
                      height: "462px",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={term.image}
                      alt={term.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
