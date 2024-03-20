"use client";

import Text from "@/components/atoms/Text/Text";
import { videos } from "@/lib/api/data";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Player = () => {
  const [data, setData] = useState(videos[0]);
  const videoSlug = useSearchParams().get("v");

  useEffect(() => {
    const result = videos.find((video) => video.slug === videoSlug);
    if (!result) return redirect("/");

    setData(result);
  }, []);

  return (
    <Suspense>
    <div className="flex flex-col">
      <div className="max-w-xl w-full"></div>
      <ReactPlayer
        url={data?.path}
        controls={true}
        width="100%"
        height="400px"
        light={false}
        pip={true}
      />
      <h1 className="text-2xl font-bold">{data?.title}</h1>
      <Text>{data?.description}</Text>
    </div>
    </Suspense>
  );
};

export default Player;
