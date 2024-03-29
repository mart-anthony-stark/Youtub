"use client";

import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import { videos } from "@/lib/api/data";
import { Video } from "@/lib/types/Video.type";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ChannelInfo from "../../molecules/ChannelInfo/ChannelInfo";
import VideoButtons from "../../molecules/VideoButtons/VideoButtons";
import SpinningLoader from "@/components/atoms/Loader/SpinningLoader";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";

type VideoPlayerProps = {
  onFetch?: (data: Video) => void;
};

const VideoPlayer = ({ onFetch }: VideoPlayerProps) => {
  const [data, setData] = useState<Video | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const videoSlug = useSearchParams().get("v");

  useEffect(() => {
    const result = videos.find((video) => video.slug === videoSlug);
    if (!result) return redirect("/");

    setData(result);

    if (onFetch) {
      onFetch(result);
    }
  }, [onFetch, videoSlug]);

  const Loader = () => (
    <div className="h-[450px] flex justify-center items-center">
      <SpinningLoader />
    </div>
  );

  if (!data) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
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
          <Text weight="bold" size="xl">
            {data?.title}
          </Text>

          <div className="flex justify-between flex-wrap gap-2">
            <div className="flex w-full md:w-max gap-2 md:gap-8 items-center">
              <ChannelInfo channel={data?.channel} />

              <Button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`${isSubscribed ? 'px-5':'px-8'} flex gap-2 items-center`}
                color={isSubscribed ? `gray` : `black`}
              >
                {isSubscribed && <IoIosNotificationsOutline size={20}/>}
                {isSubscribed ? "Subscribed" : "Subscribe"}
                {isSubscribed && <IoIosArrowDown size={20}/>}
              </Button>
            </div>

            <VideoButtons />
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="flex gap-2">
              <p className="font-bold text-sm">{data.views} views</p>
              <p className="font-bold text-sm">2 years ago</p>
            </div>
            <Text>{data?.description}</Text>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default VideoPlayer;
