import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { label: "TRANG CHỦ", isActive: true },
  { label: "DỊCH VỤ & SẢN PHẨM", hasArrow: true },
  { label: "CHÍNH SÁCH", hasArrow: true },
  { label: "DỰ ÁN", hasArrow: false },
  { label: "VỀ PROMAC", hasArrow: false },
  { label: "TIN TỨC", hasArrow: false },
  { label: "LIÊN HỆ", hasArrow: false },
];

export const Header = () => {
  return (
    <div className="relative w-full">
      <header
        className="relative flex items-center box-border z-50"
        style={{
          width: "1434px",
          height: "102px",
          backgroundColor: "#FFFFFF",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "93px",
          paddingRight: "93px",
          boxShadow: "0px 4px 12px 0px #00000040", // Hex shadow

          // CANH VỊ TRÍ TRONG KHUNG 1440PX:
          marginLeft: "3px", // Left: 3px
        }}
      >
        <nav
          className="flex items-center"
          style={{
            marginLeft: "131px",
            gap: "40px",
          }}
        >
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href="#"
              className={cn(
                // --- CẬP NHẬT STYLE CHỮ CHUẨN FIGMA ---
                "flex items-center justify-center", // align-items: center; text-align: center;
                "font-inter font-bold", // font-family: Inter; font-weight: 700;
                "text-[18px]", // font-size: 18px;
                "leading-[100%]", // line-height: 100%; (Quan trọng)
                "tracking-[0px]", // letter-spacing: 0%;

                "transition-colors duration-200",

                item.isActive
                  ? "text-[#FF0000] underline decoration-solid"
                  : "text-[#000000] hover:text-[#FF0000] no-underline"
              )}
              style={{ gap: "5px" }}
            >
              {/* Text */}
              <span className="block pt-[2px]">
                {" "}
                {/* Hack nhỏ để font Inter căn giữa quang học tốt hơn nếu cần */}
                {item.label}
              </span>

              {item.hasArrow && (
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <ChevronDown
                    size={20}
                    color={item.isActive ? "#FF0000" : "#000000"}
                    strokeWidth={2} // Độ dày nét icon
                  />
                </div>
              )}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};
