<<<<<<< Updated upstream
import VideoCard, { Author } from "@/components/card/VideoCard";

export default function Home() {
  const author = {
    name: "The Net Ninja",
    profile:
      "https://yt3.googleusercontent.com/ytc/AIdro_nbVbd0SWK0vAJ3MTH-Q8A_JXKliSLyo4slcj9cJg=s900-c-k-c0x00ffffff-no-rj",
  } as Author;

  return (
    <main className="flex min-h-screen bg-gray-50 flex-col items-center justify-between p-24">
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
