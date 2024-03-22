import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import { ElementType } from "react";
import { GrHistory } from "react-icons/gr";

type Props = {
  Icon: ElementType;
  text: string;
  hasMore?: boolean;
  iconSize?: number;
  id?:string;
  className?: string;
};
const SectionHeading = ({ Icon, text, hasMore, iconSize, id, className }: Props) => {
  return (
    <div id={id} className={`flex justify-between items-center ${className}`}>
      <div className="flex gap-2 items-center">
        <Icon size={iconSize || 20} />
        <h2 className="text-xl font-extrabold">{text}</h2>
      </div>

      {hasMore && (
        <Button className="px-4 hover:bg-blue-100">
          <Text weight="bold" className="text-blue-600">
            See all
          </Text>
        </Button>
      )}
    </div>
  );
};

export default SectionHeading;
