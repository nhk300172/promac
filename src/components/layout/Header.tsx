// // src/components/layout/Header.tsx
// import { useState } from "react";
// import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
// import { cn } from "../../lib/utils";
// import { NavLink } from "react-router-dom";
// import { ServicesDropdown } from "./ServicesDropdown";

// // Import Logo & QR Code
// import logo from "../../assets/logo.png";
// import { qr } from "../../assets";

// // --- DỮ LIỆU MENU CON ---
// type SubMenuItem = { label: string; path: string };
// type SubMenuGroup = {
//   groupTitle?: string;
//   items: SubMenuItem[];
//   bottomImage?: string; // Trường chứa ảnh QR
// };

// const MOBILE_SUB_MENUS: Record<string, SubMenuGroup[]> = {
//   "Dịch vụ & Sản phẩm": [
//     {
//       groupTitle: "DỊCH VỤ CỐT LÕI",
//       items: [
//         { label: "In hộp cứng cao cấp", path: "/dich-vu-cot-loi/in-hop-cung" },
//         { label: "In Voucher", path: "/dich-vu-cot-loi/in-voucher" },
//         { label: "In ấn phẩm marketing", path: "/dich-vu-cot-loi/in-an-pham" },
//       ],
//     },
//     {
//       groupTitle: "DỊCH VỤ KHÁC",
//       items: [
//         { label: "In tem nhãn decal", path: "/dich-vu-cot-loi/in-tem-nhan" },
//         {
//           label: "In thẻ cào biến đổi",
//           path: "/dich-vu-khac/in-the-cao-bien-doi",
//         },
//         {
//           label: "In thẻ cào kích hoạt",
//           path: "/dich-vu-khac/in-the-cao-kich-hoat",
//         },
//         {
//           label: "In thẻ cào trúng thưởng",
//           path: "/dich-vu-khac/in-the-cao-trung-thuong",
//         },
//         {
//           label: "In thẻ cào ráp chữ",
//           path: "/dich-vu-khac/in-the-cao-rap-chu",
//         },
//       ],
//     },
//     {
//       groupTitle: "SẢN PHẨM",
//       items: [{ label: "Danh mục sản phẩm", path: "/san-pham" }],
//       bottomImage: qr,
//     },
//   ],
//   "Chính sách": [
//     {
//       // Nhóm này không có tiêu đề, nhưng có QR Code ở cuối
//       items: [
//         { label: "Điều khoản dịch vụ", path: "/chinh-sach/dieu-khoan" },
//         { label: "Bảo mật thông tin", path: "/chinh-sach/bao-mat" },
//         { label: "Vận chuyển & Giao nhận", path: "/chinh-sach/van-chuyen" },
//         { label: "Đổi trả hàng hóa", path: "/chinh-sach/doi-tra" },
//         { label: "Quy trình làm việc", path: "/chinh-sach/quy-trinh" },
//       ],
//       bottomImage: qr,
//     },
//   ],
// };

// const NAV_ITEMS = [
//   { label: "Trang chủ", path: "/", type: "link" },
//   { label: "Dịch vụ & Sản phẩm", path: "#", type: "dropdown" },
//   { label: "Chính sách", path: "#", hasArrow: true, type: "dropdown" },
//   { label: "Dự án", path: "/du-an", type: "link" },
//   { label: "Về PROMAC", path: "/gioi-thieu", type: "link" },
//   { label: "Tin Tức", path: "/tin-tuc", type: "link" },
//   { label: "Liên Hệ", path: "/lien-he", type: "link" },
// ];

// export const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentView, setCurrentView] = useState<string>("main");

//   const openSubMenu = (label: string) => {
//     setCurrentView(label);
//   };

//   const backToMainMenu = () => {
//     setCurrentView("main");
//   };

//   const closeMenu = () => {
//     setMobileMenuOpen(false);
//     setCurrentView("main");
//   };

