import { Video } from "@/lib/types/Video.type";
import Image from "next/image";
import Link from "next/link";

type ShortsChannelProps = {
  details: Video;
};

const ShortsChannel = ({ details }: ShortsChannelProps) => {
  return (
    <Link href={`/watch?v=${details.slug}`}>
      <div className="cursor-pointer">
        <div className="relative rounded-3xl gap-3 items-center overflow-hidden h-[550px] w-[350px]">
          <Image
            src={details.thumbnail}
            alt={details.title}
            fill
            className="bg-yt-black object-contain"
          />
        </div>
      </div>
    </Link>
  );
};

export default ShortsChannel;
