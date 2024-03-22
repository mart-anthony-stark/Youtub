import MenuButton from "@/components/atoms/Button/MenuButton";
import FlatList from "@/components/atoms/List/FlatList";
import { channels } from "@/lib/api/data";
import Image from "next/image";
import React from "react";

const SubscriptionsButtons = () => {
  return (
    <FlatList
      data={channels}
      keyExtractor={(item) => item.name}
      RenderItem={(channel) => (
        <MenuButton
          key={channel.name}
          text={channel.name}
          Icon={
            <Image
              src={channel.profile_img}
              width={30}
              height={30}
              className="rounded-full"
              alt={channel.name}
            />
          }
        />
      )}
    />
  );
};

export default SubscriptionsButtons;
