import Image from "next/image";

export type Author = {
  name: string,
  profile: string
}

type VideoCardProps = {
  title: string,
  author: Author,
  views: string,
  image: string,
}

const VideoCard = ({author, title, views, image}: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={image}
        alt="image"
        height={200}
        width={350}
      />

      <div className="flex gap-4 items-start">
        <Image
          src={author.profile}
          className="bg-black rounded-full"
          alt={title}
          height={50}
          width={50}
        />
        <div className="flex items-start flex-col">
          <h3 className="text-bold text-lg">{title}</h3>


          <p className="text-xs text-gray-600">{author.name}</p>
          <p className="text-xs text-gray-600">{views} views 2 years ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