//   return (
//     <div className="relative w-full flex justify-center z-50 bg-white shadow-sm">
//       {/* 1. MOBILE & TABLET HEADER */}
//       {/* lg:hidden -> Ẩn trên Desktop */}
//       <header className="lg:hidden relative w-full h-[72px] md:h-[80px] bg-white border-b border-[#FF0000] flex items-center justify-between px-[20px] md:px-[32px]">
//         {/* Logo Wrapper */}
//         <div className="flex-shrink-0">
//           <NavLink to="/" onClick={closeMenu}>
//             <img
//               src={logo}
//               alt="Promac"
//               // Responsive size cho logo: Mobile nhỏ, Tablet to hơn chút
//               className="w-[100px] h-auto md:w-[120px] object-contain"
//             />
//           </NavLink>
//         </div>

//         {/* Menu Button */}
//         <button
//           className="flex items-center justify-center text-[#111B29] p-2 hover:bg-gray-100 rounded-md transition-colors"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
//         >
//           {mobileMenuOpen ? (
//             <X size={28} strokeWidth={2} />
//           ) : (
//             <Menu size={28} strokeWidth={2} />
//           )}
//         </button>
//       </header>

//       {/* 2. DESKTOP HEADER */}
//       {/* hidden lg:flex -> Chỉ hiện trên Desktop */}
//       {/* Thêm max-w-[1440px] để giới hạn độ rộng trên màn hình siêu lớn */}
//       <header className="hidden lg:flex items-center justify-between w-full max-w-[1440px] h-[102px] px-[40px] xl:px-[93px]">
//         {/* Logo Desktop (Nếu thiết kế yêu cầu không có logo ở header desktop thì giữ nguyên logic cũ là ẩn, nhưng thường nên có) */}
//         {/* Nếu muốn hiện logo ở Desktop thì uncomment đoạn dưới: */}
//         {/* <div className="w-[150px]">
//              <NavLink to="/"><img src={logo} alt="Promac" className="w-full" /></NavLink>
//            </div>
//         */}

//         {/* Navigation */}
//         <nav
//           className="flex items-center w-full justify-center" // Căn giữa menu
//           style={{ gap: "30px" }} // Giảm gap mặc định để an toàn
//         >
//           {/* Wrapper flex với gap responsive: lg:gap-6 xl:gap-10 */}
//           <div className="flex items-center gap-6 xl:gap-10">
//             {NAV_ITEMS.map((item, index) => {
//               if (item.type === "dropdown")
//                 return <ServicesDropdown key={index} label={item.label} />;
//               return (
//                 <NavLink
//                   key={index}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     cn(
//                       "flex items-center justify-center font-inter font-bold text-[16px] xl:text-[18px] leading-[100%] transition-colors duration-200 whitespace-nowrap", // text size responsive
//                       isActive
//                         ? "text-[#FF0000] underline decoration-solid decoration-2 underline-offset-4"
//                         : "text-[#000000] hover:text-[#FF0000] no-underline"
//                     )
//                   }
//                   style={{ gap: "5px" }}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       <span className="block pt-[2px]">{item.label}</span>
//                       {item.hasArrow && (
//                         <div className="w-[20px] h-[20px] flex items-center justify-center">
//                           <ChevronDown
//                             size={18} // Giảm size icon chút cho tinh tế
//                             color={isActive ? "#FF0000" : "#000000"}
//                             strokeWidth={2}
//                           />
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               );
//             })}
//           </div>
//         </nav>
//       </header>

