import { FC, ReactNode } from "react";

type FlatListProps<T> = {
  data: T[];
  keyExtractor: (item: T) => string;
  RenderItem: (item: T) => ReactNode;
};

const FlatList = <T,>({
  data,
  keyExtractor,
  RenderItem,
}: FlatListProps<T>): JSX.Element => {
  return (
    <>
      {data?.map((item: any) => (
        <RenderItem key={keyExtractor(item)} {...item} />
      ))}
    </>
  );
};

export default FlatList;