import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import { IoMdShareAlt } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import Button from "@/components/atoms/Button/Button";
import ShortsChannel from "@/components/molecules/Card/ShortsChannel";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";

type ShortsComponentProps = {
  params: { handle: string };
};

const ShortsComponent = ({ params }: ShortsComponentProps) => {
  return (
    <div className="flex flex-row justify-center items-center px-2">
      <ShortsChannel
        details={{
          id: "",
          slug: "",
          title: "",
          description: undefined,
          channel: {
            name: "",
            profile_img: "",
            subscribers: "",
          },
          duration: undefined,
          views: "",
          thumbnail: "",
          path: "",
        }}
      />
      <div className="flex flex-col gap-4 rounded-full mt-4 ml-2">
        <div className="flex flex-col items-center">
          <Button className="bg-gray-200">
            <BiLike size={24} color="black" className="rounded-full" />
          </Button>
          <Text>9K</Text>
        </div>
        <div className="flex flex-col items-center">
          <Button className="bg-gray-200">
            <BiDislike size={24} color="black" />
          </Button>
          <Text>Dislike</Text>
        </div>
        <div className="flex flex-col items-center">
          <Button className="bg-gray-200">
            <LiaCommentSolid size={24} color="black" />
          </Button>
          <Text>56</Text>
        </div>
        <div className="flex flex-col items-center">
          <Button className="bg-gray-200">
            <IoMdShareAlt size={24} color="black" />
          </Button>
          <Text>Share</Text>
        </div>
        <div className="flex flex-col items-center">
          <Button className="bg-gray-200">
            <CiMenuKebab size={28} color="black" />
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="flex rounded-sm gap-4"
            src={"https://avatars.githubusercontent.com/u/160461110?v=4.png"}
            alt="Author"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default ShortsComponent;