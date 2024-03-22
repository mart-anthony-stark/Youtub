import React from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text/Text";
import MenuButton from "@/components/atoms/Button/MenuButton";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@/components/atoms/Button/Button";

type CommentCardProps = {
  comment: string;
  handle: string;
  reacts: string;
  like: string;
  dislikes: string;
  onClick?: () => void;
};

const CommentCard = ({
  comment,
  handle,
  reacts,
  like,
  dislikes,
}: CommentCardProps) => {
  return (
    <>
      <div className="grid grid-cols-[40px_1fr] items-start gap-4">
        <div className="w-auto h-auto">
          <Image
            src={"https://avatars.githubusercontent.com/u/160461110?v=4.png"}
            alt="image"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-0">
          <Text className="text-sm">{handle}</Text>
          <div className="flex flex-row flex-wrap gap-2">
            <Text className="text-yt-black">{comment} </Text>
            <Text className=" text-yt-gray">3 minutes ago</Text>
          </div>

          <div className="flex flex-row items-center">
            <Button>
              <BiLike />
            </Button>
            <Text className="px-0 text-sm">{reacts}</Text>
            <Button>
              <BiDislike />
            </Button>
            <div className="flex flex-row gap-2">
              <MenuButton
                className="text-bold rounded-sm"
                text={"Reply"}
                Icon={undefined}
              />
            </div>
          </div>
          
          <div className="flex gap-1 cursor-pointer p-1 pb-2 items-center">
            <IoIosArrowDown />
            <Text>2 replies</Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
