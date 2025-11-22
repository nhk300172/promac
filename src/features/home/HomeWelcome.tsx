export const HomeWelcome = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HEADING
          Font: Inter, Bold (700), 56px, Center
          Color: #0E0E0E
      */}
      <h2
        className="font-inter font-bold text-center"
        style={{
          width: "589px",
          // height: '78px', // Để auto height cho an toàn
          fontSize: "56px",
          lineHeight: "140%", // tương đương 78px
          color: "#0E0E0E",
          marginBottom: "12px",
          whiteSpace: "nowrap",
        }}
      >
        {/* Figma ghi là "Heading", bạn nên đổi thành tiêu đề thật, ví dụ: "Dịch Vụ Của Chúng Tôi" */}
        Sơ lược về PROMAC
      </h2>

      {/* 2. DESCRIPTION
          Font: Inter, Medium (500), 16px, Center
          Color: #64607D
      */}
      <p
        className="font-inter font-medium text-center"
        style={{
          width: "720.44px",
          // height: '38px',
          fontSize: "16px",
          lineHeight: "19px",
          color: "#64607D",
        }}
      >
        Đối tác đáng tin cậy của bạn trong các giải pháp in ấn chuyên nghiệp tại
        Amravati, mang đến dịch vụ chất lượng với công nghệ hiện đại và tay nghề
        chuyên môn cao.
      </p>
    </div>
  );
};
