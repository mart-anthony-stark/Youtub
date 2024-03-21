"use client";

import FlatList from "@/components/atoms/List/FlatList";
import VideoCard from "@/components/molecules/Card/VideoCard";
import CategoryList from "@/components/molecules/List/CategoryList";
import VideoPlayer from "@/components/organisms/VideoPlayer/VideoPlayer";
import { videos } from "@/lib/api/data";
import { Video } from "@/lib/types/Video.type";
import { Suspense, useState } from "react";

const WatchVideo = () => {
  const [data, setData] = useState(videos[0]);

  const handleOnFetch = (video: Video) => {
    setData(video);
  };
  return (
    <div className="grid lg:grid-cols-[1fr_400px]">
      <div className="grid">
        <Suspense>
          <VideoPlayer onFetch={handleOnFetch} />
        </Suspense>
      </div>

      <div className="hidden lg:block fixed w-[400px] bg-yt-white right-0 top-[92px]">
        <CategoryList className="sticky"/>
        <div className="scroll overflow-auto flex flex-col gap-4" style={{height: 'calc(100vh - 95px)'}}>
          <FlatList
            data={videos.filter((video) => video.slug !== data.slug)}
            keyExtractor={(item) => item.id}
            RenderItem={(video) => (
              <VideoCard details={video} direction="row" className="grid grid-cols-2 gap-4" />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
