import Text from "@/components/atoms/Text/Text";
import { Video } from "@/lib/types/Video.type";
import Image from "next/image";
import Link from "next/link";

type VideoCardProps = {
  details: Video;
  direction?: "col" | "row";
  className?: string;
};

const VideoCard = ({
  details,
  direction = "col",
  className,
}: VideoCardProps) => {
  return (
    <Link href={`/watch?v=${details.slug}`}>
      <div
        className={`flex flex-${direction} gap-2 cursor-pointer w-full ${className}`}
      >
        <div className="relative w-fit">
          <div className="max-w-[600px] max-h-[400px] overflow-hidden">
            <Image
              src={details.thumbnail}
              className="sm:rounded-xl min-w-[320px] sm:min-w-[200px] w-full h-auto object-contain"
              alt="image"
              width={600}
              height={400}
            />
          </div>

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
            <h3 className="text-bold text-lg dark:text-white">
              {details.title}
            </h3>

            <Text className="text-yt-gray">{details.channel?.name}</Text>
            <Text className="text-yt-gray">
              <span>{details.views} views</span> <span>•</span>{" "}
              <span>2 years ago</span>
            </Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
