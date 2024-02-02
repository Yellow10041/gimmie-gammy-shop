import { instance } from "@/api/api.interseptor";
import { IPostsResponse } from "@/types/post";
import { API_URL } from "@/utils/config";

export const PostService = {
  async getAll() {
    const response = await instance.get<IPostsResponse>(`${API_URL}/posts`);

    return response.data;
  },

  // async getBySlugOrId(slugOrId: string) {
  //   const response = await instance.get<IPostsResponse>(`${API_URL}/blogs/${slugOrId}`);
  //   return response.data;
  // },
};
