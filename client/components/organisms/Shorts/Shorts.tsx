"use client";

import { videos } from "@/lib/api/data";
import { useEffect, useState } from "react";
import { groupBy } from "@/lib/utils";
import { Video } from "@/lib/types/Video.type";
import Button from "@/components/atoms/Button/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ShortsHeading from "@/components/molecules/Headings/ShortsHeading";
import ShortsList from "@/components/molecules/List/ShortsList";

type ShortsProps = { hasHeading?: boolean, className?: string };
const Shorts = ({ hasHeading = true, className }: ShortsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<Video[][]>([videos]);

  useEffect(() => {
    const result = groupBy(videos, 6);
    const shownItems = isOpen ? result : [result[0]];
    setItems(shownItems);
  }, [isOpen]);

  const handleShowMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative overflow-hidden w-[90vw] laptop:w-auto pl-4 xl:pl-8 ${className}`}>
      {hasHeading && <ShortsHeading />}

      {/* LIST */}
      {items ? <ShortsList items={items} /> : null}

      <div className="flex w-full items-center mb-4">
        <hr className="flex-1 " />
        <Button
          onClick={handleShowMore}
          className="px-6 sm:px-32 border-gray-200 border flex gap-2 font-small items-center outline-none"
        >
          Show {isOpen ? "less" : "more"}{" "}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <hr className="flex-1" />
      </div>
    </div>
  );
};

export default Shorts;
