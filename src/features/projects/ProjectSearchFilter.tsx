// src/features/projects/listing/ProjectSearchFilter.tsx
import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

// Dữ liệu danh mục cho DỰ ÁN
const PROJECT_CATEGORIES = [
  { id: "all", label: "Tất cả", type: "highlight" },
  { id: "print", label: "In ấn", type: "normal" },
  { id: "packaging", label: "Bao bì & Hộp", type: "normal" },
  { id: "brand", label: "Bộ nhận diện thương hiệu", type: "normal" },
  { id: "event", label: "Vật phẩm sự kiện", type: "normal" },
];

interface Props {
  onSearch: (term: string) => void;
}

export const ProjectSearchFilter: React.FC<Props> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    // THAY ĐỔI:
    // 1. w-full max-w-[800px]: Responsive width (giống NewsSearchFilter)
    // 2. mx-auto: Căn giữa
    // 3. px-4 md:px-0: Padding an toàn cho mobile
    <div
      ref={wrapperRef}
      className="relative w-full max-w-[750px] z-50 mx-auto px-4 md:px-0"
    >
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #828282; border-radius: 100px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      {/* INPUT */}
      <div className="w-full h-[56px] relative shadow-sm">
        <div className="w-full h-full border border-[#4D80C4] rounded-[6px] bg-white flex items-center transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 relative">
          <input
            type="text"
            placeholder="Chọn chủ đề hoặc gõ từ khóa"
            value={inputValue}
            onChange={handleChange}
            onClick={() => setIsOpen(true)}
            // Text size responsive: 16px mobile / 18px desktop
            // Padding responsive: pl-[16px] pr-[60px]
            className="w-full h-full outline-none bg-transparent font-inter font-normal text-[16px] md:text-[18px] text-black placeholder-[#959595] rounded-[6px] pl-[16px] pr-[60px]"
          />

          {/* Search Button */}
          <button
            onClick={() => onSearch(inputValue)}
            className="absolute right-[8px] top-[8px] w-[46px] h-[40px] bg-[#FF0000] rounded-[3px] flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer z-10"
            aria-label="Tìm kiếm dự án"
          >
            <Search className="w-[20px] h-[20px] text-white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* DROPDOWN */}
      {isOpen && (
        <div
          // THAY ĐỔI: w-full (luôn bằng width input)
          className="absolute top-[65px] left-0 w-full bg-white border border-[#BDBDBD] rounded-[5px] shadow-lg overflow-hidden z-50"
          style={{ height: "200px" }} // Giảm height chút cho gọn vì ít mục hơn News
        >
          <div className="w-full h-full overflow-y-auto custom-scrollbar p-[5px]">
            <div className="flex flex-col gap-[2px]">
              {PROJECT_CATEGORIES.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.label)}
                  className="flex items-center px-[10px] cursor-pointer transition-colors"
                  style={{
                    height: "37px",
                    borderRadius: "3px",
                    backgroundColor:
                      item.type === "highlight" ? "#FF9E9E" : "transparent",
                    color: "#333333",
                    fontFamily: "Inter",
                    fontWeight: item.type === "highlight" ? 500 : 400,
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => {
                    if (item.type !== "highlight")
                      e.currentTarget.style.backgroundColor = "#F3F3F3";
                  }}
                  onMouseLeave={(e) => {
                    if (item.type !== "highlight")
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
  );
};
