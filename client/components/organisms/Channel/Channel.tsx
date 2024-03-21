import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { MdOutlineSwitchAccount } from "react-icons/md";

const Channel = () => {
  return (
    <div className="flex flex-row flex-wrap mt-4 font-semibold items-center justify-start gap-4 px-4 sm:px-0">
      <div className="flex flex-row">
        <div className="rounded-full overflow-hidden">
          <Image
            src={"https://avatars.githubusercontent.com/u/160461110?v=4.png"}
            alt="Mart Salazar"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap">
        <h3 className="text-yt-black text-lg " />
        <h1 className="text-3xl">Mart Salazar</h1>
        <Text className="text-yt-gray cursor-pointer select-none">
          Create a channel
        </Text>

        <div className="flex flex-row gap-3 pt-2 flex-wrap">
          <Button className="flex flex-row bg-gray-50 gap-1">
            <MdOutlineSwitchAccount />
            <Text>Switch account</Text>
          </Button>
          <Button className="flex flex-row bg-gray-50 gap-1">
            <FaGoogle />
            <Text>Google account</Text>
          </Button>
        </div>
        <div className="flex flex-1 place-items-end"></div>
      </div>
    </div>
  );
};

export default Channel;
