import Button from "@/components/atoms/Button/Button";
import MenuButton from "@/components/atoms/Button/MenuButton";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TbFlame } from "react-icons/tb";
import { PiMusicNote } from "react-icons/pi";
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

type SidePanelProps = {
  side: string[];
  active: string;
};

const channels: Channel[] = [
  {
    name: "Jocelyn Necio",
    profile_img: "https://avatars.githubusercontent.com/u/160461110?v=4.png",
  },
  {
    name: "Anthony Stark",
    profile_img: "https://github.com/mart-anthony-stark/CV-Vanilla-JS-SPA/blob/main/src/assets/images/mart-white-bg.png?raw=true"
  },
  {
    name: "Justin Viber",
    profile_img: 'https://avatars.githubusercontent.com/u/83799855?v=4.png'
  },
  {
    name: "JR Siaboc",
    profile_img: 'https://avatars.githubusercontent.com/u/160460651?v=4'
  },
  {
    name: "LeanNotFound",
    profile_img: 'https://avatars.githubusercontent.com/u/113871679?v=4.png'
  },
  {
    name: "JepJep",
    profile_img: "https://avatars.githubusercontent.com/u/90635364?v=4"
  }
];

const SidePanel = ({ side, active }: SidePanelProps) => {
  return (
    <div
      className="fixed top-[60px] z-50 scroll flex flex-col overflow-y-auto w-[14rem] px-2 bg-white"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <MenuButton text="Home" Icon={<GoHomeFill size={24} />} active />
      <MenuButton
        text="Shorts"
        Icon={<SiYoutubeshorts size={24} color="red" />}
      />
      <MenuButton
        text="Subscriptions"
        Icon={<MdOutlineSubscriptions size={24} />}
      />

      <hr className="mt-4" />

      <Button className="flex outline-none select-none rounded-md pl-3 font-bold px-8 justify-start">
        You
      </Button>

      <MenuButton text="History" Icon={<GrHistory size={22} />} />
      <MenuButton text="Watch later" Icon={<MdAccessTime size={24} />} />
      <MenuButton text="Liked Videos" Icon={<BiLike size={24} />} />

      <hr className="mt-4" />

      <p className="font-bold mb-2 pl-3 select-none mt-3">Subscriptions</p>

      {<FlatList data={channels} keyExtractor={(item)=>item.name} RenderItem={(channel)=><MenuButton
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
        />}/>}

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

      <p className="font-bold mb-2 pl-3 select-none mt-3">More from YouTube</p>
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
      <MenuButton text="Send feedback" Icon={<MdOutlineFeedback size={24} />} />

      <hr className="mt-4" />

      <div className="flex flex-wrap text-gray-700 font-serif text-sm p-3 gap-1">
        <Link href={"https://about.youtube/"}>About</Link>
        <Link href={"https://blog.youtube/"}>Press</Link>
        <Link
          href={"https://www.youtube.com/howyoutubeworks/policies/copyright/"}
        >
          Copyright
        </Link>
        <Link href={"https://www.youtube.com/t/contact_us/"}>Contact us </Link>
        <Link href={"https://www.youtube.com/ads/"}>Advertise</Link>
        <Link href={"https://developers.google.com/youtube"}>Developers</Link>
        <Link href={"https://www.youtube.com/t/terms"}>Terms</Link>
        <Link href={"https://policies.google.com/privacy?hl=en"}>Privacy</Link>
        <Link
          href={
            "https://www.youtube.com/howyoutubeworks/policies/community-guidelines/"
          }
        >
          Policy & Safety
        </Link>
        <Link
          href={
            "https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen"
          }
        >
          How YouTube works
        </Link>
        <Link href={"https://www.youtube.com/new"}>Test new features</Link>
      </div>
      <p className="text-gray-400 pl-4 text-sm mt-1"> © 2024 Google LLC</p>
    </div>
  );
};

export default SidePanel;
