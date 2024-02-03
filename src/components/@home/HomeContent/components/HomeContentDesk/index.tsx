import clsx from "clsx";
import styles from "./index.module.scss";

import { useLayoutEffect, useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "@/providers/MainContext";

import Welcome from "@/components/@home/Welcome";
import Post from "@/components/Post";
import { IPost } from "@/types/post";

interface IHomeContentDeskProps {
  posts: IPost[];
}

const HomeContentDesk: React.FunctionComponent<IHomeContentDeskProps> = ({ posts }) => {
  const { modalFullScreenVideo, load, modalCreateAccount } = useContext(MainContext);

  const [activePost, setActivePost] = useState<number>(0);
  const [getPost, setGetPost] = useState<number>(3);

  const refScrollContent = useRef<HTMLDivElement>(null);

  const SetSVolumeOnVideos = () => {
    let videos = document.getElementsByTagName("video");
    const videoArray = Array.from(videos) as HTMLVideoElement[];
    videoArray.map((video) => {
      video.volume = 0.3;
    });
  };

  const SetSettingsOnVideos = () => {
    let videos = document.getElementsByTagName("video");
    let videoArray = Array.from(videos) as HTMLVideoElement[];
    videoArray = videoArray.filter((video) => video.classList.contains("videoList"));

    // console.log(videoArray[0]);

    videoArray.map((video) => {
      video.volume = 0.3;
      video.pause();
    });
  };

  const HandleScroll = () => {
    SetSVolumeOnVideos();

    let videos = document.getElementsByTagName("video");
    let videoArray = Array.from(videos) as HTMLVideoElement[];
    videoArray = videoArray.filter((video) => video.classList.contains("videoList"));

    let distanceToTop: Array<[number, HTMLVideoElement]> = [];

    videoArray.map((video, i) => {
      let videoPos = video.getBoundingClientRect();
      let videoPosTop = videoPos.top;
      let videoPosTopABS = Math.abs(videoPosTop);
      distanceToTop[i] = [videoPosTopABS, video];
    });

    distanceToTop.sort((a, b) => a[0] - b[0]);

    let newActiveIndex = Number(distanceToTop[0][1].dataset.index);

    if (newActiveIndex != activePost) {
      distanceToTop = distanceToTop.slice(1, distanceToTop.length);
      distanceToTop.map((video) => {
        video[1].pause();
      });
    }
    setActivePost(newActiveIndex);
  };

  useLayoutEffect(() => {
    if (refScrollContent.current) {
      refScrollContent.current.addEventListener("scroll", HandleScroll);
      return () => refScrollContent.current?.removeEventListener("scroll", HandleScroll);
    }
  }, []);

  useEffect(() => {
    SetSettingsOnVideos();

    let inter = setInterval(() => {
      let videos = document.getElementsByTagName("video");
      let videoArray = Array.from(videos) as HTMLVideoElement[];
      videoArray = videoArray.filter((video) => video.classList.contains("videoList"));
      videoArray[0]?.play();
      if (videoArray[0]?.currentTime > 0) {
        clearInterval(inter);
      }
    }, 500);
  }, [load]);

  useEffect(() => {
    load && !modalFullScreenVideo.isActive && HandleScroll();
  }, [modalFullScreenVideo.isActive]);

  useEffect(() => {
    if (activePost + 3 == getPost) {
      setGetPost((prev) => prev + 1);
    }

    if (activePost == posts.length - 1 && posts.length != 0) {
      modalCreateAccount.openModal();
    }

    let videos = document.getElementsByTagName("video");
    let videoArray = Array.from(videos) as HTMLVideoElement[];

    let videoActive = videoArray.filter((video) => video.classList.contains("videoList") && Number(video.dataset.index) == activePost)[0];

    videoArray = videoArray.filter((video) => video.classList.contains("videoList") && Number(video.dataset.index) != activePost);

    if (videoActive) {
      if (videoActive.dataset.pause == "false") {
        videoActive.play();
        videoActive.volume = 0.3;
      } else {
      }
      videoArray.map((video) => {
        video.pause();
      });
    } else {
      videoArray.map((video) => {
        video.pause();
      });
    }
  }, [activePost]);

  return (
    <div className={clsx(styles.HomeContentDesk)} ref={refScrollContent}>
      <Welcome />
      {posts.slice(0, getPost).map((e: IPost, i: number) => (
        <Post post={e} index={i} key={i} />
      ))}
    </div>
  );
};

export default HomeContentDesk;
