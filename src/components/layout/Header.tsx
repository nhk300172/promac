// src/components/layout/Header.tsx
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";
import { ServicesDropdown } from "./ServicesDropdown";

// Định nghĩa lại Type cho items
type NavItemType = {
  label: string;
  path: string;
  hasArrow?: boolean;
  type?: "link" | "dropdown"; // Thêm type để phân biệt
};

const NAV_ITEMS: NavItemType[] = [
  { label: "TRANG CHỦ", path: "/", type: "link" },
  // Chuyển mục này thành dropdown
  { label: "DỊCH VỤ & SẢN PHẨM", path: "#", type: "dropdown" },
  { label: "CHÍNH SÁCH", path: "/chinh-sach", hasArrow: true, type: "link" },
  { label: "DỰ ÁN", path: "/du-an", type: "link" },
  { label: "VỀ PROMAC", path: "/gioi-thieu", type: "link" },
  { label: "TIN TỨC", path: "/tin-tuc", type: "link" },
  { label: "LIÊN HỆ", path: "/lien-he", type: "link" },
];

export const Header = () => {
  return (
    // Thêm flex justify-center để đảm bảo Header luôn ở giữa màn hình lớn
    <div className="relative w-full flex justify-center z-50">
      <header
        className="relative flex items-center box-border"
        style={{
          width: "1434px",
          height: "102px",
          backgroundColor: "#FFFFFF",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "93px",
          paddingRight: "93px",
          boxShadow: "0px 4px 12px 0px #00000040",
          // marginLeft: "3px", // Tạm bỏ để căn giữa tự nhiên
        }}
      >
        <nav
          className="flex items-center"
          style={{
            marginLeft: "131px",
            gap: "40px",
          }}
        >
          {NAV_ITEMS.map((item, index) => {
            // 1. Nếu là Dropdown -> Render Component ServicesDropdown
            if (item.type === "dropdown") {
              return <ServicesDropdown key={index} />;
            }

            // 2. Nếu là Link thường -> Render NavLink
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center",
                    "font-inter font-bold",
                    "text-[18px]",
                    "leading-[100%]",
                    "tracking-[0px]",
                    "transition-colors duration-200",
                    // Logic Active State
                    isActive
                      ? "text-[#FF0000] underline decoration-solid"
                      : "text-[#000000] hover:text-[#FF0000] no-underline"
                  )
                }
                style={{ gap: "5px" }}
              >
                {({ isActive }) => (
                  <>
                    <span className="block pt-[2px]">{item.label}</span>

                    {item.hasArrow && (
                      <div className="w-[20px] h-[20px] flex items-center justify-center">
                        <ChevronDown
                          size={20}
                          color={isActive ? "#FF0000" : "#000000"}
                          strokeWidth={2}
                        />
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </header>
    </div>
  );
};