//       {/* 3. MOBILE & TABLET MENU OVERLAY */}
//       {mobileMenuOpen && (
//         <div className="fixed top-[72px] md:top-[80px] left-0 w-full h-[calc(100vh-72px)] md:h-[calc(100vh-80px)] bg-white z-40 lg:hidden overflow-hidden border-t border-[#E3E7EF]">
//           {/* --- VIEW 1: MAIN MENU --- */}
//           <div
//             className={cn(
//               "absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto pb-[40px]",
//               currentView === "main" ? "translate-x-0" : "-translate-x-full"
//             )}
//           >
//             {NAV_ITEMS.map((item, index) => {
//               // Item Dropdown (có mũi tên)
//               if (item.type === "dropdown") {
//                 return (
//                   <button
//                     key={index}
//                     onClick={() => openSubMenu(item.label)}
//                     className="flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]"
//                   >
//                     <span className="font-inter font-semibold text-[16px] md:text-[18px] text-[#111B29]">
//                       {item.label}
//                     </span>
//                     <ChevronRight size={20} className="text-[#9CA3AF]" />
//                   </button>
//                 );
//               }
//               // Item Link thường
//               return (
//                 <NavLink
//                   key={index}
//                   to={item.path}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     cn(
//                       "flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]",
//                       isActive
//                         ? "text-[#FF0000] bg-red-50/50"
//                         : "text-[#111B29]"
//                     )
//                   }
//                 >
//                   <span className="font-inter font-semibold text-[16px] md:text-[18px]">
//                     {item.label}
//                   </span>
//                 </NavLink>
//               );
//             })}

//             {/* Button CTA trong Menu Mobile */}
//             <div className="mt-[30px] px-[24px] md:px-[40px]">
//               <NavLink to="/bao-gia" onClick={closeMenu}>
//                 <button className="w-full h-[50px] md:h-[56px] bg-[#FF0000] rounded-[8px] flex items-center justify-center shadow-md active:scale-95 transition-transform hover:bg-red-700">
//                   <span className="font-inter font-bold text-[16px] md:text-[18px] text-white">
//                     Yêu cầu Báo giá
//                   </span>
//                 </button>
//               </NavLink>
//             </div>
//           </div>

//           {/* --- VIEW 2: SUB MENU --- */}
//           {Object.keys(MOBILE_SUB_MENUS).map((menuLabel) => (
//             <div
//               key={menuLabel}
//               className={cn(
//                 "absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto pb-[40px]",
//                 currentView === menuLabel ? "translate-x-0" : "translate-x-full"
//               )}
//             >
//               {/* Header Submenu (Nút Back) */}
//               <div className="flex items-center gap-[10px] w-full bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px] sticky top-0 z-10">
//                 <button
//                   onClick={backToMainMenu}
//                   className="flex items-center justify-center p-1 rounded-full hover:bg-gray-200 transition-colors"
//                   aria-label="Quay lại"
//                 >
//                   <ChevronLeft
//                     size={24}
//                     className="text-[#111B29]"
//                     strokeWidth={2}
//                   />
//                 </button>
//                 <span className="font-inter font-bold text-[18px] md:text-[20px] text-[#111B29]">
//                   {menuLabel}
//                 </span>
//               </div>

//               {/* List Items */}
//               <div className="flex flex-col w-full py-[10px]">
//                 {MOBILE_SUB_MENUS[menuLabel].map((group, gIdx) => (
//                   <div key={gIdx} className="flex flex-col mb-[20px]">
//                     {/* Group Title */}
//                     {group.groupTitle && (
//                       <div className="px-[24px] md:px-[40px] mb-[8px] mt-[10px] font-inter font-bold text-[12px] md:text-[14px] text-[#6B7280] uppercase tracking-wider">
//                         {group.groupTitle}
//                       </div>
//                     )}

//                     {/* Items */}
//                     {group.items.map((sub, sIdx) => (
//                       <NavLink
//                         key={sIdx}
//                         to={sub.path}
//                         onClick={closeMenu}
//                         className={({ isActive }) =>
//                           cn(
//                             "flex items-center py-[12px] px-[24px] md:px-[40px] text-[16px] md:text-[18px] font-medium transition-colors hover:bg-gray-50",
//                             isActive
//                               ? "text-[#FF0000] bg-red-50/30"
//                               : "text-[#374151]"
//                           )
//                         }
//                       >
//                         {sub.label}
//                       </NavLink>
//                     ))}

