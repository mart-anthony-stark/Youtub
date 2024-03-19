import React, { ElementType, ReactNode } from "react";
import Button from "./Button";

type MenuButtonProps = {
  active?: boolean;
  text: string;
  Icon: ReactNode;
};
const MenuButton = ({ active, text, Icon }: MenuButtonProps) => (
  <Button
    className={`${
      active
        ? "bg-gray-200 text-black font-bold hover:bg-gray-300 hover:text-bold"
        : "color-white "
    } select-none rounded-md text-sm text-nowrap grid grid-cols-[50px_1fr] pl-3 items-center justify-start w-full outline-none`}
  >
    {Icon}
    <p className="w-28 text-start text-ellipsis overflow-hidden">{text}</p>
  </Button>
);

export default MenuButton;