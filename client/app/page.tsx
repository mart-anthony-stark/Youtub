import CategoryList from "@/components/molecules/List/CategoryList";
import VideoList from "@/components/molecules/List/VideoList";
import Shorts from "@/components/organisms/Shorts/Shorts";
import MainTemplate from "@/components/templates/MainTemplate";
import SkeletonLoader from "@/components/molecules/Card/SkeletonLoader";
import FlatList from "@/components/atoms/List/FlatList";
import { Suspense } from "react";

export default function Home() {
  return (
    <MainTemplate hasSidePanel>
      <div className="relative">
        <Suspense>
          <CategoryList className="px-4 sm:px-0 md:px-2 xl:px-8" />
        </Suspense>
      </div>
      <div className="pt-12">
        <VideoList />
        <Shorts className="pl-4 sm:pl-2 lg:pl-2 xl:pl-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-2 xl:pl-8">
          <FlatList
            data={Array(6).fill(0)}
            keyExtractor={(item, index) => `${item}-${index}`}
            RenderItem={(item) => <SkeletonLoader />}
          />
        </div>
      </div>
    </MainTemplate>
  );
}