//                     {/* QR CODE */}
//                     {group.bottomImage && (
//                       <div className="mt-[20px] ml-[24px] md:ml-[40px]">
//                         <img
//                           src={group.bottomImage}
//                           alt="QR Code"
//                           className="w-[120px] h-[120px] object-contain border border-gray-200 p-2 rounded-lg"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// src/components/layout/Header.tsx
// import { useState } from "react";
// import {
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   Menu,
//   X,
//   Home,
//   CalendarDays
// } from "lucide-react";
// import { cn } from "../../lib/utils";
// import { NavLink } from "react-router-dom";
// import { ServicesDropdown } from "./ServicesDropdown";

// // Import Logo & QR Code
// import logo from "../../assets/logo.png";
// import { qr } from "../../assets"; // Giả sử biến qr được export từ assets

// // --- DỮ LIỆU MENU CON ---
// type SubMenuItem = { label: string; path: string };
// type SubMenuGroup = {
//   groupTitle?: string;
//   items: SubMenuItem[];
//   bottomImage?: string;
// };

// const MOBILE_SUB_MENUS: Record<string, SubMenuGroup[]> = {
//   "Dịch vụ & Sản phẩm": [
//     {
//       groupTitle: "DỊCH VỤ CỐT LÕI",
//       items: [
//         { label: "In hộp cứng cao cấp", path: "/dich-vu-cot-loi/in-hop-cung" },
//         { label: "In Voucher", path: "/dich-vu-cot-loi/in-voucher" },
//         { label: "In ấn phẩm marketing", path: "/dich-vu-cot-loi/in-an-pham" },
//       ],
//     },
//     {
//       groupTitle: "DỊCH VỤ KHÁC",
//       items: [
//         { label: "In tem nhãn decal", path: "/dich-vu-cot-loi/in-tem-nhan" },
//         { label: "In thẻ cào biến đổi", path: "/dich-vu-khac/in-the-cao-bien-doi" },
//         { label: "In thẻ cào kích hoạt", path: "/dich-vu-khac/in-the-cao-kich-hoat" },
//         { label: "In thẻ cào trúng thưởng", path: "/dich-vu-khac/in-the-cao-trung-thuong" },
//         { label: "In thẻ cào ráp chữ", path: "/dich-vu-khac/in-the-cao-rap-chu" },
//       ],
//     },
//     {
//       groupTitle: "SẢN PHẨM",
//       items: [{ label: "Danh mục sản phẩm", path: "/san-pham" }],
//       bottomImage: qr,
//     },
//   ],
//   "Chính sách": [
//     {
//       items: [
//         { label: "Điều khoản dịch vụ", path: "/chinh-sach/dieu-khoan" },
//         { label: "Bảo mật thông tin", path: "/chinh-sach/bao-mat" },
//         { label: "Vận chuyển & Giao nhận", path: "/chinh-sach/van-chuyen" },
//         { label: "Đổi trả hàng hóa", path: "/chinh-sach/doi-tra" },
//         { label: "Quy trình làm việc", path: "/chinh-sach/quy-trinh" },
//       ],
//       bottomImage: qr,
//     },
//   ],
// };

// const NAV_ITEMS = [
//   { label: "Trang chủ", path: "/", type: "link", icon: <Home size={18} /> }, // Thêm icon Home
//   { label: "Dịch vụ & Sản phẩm", path: "#", type: "dropdown" },
//   { label: "Chính sách", path: "#", hasArrow: true, type: "dropdown" },
//   { label: "Dự án", path: "/du-an", type: "link" },
//   { label: "Về Promac", path: "/gioi-thieu", type: "link" },
//   { label: "Tin Tức", path: "/tin-tuc", type: "link" },
//   { label: "Liên Hệ", path: "/lien-he", type: "link" },
// ];

// export const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentView, setCurrentView] = useState<string>("main");

//   const openSubMenu = (label: string) => {
//     setCurrentView(label);
//   };

//   const backToMainMenu = () => {
//     setCurrentView("main");
//   };

//   const closeMenu = () => {
//     setMobileMenuOpen(false);
//     setCurrentView("main");
//   };

