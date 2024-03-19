import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  size?: "sm" | "xs" | "md" | "lg" | "xl" | string;
  weight?: string;
  className?: string;
};
const Text = ({ children, size, weight, className }: TextProps) => {
  return (
    <p
      className={`font-${weight ? weight : "normal"} text-${
        size ? size : "sm"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
