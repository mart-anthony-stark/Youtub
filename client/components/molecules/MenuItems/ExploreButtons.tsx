import MenuButton from "@/components/atoms/Button/MenuButton";
import { BiMovie } from "react-icons/bi";
import { CiTrophy } from "react-icons/ci";
import { GiHanger } from "react-icons/gi";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiMusicNote } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { TbFlame } from "react-icons/tb";

const ExploreButtons = () => {
  return (
    <>
      <MenuButton text="Trending" Icon={<TbFlame size={24} />} />
      <MenuButton text="Music" Icon={<PiMusicNote size={24} />} />
      <MenuButton text="Movies" Icon={<BiMovie size={24} />} />
      <MenuButton text="Music" Icon={<MdOutlineSubscriptions size={24} />} />
      <MenuButton text="Gaming" Icon={<SiYoutubegaming size={24} />} />
      <MenuButton text="News" Icon={<LuNewspaper size={24} />} />
      <MenuButton text="Sports" Icon={<CiTrophy size={24} />} />
      <MenuButton text="Fashion & Beauty" Icon={<GiHanger size={24} />} />
    </>
  );
};

export default ExploreButtons;
