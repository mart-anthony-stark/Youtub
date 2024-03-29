import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  size?: "sm" | "xs" | "md" | "lg" | "xl" | string;
  weight?: string;
  className?: string;
};
const Text = ({
  children,
  size = "sm",
  weight = "normal",
  className,
}: TextProps) => {
  return (
    <p className={`font-${weight} text-${size} ${className}`}>{children}</p>
  );
};

export default Text;
