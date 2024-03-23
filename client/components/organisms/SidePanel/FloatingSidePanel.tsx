import Button from "@/components/atoms/Button/Button";
import SidebarItems from "@/components/molecules/SidebarItems/SidebarItems";
import { SidepanelContext } from "@/contexts";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { VscMenu } from "react-icons/vsc";

type FloatingSidePanelProps = {
  toggleSidePanel: Dispatch<SetStateAction<boolean>>;
};

const FloatingSidePanel = ({ toggleSidePanel }: FloatingSidePanelProps) => {
  const { isOpen } = useContext(SidepanelContext);
  return (
    <>
      <div
        className={`floating-sidepanel flex xl:hidden fixed top-0 pb-2 z-50 scroll flex-col overflow-y-auto w-60 bg-white h-screen ease-in-out duration-200`}
        style={{ left: isOpen ? "0px" : "-240px" }}
      >
        <div className="sticky bg-yt-white top-0 pt-2 pb-4 px-4">
          <Button className="self-start" onClick={() => toggleSidePanel(false)}>
            <VscMenu size={20} />
          </Button>
        </div>
        <div className="px-2">
          <SidebarItems />
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => toggleSidePanel(false)}
          className="fixed inset-0 bg-black/20 z-40 xl:hidden"
        ></div>
      )}
    </>
  );
};

export default FloatingSidePanel;
