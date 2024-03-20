export type Channel = {
  name: string;
  profile_img: string;
};

export type Video = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  channel: Channel;
  duration?: number;
  views: string;
  thumbnail: string;
  path: string;
};
