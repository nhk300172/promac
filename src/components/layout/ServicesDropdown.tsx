// src/components/layout/ServicesDropdown.tsx
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import promacQrImage from "../../assets/qr.jpg";

type ServiceItem = {
  label: string;
  path: string;
  highlight?: boolean;
};

type Column = {
  title: string;
  items: ServiceItem[];
};

// --- DỮ LIỆU MENU ---
const COLUMNS: Column[] = [
  // Index 0
  {
    title: "DỊCH VỤ CỐT LÕI",
    items: [
      { label: "In hộp cứng cao cấp", path: "/dich-vu-cot-loi/in-hop-cung" },
      { label: "In Voucher", path: "/dich-vu-cot-loi/in-voucher" },
      { label: "In ấn phẩm marketing", path: "/dich-vu-cot-loi/in-an-pham" },
      { label: "In tem nhãn decal", path: "/dich-vu-cot-loi/in-tem-nhan" },
    ],
  },
  // Index 1
  {
    title: "CÁC DỊCH VỤ KHÁC",
    items: [
      {
        label: "In thẻ cào biến đổi",
        path: "/dich-vu-khac/in-the-cao-bien-doi",
      },
      {
        label: "In thẻ cào kích hoạt dịch vụ",
        path: "/dich-vu-khac/in-the-cao-kich-hoat",
      },
      {
        label: "In thẻ cào trúng thưởng",
        path: "/dich-vu-khac/in-the-cao-trung-thuong",
      },
      { label: "In thẻ cào ráp chữ", path: "/dich-vu-khac/in-the-cao-rap-chu" },
    ],
  },
  // Index 2
  {
    title: "SẢN PHẨM",
    items: [{ label: "Danh mục sản phẩm", path: "/san-pham" }],
  },
  // Index 3 - CHÍNH SÁCH (Sửa path cho đúng với App.tsx)
  {
    title: "CHÍNH SÁCH",
    items: [
      { label: "Điều khoản dịch vụ", path: "/chinh-sach/dieu-khoan" },
      { label: "Bảo mật thông tin", path: "/chinh-sach/bao-mat" },
      { label: "Vận chuyển & Giao nhận", path: "/chinh-sach/van-chuyen" },
      { label: "Đổi trả hàng hóa", path: "/chinh-sach/doi-tra" },
      { label: "Quy trình làm việc", path: "/chinh-sach/quy-trinh" },
    ],
  },
];

interface ServicesDropdownProps {
  label: string;
}

export const ServicesDropdown = ({ label }: ServicesDropdownProps) => {
  const location = useLocation();

  const displayColumns =
    label === "CHÍNH SÁCH"
      ? [COLUMNS[3]]
      : [COLUMNS[0], COLUMNS[1], COLUMNS[2]];

  const isActive = displayColumns.some((col) =>
    col.items.some((item) => {
      if (item.path === location.pathname) return true;
      if (location.pathname.startsWith(`${item.path}/`)) return true;
      return false;
    })
  );

  return (
    <Popover className="">
      {({ open }) => (
        <>
          <PopoverButton
            className={cn(
              "flex items-center justify-center gap-[5px] outline-none transition-colors duration-200",
              "font-inter font-bold text-[18px] leading-[100%]",
              open || isActive
                ? "text-[#FF0000] underline decoration-solid"
                : "text-[#000000] hover:text-[#FF0000]"
            )}
          >
            <span className="block pt-[2px] uppercase">{label}</span>
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <ChevronDown
                size={20}
                color={open || isActive ? "#FF0000" : "currentColor"}
                strokeWidth={2}
                className={cn(
                  "transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </div>
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              className="absolute z-50 bg-white"
              style={{
                top: "102px",
                left: "0px",
                width: "1434px",
                height: "280px",
                borderTop: "1px solid #E3E7EF",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
                padding: "30px 30px",
                boxSizing: "border-box",
              }}
            >
              <div
                className="flex w-full h-full items-start gap-[60px]"
                style={{
                  justifyContent: label === "CHÍNH SÁCH" ? "center" : "center",
                }}
              >
                {/* RENDER CÁC CỘT */}
                <div className="flex gap-[40px]">
                  {displayColumns.map((col, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[256px] gap-[20px]"
                    >
                      <span
                        className="font-inter font-semibold text-[12px] text-[#97A3B7] uppercase tracking-[0.5px]"
                        style={{ lineHeight: "150%" }}
                      >
                        {col.title}
                      </span>
                      <div className="flex flex-col gap-[16px]">
                        {col.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className={cn(
                              "font-inter font-semibold text-[16px] leading-[150%] transition-colors text-left",
                              location.pathname === item.path
                                ? "text-[#FF0000]"
                                : "text-[#111B29] hover:text-[#FF0000]"
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ẢNH QR (Luôn hiện bên phải để cân đối layout) */}
                <div
                  className="relative flex flex-col items-center justify-center"
                  style={{
                    width: "255px",
                    height: "233px",
                    marginTop: "-10px",
                  }}
                >
                  <img
                    src={promacQrImage}
                    alt="PROMAC QR"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
