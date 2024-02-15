import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useEffect, useRef, useState } from "react";

import getRandomNickname from "@/utils/getRandomNickname";

import IconVerify from "@/public/img/icons/verify";
import Image from "next/image";
import PostRightSide from "../Post/components/PostRightSide";
import { ButtonOrder } from "../buttons/ButtonOrder";
import { MainContext } from "@/providers/MainContext";
import { Hashtags } from "../Hashtags";
import { IPost } from "@/types/post";
import { getMediaPath } from "@/utils/getMediaPath";

interface IPostMobProps extends IPost {
  isStable: boolean;
  isActive: boolean;
  countVideoLoading: number;
  index: number;
  onLoadVideo: Function;
}

const PostMob: React.FunctionComponent<IPostMobProps> = ({ id, attributes, isStable, isActive, countVideoLoading, index, onLoadVideo }) => {
  const { modalOrder } = useContext(MainContext);

  const [randomAvatar, setRandomAvatar] = useState<string>(`/img/test/avatars/${Math.floor(Math.random() * 6) + 1}.jpg`);
  const [randomNickname, setRandomNickname] = useState<string>(getRandomNickname());

  const refVideo = useRef<HTMLVideoElement>(null);

  const HandleOrder = () => {
    modalOrder.setData({ brand: attributes.brand, clothes: attributes.clothes });
    modalOrder.openModal();
  };

  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   if (countVideoLoading == index) {
  //     const video = document.createElement("video");
  //     video.addEventListener("canplaythrough", () => {
  //       setLoaded(true);
  //       onLoadVideo();
  //       // console.log("load video " + id);
  //     });
  //     video.src = getMediaPath(attributes.video);
  //     video.load();
  //   }
  // }, [countVideoLoading]);

  useEffect(() => {
    if (isActive) {
      const video = document.createElement("video");
      video.addEventListener("canplaythrough", () => {
        setLoaded(true);
        onLoadVideo();
        // console.log("load video " + id);
      });
      video.src = getMediaPath(attributes.video);
      video.load();
    }
  }, [isActive]);

  return (
    <div className={clsx(styles.PostMob)} data-videoID={id}>
      {/* {isActive && ( */}
      <video
        className={clsx(
          styles.PostMob_video,
          // orientation == "h" && styles.contain,
          isStable && styles.hidden
        )}
        src={getMediaPath(attributes.video) + "#t=0.01"}
        // onLoadedMetadata={() => {
        //   if (refVideo.current) {
        //     refVideo.current.currentTime = 0.01;
        //   }
        // }}
        muted
        playsInline
        preload="metadata"
        ref={refVideo}
      />
      {/* )} */}
      <div className={clsx(styles.PostMob_info)}>
        <div className={clsx(styles.PostMob_info_header)}>
          <div className={clsx(styles.PostMob_info_detail)}>
            {attributes.brand && (
              <div className={clsx(styles.PostMob_info_detail_account)}>
                <div className={clsx(styles.PostMob_info_detail_account_avatar)}>
                  <img src={getMediaPath(attributes.brand.data.attributes.logo)} alt={"avatar"} />
                  <IconVerify />
                </div>
                <div className={clsx(styles.PostMob_info_detail_account_info)}>
                  <div className={clsx(styles.PostMob_info_detail_account_info_name)}>{`@${attributes.brand.data.attributes.title}`}</div>
                  <div className={clsx(styles.PostMob_info_detail_account_info_dataPosted)}>yesterday</div>
                </div>
              </div>
            )}
            <div className={clsx(styles.PostMob_info_detail_description)}>Buy and get access to the moment </div>
            {attributes.hashtags && attributes.hashtags.length > 0 && (
              <div className={clsx(styles.PostMob_info_detail_tags)}>
                <Hashtags items={attributes.hashtags} />
              </div>
            )}
          </div>
          <PostRightSide id={id} />
        </div>
        <ButtonOrder onClick={HandleOrder}>Order Now</ButtonOrder>
      </div>
    </div>
  );
};

export default PostMob;
