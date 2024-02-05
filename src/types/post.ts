import { IFileObject } from "./file";
import { BaseFields, IBrand, ServerComponent, ServerDataResponse } from "./global";

export interface IPostClothesSize extends BaseFields {
  size: string;
  available: boolean;
}

export interface IPostHashtag extends BaseFields {
  id: number;
  title: string;
}

export interface IPostClothes extends BaseFields {
  image: IFileObject;
  title: string;
  price: number;
  sizes: IPostClothesSize[];
}

export interface IPostAttributes extends BaseFields {
  title?: string;
  video: IFileObject;
  brand: IBrand;
  clothes: IPostClothes[];
  hashtags: IPostHashtag[];
}

export interface IPost extends BaseFields {
  attributes: IPostAttributes;
}

export type IPostsResponse = ServerDataResponse<IPost>;
