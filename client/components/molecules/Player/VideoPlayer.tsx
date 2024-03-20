"use client";

import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import { videos } from "@/lib/api/data";
import { Video } from "@/lib/types/Video.type";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ReactPlayer from "react-player";

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
  }, []);

  return (
    <Suspense>
      <div className="flex flex-col">
        <ReactPlayer
          url={data?.path}
          controls={true}
          width="100%"
          height="400px"
          light={false}
          pip={true}
        />
        <div className="mt-4 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{data?.title}</h1>

          <div className="flex gap-4">
            <Image
              className="bg-black rounded-full"
              src={data.channel.profile_img}
              height={40}
              width={40}
              alt={data.title}
            />

            <div className="flex flex-col justify-between">
              <Text size="md" weight="medium">
                {data.channel.name}
              </Text>
              <Text className="text-yt-gray">{data.channel.subscribers} subscribers</Text>
            </div>

            <Button className="bg-yt-black text-white px-8 hover:bg-black">Subscribe</Button>
          </div>
          <Text>{data?.description}</Text>
        </div>
      </div>
    </Suspense>
  );
};

export default VideoPlayer;
