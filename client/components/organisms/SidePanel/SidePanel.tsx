"use client";

import Button from "@/components/atoms/Button/Button";
import MenuButton from "@/components/atoms/Button/MenuButton";
import React, { createContext, use, useContext } from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TbFlame } from "react-icons/tb";
import { PiMusicNote, PiVideo } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { LuNewspaper } from "react-icons/lu";
import { CiTrophy } from "react-icons/ci";
import { GiHanger } from "react-icons/gi";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Channel } from "@/lib/types/Video.type";
import FlatList from "@/components/atoms/List/FlatList";
import Text from "@/components/atoms/Text/Text";
import { SlArrowRight } from "react-icons/sl";
import { usePathname, useRouter } from "next/navigation";
import { SidepanelContext } from "@/components/templates/MainTemplate";
import MiniSideBar from "@/components/molecules/Sidebar/MiniSideBar";

const SidebarContext = createContext(null);

const channels: Channel[] = [
  {
    name: "Jocelyn Necio",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/160461110?v=4.png",
  },
  {
    name: "Anthony Stark",
    subscribers: "3K",
    profile_img:
      "https://github.com/mart-anthony-stark/CV-Vanilla-JS-SPA/blob/main/src/assets/images/mart-white-bg.png?raw=true",
  },
  {
    name: "Justin Viber",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/83799855?v=4.png",
  },
  {
    name: "JR Siaboc",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/160460651?v=4",
  },
  {
    name: "LeanNotFound",
    subscribers: "2K",
    profile_img: "https://avatars.githubusercontent.com/u/113871679?v=4.png",
  },
  {
    name: "JepJep",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/90635364?v=4",
  },
];

const SidePanel = () => {
  const router = useRouter();
  const pathName = usePathname();
  let { isOpen } = useContext(SidepanelContext);

  return (
    <>
      <div
        className={`hidden w-16 fixed top-[60px] pt-2 left-0 z-50 scroll ${
          isOpen && "md:flex"
        } flex-col overflow-y-auto xl:w-60 px-2 bg-white`}
        style={{ height: "calc(100vh - 60px)" }}
      >
        <MenuButton
          onClick={() => router.push("/")}
          text="Home"
          Icon={<GoHomeFill size={24} />}
          active={pathName === "/"}
        />
        <MenuButton
          text="Shorts"
          Icon={<SiYoutubeshorts size={24} color="red" />}
        />
        <MenuButton
          text="Subscriptions"
          Icon={<MdOutlineSubscriptions size={24} />}
        />

        <hr className="mt-4" />

        <Button
          onClick={() => router.push("/channel/you")}
          className={`flex outline-none select-none rounded-md pl-3 font-bold px-8 gap-4 items-center justify-start ${
            pathName === "/channel/you" &&
            "bg-gray-200 text-black font-bold hover:bg-gray-300 hover:text-bold"
          }`}
        >
          <p>You</p>
          <SlArrowRight size={12} />
        </Button>

        <MenuButton text="History" Icon={<GrHistory size={22} />} />
        <MenuButton text="Watch later" Icon={<MdAccessTime size={24} />} />
        <MenuButton text="Liked Videos" Icon={<BiLike size={24} />} />

        <hr className="mt-4" />

        <p className="font-bold mb-2 pl-3 select-none mt-3">Subscriptions</p>

        {
          <FlatList
            data={channels}
            keyExtractor={(item) => item.name}
            RenderItem={(channel) => (
              <MenuButton
                key={channel.name}
                text={channel.name}
                Icon={
                  <Image
                    src={channel.profile_img}
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt={channel.name}
                  />
                }
              />
            )}
          />
        }

        <hr className="mt-4" />

        <p className="font-bold mb-2 pl-3 select-none mt-3">Explore</p>
        <MenuButton text="Trending" Icon={<TbFlame size={24} />} />
        <MenuButton text="Music" Icon={<PiMusicNote size={24} />} />
        <MenuButton text="Movies" Icon={<BiMovie size={24} />} />
        <MenuButton text="Music" Icon={<MdOutlineSubscriptions size={24} />} />
        <MenuButton text="Gaming" Icon={<SiYoutubegaming size={24} />} />
        <MenuButton text="News" Icon={<LuNewspaper size={24} />} />
        <MenuButton text="Sports" Icon={<CiTrophy size={24} />} />
        <MenuButton text="Fashion & Beauty" Icon={<GiHanger size={24} />} />

        <hr className="mt-4" />

        <p className="font-bold mb-2 pl-3 select-none mt-3">
          More from YouTube
        </p>
        <MenuButton
          text="Youtube Premium"
          Icon={<PiYoutubeLogoFill size={24} color="red" />}
        />

        <MenuButton
          text="Youtube Music"
          Icon={<SiYoutubemusic size={24} color="red" />}
        />
        <MenuButton
          text="Youtube Kids"
          Icon={<TbBrandYoutubeKids size={24} color="red" />}
        />

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
