import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";
import { ServicesDropdown } from "./ServicesDropdown";

// Import Logo & QR Code
import logo from "../../assets/logo.png";
import { qr } from "../../assets";

// --- DỮ LIỆU MENU CON ---
type SubMenuItem = { label: string; path: string };
type SubMenuGroup = {
  groupTitle?: string;
  items: SubMenuItem[];
  bottomImage?: string; // Trường chứa ảnh QR
};

const MOBILE_SUB_MENUS: Record<string, SubMenuGroup[]> = {
  "DỊCH VỤ & SẢN PHẨM": [
    {
      groupTitle: "DỊCH VỤ CỐT LÕI",
      items: [
        { label: "In hộp cứng cao cấp", path: "/dich-vu-cot-loi/in-hop-cung" },
        { label: "In Voucher", path: "/dich-vu-cot-loi/in-voucher" },
        { label: "In ấn phẩm marketing", path: "/dich-vu-cot-loi/in-an-pham" },
      ],
    },
    {
      groupTitle: "DỊCH VỤ KHÁC",
      items: [
        { label: "In tem nhãn decal", path: "/dich-vu-cot-loi/in-tem-nhan" },
        {
          label: "In thẻ cào biến đổi",
          path: "/dich-vu-khac/in-the-cao-bien-doi",
        },
        {
          label: "In thẻ cào kích hoạt",
          path: "/dich-vu-khac/in-the-cao-kich-hoat",
        },
        {
          label: "In thẻ cào trúng thưởng",
          path: "/dich-vu-khac/in-the-cao-trung-thuong",
        },
        {
          label: "In thẻ cào ráp chữ",
          path: "/dich-vu-khac/in-the-cao-rap-chu",
        },
      ],
    },
    {
      groupTitle: "SẢN PHẨM",
      items: [{ label: "Danh mục sản phẩm", path: "/san-pham" }],
      bottomImage: qr,
    },
  ],
  "CHÍNH SÁCH": [
    {
      // Nhóm này không có tiêu đề, nhưng có QR Code ở cuối
      items: [
        { label: "Điều khoản dịch vụ", path: "/chinh-sach/dieu-khoan" },
        { label: "Bảo mật thông tin", path: "/chinh-sach/bao-mat" },
        { label: "Vận chuyển & Giao nhận", path: "/chinh-sach/van-chuyen" },
        { label: "Đổi trả hàng hóa", path: "/chinh-sach/doi-tra" },
        { label: "Quy trình làm việc", path: "/chinh-sach/quy-trinh" },
      ],
      bottomImage: qr,
    },
  ],
};

