// //src/features/home/HomeStory.tsx
// import { ArrowRight } from "lucide-react";

// import mainVisual from "../../assets/main-visual.jpg";

// export const HomeStory = () => {
//   return (
//     <div className="w-full flex justify-center mt-[20px] xl:mt-[0]">
//       {/* =================================================================
//           1. MOBILE VERSION (< 768px)
//           - Giữ nguyên logic cũ: Flex cột, max-w-[375px]
//           ================================================================= */}
//       <section className="flex flex-col items-center bg-[#F5F5F5] rounded-[40px] px-[23px] py-[55px] w-full max-w-[375px] mx-auto md:hidden">
//         <div className="flex flex-col items-center gap-[50px] w-full">
//           {/* IMAGE */}
//           <div className="w-full h-[242px] bg-gray-300 rounded-[10px] flex items-center justify-center overflow-hidden shrink-0">
//             <img
//               src={mainVisual}
//               alt="Promac Story Mobile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* TEXT CONTENT */}
//           <div className="flex flex-col items-center gap-[32px] w-full">
//             <div className="flex flex-col items-center gap-[24px] w-full ">
//               <h2 className="font-inter font-bold text-[28px] leading-[34px] text-[#FF0000] text-center">
//                 Câu chuyện của chúng tôi
//               </h2>
//               <p className="font-inter font-normal text-[15px] leading-[18px] text-[#000000] ">
//                 <span className="text-[#FF0000] font-bold">PROMAC</span> đã và
//                 đang đáp ứng nhu cầu in ấn của khu vực Amravati và các vùng lân
//                 cận với sự tận tâm và chuyên nghiệp. Được thành lập với tầm nhìn
//                 mang đến các giải pháp in ấn chất lượng cao, chúng tôi đã phát
//                 triển và trở thành một thương hiệu đáng tin cậy trong ngành in
//                 ấn.
//                 <br />
//                 <br />
//                 Cam kết của chúng tôi về chất lượng, giao hàng đúng hẹn và sự
//                 hài lòng của khách hàng đã giúp chúng tôi trở thành lựa chọn
//                 hàng đầu của các doanh nghiệp, tổ chức và cá nhân đang tìm kiếm
//                 dịch vụ in ấn chuyên nghiệp.
//               </p>
//             </div>
//             <button className="flex items-center justify-center gap-2 w-[171px] h-[45px] bg-[#FF0000] rounded-[20px] shadow-[0px_0px_14px_#FF0000] active:scale-95 transition-transform">
//               <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
//                 Tìm hiểu thêm
//               </span>
//               <ArrowRight size={20} className="text-white" strokeWidth={3} />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* =================================================================
//           2. TABLET & IPAD PRO VERSION (768px -> 1279px) - MỚI
//           - Layout ngang (Flex Row) giống Desktop nhưng linh hoạt (Fluid)
//           - Không dùng Absolute để tránh vỡ layout khi co giãn
//           ================================================================= */}
//       <section className="hidden md:flex xl:hidden flex-row items-center bg-[#F5F5F5] rounded-[30px] p-[40px] w-full max-w-[720px] lg:max-w-[960px] mx-auto gap-[40px]">
//         {/* IMAGE LEFT */}
//         <div className="w-[45%] h-[350px] lg:h-[400px] bg-gray-300 rounded-[10px] overflow-hidden shrink-0">
//           <img
//             src={mainVisual}
//             alt="Promac Story Tablet"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* CONTENT RIGHT */}
//         <div className="flex flex-col items-start w-[55%]">
//           <h2 className="font-inter font-bold text-[#FF0000] text-[24px] lg:text-[28px] mb-[24px] uppercase">
//             CÂU CHUYỆN CỦA CHÚNG TÔI
//           </h2>
//           <p className="font-inter font-normal text-[#000000] text-[14px] lg:text-[16px] leading-[1.5] mb-[32px] text-justify">
//             <span className="text-[#FF0000] font-bold">PROMAC</span> đã và đang
//             đáp ứng nhu cầu in ấn của khu vực Amravati và các vùng lân cận với
//             sự tận tâm và chuyên nghiệp.
//             <br />
//             <br />
//             Cam kết của chúng tôi về chất lượng, giao hàng đúng hẹn và sự hài
//             lòng của khách hàng đã giúp chúng tôi trở thành lựa chọn hàng đầu.
//           </p>
//           <button className="flex items-center justify-center gap-2 bg-[#FF0000] rounded-[20px] px-6 py-3 shadow-lg hover:scale-105 transition-transform">
//             <span className="font-inter font-bold text-[16px] text-[#F5F5F5]">
//               Tìm hiểu thêm
//             </span>
//             <ArrowRight size={20} className="text-white" strokeWidth={3} />
//           </button>
//         </div>
//       </section>

