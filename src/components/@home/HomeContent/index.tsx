"use client";

import React, { useContext, useEffect } from "react";

import { MainContext } from "@/providers/MainContext";
import HomeContentDesk from "./components/HomeContentDesk";
import HomeContentMob from "./components/HomeContentMob";

interface IHomeContentProps {
  id?: string | string[];
}

const HomeContent: React.FunctionComponent<IHomeContentProps> = ({ id }) => {
  const { windowWidth, setVideoID } = useContext(MainContext);

  useEffect(() => {
    console.log(id);
    id ? setVideoID(Number(id)) : setVideoID(-1);
  }, []);

  return (
    <React.Fragment>
      {windowWidth > 1025 ? <HomeContentDesk /> : <HomeContentMob />}
    </React.Fragment>
  );
};

export default HomeContent;
