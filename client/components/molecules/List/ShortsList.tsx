import FlatList from "@/components/atoms/List/FlatList";
import ShortsCard from "../Card/ShortsCard";
import { videos } from "@/lib/api/data";

const ShortsList = () => {
  return (
    <div
      className="flex gap-4 py-4 overflow-x-auto w-full my-9"
      style={{ scrollbarWidth: "none" }}
    >
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        RenderItem={(item) => <ShortsCard details={item} />}
      />
    </div>
  );
};

export default ShortsList;
