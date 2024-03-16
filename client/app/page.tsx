import Navbar from "@/components/Navbar";
import VideoCard, { Author } from "@/components/VideoCard";

export default function Home() {
  const author = {
    name: "The Net Ninja",
    profile:
      "https://yt3.googleusercontent.com/ytc/AIdro_nbVbd0SWK0vAJ3MTH-Q8A_JXKliSLyo4slcj9cJg=s900-c-k-c0x00ffffff-no-rj",
  } as Author;

  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col items-center">
      <Navbar />

      <VideoCard
        title="NextJS Crash Course"
        image="https://i.ytimg.com/vi/ZjAqacIC_3c/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBc3blSmtVGX4TsNLvj385ak-6MxQ"
        author={author}
        views="51M"
      />
    </main>
  );
}
