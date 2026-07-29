import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  size,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "default" | "wide";
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container className={containerClassName} size={size}>
        {children}
      </Container>
    </section>
  );
}
