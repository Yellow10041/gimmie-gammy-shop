"use client";

import React, { useContext, useEffect } from "react";

import { MainContext } from "@/providers/MainContext";
import HomeContentDesk from "./components/HomeContentDesk";
import HomeContentMob from "./components/HomeContentMob";
import { IPost } from "@/types/post";

interface IHomeContentProps {
  id?: string | string[];
  posts: IPost[];
}

const HomeContent: React.FunctionComponent<IHomeContentProps> = ({ id, posts }) => {
  const { windowWidth, setVideoID } = useContext(MainContext);

  const compareRandom = () => {
    return Math.random() - 0.5;
  };

  useEffect(() => {
    id ? setVideoID(Number(id)) : setVideoID(-1);

    posts.sort(compareRandom);
  }, []);

  return <>{windowWidth > 1025 ? <HomeContentDesk posts={posts} /> : <HomeContentMob posts={posts} />}</>;
};

export default HomeContent;
