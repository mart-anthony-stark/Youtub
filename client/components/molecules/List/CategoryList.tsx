"use client";

import Button from "@/components/atoms/Button/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IoIosArrowForward } from "react-icons/io";

type CategoryListProps = {
  categories?: string[];
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
  "Rock",
];

const CategoryList = ({ categories = cat, className }: CategoryListProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const active = searchParams.get("category");

  const activeClassName =
    "bg-yt-black text-white hover:bg-yt-black hover:text-white";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleClick = (category: string) => {
    router.push(
      pathName + "?" + createQueryString("category", category.toLowerCase())
    );
  };

  return (
    <div
      className={`flex gap-3 pb-3 overflow-x-auto scroll-hidden w-full fixed z-20 bg-white ${className}`}
    >
      {categories.map((category) => (
        <Button
          key={category}
          className={`${
            active?.toLowerCase() === category.toLowerCase() ||
            (!active && category.toLowerCase() === "all")
              ? activeClassName
              : "bg-gray-200"
          } rounded-md text-sm px-2 font-semibold w-fit text-nowrap whitespace-nowrap`}
          onClick={() => handleClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryList;
