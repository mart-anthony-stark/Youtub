import React from "react";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import { Channel } from "@/lib/types/Video.type";

const ChannelInfo = ({ channel }: { channel: Channel }) => {
  return (
    <div className="flex gap-3 flex-wrap items-center w-full">
      <Image
        className="bg-black rounded-full"
        src={channel.profile_img}
        height={40}
        width={40}
        alt={channel.name}
      />
      <div className="flex flex-col justify-between">
        <Text size="md" weight="medium">
          {channel.name}
        </Text>
        <Text className="text-yt-gray">{channel.subscribers} subscribers</Text>
      </div>
    </div>
  );
};

export default ChannelInfo;
