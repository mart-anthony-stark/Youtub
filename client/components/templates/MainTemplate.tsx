"use client";

import { ReactNode, createContext, useState } from "react";
import AppBar from "../molecules/AppBar/AppBar";
import SidePanel from "../organisms/SidePanel/SidePanel";

type MainTemplateProps = {
  children: ReactNode;
  containerClassName?: string;
  hasSidePanel?: boolean;
};

export const SidepanelContext = createContext({isOpen: true});

const MainTemplate = ({
  children,
  containerClassName,
  hasSidePanel = false,
}: MainTemplateProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidepanelContext.Provider value={{ isOpen }}>
      <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col">
        <AppBar setSidepanelOpen={setIsOpen}/>
        <div>
          {hasSidePanel ? <SidePanel /> : null}
          <div
            className={`${
              containerClassName ||
              `sm:px-6 flex flex-col flex-grow ${
                hasSidePanel
                  ? `pl-0 sm:px-2 md:pl-16 laptop:pl-0 xl:pl-60 flex flex-col flex-grow`
                  : ""
              }`
            }`}
            style={{paddingLeft: !isOpen ? '2px' : ''}}
          >
            {children}
          </div>
        </div>
      </main>
    </SidepanelContext.Provider>
  );
};

export default MainTemplate;
