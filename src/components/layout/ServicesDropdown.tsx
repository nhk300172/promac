// src/components/layout/ServicesDropdown.tsx
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

// --- IMPORT HÌNH ẢNH ---
// Lưu ý: Kiểm tra chính xác tên file của bạn là .jpg hay .png
import promacQrImage from "../../assets/qr.jpg";
// --- DỮ LIỆU MENU CHUẨN FIGMA ---
type ServiceItem = {
  label: string;
  path: string;
  highlight?: boolean;
};

type Column = {
  title: string;
  items: ServiceItem[];
};

const COLUMNS: Column[] = [
  {
    title: "DỊCH VỤ CỐT LÕI",
    items: [
      { label: "In hộp cứng cao cấp", path: "/in-hop-cung" }, // Red
      { label: "In Voucher", path: "/in-voucher" },
      { label: "In ấn phẩm marketing", path: "/in-an-pham" },
      { label: "In tem nhãn decal", path: "/in-tem-nhan" },
    ],
  },
  {
    title: "CÁC DỊCH VỤ KHÁC",
    items: [
      { label: "In thẻ cào biến đổi", path: "/the-cao-bien-doi" },
      { label: "In thẻ cào kích hoạt dịch vụ", path: "/the-cao-kich-hoat" },
      { label: "In thẻ cào trúng thưởng", path: "/the-cao-trung-thuong" },
      { label: "In thẻ cào ráp chữ", path: "/the-cao-rap-chu" },
    ],
  },
  {
    title: "SẢN PHẨM",
    items: [{ label: "Danh mục sản phẩm", path: "/san-pham" }],
  },
  {
    title: "CHÍNH SÁCH",
    items: [
      { label: "Điều khoản dịch vụ", path: "/dieu-khoan" },
      { label: "Bảo mật thông tin", path: "/bao-mat" },
      { label: "Vận chuyển & Giao nhận", path: "/van-chuyen" },
      { label: "Đổi trả hàng hóa", path: "/doi-tra" },
      { label: "Quy trình làm việc", path: "/quy-trinh" },
    ],
  },
];

export const ServicesDropdown = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          {/* BUTTON TRIGGER */}
          <PopoverButton
            className={cn(
              "flex items-center justify-center gap-[5px] outline-none transition-colors duration-200",
              "font-inter font-bold text-[18px] leading-[100%]",
              open ? "text-[#FF0000]" : "text-[#000000] hover:text-[#FF0000]"
            )}
          >
            <span className="block pt-[2px]">DỊCH VỤ & SẢN PHẨM</span>
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <ChevronDown
                size={20}
                color={open ? "#FF0000" : "currentColor"}
                strokeWidth={2}
                className={cn(
                  "transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </div>
          </PopoverButton>

          {/* DROPDOWN PANEL */}
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
                // Positioning: Dựa trên tính toán khoảng cách từ Nav Item đến mép trái Header
                // Header Padding Left (93px) + Nav Margin Left (131px) + Width Item 1 (~120px) + Gap (40px) = ~384px
                // Để an toàn, ta dùng con số ước lượng và điều chỉnh (shift left)
                top: "62px", // Cách chữ một đoạn
                left: "-370px", // Shift trái để mép trái Dropdown trùng với mép trái Header Container
                width: "1434px", // Chuẩn theo Figma Frame 12674
                height: "280px", // Chuẩn theo Figma Frame 12674
                borderTop: "1px solid #E3E7EF", // Divider màu xám nhạt
                boxShadow: "0px 10px 20px rgba(0,0,0,0.05)", // Bóng đổ nhẹ cho nổi
                padding: "30px 30px", // Padding theo thiết kế (Top/Bottom ~30, Left/Right 30)
              }}
            >
              <div className="flex w-full h-full items-start justify-between">
                {/* --- PHẦN TEXT LINKS (4 CỘT) --- */}
                <div className="flex gap-[40px]">
                  {" "}
                  {/* Gap giữa các cột */}
                  {COLUMNS.map((col, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[256px] gap-[20px]"
                    >
                      {/* Header Cột */}
                      <span
                        className="font-inter font-semibold text-[12px] text-[#97A3B7] uppercase tracking-[0.5px]"
                        style={{ lineHeight: "150%" }}
                      >
                        {col.title}
                      </span>

                      {/* Items Cột */}
                      <div className="flex flex-col gap-[16px]">
                        {col.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className={cn(
                              "font-inter font-semibold text-[16px] leading-[150%] transition-colors text-left",
                              item.highlight
                                ? "text-[#FF0000]" // Màu đỏ cho mục Highlight
                                : "text-[#111B29] hover:text-[#FF0000]" // Màu đen xám chuẩn Figma
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* --- PHẦN HÌNH ẢNH BÊN PHẢI (Rectangle 378) --- */}
                <div
                  className="relative flex flex-col items-center justify-center"
                  style={{
                    width: "255px", // Chiều rộng chuẩn Figma Frame 12674 -> Rectangle 378
                    height: "233px", // Chiều cao chuẩn Figma
                    marginTop: "-10px", // Căn chỉnh vị trí
                  }}
                >
                  <img
                    src={promacQrImage}
                    alt="PROMAC Promotion QR Code"
                    className="w-full h-full object-contain" // Đảm bảo ảnh hiển thị trọn vẹn
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
