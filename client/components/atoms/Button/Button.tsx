import { ReactNode } from "react";
import BadgeButton from "./BadgeButton";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  color?: string;
};

type Theme = { [color: string]: string };

const Button = ({
  children,
  className,
  onClick,
  color = "gray",
}: ButtonProps) => {
  const theme: Theme = {
    gray: `hover:bg-gray-200 rounded-full cursor-pointer p-2 ${className}`,
    black: `hover:bg-black bg-yt-black rounded-full text-white cursor-pointer p-2 ${className}`,
  };

  return (
    <button onClick={onClick} className={theme[color]}>
      {children}
    </button>
  );
};

Button.Badge = BadgeButton;
export default Button;
