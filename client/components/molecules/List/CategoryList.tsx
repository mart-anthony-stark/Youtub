import Button from "@/components/atoms/Button/Button";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type CategoryListProps = {
  categories?: string[];
  active?: string;
  className?: string;
};

const cat = [
  "All",
  "Cyber Security",
  "Computer Science",
  "Shorts",
  "Music",
  "Anime",
  "AI",
  "Machine Learning",
  "JavaScript",
  "News",
  "Visual",
  "Pop Rock",
];

const CategoryList = ({
  categories = cat,
  active = "all",
  className,
}: CategoryListProps) => {
  return (
    <div
      className={`flex gap-3 pb-3 overflow-x-auto scroll-hidden w-full fixed z-20 bg-white ${className}`}
    >
      {categories.map((category) => (
        <Button
          key={category}
          className={`${
            active.toLowerCase() === category.toLowerCase()
              ? "bg-yt-black text-white hover:bg-yt-black hover:text-white"
              : "bg-gray-200"
          } rounded-md text-sm px-2 font-semibold w-fit text-nowrap whitespace-nowrap`}
        >
          {category}
        </Button>
      ))}
      <Button>
        <IoIosArrowForward
          size={18}
          className="right-0 items-center my-auto justify-end"
        />
      </Button>
    </div>
  );
};

export default CategoryList;
