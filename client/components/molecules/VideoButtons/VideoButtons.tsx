import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiShareForwardLine } from "react-icons/ri";

const VideoButtons = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <div>
        <Button className="rounded-r-none border">
          <BiLike size={26} />
        </Button>
        <Button className="rounded-l-none border">
          <BiDislike size={26} />
        </Button>
      </div>

      <Button className="flex items-center gap-2 border">
        <RiShareForwardLine size={26} />
        <Text>Share</Text>
      </Button>

      <Button className="flex items-center gap-2 border">
        <LiaDownloadSolid size={26} />
        <Text>Download</Text>
      </Button>

      <Button>
        <IoIosMore size={26} />
      </Button>
    </div>
  );
};

export default VideoButtons;
