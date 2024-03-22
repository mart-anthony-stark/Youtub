"use client";

import MenuButton from "@/components/atoms/Button/MenuButton";
import React, { useContext } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import Link from "next/link";
import { SidepanelContext } from "@/components/templates/MainTemplate";
import MiniSideBar from "@/components/molecules/Sidebar/MiniSideBar";
import HomeButtons from "@/components/molecules/MenuItems/HomeButtons";
import UserButtons from "@/components/molecules/MenuItems/UserButtons";
import SubscriptionsButtons from "@/components/molecules/MenuItems/SubscriptionsButtons";
import ExploreButtons from "@/components/molecules/MenuItems/ExploreButtons";
import MoreButtons from "@/components/molecules/MenuItems/MoreButtons";

const SidePanel = () => {
  let { isOpen } = useContext(SidepanelContext);

  return (
    <>
      <div
        className={`hidden w-16 fixed top-[60px] pt-2 left-0 z-50 scroll ${
          isOpen && "md:flex"
        } flex-col overflow-y-auto xl:w-60 px-2 bg-white`}
        style={{ height: "calc(100vh - 60px)" }}
      >
        <HomeButtons />

        <hr className="mt-4" />

        <UserButtons />

        <hr className="mt-4" />

        <p className="font-bold mb-2 pl-3 select-none mt-3">Subscriptions</p>

        <SubscriptionsButtons />

        <hr className="mt-4" />

        <p className="font-bold mb-2 pl-3 select-none mt-3">Explore</p>

        <ExploreButtons />

        <hr className="mt-4" />

        <p className="font-bold mb-2 pl-3 select-none mt-3">
          More from YouTube
        </p>
        <MoreButtons />

        <hr className="mt-4" />

        <MenuButton text="Settings" Icon={<IoSettingsOutline size={24} />} />
        <MenuButton text="Report history" Icon={<MdOutlineFlag size={24} />} />
        <MenuButton text="Help" Icon={<IoIosHelpCircleOutline size={24} />} />
        <MenuButton
          text="Send feedback"
          Icon={<MdOutlineFeedback size={24} />}
        />

        <hr className="mt-4" />

        <div className="flex flex-wrap text-gray-700 text-xs p-3 gap-1">
          <div className="flex flex-row gap-1">
            <Link href={"https://about.youtube/"}>About</Link>
            <Link href={"https://blog.youtube/"}>Press</Link>
            <Link
              href={
                "https://www.youtube.com/howyoutubeworks/policies/copyright/"
              }
            >
              Copyright
            </Link>
          </div>
          <div>
            <Link href={"https://www.youtube.com/t/contact_us/"}>
              Contact us{" "}
            </Link>
            <Link href={"https://www.youtube.com/ads/"}></Link>Creators
          </div>
          <div>
            <Link href={"https://www.youtube.com/ads/"}>Advertise</Link>
            <Link href={"https://developers.google.com/youtube"}>
              Developers
            </Link>
          </div>
          <div className="pt-4 gap-2">
            <Link href={"https://www.youtube.com/t/terms"}>Terms</Link>
            <Link href={"https://policies.google.com/privacy?hl=en"}>
              Privacy
            </Link>
            <Link
              href={
                "https://www.youtube.com/howyoutubeworks/policies/community-guidelines/"
              }
            >
              Policy & Safety
            </Link>
          </div>
          <Link
            href={
              "https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen"
            }
          >
            How YouTube works
          </Link>
          <Link href={"https://www.youtube.com/new"}>Test new features</Link>
        </div>
        <p className="text-gray-400 pl-4 text-xs mt-1"> © 2024 Google LLC</p>
      </div>
      <div className="hidden md:block">
        <MiniSideBar />
      </div>
    </>
  );
};

export default SidePanel;
