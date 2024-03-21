import { ReactNode } from "react";
import AppBar from "../molecules/AppBar/AppBar";

type MainTemplateProps = {
  children: ReactNode;
  containerClassName?: string;
};
const MainTemplate = ({ children, containerClassName }: MainTemplateProps) => {
  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col">
      <AppBar />
      <div>
        <div
          className={
            containerClassName || `sm:px-6 flex flex-col flex-grow pt-8`
          }
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainTemplate;
