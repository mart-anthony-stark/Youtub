import FlatList from "@/components/atoms/List/FlatList";
import ShortsCard from "../Card/ShortsCard";
import { videos } from "@/lib/api/data";
import { SiYoutubeshorts } from "react-icons/si";

const ShortsList = () => {
  return (
    <>
      <div className="w-full flex gap-2 items-center p-4">
        <SiYoutubeshorts size={30} color="red"/>
        <h2 className="text-xl text-yt-black font-medium">Shorts</h2>
      </div>

      <div
        className="flex gap-4 overflow-x-auto w-full mb-9"
        style={{ scrollbarWidth: "none" }}
      >
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          RenderItem={(item) => <ShortsCard details={item} />}
        />
      </div>
    </>
  );
};

export default ShortsList;
