import AppBar from "@/components/molecules/AppBar/AppBar";
import SidePanel from "@/components/organisms/SidePanel/SidePanel";
import CategoryList from "@/components/molecules/List/CategoryList";
import VideoList from "@/components/molecules/List/VideoList";
import Shorts from "@/components/organisms/Shorts/Shorts";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white dark:bg-yt-black flex-col">
      <AppBar />
      <div>
        <SidePanel />

        <div className="pl-0 sm:px-2 md:pl-16 laptop:pl-0 xl:pl-60 flex flex-col flex-grow">
          <div className="relative">
            <CategoryList className="px-4 md:px-2 xl:px-8"/>
          </div>
          <div className="pt-12">
            <VideoList />
            <Shorts />
          </div>
        </div>
      </div>
    </main>
  );
}
