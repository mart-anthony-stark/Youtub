import { SiYoutubeshorts } from "react-icons/si";

const ShortsHeading = () => {
  return (
    <div className="w-full flex gap-2 items-center py-4">
      <SiYoutubeshorts size={30} color="red" />
      <h2 className="text-xl text-yt-black font-medium">Shorts</h2>
    </div>
  );
};

export default ShortsHeading;
