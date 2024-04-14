import { Video } from "@/lib/types/Video.type";
import { atomWithQuery } from "jotai-tanstack-query";

export const videosAtom = atomWithQuery(() => ({
  queryKey: ['videos'],
  queryFn: async (): Promise<Video[]> => {
    const res = await fetch('/api/videos.json')
    return res.json()
  }
}))