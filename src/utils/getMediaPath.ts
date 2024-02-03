import { IFileObject } from "@/types/file";
import { SERVER_URL } from "./config";

export const getMediaPath = (data: IFileObject) => {
  // console.log(data);
  // if (data.data.attributes.url) {
  const path = SERVER_URL + data.data.attributes.url;
  return path;
  // } else {
  return "/";
  // }
};
