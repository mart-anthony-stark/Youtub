import MenuButton from "@/components/atoms/Button/MenuButton";
import React from "react";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";

const MoreButtons = () => {
  return (
    <>
      <MenuButton
        text="Youtube Premium"
        Icon={<PiYoutubeLogoFill size={24} color="red" />}
      />

      <MenuButton
        text="Youtube Music"
        Icon={<SiYoutubemusic size={24} color="red" />}
      />
      <MenuButton
        text="Youtube Kids"
        Icon={<TbBrandYoutubeKids size={24} color="red" />}
      />
    </>
  );
};

export default MoreButtons;
