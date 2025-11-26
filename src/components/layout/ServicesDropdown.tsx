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

// Import ảnh (Đảm bảo đường dẫn đúng)
import promacQrImage from "../../assets/qr.jpg";

// --- 1. ĐỊNH NGHĨA TYPE (Để fix lỗi 'any') ---
type ServiceItem = {
  label: string;
  path: string;
  highlight?: boolean;
};

type Column = {
  title: string;
  items: ServiceItem[];
};

// --- 2. KHAI BÁO DỮ LIỆU (Để fix lỗi 'Cannot find name COLUMNS') ---
const COLUMNS: Column[] = [
  {
    title: "DỊCH VỤ CỐT LÕI",
    items: [
      { label: "In hộp cứng cao cấp", path: "/in-hop-cung" },
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
      { label: "Điều khoản dịch vụ", path: "/chinh-sach/dieu-khoan" },
      { label: "Bảo mật thông tin", path: "/chinh-sach/bao-mat" },
      { label: "Vận chuyển & Giao nhận", path: "/chinh-sach/van-chuyen" },
      { label: "Đổi trả hàng hóa", path: "/chinh-sach/doi-tra" },
      { label: "Quy trình làm việc", path: "/chinh-sach/quy-trinh" },
    ],
  },
];

export const ServicesDropdown = () => {
  const location = useLocation();

  // Logic kiểm tra: Nếu URL hiện tại thuộc nhóm Dịch vụ thì Active
  const isActive = COLUMNS.some((col) =>
    col.items.some((item) => {
      // 1. Trùng khớp hoàn toàn (VD: đang ở trang danh mục /san-pham)
      if (item.path === location.pathname) return true;

      // 2. Là trang con (VD: đang ở /san-pham/chi-tiet-san-pham-a)
      // Logic: Đường dẫn hiện tại bắt đầu bằng "path cha" + dấu "/"
      // Ví dụ: "/san-pham/..." bắt đầu bằng "/san-pham/"
      if (location.pathname.startsWith(`${item.path}/`)) return true;

      return false;
    })
  );

  return (
    <Popover>
      {({ open }) => (
        <>
          {/* BUTTON TRIGGER */}
          <PopoverButton
            className={cn(
              "flex items-center justify-center gap-[5px] outline-none transition-colors duration-200",
              "font-inter font-bold text-[18px] leading-[100%]",
              // Nếu đang mở menu (open) HOẶC đang ở trang con (isActive) -> Tô Đỏ
              open || isActive
                ? "text-[#FF0000] underline decoration-solid"
                : "text-[#000000] hover:text-[#FF0000]"
            )}
          >
            <span className="block pt-[2px]">DỊCH VỤ & SẢN PHẨM</span>
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
            {/* 2. CHỈNH SỬA VỊ TRÍ PANEL */}
            <PopoverPanel
              className="absolute z-50 bg-white"
              style={{
                // Header cao 102px -> Top = 102px để nằm ngay dưới đáy header
                top: "102px",
                // Left = 0 để bắt đầu từ mép trái của Header
                left: "0px",
                // Width = 100% để rộng bằng đúng Header (1434px)
                width: "100%",
                height: "280px",
                borderTop: "1px solid #E3E7EF",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
                padding: "30px 30px",
                // Quan trọng: Để đảm bảo nó đè lên các thành phần khác
                boxSizing: "border-box",
              }}
            >
              <div className="flex w-full h-full items-start justify-between">
                {/* --- TEXT LINKS --- */}
                <div className="flex gap-[40px]">
                  {COLUMNS.map((col, index) => (
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

                {/* --- QR IMAGE --- */}
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
