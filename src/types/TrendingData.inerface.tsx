import React from "react";

interface ILookCard {
  imgUrl: string;
}

interface ISmallCard {
  avatar: string;
  nickname: string;
}

export interface ITrendingData {
  title: React.ReactNode;
  people?: ISmallCard[];
  looks?: ILookCard[];
}
