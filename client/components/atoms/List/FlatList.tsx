import { ReactNode } from "react";

type FlatListProps<T> = {
  data: T[];
  keyExtractor: (item: T, index: number) => string | number;
  RenderItem: (item: T) => ReactNode;
};

const FlatList = <T,>({
  data,
  keyExtractor,
  RenderItem,
}: FlatListProps<T>) => {
  return (
      data?.map((item: T, index: number) => (
        <RenderItem key={keyExtractor(item, index)} {...item} />
      ))
  );
};

export default FlatList;
