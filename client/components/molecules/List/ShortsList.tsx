import ShortsCard from "../Card/ShortsCard";
import { Video } from "@/lib/types/Video.type";

type ShortsListProps = {
  items: Video[][];
};
const ShortsList = ({ items }: ShortsListProps) => {
  return (
    <div className="w-full overflow-hidden">
      {items?.length !== 0 &&
        items?.map((videoGroup, index) => (
          <div
            key={`videoGroup-${index}`}
            className="h-full flex gap-4 overflow-x-auto w-full mb-9"
            style={{ scrollbarWidth: "none" }}
          >
            {videoGroup.map((video) => (
              <ShortsCard key={video.id} details={video} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default ShortsList;
