import { ReactNode } from "react";
import AppBar from "../molecules/AppBar/AppBar";
import SidePanel from "../organisms/SidePanel/SidePanel";

type MainTemplateProps = {
  children: ReactNode;
  containerClassName?: string;
  hasSidePanel?: boolean;
};
const MainTemplate = ({
  children,
  containerClassName,
  hasSidePanel = false,
}: MainTemplateProps) => {
  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col">
      <AppBar />
      <div>
        {hasSidePanel ? <SidePanel /> : null}
        <div
          className={`${
            containerClassName ||
            `sm:px-6 flex flex-col flex-grow ${
              hasSidePanel
                ? "pl-0 sm:px-2 md:pl-16 laptop:pl-0 xl:pl-60 flex flex-col flex-grow"
                : ""
            }`
          }`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainTemplate;