//   return (
//     <div className="relative w-full flex justify-center z-50 bg-white shadow-sm font-inter">
//       {/* 1. MOBILE & TABLET HEADER */}
//       <header className="lg:hidden relative w-full h-[72px] md:h-[80px] bg-white border-b border-[#FF0000] flex items-center justify-between px-[20px] md:px-[32px]">
//         {/* Logo Wrapper Mobile */}
//         <div className="flex-shrink-0 flex items-center gap-2">
//            {/* QR Code nhỏ trên mobile nếu cần */}
//           <img src={qr} alt="QR" className="w-[30px] h-[30px] object-contain" />
//           <NavLink to="/" onClick={closeMenu}>
//             <img
//               src={logo}
//               alt="Promac"
//               className="w-[100px] h-auto md:w-[120px] object-contain"
//             />
//           </NavLink>
//         </div>

//         {/* Menu Button */}
//         <button
//           className="flex items-center justify-center text-[#111B29] p-2 hover:bg-gray-100 rounded-md transition-colors"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
//         >
//           {mobileMenuOpen ? (
//             <X size={28} strokeWidth={2} />
//           ) : (
//             <Menu size={28} strokeWidth={2} />
//           )}
//         </button>
//       </header>

//       {/* 2. DESKTOP HEADER */}
//       {/* Hiển thị trên màn hình lớn */}
//       <header className="hidden lg:flex items-center justify-between w-full max-w-[1440px] h-[110px] px-[20px] xl:px-[40px]">

//         {/* LEFT SECTION: QR + LOGO */}
//         <div className="flex items-center gap-4 flex-shrink-0">
//             {/* QR Code Image */}
//             <div className="flex flex-col items-center justify-center">
//                 <img src={qr} alt="Promac QR" className="w-[100px] h-[100px] object-contain" />
//             </div>
//         </div>

//         {/* RIGHT SECTION: NAVIGATION */}
//         <nav className="flex items-center gap-4 xl:gap-5">

//             {/* NAV ITEMS LOOP */}
//             {NAV_ITEMS.map((item, index) => {
//               if (item.type === "dropdown") {
//                 // Style cho Dropdown trigger để giống NavLink active/inactive
//                 return (
//                     <div key={index} className="group relative">
//                          {/* ServicesDropdown cần được chỉnh sửa bên trong để nhận className hoặc style,
//                              tuy nhiên ở đây ta bọc div để giữ logic map */}
//                          <ServicesDropdown label={item.label} />
//                     </div>
//                 );
//               }

//               return (
//                 <NavLink
//                   key={index}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     cn(
//                       "flex items-center justify-center px-4 py-2 rounded-[30px] font-bold text-[15px] xl:text-[16px] transition-all duration-200 whitespace-nowrap",
//                       isActive
//                         ? "bg-[#FF0000] text-white shadow-md" // Active: Nền đỏ, chữ trắng, bo tròn
//                         : "bg-transparent text-[#111B29] hover:text-[#FF0000] hover:bg-gray-50" // Inactive
//                     )
//                   }
//                 >
//                     {/* Render Icon nếu có (Trang chủ) */}
//                     {item.icon && <span className="mr-1">{item.icon}</span>}

//                     <span className="pt-[1px]">{item.label}</span>

//                     {item.hasArrow && (
//                         <ChevronDown size={16} className="ml-1" strokeWidth={2} />
//                     )}
//                 </NavLink>
//               );
//             })}
//         </nav>
//       </header>

