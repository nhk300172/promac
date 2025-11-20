import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;

  fullWidth?: boolean;
}

export const Container = ({
  children,
  className,
  fullWidth = false,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 md:px-6 lg:px-8", // Padding an toàn 2 bên khi thu nhỏ
        !fullWidth && "max-w-[1440px]", // Giữ chuẩn thiết kế 1440px
        className
      )}
    >
      {children}
    </div>
  );
};
