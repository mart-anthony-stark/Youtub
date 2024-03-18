"use client";

import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { PiMicrophoneFill } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";
import Button from "../../atoms/Button/Button";
import Logo from "../../atoms/Logo/Logo";

const Navbar = () => {
  return (
    <nav className="bg-white sticky mt-0 top-0 z-50 flex justify-between items-center px-4 py-2 w-full">
      <div className="flex items-center gap-5">
        <Button>
          <VscMenu size={20} />
        </Button>

        <Logo />
      </div>

      {/* SEARCHBAR HERE */}

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

        <Image
          src="https://yt3.ggpht.com/SKtlWY3vGARq6QT0jtCFRUzH2hNj7MKwA2mKPOitvXSZNlaODrPSDmo5mh_0grN8kgzhjco1=s88-c-k-c0x00ffffff-no-rj"
          alt="user"
          height={30}
          width={30}
          className="rounded-full mx-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;