"use client";

import FlatList from "@/components/atoms/List/FlatList";
import VideoCard from "@/components/molecules/Card/VideoCard";
import CommentCard from "@/components/molecules/Comment/CommentCard";
import CategoryList from "@/components/molecules/List/CategoryList";
import VideoPlayer from "@/components/organisms/VideoPlayer/VideoPlayer";
import { videoComments, videos } from "@/lib/api/data";
import { Video } from "@/lib/types/Video.type";
import { Suspense, useState } from "react";

const WatchVideo = () => {
  const [data, setData] = useState(videos[0]);

  const handleOnFetch = (video: Video) => {
    setData(video);
  };
  function item(item: any, index: number): string | number {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="grid lg:grid-cols-[1fr_400px]">
      <div className="grid">
        <Suspense>
          <VideoPlayer onFetch={handleOnFetch} />
          <div className="flex flex-col w-full mt-5">
            <FlatList
              data={videoComments}
              keyExtractor={(item) => item.id}
              RenderItem={(comment) => (
                <CommentCard
                  comment={comment.comment}
                  handle={comment.handle}
                  reacts={comment.reacts}
                  like={comment.like}
                  dislikes={comment.dislikes}
                />
              )}
            />
          </div>
        </Suspense>
      </div>

      <div className="hidden lg:block fixed w-[400px] bg-yt-white right-0 top-[60px]">
        <CategoryList className="sticky" />
        <div
          className="scroll overflow-auto flex flex-col gap-4 pb-8"
          style={{ height: "calc(100vh - 95px)" }}
        >
          <FlatList
            data={videos.filter((video) => video.slug !== data.slug)}
            keyExtractor={(item) => item.id}
            RenderItem={(video) => (
              <VideoCard
                details={video}
                direction="row"
                hasChannelIcon={false}
                className="grid grid-cols-2 gap-4"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
