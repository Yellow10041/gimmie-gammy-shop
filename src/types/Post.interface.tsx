export interface IPostStatistic {
  likes: number;
  comments: number;
  repost: number;
}

export interface ILook {
  imgPath: string;
  name: string;
  price: number;
  sizes: ILookSize[];
}

export interface ILookSize {
  size: string;
  available: boolean;
}

export interface IAccount {
  username: string;
  avatarPath: string;
}

export interface IPost {
  id: number;
  videoSrc: string;
  orientation: "h" | "v";
  statistic: IPostStatistic;
  title?: (game: string, nickname: string, price: number) => string;
  account?: IAccount;
  look?: ILook[];
}
