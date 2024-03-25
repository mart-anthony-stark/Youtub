"use client";

import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import { IoMdShareAlt } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import Button from "@/components/atoms/Button/Button";
import ShortsChannel from "@/components/molecules/Card/ShortsChannel";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import { videos } from "@/lib/api/data";
import MainTemplate from "@/components/templates/MainTemplate";
import { redirect } from "next/navigation";
import { useState } from "react";

type ShortsComponentProps = {
  params: { short: string };
  isReady: boolean;
};

const ShortsComponent = ({ params }: ShortsComponentProps) => {
  const video = videos.find((video) => video.slug === params.short);
  const [isReady, setIsReady] = useState(false);
  if (!video) {
    return redirect("/");
  }
  const handleOnReady = () => {
    setIsReady(true);
  };
  return (
    <MainTemplate>
      <div className="flex flex-row justify-center items-end px-2">
        <ShortsChannel onReady={handleOnReady} details={video!} />
        <div className="flex flex-col gap-4 rounded-full mt-4 ml-2">
          <div className="flex flex-col items-center">
            <Button className="bg-gray-200">
              <BiLike size={24} color="black" className="rounded-full" />
            </Button>
            <Text>9K</Text>
          </div>
          <div className="flex flex-col items-center">
            <Button className="bg-gray-200">
              <BiDislike size={24} color="black" />
            </Button>
            <Text>Dislike</Text>
          </div>
          <div className="flex flex-col items-center">
            <Button className="bg-gray-200">
              <LiaCommentSolid size={24} color="black" />
            </Button>
            <Text>56</Text>
          </div>
          <div className="flex flex-col items-center">
            <Button className="bg-gray-200">
              <IoMdShareAlt size={24} color="black" />
            </Button>
            <Text>Share</Text>
          </div>
          <div className="flex flex-col items-center">
            <Button className="bg-gray-200">
              <CiMenuKebab size={28} color="black" />
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="flex rounded-sm gap-4"
              src={"https://avatars.githubusercontent.com/u/160461110?v=4.png"}
              alt="Author"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default ShortsComponent;
