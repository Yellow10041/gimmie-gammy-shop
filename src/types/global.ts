import { IFileObject } from "./file";

export interface IMetadata {
  pageSize: number;
  pageCount: number;
  page: number;
  total: number;
}

export interface IMetadataDefault {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface BaseFields {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface IBrandData {
  title: string;
  logo: IFileObject;
}

export type IBrand = ServerComponent<IBrandData>;

export interface ISocial {
  id: number;
  type: "Facebook" | "LinkedIn";
  url: string;
}

export interface IBenefit {
  id: number;
  title: string;
  text: string;
  icon: IFileObject;
}

export type ServerResponse<T> = {
  results: T[];
  metadata: IMetadata;
};

export type ServerDataResponse<T> = {
  data: T[];
  metadata: IMetadata;
};

export type ServerComponent<T> = {
  data: {
    attributes: T;
    id: number;
  };
};
