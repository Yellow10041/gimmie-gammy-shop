import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import { MainContext } from "@/providers/MainContext";

import getRandomNumber from "@/utils/getRandomNumber";

import ButtonBuy from "@/components/buttons/ButtonBuy";
import IconFull from "@/public/img/icons/full";
import getRandomNickname from "@/utils/getRandomNickname";
import gsap from "gsap";
import IconPause from "@/public/img/icons/pause";
import IconPlay from "@/public/img/icons/play";
import IconVerify from "@/public/img/icons/verify";
import { ButtonOrder } from "@/components/buttons/ButtonOrder";
import { Hashtags } from "@/components/Hashtags";
import { IPost } from "@/types/post";
import { getMediaPath } from "@/utils/getMediaPath";

interface IPostContentProps extends IPost {
  index: number;
}

const PostContent: React.FunctionComponent<IPostContentProps> = ({ id, attributes, index }) => {
  const { modalFullScreenVideo, modalOrder } = useContext(MainContext);

  const randomAvatar = useMemo(() => {
    return `/img/test/avatars/${Math.floor(Math.random() * 6) + 1}.jpg`;
  }, []);

  const randomNickname = useMemo(() => {
    return getRandomNickname();
  }, []);

  const [isPauseVideo, setPauseVideo] = useState<boolean>(false);

  const refVideoBox = useRef<HTMLDivElement>(null);
  const refVideo = useRef<HTMLVideoElement>(null);
  const refVideoBack = useRef<HTMLVideoElement>(null);
  const refButtonPlay = useRef<HTMLDivElement>(null);
  const refButtonPause = useRef<HTMLDivElement>(null);

  const price = useMemo(() => {
    return index % 2 == 0 ? getRandomNumber(4, 11) : getRandomNumber(10, 17);
  }, []);

  const HandleOrder = () => {
    modalOrder.setData({ brand: attributes.brand, clothes: attributes.clothes });
    modalOrder.openModal();
  };

  const HandleFull = () => {
    modalFullScreenVideo.setVideoSrc(attributes.video);
    modalFullScreenVideo.setPrice(price);
    modalFullScreenVideo.openModal();
    modalFullScreenVideo.setVideoRef(refVideoBox);

    if (refVideo.current) {
      refVideo.current.pause();
      (refVideo.current as HTMLVideoElement).volume = 0;
    }

    if (refVideoBack.current) {
      refVideoBack.current.pause();
      (refVideoBack.current as HTMLVideoElement).volume = 0;
    }
  };

  const PauseAnimation = (isPauseVideo: boolean) => {
    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 0.5,
        ease: "power1.inOut",
      },
    });

    tl1.fromTo(
      isPauseVideo ? refButtonPlay.current : refButtonPause.current,
      {
        opacity: 1,
        scale: 0.6,
      },
      { opacity: 0, scale: 1 }
    );
  };

  const HandlePause = () => {
    PauseAnimation(isPauseVideo);
    setPauseVideo((prev) => !prev);
  };

  useEffect(() => {
    if (refVideo.current)
      if (isPauseVideo) {
        refVideo.current.pause();
      } else {
        refVideo.current.play();
      }
  }, [isPauseVideo]);

  return (
    <div className={clsx(styles.PostContent)} data-videoid={id}>
      <div className={clsx(styles.PostContent_video)} ref={refVideoBox} onClick={HandlePause}>
        <video className="videoList" data-index={index} data-pause={isPauseVideo} src={getMediaPath(attributes.video)} preload="auto" playsInline loop ref={refVideo} />

        <video className={clsx("videoListBack", styles.back)} src={getMediaPath(attributes.video)} muted preload="metadata" playsInline ref={refVideoBack} />
      </div>
      <div className={clsx(styles.PostContent_info)}>
        <div className={clsx(styles.PostContent_info_header)}>
          {attributes.brand && (
            <div className={clsx(styles.PostContent_info_header_account)}>
              <div className={clsx(styles.PostContent_info_header_account_avatar)}>
                <img src={getMediaPath(attributes.brand.data.attributes.logo)} alt={"avatar"} />
                <IconVerify />
              </div>
              <div className={clsx(styles.PostContent_info_header_account_info)}>
                <div className={clsx(styles.PostContent_info_header_account_info_name)}>@{attributes.brand.data.attributes.title}</div>
                <div className={clsx(styles.PostContent_info_header_account_info_dataPosted)}>yesterday</div>
              </div>
            </div>
          )}
          <ButtonOrder onClick={HandleOrder}>Order Now</ButtonOrder>
        </div>
        {attributes?.title && <div className={clsx(styles.PostContent_info_description)}>{attributes.title}</div>}
        {attributes?.hashtags?.length > 0 && <Hashtags items={attributes.hashtags} />}
      </div>
      <div className={clsx(styles.PostContent_pause)} ref={refButtonPause}>
        <IconPause />
      </div>
      <div className={clsx(styles.PostContent_pause)} ref={refButtonPlay}>
        <IconPlay />
      </div>
    </div>
  );
};

export default PostContent;
