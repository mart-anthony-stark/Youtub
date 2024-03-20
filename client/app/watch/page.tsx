"use client";

import Player from "@/components/molecules/Player/Player";
import { Suspense, useEffect, useState } from "react";

const WatchVideo = () => {
  return (
    <Suspense>
      <Player />
    </Suspense>
  );
};

export default WatchVideo;