//       {/* 3. MOBILE MENU OVERLAY (GIỮ NGUYÊN LOGIC CŨ) */}
//       {mobileMenuOpen && (
//         <div className="fixed top-[72px] md:top-[80px] left-0 w-full h-[calc(100vh-72px)] md:h-[calc(100vh-80px)] bg-white z-40 lg:hidden overflow-hidden border-t border-[#E3E7EF]">
//           {/* VIEW 1: MAIN MENU */}
//           <div
//             className={cn(
//               "absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto pb-[40px]",
//               currentView === "main" ? "translate-x-0" : "-translate-x-full"
//             )}
//           >
//             {NAV_ITEMS.map((item, index) => {
//               if (item.type === "dropdown") {
//                 return (
//                   <button
//                     key={index}
//                     onClick={() => openSubMenu(item.label)}
//                     className="flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]"
//                   >
//                     <span className="font-semibold text-[16px] md:text-[18px] text-[#111B29]">
//                       {item.label}
//                     </span>
//                     <ChevronRight size={20} className="text-[#9CA3AF]" />
//                   </button>
//                 );
//               }
//               return (
//                 <NavLink
//                   key={index}
//                   to={item.path}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     cn(
//                       "flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]",
//                       isActive ? "text-[#FF0000] bg-red-50/50" : "text-[#111B29]"
//                     )
//                   }
//                 >
//                    <div className="flex items-center gap-2">
//                         {item.icon && <span className="text-current">{item.icon}</span>}
//                         <span className="font-semibold text-[16px] md:text-[18px]">
//                             {item.label}
//                         </span>
//                    </div>
//                 </NavLink>
//               );
//             })}

