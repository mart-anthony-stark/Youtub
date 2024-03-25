"use client";

import SpinningLoader from "@/components/atoms/Loader/SpinningLoader";
import { Video } from "@/lib/types/Video.type";
import { Suspense } from "react";
import ReactPlayer from "react-player";

type ShortsChannelProps = {
  details: Video;
  onReady: ((player: ReactPlayer) => void) | undefined;
};

const ShortsChannel = ({ details, onReady }: ShortsChannelProps) => {
  return (
    <Suspense fallback={<SpinningLoader />}>
      <div className="cursor-pointer">
        <div className="relative rounded-lg gap-3 items-center overflow-hidden h-[550px] max-w-[350px] w-full">
          <ReactPlayer
            url={details.path}
            width="100%"
            height="100%"
            light={false}
            pip={true}
            onReady={onReady}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default ShortsChannel;
