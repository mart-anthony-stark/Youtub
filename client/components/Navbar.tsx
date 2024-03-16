"use client";

import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import IconBadge from "./IconBadge";
import YTLogo from "./YTLogo";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { PiMicrophoneFill } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="bg-white sticky mt-0 top-0 z-50 flex justify-between items-center px-4 py-2 w-full">
      <div className="flex items-center gap-5">
        <div className="hover:bg-gray-200 rounded-full p-2 cursor-pointer">
          <VscMenu size={20} />
        </div>

        <div className="flex gap-1 items-start h-5 cursor-pointer">
          <YTLogo />
          <div className="text-yt-gray -mt-2 text-[0.6rem]">PH</div>
        </div>
      </div>

      {/* SEARCHBAR HERE */}

      <div className="flex items-center gap-5">

        <GoSearch className="md:hidden" size={24} strokeWidth={0.1} />
        <PiMicrophoneFill className="hidden sm:block md:hidden" size={24} strokeWidth={0.1} />
        <div className="hidden sm:block hover:bg-gray-200 rounded-full cursor-pointer p-1">
          <RiVideoAddLine size={24} strokeWidth={0.1} />
        </div>

        <div className="hidden sm:block hover:bg-gray-200 rounded-full cursor-pointer p-1">
          <IconBadge
            icon={<IoIosNotificationsOutline size={28} />}
            value={10}
          />
        </div>

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