const NAV_ITEMS = [
  { label: "TRANG CHỦ", path: "/", type: "link" },
  { label: "DỊCH VỤ & SẢN PHẨM", path: "#", type: "dropdown" },
  { label: "CHÍNH SÁCH", path: "#", hasArrow: true, type: "dropdown" },
  { label: "DỰ ÁN", path: "/du-an", type: "link" },
  { label: "VỀ PROMAC", path: "/gioi-thieu", type: "link" },
  { label: "TIN TỨC", path: "/tin-tuc", type: "link" },
  { label: "LIÊN HỆ", path: "/lien-he", type: "link" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<string>("main");

  const openSubMenu = (label: string) => {
    setCurrentView(label);
  };

  const backToMainMenu = () => {
    setCurrentView("main");
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setCurrentView("main");
  };

  return (
    <div className="relative w-full flex justify-center z-50 bg-white">
      {/* 1. MOBILE HEADER (Có Logo) */}
      <header className="lg:hidden relative w-full h-[72px] bg-white border-b border-[#E3E7EF]">
        <div
          className="absolute overflow-hidden"
          style={{
            width: "66px",
            height: "18px",
            left: "22px",
            top: "27px",
            zIndex: 10,
          }}
        >
          <NavLink to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Promac"
              className="w-full h-full object-contain"
            />
          </NavLink>
        </div>
        <button
          className="absolute flex items-center justify-center text-[#111B29]"
          style={{
            width: "24px",
            height: "24px",
            top: "24px",
            right: "24px",
            zIndex: 10,
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {mobileMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </header>

      {/* 2. DESKTOP HEADER (KHÔNG CÓ LOGO) */}
      <header className="hidden lg:flex items-center justify-between w-full max-w-[1434px] h-[102px] px-[93px] shadow-[0px_4px_12px_0px_#00000040]">
        <nav
          className="flex items-center"
          style={{ marginLeft: "70px", gap: "40px" }}
        >
          {NAV_ITEMS.map((item, index) => {
            if (item.type === "dropdown")
              return <ServicesDropdown key={index} label={item.label} />;
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center font-inter font-bold text-[18px] leading-[100%] transition-colors duration-200",
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

      {/* 3. MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white z-40 lg:hidden overflow-hidden border-t border-[#E3E7EF]">
          {/* --- VIEW 1: MAIN MENU --- */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto pb-[40px]",
              currentView === "main" ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {NAV_ITEMS.map((item, index) => {
              if (item.type === "dropdown") {
                return (
                  <button
                    key={index}
                    onClick={() => openSubMenu(item.label)}
                    className="flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF]"
                    style={{ padding: "13px 24px", height: "56px" }}
                  >
                    <span className="font-inter font-semibold text-[18px] text-[#111B29]">
                      {item.label}
                    </span>
                    <ChevronRight
                      size={20}
                      className="text-[#111B29]"
                      strokeWidth={2}
                    />
                  </button>
                );
              }
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF]",
                      isActive ? "text-[#FF0000]" : "text-[#111B29]"
                    )
                  }
                  style={{ padding: "13px 24px", height: "56px" }}
                >
                  <span className="font-inter font-semibold text-[18px]">
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
            <div className="mt-[40px] px-[24px]">
              <NavLink to="/bao-gia" onClick={closeMenu}>
                <button className="w-full h-[56px] bg-[#FF0000] rounded-[8px] flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                  <span className="font-inter font-bold text-[18px] text-white">
                    Yêu cầu Báo giá
                  </span>
                </button>
              </NavLink>
            </div>
          </div>

          {/* --- VIEW 2: SUB MENU --- */}
          {Object.keys(MOBILE_SUB_MENUS).map((menuLabel) => (
            <div
              key={menuLabel}
              className={cn(
                "absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto pb-[40px]",
                currentView === menuLabel ? "translate-x-0" : "translate-x-full"
              )}
            >
              {/* HEADER SUBMENU */}
              <div
                className="flex items-center gap-[8px] w-full bg-white border-b border-[#E3E7EF]"
                style={{ padding: "13px 24px", height: "56px" }}
              >
                <button
                  onClick={backToMainMenu}
                  className="flex items-center justify-center w-[20px] h-[20px]"
                  aria-label="Quay lại"
                >
                  <ChevronLeft
                    size={20}
                    className="text-[#111B29]"
                    strokeWidth={2}
                  />
                </button>
                <span className="font-inter font-semibold text-[18px] text-[#111B29] leading-[165%]">
                  {menuLabel}
                </span>
              </div>

              {/* LIST ITEMS */}
              <div className="flex flex-col w-full pt-[16px]">
                {MOBILE_SUB_MENUS[menuLabel].map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col mb-[16px]">
                    {/* Group Title */}
                    {group.groupTitle && (
                      <div className="px-[24px] mb-[4px] font-inter font-semibold text-[12px] text-[#97A3B7] uppercase tracking-[0.5px] leading-[150%]">
                        {group.groupTitle}
                      </div>
                    )}

                    {/* Items */}
                    {group.items.map((sub, sIdx) => (
                      <NavLink
                        key={sIdx}
                        to={sub.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center py-[9px] px-[24px] text-[16px] font-semibold transition-colors leading-[150%]",
                            isActive ? "text-[#FF0000]" : "text-[#111B29]"
                          )
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}

                    {/* QR CODE IMAGE (Render nếu có) */}
                    {group.bottomImage && (
                      <div
                        className="mt-[16px] ml-[24px]"
                        style={{
                          width: "138px",
                          height: "126px",
                          backgroundImage: `url(${group.bottomImage})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
