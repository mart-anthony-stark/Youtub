import Button from "@/components/atoms/Button/Button";
import React from "react";

type CategoryListProps = {
  categories: string[];
  active: string;
};

const CategoryList = ({ categories, active }: CategoryListProps) => {
  return (
    <div className="flex gap-4 mb-2 overflow-hidden w-full">
      {categories.map((category) => (
        <Button
          key={category}
          className={`${
            active.toLowerCase() === category.toLowerCase()
              ? "bg-yt-black text-white hover:bg-yt-black hover:text-white"
              : "bg-gray-200"
          } rounded-md text-sm px-2 py-1 font-medium w-fit text-nowrap`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryList;
