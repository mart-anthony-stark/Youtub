import SectionHeading from "@/components/atoms/Headings/SectionHeading";
import Shorts from "@/components/organisms/Shorts/Shorts";
import { BiLike } from "react-icons/bi";

const LikedVideosSection = () => {
  return (
    <>
      <SectionHeading id="liked-videos" text="Liked Videos" Icon={BiLike} />
      <div className="flex flex-col gap-2">
        <Shorts hasMore={false} length={3} hasHeading={false} className="pl-0 xl:pl-0" />
      </div>
    </>
  );
};

export default LikedVideosSection;
