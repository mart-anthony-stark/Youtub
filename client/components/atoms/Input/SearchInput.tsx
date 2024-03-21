import React, { ChangeEvent, ChangeEventHandler } from "react";

type SearchInputProps = {
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({
  placeholder,
  className,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      className={`h-10 pl-5 pr-2 w-full rounded-l-full text-sm focus-within:border-blue-600 shadow-sm outline-none border border-gray-400 mr-[1px] ${className}`}
      style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)'}}
    />
  );
};

export default SearchInput;
