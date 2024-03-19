import VideoCard from "@/components/molecules/Card/VideoCard";
import AppBar from "@/components/molecules/AppBar/AppBar";
import { videos } from "@/lib/api/data";
import SidePanel from "@/components/molecules/SidePanel/SidePanel";

export default function Home() {
  const video = videos[0];

  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col items-center">
      <AppBar />
      <div className="flex gap-4 w-full">
        <SidePanel side={["Home", "Shorts", ""]} active={""} />
        <VideoCard details={video} />
      </div>
    </main>
  );
}
