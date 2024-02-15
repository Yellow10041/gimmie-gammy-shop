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
import { IconLoader } from "@/public/img/icons/loader";

interface IHomeContentMobProps {
  posts: IPost[];
}

const HomeContentMob: React.FunctionComponent<IHomeContentMobProps> = ({ posts }) => {
  const { load, modalCreateAccount } = useContext(MainContext);

  const [swiper, setSwiper] = useState<ISwiper>();
  const [getPost, setGetPost] = useState<number>(3);
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

  const playVideo = () => {
    let inter = setInterval(() => {
      if (refVideoPlayer.current) {
        let promise = refVideoPlayer.current.play();

        if (promise !== undefined) {
          promise
            .then((_) => {
              // Autoplay started!
            })
            .catch((error) => {
              // Autoplay was prevented.
              // Show a "Play" button so that user can start playback.
            });
        }

        setTimeout(() => {
          if (refVideoPlayer.current && refVideoPlayer.current.currentTime > 0.02) {
            setStable(true);
            console.log("play video");
            clearInterval(inter);
          }
        }, 50);
      }
    }, 50);

    // refVideoPlayer.current && refVideoPlayer.current.play();
  };

  // useEffect(() => {
  //   if (isStable && swiper) {
  //     gsap.set(swiper.wrapperEl, {
  //       pointerEvents: "all",
  //     });
  //   }
  // }, [isStable]);

  useEffect(() => {
    if (refVideoPlayer.current) {
      refVideoPlayer.current.volume = 0;
    }
  }, []);

  // useEffect(() => {
  //   if (refVideoPlayer.current) {
  //     refVideoPlayer.current.volume = 0;
  //   }

  //   let inter = setInterval(() => {
  //     if (refVideoPlayer.current) {
  //       refVideoPlayer.current.volume = 1;
  //       refVideoPlayer.current.play();

  //       setTimeout(() => {
  //         if (refVideoPlayer.current && refVideoPlayer.current.currentTime > 1) {
  //           console.log("play video");
  //           clearInterval(inter);
  //         }
  //       }, 50);
  //     }
  //   }, 50);
  // }, [load]);

  useEffect(() => {
    if (activeIndex + 3 >= getPost) {
      setGetPost((prev) => prev + 1);
    }

    if (activeIndex == posts.length - 1 && posts.length != 0) {
      modalCreateAccount.openModal();
    }
  }, [activeIndex]);

  const Animation = () => {
    if (refVideoPlayer.current) {
      refVideoPlayer.current.muted = false;
      refVideoPlayer.current.volume = 1;
    }

    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 0.3,
        ease: "power1.inOut",
      },
    });

    tl1.to(refPlay.current, {
      opacity: 0,
      scale: 1.2,
    });

    tl1.eventCallback("onComplete", () => {
      gsap.set(refPlay.current, {
        display: "none",
      });
    });
  };

  useEffect(() => {
    if (isStable == true && refVideoPlayer.current) {
      // refVideoPlayer.current.muted = false;
      // refVideoPlayer.current.volume = 1;
      playVideo();
    }
  }, [isStable]);

  useEffect(() => {
    const play = () => {
      let inter = setInterval(() => {
        if (refVideoPlayer.current) {
          refVideoPlayer.current.muted = false;
          refVideoPlayer.current.volume = 1;

          let promise = refVideoPlayer.current.play();

          if (promise !== undefined) {
            promise
              .then((_) => {
                // Autoplay started!
              })
              .catch((error) => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
              });
          }

          setTimeout(() => {
            if (refVideoPlayer.current && refVideoPlayer.current.currentTime > 1) {
              console.log("play video");
              clearInterval(inter);
            }
          }, 50);
        }
      }, 50);
    };

    window.addEventListener("click", play);

    return () => window.removeEventListener("click", play);
  }, []);

  const [countVideoLoading, setCountVideoLoading] = useState<number>(0);

  const videoLoad = () => {
    setCountVideoLoading((prev) => {
      console.log(`start load video ${prev + 1}`);
      return prev + 1;
    });
  };

  return (
    <div className={clsx(styles.HomeContentMob)}>
      {/* <div className={clsx(styles.HomeContentMob_unmute)} ref={refPlay} onClick={() => Animation()}>
        Unmute
      </div> */}

      {/* {!isStable && (
        <div className={clsx(styles.HomeContentMob_loading)}>
          <IconLoader />
        </div>
      )} */}
      <video
        className={clsx(
          styles.HomeContentMob_videoPlayer
          // posts[activeIndex] == "h" && styles.contain
        )}
        src={posts[activeIndex] && `${getMediaPath(posts[activeIndex].attributes.video)}#t=0.1`}
        preload="auto"
        playsInline
        autoPlay={false}
        muted
        loop
        onLoadedData={() => {
          if (refVideoPlayer.current) {
            console.log("on loaded data");
            // playVideo();
          }

          // setStable(true);
          // setTimeout(() => {
          //   setStable(true);
          // }, 500);
        }}
        // onEnded={() => {
        //   if (refVideoPlayer.current) {
        //     refVideoPlayer.current.currentTime = 0;
        //     refVideoPlayer.current.play();
        //   }
        // }}
        onCanPlay={() => {
          if (refVideoPlayer.current) {
            // console.log("on can play");
          }
        }}
        onCanPlayThrough={() => {
          if (refVideoPlayer.current) {
            // console.log("on can play through");
            playVideo();
          }
        }}
        onLoadedMetadata={() => {
          if (refVideoPlayer.current) {
            // console.log("on loaded metadata");
          }
        }}
        onLoadedMetadataCapture={() => {
          if (refVideoPlayer.current) {
            // console.log("on loaded metadata сapture");
            // refVideoPlayer.current.currentTime = 0.01;
          }
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
        onSliderFirstMove={() => {
          if (refVideoPlayer.current) {
            refVideoPlayer.current.pause();
          }

          setStable(false);
        }}
        onTransitionEnd={() => {
          if (swiper && activeIndex == swiper.activeIndex) {
            setStable(true);
          } else {
            if (swiper) {
              setActiveIndex(swiper.activeIndex);
            }
          }
        }}
      >
        {posts.slice(0, getPost).map((posts: IPost, i: number) => (
          <SwiperSlide className={styles.HomeContentMob_swiper_item} key={i}>
            {({ isActive, isPrev, isNext }) => (
              <>
                {(isActive || isPrev || isNext) && (
                  <PostMob countVideoLoading={countVideoLoading} onLoadVideo={videoLoad} index={i} isStable={isStable} isActive={isActive || isPrev || isNext} {...posts} />
                )}
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeContentMob;
