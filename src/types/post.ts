import { IFileObject } from "./file";
import { BaseFields, IBrand, ServerComponent, ServerDataResponse } from "./global";

export interface IPostClothesSize extends BaseFields {
  size: string;
  available: boolean;
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
}
export interface IPost extends BaseFields {
  attributes: IPostAttributes;
}

export type IPostsResponse = ServerDataResponse<IPost>;
