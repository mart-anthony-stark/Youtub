import { ReactNode } from "react";
import BadgeButton from "./BadgeButton";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-gray-200 rounded-full cursor-pointer p-2 ${className}`}
    >
      {children}
    </button>
  );
};

Button.Badge = BadgeButton;
export default Button;