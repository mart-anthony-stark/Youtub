import VideoCard from "@/components/molecules/Card/VideoCard";
import AppBar from "@/components/molecules/AppBar/AppBar";
import SidePanel from "@/components/molecules/SidePanel/SidePanel";
import ShortsList from "@/components/molecules/List/ShortsList";
import CategoryList from "@/components/molecules/List/CategoryList";
import VideoList from "@/components/molecules/List/VideoList";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col items-center">
      <AppBar />
      <div>
        <SidePanel side={["Home", "Shorts", ""]} active={"Home"} />

        <div className="ml-60 px-2 flex flex-col flex-grow">
          <CategoryList />
          <VideoList />
          <ShortsList />
        </div>
      </div>
    </main>
  );
}
