import { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide";
}) {
  const maxWidth = size === "wide" ? "max-w-[1600px]" : "max-w-6xl";
  return <div className={`mx-auto w-full ${maxWidth} px-6 ${className}`}>{children}</div>;
}
