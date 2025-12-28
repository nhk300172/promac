//src/features/home/HomeStory.tsx
import { ArrowRight } from "lucide-react";
import mainVisual from "../../assets/main-visual.jpg";

// --- 1. CONFIG & DATA (Dễ dàng chỉnh sửa nội dung tại đây) ---
const CONTENT = {
  title: "CÂU CHUYỆN CỦA CHÚNG TÔI",
  description: (
    <>
      <span className="text-[#FF0000] font-bold">PROMAC</span> đã và đang đáp
      ứng nhu cầu in ấn thẻ cào, túi thẻ cào trong toàn quốc.
      <br />
      <br />
      <span className="text-[#FF0000] font-bold">PROMAC</span> được thành lập
      với tầm nhìn mang đến các giải pháp in ấn các loại thẻ cào bảo mật, chất
      lượng cao. <span className="text-[#FF0000] font-bold">PROMAC</span> tự hào
      là đơn vị tiên phong và thương hiệu đáng tin cậy trong lĩnh vực in thẻ cào
      trúng thưởng.
      <br />
      <br />
      Chúng tôi hiểu được giá trị mang lại cho khách hàng qua sản phẩm đảm bảo
      tiêu chuẩn đạt chất lượng, bảo mật thông tin tuyệt đối, giao hàng đúng hẹn
      và sự hài lòng của khách hàng đã giúp chúng tôi từng bước phát triển Công
      ty hướng đến mục tiêu tạo dựng uy tín với khách hàng.
      <br />
      <br />
      Sự chuyên nghiệp <span className="text-[#FF0000] font-bold">
        PROMAC
      </span>{" "}
      mang lại từ: máy móc thiết bị hiện đại chuyên dùng. Đội ngũ công nhân lành
      nghề, kỹ thuật viên chuyên ngành.
    </>
  ),
  buttonText: "Tìm hiểu thêm",
};

export const HomeStory = () => {
  return (
    <div className="w-full flex justify-center py-[20px] xl:py-0 px-4 xl:px-0">
      {/* --- CONTAINER CHÍNH (Responsive cho mọi màn hình) --- */}
      <section
        className="
        flex flex-col xl:flex-row items-center 
        bg-white rounded-[30px] xl:rounded-[40px]
        p-[24px] md:p-[40px] 
        w-full max-w-[375px] md:max-w-[768px] xl:max-w-[1379px] 
        gap-[32px] md:gap-[40px] xl:gap-[70px]
        mx-auto relative shadow-xl
      "
      >
        {/* --- 2. IMAGE SECTION (Trái) --- */}
        <div
          className="
          w-full xl:w-[536px] 
          h-[242px] md:h-[350px] xl:h-[445px] 
          bg-gray-300 rounded-[10px] 
          overflow-hidden shrink-0 shadow-sm
        "
        >
          <img
            src={mainVisual}
            alt="Promac Story"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* --- 3. TEXT CONTENT SECTION (Phải) --- */}
        <div className="flex flex-col items-center md:items-start w-full xl:flex-1">
          {/* Title */}
          <h2
            className="
            font-inter font-bold text-[#FF0000] uppercase
            text-[24px] md:text-[28px] xl:text-[30px]
            mb-[16px] xl:mb-[24px]
            text-center md:text-left
          "
          >
            {CONTENT.title}
          </h2>

          {/* Description Paragraph */}
          <p
            className="
            font-inter font-normal text-[#000000]
            text-[15px] md:text-[16px] 
            leading-[1.5] xl:leading-[1.6]
            mb-[24px] xl:mb-[40px]
            text-center md:text-justify xl:text-justify
            xl:max-w-[720px]
          "
          >
            {CONTENT.description}
          </p>

          {/* Button Group (Căn giữa ở Mobile/Desktop, nhưng căn trái ở Tablet nếu muốn) */}
          <div className="w-full flex justify-center xl:justify-end pr-0 xl:pr-[100px]">
            <button
              className="
              flex items-center justify-center gap-3 
              w-[171px] h-[45px] xl:w-[223px] xl:h-[53px]
              bg-[#FF0000] rounded-[20px] 
              shadow-[0px_4px_14px_rgba(255,0,0,0.4)] 
              active:scale-95 hover:scale-105 transition-all
            "
            >
              <span className="font-inter font-bold text-[16px] xl:text-[20px] text-[#F5F5F5]">
                {CONTENT.buttonText}
              </span>
              <ArrowRight
                size={20}
                className="text-white xl:w-6 xl:h-6"
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
