"use client";

import React, { useContext } from "react";
import SidebarItems from "../../molecules/SidebarItems/SidebarItems";
import MiniSidePanel from "./MiniSidePanel";
import { SidepanelContext } from "@/contexts";

const SidePanel = () => {
  let { isOpen } = useContext(SidepanelContext);

  return (
    <>
      <div
        className={`hidden w-16 fixed top-view-screen pt-2 left-0 z-40 scroll ${
          isOpen && "md:flex"
        } flex-col overflow-y-auto xl:w-60 px-2 bg-white h-view-screen`}
      >
        <SidebarItems />
      </div>
      <div className="hidden md:block">
        <MiniSidePanel />
      </div>
    </>
  );
};

export default SidePanel;
