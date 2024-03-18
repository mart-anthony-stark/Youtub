import VideoCard from "@/components/molecules/Card/VideoCard";
import Navbar from "@/components/molecules/AppBar/AppBar";
import { videos } from "@/lib/api/data";

export default function Home() {
  const video = videos[0];

  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col items-center">
      <Navbar />
      <VideoCard details={video} />
    </main>
  );
}
