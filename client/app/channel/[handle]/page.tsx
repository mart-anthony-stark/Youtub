import MainTemplate from "@/components/templates/MainTemplate";
import Channel from "@/components/organisms/Channel/Channel";
import { GrHistory } from "react-icons/gr";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import Shorts from "@/components/organisms/Shorts/Shorts";

type ChannelPageProps = {
  params: { handle: string };
};
const ChannelPage = ({ params }: ChannelPageProps) => {

  return (
    <MainTemplate hasSidePanel containerClassName="xl:pl-20">
      <Channel />

      <div className="flex flex-col gap-2 py-4 pl-16 px-4 laptop:px-0">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <GrHistory size={20} />
            <h2 className="text-xl font-extrabold">History</h2>
          </div>

          <Button className="px-4 hover:bg-blue-100">
            <Text weight="bold" className="text-blue-600">
              See all
            </Text>
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <Shorts hasHeading={false} className="pl-0 xl:pl-0"/>
        </div>
      </div>
    </MainTemplate>
  );
};

export default ChannelPage;
