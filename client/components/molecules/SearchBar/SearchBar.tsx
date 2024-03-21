"use client";
import Button from "@/components/atoms/Button/Button";
import SearchInput from "@/components/atoms/Input/SearchInput";
import { ChangeEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  };
  return (
    <div className="flex h-10 flex-1 relative max-w-6xl w-full text-gray-600 rounded-full">
      <SearchInput value={input} onChange={handleChangeInput} placeholder="Search" />
      <Button className="bg-gray-100 py-0 rounded-r-full rounded-l-none border border-gray-400 border-l-0 p-4">
        <IoIosSearch size={24} />
      </Button>
    </div>
  );
};

export default SearchBar;
