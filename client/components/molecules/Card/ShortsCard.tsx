"use client";

import { Video } from "@/lib/types/Video.type";
import Image from "next/image";

type VideoCardProps = {
  details: Video;
};

const ShortsCard = ({ details }: VideoCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="relative rounded-lg overflow-hidden h-[300px] w-[200px]">
        <Image
          src={details.thumbnail}
          alt={details.title}
          fill
          className="bg-yt-black object-contain"
        />

        <div className="absolute sm:hidden bottom-0 flex flex-col gap-1 text-white p-2">
          <p className="font-medium">{details.title}</p>
          <p className="text-sm">{details.views} views</p>
        </div>
      </div>

      <div className="hidden sm:block">
        <p className="font-medium">{details.title}</p>
        <p className="text-sm text-yt-gray">{details.views} views</p>
      </div>
    </div>
  );
};

export default ShortsCard;
