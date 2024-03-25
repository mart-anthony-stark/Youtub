"use client";

import MenuButton from "@/components/atoms/Button/MenuButton";
import FlatList from "@/components/atoms/List/FlatList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { BsGoogle, BsMoon } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import { LuKeyboard } from "react-icons/lu";
import { MdOutlineAccountBox, MdOutlineLogout } from "react-icons/md";
import { TbShieldCancel, TbUserHexagon } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";

const menuItems = [
  [
    { Icon: BsGoogle, text: "Google Account" },
    { Icon: MdOutlineAccountBox, text: "Switch Account" },
    { Icon: MdOutlineLogout, text: "Sign out" },
  ],
  [
    { Icon: BiPlayCircle, text: "YouTube Studio" },
    {
      Icon: AiOutlineDollar,
      text: "Purchases and memberships",
    },
  ],
  [
    { Icon: TbUserHexagon, text: "Your data in YouTube" },
    { Icon: BsMoon, text: "Appearance: Device theme" },
    { Icon: IoLanguageOutline, text: "Language: English" },
    { Icon: TbShieldCancel, text: "Restricted mode: off" },
    { Icon: TfiWorld, text: "Location: Philippines" },
    { Icon: LuKeyboard, text: "Keyboard shortcuts" },
  ],
];

const SettingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="w-max">
        <Image
          onClick={() => setIsOpen(true)}
          src="https://yt3.ggpht.com/SKtlWY3vGARq6QT0jtCFRUzH2hNj7MKwA2mKPOitvXSZNlaODrPSDmo5mh_0grN8kgzhjco1=s88-c-k-c0x00ffffff-no-rj"
          alt="user"
          height={30}
          width={30}
          className="rounded-full cursor-pointer mx-2"
        />
      </div>
      {/* POPUP */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed z-[9] inset-0"
          ></div>
          <div className="absolute z-10 bg-yt-white shadow-lg p-2 rounded-md w-72 -left-72 top-1 gap-y-4">
            <div className="flex gap-2 items-start">
              <Image
                src="https://yt3.ggpht.com/SKtlWY3vGARq6QT0jtCFRUzH2hNj7MKwA2mKPOitvXSZNlaODrPSDmo5mh_0grN8kgzhjco1=s88-c-k-c0x00ffffff-no-rj"
                alt="user"
                height={30}
                width={30}
                className="rounded-full cursor-pointer mx-2"
              />
              <div className="flex flex-col gap-2">
                <div>
                  <h4>Mama moo</h4>
                  <p className="text-sm">@user-asdg211</p>
                </div>
                <Link href="/channel/you" className="text-blue-600 text-sm">
                  View your channel
                </Link>
              </div>
            </div>

            {menuItems.map((item) => (
              <>
                <hr className="my-2" />
                <FlatList
                  data={item}
                  keyExtractor={(i) => i.text}
                  RenderItem={(menuItem) => (
                    <MenuButton
                      Icon={<menuItem.Icon size={24} />}
                      text={menuItem.text} truncate={false}
                    />
                  )}
                />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SettingPopup;
