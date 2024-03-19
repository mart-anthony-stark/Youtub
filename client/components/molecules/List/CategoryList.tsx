import Button from "@/components/atoms/Button/Button";
import React from "react";

type CategoryListProps = {
  categories?: string[];
  active?: string;
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
  "TypeScript",
  "Electronics",
  "Physics",
  "Thrillers"
];

const CategoryList = ({
  categories = cat,
  active = "all",
}: CategoryListProps) => {
  return (
    <div className="flex gap-3 pb-3 overflow-hidden w-full sticky top-[60px] z-20 bg-white px-4">
      {categories.map((category) => (
        <Button
          key={category}
          className={`${
            active.toLowerCase() === category.toLowerCase()
              ? "bg-yt-black text-white hover:bg-yt-black hover:text-white"
              : "bg-gray-200"
          } rounded-md text-sm px-2 font-semibold w-fit text-nowrap`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryList;
