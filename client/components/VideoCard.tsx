import Image from "next/image";

export type Author = {
  name: string;
  profile: string;
};

type VideoCardProps = {
  title: string;
  author: Author;
  views: string;
  image: string;
};

const VideoCard = ({ author, title, views, image }: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <Image
          src={image}
          className="rounded-xl min-w-[280px]"
          alt="image"
          height={200}
          width={350}
        />
        <div className="bg-black bg-opacity-80 text-white absolute bottom-1 right-1 p-1 rounded-md text-xs">
          15:30
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <Image
          src={author.profile}
          className="bg-black rounded-full"
          alt={title}
          height={50}
          width={50}
        />
        <div className="flex items-start flex-col">
          <h3 className="text-bold text-lg dark:text-white">{title}</h3>

          <p className="text-xs text-yt-gray">{author.name}</p>
          <p className="text-xs text-yt-gray">{views} views 2 years ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
