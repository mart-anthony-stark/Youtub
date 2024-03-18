import ShortsCard from "../Card/ShortsCard";
import { videos } from "@/lib/api/data";

const ShortsList = () => {
  return (
    <div
      className="flex gap-4 py-4 overflow-x-auto w-full my-9"
      style={{ scrollbarWidth: "none" }}
    >
      <ShortsCard details={videos[0]} />
      <ShortsCard details={videos[0]} />
      <ShortsCard details={videos[0]} />
      <ShortsCard details={videos[0]} />
      <ShortsCard details={videos[0]} />
      <ShortsCard details={videos[0]} />
      <ShortsCard details={videos[0]} />
      <ShortsCard details={videos[0]} />
    </div>
  );
};

export default ShortsList;
