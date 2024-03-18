import FlatList from "@/components/atoms/List/FlatList";
import ShortsCard from "../Card/ShortsCard";
import { videos } from "@/lib/api/data";
import { Video } from "@/lib/types/Video.type";

const ShortsList = () => {
  return (
    <div
      className="flex gap-4 py-4 overflow-x-auto w-full my-9"
      style={{ scrollbarWidth: "none" }}
    >
      <FlatList
        data={videos}
        keyExtractor={(data: Video) => data.id!}
        RenderItem={(data: Video) => <ShortsCard details={data} />}
      />
    </div>
  );
};

export default ShortsList;
