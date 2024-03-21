import React from "react";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";

type ChannelPageProps = {
  params: { handle: string };
};
const ChannelPage = ({ params }: ChannelPageProps) => {
  return (
    <>
      <div className="flex flex-row font-semibold items-center justify-start gap-4">
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
        <div className="flex flex-col">
          <h3 className="text-yt-black text-lg " />
          <Text className="text-4xl">Mart Salazar</Text>
          <Text className="text-yt-gray">Create a channel</Text>

          <div className="flex flex-row gap-3 pt-2">
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
      <hr className="flex flex-1 mt-6" />
    </>
  );
};

export default ChannelPage;
