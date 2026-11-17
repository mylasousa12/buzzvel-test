import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** Centered page container: 20px gutters on mobile, 80px on desktop, 1280px max. */
export function Container({ children, as: Tag = "div", className = "" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-5 md:px-10 xl:px-20 ${className}`}>{children}</Tag>
  );
}
