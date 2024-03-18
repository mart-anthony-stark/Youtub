<<<<<<< Updated upstream
import VideoCard from "@/components/molecules/Card/VideoCard";
import Navbar from "@/components/molecules/Navbar/Navbar";
import { videos } from "@/lib/api/data";

export default function Home() {
  const video = videos[0]

  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col items-center">
      <Navbar />
      <VideoCard
        title="NextJS Crash Course"
        image="https://i.ytimg.com/vi/ZjAqacIC_3c/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBc3blSmtVGX4TsNLvj385ak-6MxQ"
        author={author}
        views="51M"
      />
=======
import VideoCard from "@/components/molecules/Card/VideoCard";
import Navbar from "@/components/molecules/AppBar/AppBar";
import { videos } from "@/lib/api/data";

export default function Home() {
  const video = videos[0];

  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col items-center">
      <Navbar />
      <VideoCard details={video} />
>>>>>>> Stashed changes
    </main>
  );
}
