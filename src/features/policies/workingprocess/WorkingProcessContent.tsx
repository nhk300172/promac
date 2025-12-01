import React from "react";

// --- IMPORT HÌNH ẢNH TỪ THƯ MỤC POLICY ---
import policy1Img from "../../../assets/policy/policy1.png";
import policy2Img from "../../../assets/policy/policy2.jpg";
import policy4Img from "../../../assets/policy/policy6.jpg";
import policy6Img from "../../../assets/policy/policy6.jpg";

// Dữ liệu các điều khoản
// Lưu ý: Tôi đã thêm dấu "-" vào trước các dòng cần hiển thị dấu chấm tròn (bullet point)
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

export const WorkingProcessContent: React.FC = () => {
  return (
    <section className="w-full flex justify-center pb-[100px]">
      <div
        className="relative bg-white flex flex-col items-center"
        style={{
          width: "1376px",
          minHeight: "1000px",
          boxShadow: "0px 12px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "50px",
          padding: "50px 60px 80px 60px",
        }}
      >
        {/* --- TIÊU ĐỀ CHÍNH --- */}
        <h2
          className="font-inter font-semibold text-center text-[#253D4E]"
          style={{
            width: "1252px",
            fontSize: "40px",
            lineHeight: "48px",
            marginBottom: "60px",
          }}
        >
          Quy Trình Làm Việc
        </h2>

        {/* List các điều khoản */}
        <div className="flex flex-col gap-[60px] w-full max-w-[1252px]">
          {TERMS_DATA.map((term) => (
            <div key={term.id} className="flex flex-col w-full">
              {/* HEADER */}
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

              {/* CONTENT (Xử lý Logic Bullet Point) */}
              <div className="pl-[20px] mb-[40px]">
                {term.content.map((paragraph, idx) => {
                  // Kiểm tra xem dòng có bắt đầu bằng "-" hay không
                  const isBullet = paragraph.trim().startsWith("-");
                  // Xóa dấu "-" để hiển thị text sạch
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

              {/* IMAGE RENDER */}
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
