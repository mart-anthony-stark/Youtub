"use client";

import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import { SidepanelContext } from "@/components/templates/MainTemplate";
import React, { useContext } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";

const MiniSideBar = () => {
  const { isOpen } = useContext(SidepanelContext);
  return (
    <div
      className={`hidden w-16 fixed top-[60px] left-0 scroll md:flex flex-col overflow-y-auto overflow-x-hidden xl:hidden px-2 bg-white`}
      style={{ height: "calc(100vh - 60px)", zIndex: 99, display: !isOpen ? 'flex' : '' }}
    >
      <div className="flex flex-col items-center">
        <Button className="flex rounded-md flex-col items-center">
          <GoHomeFill size={24} />
          <Text size="xs">Home</Text>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Button className="flex rounded-md flex-col items-center">
          <SiYoutubeshorts size={24} color="red" />
          <Text size="xs">Shorts</Text>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Button className="flex rounded-md flex-col items-center">
          <MdOutlineSubscriptions size={24} />
          <Text size="xs">Subs</Text>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Button className="flex rounded-md flex-col items-center">
          <PiVideo size={24} />
          <Text size="xs">You</Text>
        </Button>
      </div>
    </div>
  );
};

export default MiniSideBar;
