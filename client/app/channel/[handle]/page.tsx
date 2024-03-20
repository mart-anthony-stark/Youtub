import React from "react";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import MenuButton from "@/components/atoms/Button/MenuButton";
import VideoCard from "@/components/molecules/Card/VideoCard";

type ChannelPageProps = {
  text: string;
};
const ChannelPage = ({ text }: ChannelPageProps) => {
  return (
    <div className="flex flex-row font-semibold items-center justify-center gap-4">
      <div className="flex flex-row">
        <div className="rounded-full overflow-hidden">
          <Image
            src={"https://avatars.githubusercontent.com/u/160461110?v=4.png"}
            alt="Mart Salazar"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-yt-black text-lg " />
        <Text className="text-4xl">Mart Salazar</Text>
        <Text className="text-yt-gray">Create a channel</Text>

        <div className="flex flex-row">
          <MenuButton
            className="flex pr-6 rounded-full"
            text="Switch account"
            Icon={<MdOutlineSwitchAccount />}
          />
          <MenuButton text="Google account" Icon={<FaGoogle />} />
        </div>
        <div className="flex flex-1 place-items-end">
          <hr className="flex flex-1 " />
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
