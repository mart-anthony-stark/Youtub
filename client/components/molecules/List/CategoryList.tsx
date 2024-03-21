import Button from "@/components/atoms/Button/Button";
import React from "react";

type CategoryListProps = {
  categories?: string[];
  active?: string;
  className?: string
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
];

const CategoryList = ({
  categories = cat,
  active = "all",
  className
}: CategoryListProps) => {
  return (
    <div className={`flex gap-3 pb-3 overflow-hidden w-full fixed z-20 bg-white ${className}`}>
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
    </div>
  );
};

export default CategoryList;