//       {/* =================================================================
//           3. DESKTOP VERSION (>= 1280px) - GIỮ NGUYÊN 100% CODE CŨ
//           - Chỉ đổi lg:block thành xl:block để tránh trùng lặp với iPad Pro
//           ================================================================= */}
//       <section
//         className="hidden xl:block relative" // <--- Đổi lg:block thành xl:block
//         style={{
//           width: "1379px",
//           height: "626px",
//           backgroundColor: "#F5F5F5",
//           borderRadius: "30px",
//         }}
//       >
//         {/* IMAGE LEFT */}
//         <div
//           className="absolute bg-gray-300 flex items-center justify-center overflow-hidden"
//           style={{
//             width: "536px",
//             height: "445px",
//             borderRadius: "10px",
//             left: "32px",
//             top: "90px",
//           }}
//         >
//           <img
//             src={mainVisual}
//             alt="Promac Story Desktop"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* TITLE */}
//         <h2
//           className="absolute font-inter font-bold text-[#FF0000]"
//           style={{
//             width: "363px",
//             height: "29px",
//             left: "610px",
//             top: "143px",
//             fontSize: "24px",
//             lineHeight: "29px",
//             textAlign: "left",
//           }}
//         >
//           CÂU CHUYỆN CỦA CHÚNG TÔI
//         </h2>

//         {/* DESCRIPTION */}
//         <p
//           className="absolute font-inter font-normal text-[#000000]"
//           style={{
//             width: "720.44px",
//             height: "152px",
//             left: "610px",
//             top: "203px",
//             fontSize: "16px",
//             lineHeight: "19px",
//             textAlign: "justify",
//           }}
//         >
//           <span className="text-[#FF0000] font-bold">PROMAC</span> đã và đang
//           đáp ứng nhu cầu in ấn của khu vực Amravati và các vùng lân cận với sự
//           tận tâm và chuyên nghiệp.
//           <br />
//           Được thành lập với tầm nhìn mang đến các giải pháp in ấn chất lượng
//           cao, chúng tôi đã phát triển và trở thành một thương hiệu đáng tin cậy
//           trong ngành in ấn.
//           <br />
//           <br />
//           Cam kết của chúng tôi về chất lượng, giao hàng đúng hẹn và sự hài lòng
//           của khách hàng đã giúp chúng tôi trở thành lựa chọn hàng đầu của các
//           doanh nghiệp, tổ chức và cá nhân đang tìm kiếm dịch vụ in ấn chuyên
//           nghiệp.
//         </p>

//         {/* BUTTON */}
//         <button
//           className="absolute flex items-center justify-center transition-transform hover:scale-105"
//           style={{
//             width: "223px",
//             height: "53px",
//             left: "851px",
//             top: "432px",
//             backgroundColor: "#FF0000",
//             borderRadius: "20px",
//             boxShadow: "0px 0px 14px #FF0000",
//             gap: "12px",
//           }}
//         >
//           <span className="font-inter font-bold text-[20px] leading-[24px] text-[#F5F5F5]">
//             Tìm hiểu thêm
//           </span>
//           <ArrowRight size={24} color="#FFFFFF" strokeWidth={3} />
//         </button>
//       </section>
//     </div>
//   );
// };

import { ArrowRight } from "lucide-react";
import mainVisual from "../../assets/main-visual.jpg";

// --- 1. CONFIG & DATA (Dễ dàng chỉnh sửa nội dung tại đây) ---
const CONTENT = {
  title: "CÂU CHUYỆN CỦA CHÚNG TÔI",
  description: (
    <>
      <span className="text-[#FF0000] font-bold">PROMAC</span> đã và đang đáp
      ứng nhu cầu in ấn của khu vực Amravati và các vùng lân cận với sự tận tâm
      và chuyên nghiệp.
      <br className="hidden md:block" />
      Được thành lập với tầm nhìn mang đến các giải pháp in ấn chất lượng cao,
      chúng tôi đã phát triển và trở thành một thương hiệu đáng tin cậy trong
      ngành in ấn.
      <br />
      <br />
      Cam kết của chúng tôi về chất lượng, giao hàng đúng hẹn và sự hài lòng của
      khách hàng đã giúp chúng tôi trở thành lựa chọn hàng đầu của các doanh
      nghiệp, tổ chức và cá nhân đang tìm kiếm dịch vụ in ấn chuyên nghiệp.
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
