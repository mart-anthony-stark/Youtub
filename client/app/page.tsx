import AppBar from "@/components/molecules/AppBar/AppBar";
import SidePanel from "@/components/organisms/SidePanel/SidePanel";
import CategoryList from "@/components/molecules/List/CategoryList";
import VideoList from "@/components/molecules/List/VideoList";
import Shorts from "@/components/organisms/Shorts/Shorts";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate hasSidePanel>
      <div className="relative">
        <CategoryList className="px-4 sm:px-0 md:px-2 xl:px-8" />
      </div>
      <div className="pt-12">
        <VideoList />
        <Shorts className="pl-4 sm:pl-2 lg:pl-2 xl:pl-8"/>
      </div>
    </MainTemplate>
  );
}
