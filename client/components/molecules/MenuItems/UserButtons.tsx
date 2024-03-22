"use client";

import Button from "@/components/atoms/Button/Button";
import MenuButton from "@/components/atoms/Button/MenuButton";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiLike } from "react-icons/bi";
import { GrHistory } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";

const UserButtons = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <Button
        onClick={() => router.push("/channel/you")}
        className={`flex outline-none select-none rounded-md pl-3 font-bold px-8 gap-4 items-center justify-start ${
          pathName === "/channel/you" &&
          "bg-gray-200 text-black font-bold hover:bg-gray-300 hover:text-bold"
        }`}
      >
        <p>You</p>
        <SlArrowRight size={12} />
      </Button>

      <MenuButton text="History" Icon={<GrHistory size={22} />} />
      <MenuButton text="Watch later" Icon={<MdAccessTime size={24} />} />
      <MenuButton text="Liked Videos" Icon={<BiLike size={24} />} />
    </>
  );
};

export default UserButtons;
