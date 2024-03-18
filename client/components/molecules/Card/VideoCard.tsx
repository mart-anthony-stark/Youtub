import { Video } from "@/lib/types/Video.type";
import Image from "next/image";

type VideoCardProps = {
  details: Video;
};

const VideoCard = ({ details }: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer w-full">
      <div className="relative w-fit">
        <Image
          src={details.thumbnail}
          className="rounded-xl min-w-[280px] w-full"
          alt="image"
          height={200}
          width={350}
        />
        {details.duration && (
          <div className="bg-black bg-opacity-80 text-white absolute bottom-1 right-1 p-1 rounded-md text-xs">
            {Math.floor(details.duration / 60)}: {details.duration % 60}
          </div>
        )}
      </div>

      <div className="flex gap-4 items-start">
        <Image
          src={details.channel.profile_img}
          className="bg-black rounded-full"
          alt={details.title}
          height={50}
          width={50}
        />

        <div className="flex items-start flex-col">
          <h3 className="text-bold text-lg dark:text-white">{details.title}</h3>

          <p className="text-xs text-yt-gray">{details.channel?.name}</p>
          <p className="text-xs text-yt-gray">
            {details.views} views 2 years ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
