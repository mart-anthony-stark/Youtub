import SectionHeading from "@/components/atoms/Headings/SectionHeading";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";

const WatchLaterSection = () => {
  return (
    <>
      <SectionHeading id="watch-later" className="mt-6" text="Watch Later" Icon={MdAccessTime} iconSize={28} />
      <div className="flex flex-col p-2 items-center justify-center">
        <Image width={300} height={350} alt="No Items" src={"/svg/video.svg"} />
        <Text className="text-yt-gray">No items to show.</Text>
      </div>
    </>
  );
};

export default WatchLaterSection;
