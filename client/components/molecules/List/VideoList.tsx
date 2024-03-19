import FlatList from "@/components/atoms/List/FlatList";
import { videos } from "@/lib/api/data";
import React from "react";
import VideoCard from "../Card/VideoCard";

const VideoList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4 py-6">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        RenderItem={(item) => <VideoCard details={item} />}
      />
    </div>
  );
};

export default VideoList;
