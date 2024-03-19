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
    } rounded-md text-sm font-medium text-nowrap gap-7 flex p-1 pl-5 items-center justify-start w-full outline-none`}
  >
    {Icon}
    <p>{text}</p>
  </Button>
);

export default MenuButton;
