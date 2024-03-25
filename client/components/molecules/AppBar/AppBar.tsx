"use client";

import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { PiMicrophoneFill } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";
import Button from "../../atoms/Button/Button";
import Logo from "../../atoms/Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import { Dispatch, SetStateAction, useState } from "react";
import SettingPopup from "../SettingPopup/SettingPopup";
import SpeechRecognitionModal from "./SpeechRecognitionModal";

type AppBarProps = { setSidepanelOpen: Dispatch<SetStateAction<boolean>> };

const AppBar = ({ setSidepanelOpen }: AppBarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSidePanel = () => {
    setSidepanelOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <SpeechRecognitionModal onClose={handleCloseModal} />}
      <nav className="h-appbar bg-white sticky mt-0 top-0 z-30 flex justify-between items-center px-4 py-2 w-full">
        <div className="flex items-center gap-5">
          <Button onClick={toggleSidePanel} className="hidden sm:block">
            <VscMenu size={20} />
          </Button>

          <Logo />
        </div>

        {/* SEARCHBAR HERE */}
        <div className="max-w-[600px] w-full gap-4 hidden md:flex px-4">
          <SearchBar />

          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-200 self-center"
          >
            <PiMicrophoneFill size={24} />
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button className="md:hidden">
            <GoSearch size={24} strokeWidth={0.1} />
          </Button>

          <Button className="hidden sm:block md:hidden">
            <PiMicrophoneFill size={24} strokeWidth={0.1} />
          </Button>

          <Button className="hidden sm:block">
            <RiVideoAddLine size={24} strokeWidth={0.1} />
          </Button>

          <Button className="hidden sm:block">
            <Button.Badge
              icon={<IoIosNotificationsOutline size={28} />}
              value={10}
            />
          </Button>

          <SettingPopup />
        </div>
      </nav>
    </>
  );
};

export default AppBar;
