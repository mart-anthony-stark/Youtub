"use client";

import Text from "@/components/atoms/Text/Text";
import { Video } from "@/lib/types/Video.type";
import Image from "next/image";

type VideoCardProps = {
  details: Video;
};

const ShortsCard = ({ details }: VideoCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="relative rounded-lg overflow-hidden h-[350px] w-[200px]">
        <Image
          src={details.thumbnail}
          alt={details.title}
          fill
          className="bg-yt-black object-contain"
        />

        <div className="absolute sm:hidden bottom-0 flex flex-col gap-1 text-white p-2">
          <Text weight="medium">{details.title}</Text>
          <Text>{details.views} views</Text>
        </div>
      </div>

      <div className="hidden sm:block">
        <Text weight="medium">{details.title}</Text>
        <Text className="text-yt-gray">{details.views} views</Text>
      </div>
    </div>
  );
};

export default ShortsCard;
