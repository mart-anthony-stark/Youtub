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
        <SidePanel />

        <div className="pl-0 sm:px-2 md:pl-16 laptop:pl-0 xl:pl-60 flex flex-col flex-grow pt-16">
          <CategoryList />
          <VideoList />
          <ShortsList />
        </div>
      </div>
    </main>
  );
}
