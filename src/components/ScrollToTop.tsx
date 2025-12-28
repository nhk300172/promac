// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Lấy ra đường dẫn hiện tại (pathname)
  const { pathname } = useLocation();

  useEffect(() => {
    // Mỗi khi pathname thay đổi, cuộn màn hình lên toạ độ (0, 0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" để lên ngay lập tức, "smooth" nếu muốn trượt từ từ
    });
  }, [pathname]); // Chạy lại hiệu ứng khi pathname thay đổi

  return null; // Component này không render ra giao diện gì cả
};

export default ScrollToTop;
