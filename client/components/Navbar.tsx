"use client";

import { IoIosMenu, IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import IconBadge from "./IconBadge";
import YTLogo from "./YTLogo";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { PiMicrophoneFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2  w-full">
      <div className="flex items-center gap-8">
        <IoIosMenu size={30} className="cursor-pointer" />

        <div className="flex gap-1 items-start h-[20px] cursor-pointer">
          <YTLogo />
          <div className="text-gray-600 -mt-1 text-xs">PH</div>
        </div>
      </div>

      {/* SEARCHBAR HERE */}

      <div className="flex items-center gap-5">
        <div className="md:hidden flex gap-5">
          <GoSearch size={24} strokeWidth={0.1} />
          <PiMicrophoneFill size={24} strokeWidth={0.1} />
        </div>

        <RiVideoAddLine size={24} strokeWidth={0.1} />
        <IconBadge icon={<IoIosNotificationsOutline size={28} />} value={10} />
        <Image
          src="https://yt3.ggpht.com/SKtlWY3vGARq6QT0jtCFRUzH2hNj7MKwA2mKPOitvXSZNlaODrPSDmo5mh_0grN8kgzhjco1=s88-c-k-c0x00ffffff-no-rj"
          alt="user"
          height={30}
          width={30}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
