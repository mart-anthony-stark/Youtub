"use client";

import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import { videos } from "@/lib/api/data";
import { Video } from "@/lib/types/Video.type";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiShareForwardLine } from "react-icons/ri";
import ReactPlayer from "react-player";
import ChannelInfo from "../../molecules/ChannelInfo/ChannelInfo";
import VideoButtons from "../../molecules/VideoButtons/VideoButtons";

type VideoPlayerProps = {
  onFetch?: (data: Video) => void;
};

const VideoPlayer = ({ onFetch }: VideoPlayerProps) => {
  const [data, setData] = useState(videos[0]);
  const videoSlug = useSearchParams().get("v");

  useEffect(() => {
    const result = videos.find((video) => video.slug === videoSlug);
    if (!result) return redirect("/");

    setData(result);

    if (onFetch) {
      onFetch(result);
    }
  }, [onFetch, videoSlug]);

  return (
    <Suspense>
      <div className="flex flex-col">
        <ReactPlayer
          url={data?.path}
          controls={true}
          width="100%"
          height="450px"
          light={false}
          pip={true}
        />
        <div className="mt-4 flex flex-col gap-3 px-2 sm:px-0">
          <Text weight="bold" size="xl">{data?.title}</Text>

          <div className="flex justify-between flex-wrap gap-2">
            <div className="flex w-full md:w-max gap-2 md:gap-8">
              <ChannelInfo channel={data?.channel} />

              <Button className="px-8" color="black">
                Subscribe
              </Button>
            </div>

            <VideoButtons />
          </div>
          <Text>{data?.description}</Text>
        </div>
      </div>
    </Suspense>
  );
};

export default VideoPlayer;
