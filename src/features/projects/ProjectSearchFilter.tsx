// File: src/features/projects/listing/ProjectSearchFilter.tsx
import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

// Dữ liệu danh mục cho DỰ ÁN (Có thể giống hoặc khác Tin tức)
const PROJECT_CATEGORIES = [
  { id: "all", label: "Tất cả", type: "highlight" },
  { id: "print", label: "In ấn", type: "normal" },
  { id: "packaging", label: "Bao bì & Hộp", type: "normal" }, // Ví dụ đổi category chút cho hợp dự án
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
    <div ref={wrapperRef} className="relative w-[611px] z-50">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #828282; border-radius: 100px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      {/* INPUT */}
      <div className="w-full h-[56px] relative">
        <div className="w-full h-full border border-[#4D80C4] rounded-[6px] bg-white flex items-center pl-[20px] pr-[60px]">
          <input
            type="text"
            placeholder="Chọn chủ đề hoặc gõ từ khóa"
            value={inputValue}
            onChange={handleChange}
            onClick={() => setIsOpen(true)}
            className="w-full h-full outline-none text-[18px] text-black placeholder-[#959595] font-inter"
          />
        </div>
        <button
          onClick={() => onSearch(inputValue)}
          className="absolute right-[9px] top-[8px] w-[46px] h-[40px] bg-[#FF0000] rounded-[3px] flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
          aria-label="Tìm kiếm dự án"
        >
          <Search className="w-[20px] h-[20px] text-white" strokeWidth={3} />
        </button>
      </div>

      {/* DROPDOWN */}
      {isOpen && (
        <div
          className="absolute top-[65px] left-0 w-[433px] bg-white border border-[#BDBDBD] rounded-[5px] shadow-lg overflow-hidden"
          style={{ height: "200px" }}
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
