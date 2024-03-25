"use client";

import ShortsChannel from "@/components/molecules/Card/ShortsChannel";
import { videos } from "@/lib/api/data";
import MainTemplate from "@/components/templates/MainTemplate";
import { redirect } from "next/navigation";
import { useState } from "react";
import ShortsButtons from "@/components/molecules/ShortsButtons/ShortsButtons.";

type ShortsComponentProps = {
  params: { short: string };
};

const ShortsComponent = ({ params }: ShortsComponentProps) => {
  const video = videos.find((video) => video.slug === params.short);
  const [isReady, setIsReady] = useState(false);
  if (!video) {
    return redirect("/");
  }
  const handleOnReady = () => {
    setIsReady(true);
  };
  return (
    <MainTemplate>
      <div className="flex flex-row justify-center items-end px-2">
        <ShortsChannel onReady={handleOnReady} details={video} />
        {isReady && <ShortsButtons />}
      </div>
    </MainTemplate>
  );
};

export default ShortsComponent;
