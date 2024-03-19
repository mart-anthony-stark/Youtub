"use client";

import ShortsCard from "../Card/ShortsCard";
import { videos } from "@/lib/api/data";
import { SiYoutubeshorts } from "react-icons/si";
import { useCallback, useEffect, useState } from "react";
import { groupBy } from "@/lib/utils";
import { Video } from "@/lib/types/Video.type";
import Button from "@/components/atoms/Button/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ShortsList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<Video[][]>([videos]);

  useEffect(()=>{
    const result = groupBy(videos, 8);
    const shownItems = isOpen ? result : [result[0]];
    setItems(shownItems);
  }, [isOpen])

  const handleShowMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative overflow-hidden w-[97vw] laptop:w-full">
      <div className="w-full flex gap-2 items-center p-4">
        <SiYoutubeshorts size={30} color="red" />
        <h2 className="text-xl text-yt-black font-medium">Shorts</h2>
      </div>

      {/* LIST */}
      <div className="max-w-[1080px] w-full overflow-hidden pl-4">
        {items.length !== 0 &&
          items.map((videoGroup, index) => (
            <div
              key={`videoGroup-${index}`}
              className="h-full flex gap-4 overflow-x-auto w-full mb-9"
              style={{ scrollbarWidth: "none" }}
            >
              {videoGroup.map((video) => (
                <ShortsCard key={video.id} details={video} />
              ))}
            </div>
          ))}
      </div>

      <div className="flex w-full items-center mb-4">
        <hr className="flex-1 " />
        <Button
          onClick={handleShowMore}
          className="px-20 border-gray-200 border flex gap-2 font-medium items-center"
        >
          Show {isOpen ? "less" : "more"}{" "}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <hr className="flex-1" />
      </div>
    </div>
  );
};

export default ShortsList;
