import React, { ReactNode } from "react";
type IconBadgeProps = {
  value: number;
  icon: ReactNode;
};

const IconBadge = ({ value, icon, ...props }: IconBadgeProps) => {
  return (
    <div className="relative cursor-pointer" {...props}>
      <div className="absolute text-xs bg-red-700 text-white rounded-full px-1 flex justify-center -right-2">{value > 9 ? '9+': value}</div>
      {icon}
    </div>
  );
};


export default IconBadge;