//             {/* Thêm nút Báo giá riêng vào Mobile Menu */}
//              <div className="mt-[10px]">
//                 <NavLink
//                   to="/bang-gia"
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     cn(
//                       "flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]",
//                       isActive ? "text-[#FF0000] bg-red-50/50" : "text-[#111B29]"
//                     )
//                   }
//                 >
//                    <div className="flex items-center gap-2">
//                         <CalendarDays size={20} />
//                         <span className="font-semibold text-[16px] md:text-[18px]">
//                             Bảng giá
//                         </span>
//                    </div>
//                 </NavLink>
//              </div>
//           </div>

//           {/* VIEW 2: SUB MENU (GIỮ NGUYÊN) */}
//           {Object.keys(MOBILE_SUB_MENUS).map((menuLabel) => (
//             <div
//               key={menuLabel}
//               className={cn(
//                 "absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto pb-[40px]",
//                 currentView === menuLabel ? "translate-x-0" : "translate-x-full"
//               )}
//             >
//               <div className="flex items-center gap-[10px] w-full bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px] sticky top-0 z-10">
//                 <button
//                   onClick={backToMainMenu}
//                   className="flex items-center justify-center p-1 rounded-full hover:bg-gray-200 transition-colors"
//                 >
//                   <ChevronLeft size={24} className="text-[#111B29]" strokeWidth={2} />
//                 </button>
//                 <span className="font-bold text-[18px] md:text-[20px] text-[#111B29]">
//                   {menuLabel}
//                 </span>
//               </div>

//               <div className="flex flex-col w-full py-[10px]">
//                 {MOBILE_SUB_MENUS[menuLabel].map((group, gIdx) => (
//                   <div key={gIdx} className="flex flex-col mb-[20px]">
//                     {group.groupTitle && (
//                       <div className="px-[24px] md:px-[40px] mb-[8px] mt-[10px] font-bold text-[12px] md:text-[14px] text-[#6B7280] uppercase tracking-wider">
//                         {group.groupTitle}
//                       </div>
//                     )}
//                     {group.items.map((sub, sIdx) => (
//                       <NavLink
//                         key={sIdx}
//                         to={sub.path}
//                         onClick={closeMenu}
//                         className={({ isActive }) =>
//                           cn(
//                             "flex items-center py-[12px] px-[24px] md:px-[40px] text-[16px] md:text-[18px] font-medium transition-colors hover:bg-gray-50",
//                             isActive ? "text-[#FF0000] bg-red-50/30" : "text-[#374151]"
//                           )
//                         }
//                       >
//                         {sub.label}
//                       </NavLink>
//                     ))}
//                     {group.bottomImage && (
//                       <div className="mt-[20px] ml-[24px] md:ml-[40px]">
//                         <img
//                           src={group.bottomImage}
//                           alt="QR Code"
//                           className="w-[120px] h-[120px] object-contain border border-gray-200 p-2 rounded-lg"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// src/components/layout/Header.tsx
import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Home,
  CalendarDays,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import { ServicesDropdown } from "./ServicesDropdown";

// Import Logo & QR Code
import logo from "../../assets/logo.png";
import { qr } from "../../assets";

// --- DỮ LIỆU MENU CON ---
type SubMenuItem = { label: string; path: string };
type SubMenuGroup = {
  groupTitle?: string;
  items: SubMenuItem[];
  bottomImage?: string;
};

const MOBILE_SUB_MENUS: Record<string, SubMenuGroup[]> = {
  "Dịch vụ & Sản phẩm": [
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
  "Chính sách": [
    {
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
  { label: "Trang chủ", path: "/", type: "link", icon: <Home size={18} /> },
  { label: "Dịch vụ & Sản phẩm", path: "#", type: "dropdown" },
  { label: "Chính sách", path: "#", hasArrow: true, type: "dropdown" },
  { label: "Dự án", path: "/du-an", type: "link" },
  { label: "Về Promac", path: "/gioi-thieu", type: "link" },
  { label: "Tin Tức", path: "/tin-tuc", type: "link" },
  { label: "Liên Hệ", path: "/lien-he", type: "link" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<string>("main");

  const location = useLocation();

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

  const isDropdownActive = (label: string, pathname: string) => {
    if (label === "Dịch vụ & Sản phẩm") {
      return ["/dich-vu-cot-loi", "/dich-vu-khac", "/san-pham"].some((path) =>
        pathname.startsWith(path)
      );
    }
    if (label === "Chính sách") {
      return pathname.startsWith("/chinh-sach");
    }
    return false;
  };

  return (
    <div className="relative w-full flex justify-center z-50 bg-white shadow-sm font-inter">
      {/* 1. MOBILE & TABLET HEADER */}
      <header className="lg:hidden relative w-full h-[72px] md:h-[80px] bg-white border-b border-[#FF0000] flex items-center justify-between px-[20px] md:px-[32px]">
        <div className="flex-shrink-0 flex items-center gap-2">
          <img src={qr} alt="QR" className="w-[30px] h-[30px] object-contain" />
          <NavLink to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Promac"
              className="w-[100px] h-auto md:w-[120px] object-contain"
            />
          </NavLink>
        </div>

        <button
          type="button"
          className="flex items-center justify-center text-[#111B29] p-2 hover:bg-gray-100 rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {mobileMenuOpen ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>
      </header>

      {/* 2. DESKTOP HEADER */}
      <header className="hidden lg:flex items-center justify-between w-full max-w-[1440px] h-[110px] px-[20px] xl:px-[40px]">
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="flex flex-col items-center justify-center">
            <img
              src={qr}
              alt="Promac QR"
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
        </div>

        <nav className="flex items-center gap-3 xl:gap-4">
          {NAV_ITEMS.map((item, index) => {
            if (item.type === "dropdown") {
              const isActive = isDropdownActive(item.label, location.pathname);
              return (
                <div key={index} className="group relative">
                  <ServicesDropdown
                    label={item.label}
                    className={cn(
                      "flex items-center justify-center px-4 py-2 rounded-[30px] font-bold text-[15px] xl:text-[16px] transition-all duration-200 whitespace-nowrap cursor-pointer",
                      isActive
                        ? "bg-[#FF0000] text-white shadow-md"
                        : "bg-transparent text-[#111B29] hover:text-[#FF0000] hover:bg-gray-50"
                    )}
                  />
                </div>
              );
            }

            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center px-4 py-2 rounded-[30px] font-bold text-[15px] xl:text-[16px] transition-all duration-200 whitespace-nowrap",
                    isActive
                      ? "bg-[#FF0000] text-white shadow-md"
                      : "bg-transparent text-[#111B29] hover:text-[#FF0000] hover:bg-gray-50"
                  )
                }
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                <span className="pt-[1px]">{item.label}</span>
                {item.hasArrow && (
                  <ChevronDown size={16} className="ml-1" strokeWidth={2} />
                )}
              </NavLink>
            );
          })}
        </nav>
      </header>

      {/* 3. MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed top-[72px] md:top-[80px] left-0 w-full h-[calc(100vh-72px)] md:h-[calc(100vh-80px)] bg-white z-40 lg:hidden overflow-hidden border-t border-[#E3E7EF]">
          {/* VIEW 1: MAIN MENU */}
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
                    type="button"
                    key={index}
                    onClick={() => openSubMenu(item.label)}
                    className="flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]"
                  >
                    <span className="font-semibold text-[16px] md:text-[18px] text-[#111B29]">
                      {item.label}
                    </span>
                    <ChevronRight size={20} className="text-[#9CA3AF]" />
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
                      "flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]",
                      isActive
                        ? "text-[#FF0000] bg-red-50/50"
                        : "text-[#111B29]"
                    )
                  }
                >
                  <div className="flex items-center gap-2">
                    {item.icon && (
                      <span className="text-current">{item.icon}</span>
                    )}
                    <span className="font-semibold text-[16px] md:text-[18px]">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              );
            })}

            <div className="mt-[10px]">
              <NavLink
                to="/bang-gia"
                onClick={closeMenu}
                className={({ isActive }) =>
                  cn(
                    "flex w-full items-center justify-between bg-white transition-colors active:bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px]",
                    isActive ? "text-[#FF0000] bg-red-50/50" : "text-[#111B29]"
                  )
                }
              >
                <div className="flex items-center gap-2">
                  <CalendarDays size={20} />
                  <span className="font-semibold text-[16px] md:text-[18px]">
                    Bảng giá
                  </span>
                </div>
              </NavLink>
            </div>
          </div>

          {/* VIEW 2: SUB MENU */}
          {Object.keys(MOBILE_SUB_MENUS).map((menuLabel) => (
            <div
              key={menuLabel}
              className={cn(
                "absolute inset-0 w-full h-full bg-white transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto pb-[40px]",
                currentView === menuLabel ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="flex items-center gap-[10px] w-full bg-gray-50 border-b border-[#E3E7EF] px-[24px] md:px-[40px] py-[16px] sticky top-0 z-10">
                {/* --- FIX LỖI BUTTON --- */}
                <button
                  type="button" // Fix: Thêm type button
                  onClick={backToMainMenu}
                  className="flex items-center justify-center p-1 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Quay lại" // Fix: Thêm aria-label
                >
                  <ChevronLeft
                    size={24}
                    className="text-[#111B29]"
                    strokeWidth={2}
                  />
                </button>
                {/* ------------------- */}

                <span className="font-bold text-[18px] md:text-[20px] text-[#111B29]">
                  {menuLabel}
                </span>
              </div>

              <div className="flex flex-col w-full py-[10px]">
                {MOBILE_SUB_MENUS[menuLabel].map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col mb-[20px]">
                    {group.groupTitle && (
                      <div className="px-[24px] md:px-[40px] mb-[8px] mt-[10px] font-bold text-[12px] md:text-[14px] text-[#6B7280] uppercase tracking-wider">
                        {group.groupTitle}
                      </div>
                    )}
                    {group.items.map((sub, sIdx) => (
                      <NavLink
                        key={sIdx}
                        to={sub.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center py-[12px] px-[24px] md:px-[40px] text-[16px] md:text-[18px] font-medium transition-colors hover:bg-gray-50",
                            isActive
                              ? "text-[#FF0000] bg-red-50/30"
                              : "text-[#374151]"
                          )
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                    {group.bottomImage && (
                      <div className="mt-[20px] ml-[24px] md:ml-[40px]">
                        <img
                          src={group.bottomImage}
                          alt="QR Code"
                          className="w-[120px] h-[120px] object-contain border border-gray-200 p-2 rounded-lg"
                        />
                      </div>
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
