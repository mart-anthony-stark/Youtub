"use client";
import Button from "@/components/atoms/Button/Button";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex h-10 flex-1 relative w-1/3 text-gray-600 rounded-full">
      <input
        type={"search"}
        name={"search"}
        placeholder={"Search"}
        className="h-10 px-5 pr-10 w-full rounded-l-full text-sm border border-gray-400"
        style={{boxShadow: 'none'}}
      />
      <Button className="bg-gray-100 py-0 rounded-r-full rounded-l-none border border-gray-400 border-l-0 p-4">
        <IoIosSearch size={24} />
      </Button>
    </div>
  );
};

export default SearchBar;
