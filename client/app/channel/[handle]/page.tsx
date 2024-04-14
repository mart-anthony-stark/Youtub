import MainTemplate from "@/components/templates/MainTemplate";
import Channel from "@/components/organisms/Channel/Channel";
import { GrHistory } from "react-icons/gr";
import Shorts from "@/components/organisms/Shorts/Shorts";
import SectionHeading from "@/components/atoms/Headings/SectionHeading";
import WatchLaterSection from "@/components/molecules/Sections/WatchLaterSection";
import LikedVideosSection from "@/components/molecules/Sections/LikeVideosSection";
import { useAtom } from "jotai";
import { videosAtom } from "@/atoms/videoAtom";

type ChannelPageProps = {
  params: { handle: string };
};
const ChannelPage = ({ params }: ChannelPageProps) => {
  const [{data: videos}] = useAtom(videosAtom)
  return (
    <MainTemplate hasSidePanel containerClassName="xl:pl-20 overflow-hidden">
      <Channel />

      <div className="flex flex-col gap-8 py-4 px-4 sm:px-0 laptop:px-0">
        <SectionHeading text="History" Icon={GrHistory} hasMore />
        <div className="flex flex-col gap-2">
          <Shorts videos={videos!} hasHeading={false} className="pl-0 xl:pl-0" />
        </div>

        <WatchLaterSection />
        <LikedVideosSection />
      </div>
    </MainTemplate>
  );
};

export default ChannelPage;
