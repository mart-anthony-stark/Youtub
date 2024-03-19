import { ReactNode } from "react";

type BadgeButtonProps = {
  value: number;
  icon: ReactNode;
  className?: string;
};

const BadgeButton = ({
  value,
  icon,
  className,
  ...props
}: BadgeButtonProps) => {
  return (
    <div className={`relative cursor-pointer ${className}`} {...props}>
      <div className="absolute text-xs bg-red-700 text-white rounded-full px-1 flex justify-center -right-2">
        {value > 9 ? "9+" : value}
      </div>
      {icon}
    </div>
  );
};

export default BadgeButton;
