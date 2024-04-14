import FlatList from "@/components/atoms/List/FlatList";
import React from "react";
import VideoCard from "../Card/VideoCard";
import { useAtom } from "jotai";
import { videosAtom } from "@/atoms/videoAtom";
import { Video } from "@/lib/types/Video.type";

const VideoList = () => {
  const [{data: videos}] = useAtom(videosAtom)

  if(!videos){
    return <></>
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:pl-2 xl:pl-8 gap-3 sm:px-0 md:px-2 py-6">
      <FlatList
        data={videos}
        keyExtractor={(item: Video) => item.id}
        RenderItem={(item) => <VideoCard details={item} />}
      />
    </div>
  );
};

export default VideoList;
