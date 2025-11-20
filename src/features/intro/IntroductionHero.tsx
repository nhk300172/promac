import { Mail, Phone } from "lucide-react"; // Import thêm icon Phone

export const IntroductionHero = () => {
  return (
    <div className="w-full flex justify-center mt-[5px]">
      {/* KHUNG TRẮNG CHUẨN 1440PX */}
      <div
        className="relative"
        style={{ width: "1440px", height: "600px", backgroundColor: "#FFFFFF" }}
      >
        {/* KHUNG NỀN HỒNG (#FFF5F6) */}
        <section
          className="absolute"
          style={{
            width: "1440px",
            height: "600px",
            backgroundColor: "#FFF5F6",
            borderRadius: "30px",
            top: "0px",
            left: "0px",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-70">
            <div
              className="w-full h-full"
              style={{ backgroundColor: "#FFF5F6", borderRadius: "30px" }}
            />
          </div>

          {/* WRAPPER NỘI DUNG */}
          <div
            className="absolute"
            style={{
              width: "1346.207px",
              height: "506px",
              top: "39px",
              left: "42.4px",
            }}
          >
            <div className="relative w-full h-full">
              {/* ==============================================================
                        LEFT TEXT AREA (Group 1000002968)
                    ============================================================== */}
              <div
                className="absolute"
                style={{
                  width: "749.65px",
                  height: "421.07px",
                  top: "53px",
                  left: "0px",
                }}
              >
                {/* 1. TIÊU ĐỀ */}
                <h1
                  className="absolute font-inter font-semibold"
                  style={{
                    width: "732.86px",
                    height: "64px",
                    top: "0px",
                    left: "16.79px",
                    fontSize: "36px",
                    lineHeight: "64px",
                    color: "#FF0000",
                  }}
                >
                  GIỚI THIỆU VỀ PROMAC
                </h1>

                {/* 2. SUBTITLE */}
                <p
                  className="absolute font-inter font-semibold"
                  style={{
                    width: "698.29px",
                    height: "46px",
                    top: "84px",
                    left: "16.79px",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#374151",
                  }}
                >
                  Đối tác đáng tin cậy của bạn về dịch vụ in ấn chuyên nghiệp
                  tại PROMAC
                </p>

                {/* 3. BUTTON */}
                <button
                  className="absolute flex flex-col justify-center items-center"
                  style={{
                    width: "208.4px",
                    height: "53px",
                    top: "156px",
                    left: "16.79px",
                    backgroundColor: "#FF0000",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 14px #FF0000",
                  }}
                >
                  <span className="font-inter font-bold text-[20px] leading-[24px] text-center text-[#F5F5F5]">
                    Yêu cầu Báo giá
                  </span>
                </button>

                {/* 4. VECTOR 27 (Dòng kẻ ngang lớn) */}
                <div
                  className="absolute"
                  style={{
                    width: "481px",
                    height: "0px",
                    top: "336.51px",
                    left: "0px",
                    borderTop: "1px solid rgba(0, 0, 0, 0.5)",
                  }}
                />

                {/* ==============================================================
                            5. GROUP 302 (SỐ ĐIỆN THOẠI) - MỚI THÊM
                        ============================================================== */}
                <div
                  className="absolute flex items-center"
                  style={{
                    top: "360px",
                    left: "20.6px",
                    height: "21px",
                    // width: '277px', // Không cần set cứng width để flex tự xử lý
                  }}
                >
                  {/* Rectangle 425 (Icon Phone) */}
                  <div
                    className="flex items-center justify-center"
                    style={{ width: "20px", height: "21px" }}
                  >
                    <Phone size={20} color="rgba(0,0,0,0.5)" />
                  </div>

                  {/* Số điện thoại*/}

                  <a
                    href="tel:02822272416"
                    className="font-inter font-normal underline decoration-solid"
                    style={{
                      fontSize: "16px",
                      lineHeight: "100%",
                      color: "rgba(0, 0, 0, 0.5)", // #00000080
                      marginLeft: "12px", // Khoảng cách từ icon
                      marginRight: "12px",
                    }}
                  >
                    (028) 22272416
                  </a>

                  {/* Vector 28 (Vạch ngăn dọc)
                   */}
                  <div
                    style={{
                      width: "0px",
                      height: "20px",
                      borderLeft: "1px solid #00000080",
                    }}
                  />

                  {/* Số điện thoại 2*/}
                  <a
                    href="tel:0906838869"
                    className="font-inter font-normal underline decoration-solid"
                    style={{
                      fontSize: "16px",
                      lineHeight: "100%",
                      color: "rgba(0, 0, 0, 0.5)",
                      marginLeft: "12px",
                    }}
                  >
                    0906838869
                  </a>
                </div>

                {/* 6. GROUP 303 (EMAIL INFO) 
                            Figma Top: 599px -> Relative Top: 400px
                            Figma Left: 63.14px -> Relative Left: 20.74px
                        */}
                <div
                  className="absolute flex items-center"
                  style={{
                    top: "400px",
                    left: "20.74px",
                  }}
                >
                  {/* Icon Mail */}
                  <div
                    className="flex items-center justify-center"
                    style={{ width: "21.83px", height: "21.07px" }}
                  >
                    <Mail size={20} color="rgba(0,0,0,0.5)" />
                  </div>

                  {/* Text Email (Đã thêm gạch chân underline) */}
                  <a
                    href="mailto:info@promacprinting.com"
                    className="font-inter font-normal ml-[12px] underline decoration-solid"
                    style={{
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    info@promacprinting.com
                  </a>
                </div>
              </div>

              {/* ITEM 2: IMAGE RIGHT */}
              <div
                className="absolute flex items-center justify-center bg-gray-200 overflow-hidden"
                style={{
                  width: "576.8px",
                  height: "506px",
                  borderRadius: "10px",
                  top: "0px",
                  left: "769.4px",
                }}
              >
                <span className="text-gray-500">m_image</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
