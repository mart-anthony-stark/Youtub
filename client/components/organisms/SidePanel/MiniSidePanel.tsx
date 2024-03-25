"use client";

import Button from "@/components/atoms/Button/Button";
import FlatList from "@/components/atoms/List/FlatList";
import Text from "@/components/atoms/Text/Text";
import { SidepanelContext } from "@/contexts";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";

const MiniSideBar = () => {
  const { isOpen } = useContext(SidepanelContext);
  const router = useRouter();

  const menuItems = [
    {
      name: "Home",
      icon: {
        name: GoHomeFill,
        size: 24,
      },
      path: "/",
    },
    {
      name: "Shorts",
      icon: {
        name: SiYoutubeshorts,
        size: 24,
        color: 'red'
      },
      path: "/shorts",
    },
    {
      name: "Subs",
      icon: {
        name: MdOutlineSubscriptions,
        size: 24,
      },
      path: "/subscriptions",
    },
    {
      name: "You",
      icon: {
        name: PiVideo,
        size: 24,
      },
      path: "/channel/you",
    },
  ];

  return (
    <div
      className={`mini-sidepanel hidden w-16 fixed z-30 top-view-screen left-0 scroll md:flex flex-col overflow-y-auto overflow-x-hidden xl:hidden px-2 bg-white h-view-screen`}
      style={{
        display: !isOpen ? "flex" : "",
      }}
    >
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        RenderItem={(item) => (
          <div
            onClick={() => router.push(item.path)}
            className="flex flex-col items-center"
          >
            <Button className="flex rounded-md flex-col items-center">
              <item.icon.name size={item.icon.size} color={item.icon.color}/>
              <Text size="xs">{item.name}</Text>
            </Button>
          </div>
        )}
      />
    </div>
  );
};

export default MiniSideBar;
