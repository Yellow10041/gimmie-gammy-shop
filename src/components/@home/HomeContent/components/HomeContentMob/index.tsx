import clsx from "clsx";
import styles from "./index.module.scss";

import { MainContext } from "@/providers/MainContext";
import { useContext, useEffect, useRef, useState } from "react";

import { ISwiper } from "@/types/Swiper.interface";

import { Swiper, SwiperSlide } from "swiper/react";

import CategoriesMob from "@/components/CategoriesMob";
import PostMob from "@/components/PostMob";
import gsap from "gsap";
import { IPost } from "@/types/post";
import { getMediaPath } from "@/utils/getMediaPath";

interface IHomeContentMobProps {
  posts: IPost[];
}

const HomeContentMob: React.FunctionComponent<IHomeContentMobProps> = ({ posts }) => {
  const { load, modalCreateAccount } = useContext(MainContext);

  const [swiper, setSwiper] = useState<ISwiper>();
  // const [getPost, setGetPost] = useState<number>(3);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isStable, setStable] = useState<boolean>(false);

  const refVideoPlayer = useRef<HTMLVideoElement>(null);
  const refPlay = useRef<HTMLDivElement>(null);

  const swiperSettings = {
    modules: [],

    slidesPerView: 1,
    grabCursor: true,
    speed: 500,
    onSwiper: (swiper: ISwiper) => {
      setSwiper(swiper);
    },
  };

  useEffect(() => {
    if (refVideoPlayer.current) {
      refVideoPlayer.current.volume = 0;
    }

    let inter = setInterval(() => {
      if (refVideoPlayer.current) {
        refVideoPlayer.current.volume = 0;
        refVideoPlayer.current.play();
        if (refVideoPlayer.current.currentTime > 0) {
          clearInterval(inter);
        }
      }
    }, 500);
  }, [load]);

  useEffect(() => {
    // if (activeIndex + 3 == getPost) {
    //   setGetPost((prev) => prev + 1);
    // }

    if (activeIndex == posts.length - 1 && posts.length != 0) {
      modalCreateAccount.openModal();
    }
  }, [activeIndex]);

  const Animation = () => {
    if (refVideoPlayer.current) {
      refVideoPlayer.current.muted = false;
      refVideoPlayer.current.play();
      refVideoPlayer.current.volume = 1;
    }

    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 0.3,
        ease: "power1.inOut",
      },
    });

    tl1.fromTo(
      refPlay.current,
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 1.2,
      }
    );

    tl1.eventCallback("onComplete", () => {
      gsap.set(refPlay.current, {
        display: "none",
      });
    });
  };

  return (
    <div className={clsx(styles.HomeContentMob)}>
      <div className={clsx(styles.HomeContentMob_unmute)} ref={refPlay} onClick={() => Animation()}>
        Unmute
      </div>
      <video
        className={clsx(
          styles.HomeContentMob_videoPlayer
          // posts[activeIndex] == "h" && styles.contain
        )}
        src={getMediaPath(posts[activeIndex].attributes.video)}
        preload="auto"
        playsInline
        loop
        muted
        controls={false}
        onLoadedMetadata={() => {
          setTimeout(() => {
            setStable(true);
          }, 400);
        }}
        ref={refVideoPlayer}
      />
      {/* <div className={clsx(styles.HomeContentMob_categories)}>
        <CategoriesMob />
      </div> */}
      <Swiper
        {...swiperSettings}
        direction="vertical"
        slidesPerView={"auto"}
        className={styles.HomeContentMob_swiper}
        onSlideChangeTransitionStart={() => {
          setActiveIndex(-1);
          setStable(false);
          swiper ? setActiveIndex(swiper.activeIndex) : null;

          if (refVideoPlayer.current) {
            refVideoPlayer.current.muted = false;
            refVideoPlayer.current.play();
            refVideoPlayer.current.volume = 1;
            Animation();
          }
        }}
        onSlideChangeTransitionEnd={() => {
          refVideoPlayer.current?.play();
        }}
      >
        {posts.map((posts: IPost, i: number) => (
          <SwiperSlide className={styles.HomeContentMob_swiper_item} key={i}>
            <PostMob isStable={isStable} {...posts} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeContentMob;
