// src/features/news/NewsSearchFilter.tsx
import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

// Dữ liệu danh mục
const CATEGORIES = [
  { id: "all", label: "Tất cả", highlight: true },
  { id: "print", label: "In ấn" },
  { id: "promo", label: "Chương trình khuyến mãi" },
  { id: "paper", label: "Bìa và giấy in" },
  { id: "event", label: "Vật dụng sự kiện" },
  { id: "voucher", label: "Voucher" },
  { id: "scratch", label: "Thẻ cào" },
  { id: "box", label: "Hộp cứng cao cấp" },
  { id: "bag", label: "Túi giấy" },
];

interface NewsSearchFilterProps {
  onSearch: (term: string) => void;
}

export const NewsSearchFilter: React.FC<NewsSearchFilterProps> = ({
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Click outside logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (label: string) => {
    setInputValue(label);
    onSearch(label);
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  return (
    // THAY ĐỔI QUAN TRỌNG:
    // 1. Wrapper ngoài cùng: w-full flex justify-center -> Đảm bảo chiếm hết dòng và CĂN GIỮA nội dung bên trong.
    <div
      ref={wrapperRef}
      className="w-full flex justify-center z-50 px-4 md:px-0"
    >
      {/* Custom Scrollbar CSS */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #828282; border-radius: 100px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      {/* KHUNG SEARCH THỰC TẾ: Giới hạn max-w-[800px] */}
      <div className="relative w-full max-w-[750px]">
        {/* INPUT BOX */}
        <div className="w-full h-[56px] relative shadow-sm">
          <div className="w-full h-full border border-[#4D80C4] rounded-[6px] bg-white flex items-center relative transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Chọn chủ đề hoặc gõ từ khóa"
              value={inputValue}
              onChange={handleChange}
              onClick={() => setIsOpen(true)}
              className="w-full h-full outline-none bg-transparent font-inter font-normal text-[16px] md:text-[18px] text-black placeholder-[#959595] rounded-[6px] pl-[16px] pr-[60px]"
            />

            {/* Button Search */}
            <button
              onClick={() => onSearch(inputValue)}
              className="absolute right-[8px] top-[8px] w-[46px] h-[40px] bg-[#FF0000] rounded-[3px] flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer z-10"
              aria-label="Tìm kiếm"
              title="Tìm kiếm"
            >
              <Search
                className="w-[20px] h-[20px] text-white"
                strokeWidth={3}
              />
            </button>
          </div>
        </div>

        {/* DROPDOWN */}
        {isOpen && (
          <div
            className="absolute top-[65px] left-0 w-full  bg-white border border-[#BDBDBD] rounded-[5px] shadow-lg overflow-hidden z-50"
            style={{ height: "276px" }}
          >
            <div className="w-full h-full overflow-y-auto custom-scrollbar p-[5px]">
              <div className="flex flex-col gap-[2px]">
                {CATEGORIES.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.label)}
                    className="flex items-center px-[10px] cursor-pointer transition-colors"
                    style={{
                      height: "37px",
                      borderRadius: "3px",
                      backgroundColor: item.highlight
                        ? "#FF9E9E"
                        : "transparent",
                      color: "#333333",
                      fontFamily: item.highlight ? "Inter" : "Roboto",
                      fontWeight: item.highlight ? 500 : 400,
                      fontSize: "14px",
                    }}
                    onMouseEnter={(e) => {
                      if (!item.highlight)
                        e.currentTarget.style.backgroundColor = "#F3F3F3";
                    }}
                    onMouseLeave={(e) => {
                      if (!item.highlight)
                        e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
