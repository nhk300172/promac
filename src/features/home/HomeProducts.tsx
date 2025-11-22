// 1. DỮ LIỆU GIẢ LẬP (6 Sản phẩm theo thiết kế)
const PRODUCTS = [
  {
    id: 1,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: "bg-gray-200", // Placeholder màu xám
  },
  {
    id: 2,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: "bg-gray-200",
  },
  {
    id: 3,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: "bg-gray-200",
  },
  {
    id: 4,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: "bg-gray-200",
  },
  {
    id: 5,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: "bg-gray-200",
  },
  {
    id: 6,
    title: "Our SaaS Product Just Launched! Our SaaS Product Just Launched!",
    image: "bg-gray-200",
  },
];

export const HomeProducts = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* ============================================================
          1. HEADER SECTION (Frame 391)
          Gồm: Title, Description, Button
          Gap: 40px
      ============================================================ */}
      <div className="flex flex-col items-center text-center mb-[100px]">
        {" "}
        {/* Gap 100px xuống phần Grid */}
        {/* Title & Subtitle Wrapper (Frame 390) */}
        <div className="flex flex-col items-center gap-[8px] mb-[40px]">
          <h2
            className="font-inter font-normal text-[#000000]"
            style={{
              fontSize: "56px",
              lineHeight: "115px",
              letterSpacing: "-5px", // Theo thông số Figma (khá sát nhau)
            }}
          >
            Danh mục sản phẩm
          </h2>

          <p
            className="font-inter font-normal text-center"
            style={{
              fontSize: "20px",
              lineHeight: "31px",
              color: "rgba(0, 0, 0, 0.65)",
              maxWidth: "683px",
            }}
          >
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </p>
        </div>
        {/* Button: Xem tất cả (Frame 71) */}
        <button
          className="flex items-center justify-center bg-[#FF0000] rounded-[20px] transition-transform hover:scale-105"
          style={{
            width: "188px",
            height: "53px",
            boxShadow: "0px 0px 14px #FF0000",
          }}
        >
          <span className="font-inter font-bold text-[20px] text-[#F5F5F5]">
            Xem tất cả
          </span>
        </button>
      </div>

      {/* ============================================================
          2. PRODUCT GRID (Frame 12650)
          Width: 1260px
          Grid: 3 Cột (Gap 60px) x 2 Hàng (Gap 50px)
      ============================================================ */}
      <div
        className="grid grid-cols-3"
        style={{
          width: "1260px",
          columnGap: "60px",
          rowGap: "50px",
        }}
      >
        {PRODUCTS.map((product, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer group"
            style={{ width: "380px" }}
          >
            {/* THUMBNAIL IMAGE */}
            <div
              className="w-full bg-[#F2F2F2] rounded-[4px] overflow-hidden relative mb-[24px]"
              style={{ height: "268px" }}
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-gray-400 font-medium">Product Image</span>
              </div>
            </div>

            {/* PRODUCT TITLE */}
            <h3
              className="font-inter font-medium text-[#000000] text-left line-clamp-2"
              style={{
                fontSize: "24px",
                lineHeight: "29px",
                letterSpacing: "-0.04em",
              }}
            >
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
