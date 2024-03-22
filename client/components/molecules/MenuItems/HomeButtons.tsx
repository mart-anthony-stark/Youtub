"use client";

import MenuButton from "@/components/atoms/Button/MenuButton";
import { usePathname, useRouter } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const HomeButtons = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <MenuButton
        onClick={() => router.push("/")}
        text="Home"
        Icon={<GoHomeFill size={24} />}
        active={pathName === "/"}
      />
      <MenuButton
        text="Shorts"
        Icon={<SiYoutubeshorts size={24} color="red" />}
      />
      <MenuButton
        text="Subscriptions"
        Icon={<MdOutlineSubscriptions size={24} />}
      />
    </>
  );
};

export default HomeButtons;
