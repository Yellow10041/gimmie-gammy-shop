import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useRef, useState } from "react";

import { IPost } from "@/types/Post.interface";

import getRandomNickname from "@/utils/getRandomNickname";

import IconVerify from "@/public/img/icons/verify";
import Image from "next/image";
import PostRightSide from "../Post/components/PostRightSide";
import { ButtonOrder } from "../buttons/ButtonOrder";
import { MainContext } from "@/providers/MainContext";
import { Hashtags } from "../Hashtags";

interface IPostMobProps extends IPost {
  isStable: boolean;
}

const PostMob: React.FunctionComponent<IPostMobProps> = ({
  id,
  videoSrc,
  account,
  look,
  orientation,
  statistic,
  isStable,
}) => {
  const { modalOrder } = useContext(MainContext);

  const [randomAvatar, setRandomAvatar] = useState<string>(
    `/img/test/avatars/${Math.floor(Math.random() * 6) + 1}.jpg`
  );
  const [randomNickname, setRandomNickname] = useState<string>(
    getRandomNickname()
  );

  const refVideo = useRef<HTMLVideoElement>(null);

  const HandleOrder = () => {
    modalOrder.setData({ account, look });
    modalOrder.openModal();
  };

  return (
    <div className={clsx(styles.PostMob)} data-videoID={id}>
      <video
        className={clsx(
          styles.PostMob_video,
          orientation == "h" && styles.contain,
          isStable && styles.hidden
        )}
        src={videoSrc}
        onLoadedMetadata={() => {
          if (refVideo.current) {
            refVideo.current.currentTime = 0.01;
          }
        }}
        muted
        playsInline
        preload="metadata"
        ref={refVideo}
      />
      <div className={clsx(styles.PostMob_info)}>
        <div className={clsx(styles.PostMob_info_header)}>
          <div className={clsx(styles.PostMob_info_detail)}>
            {account && (
              <div className={clsx(styles.PostMob_info_detail_account)}>
                <div
                  className={clsx(styles.PostMob_info_detail_account_avatar)}
                >
                  <Image
                    src={account?.avatarPath}
                    alt={"avatar"}
                    width={55}
                    height={55}
                  />
                  <IconVerify />
                </div>
                <div className={clsx(styles.PostMob_info_detail_account_info)}>
                  <div
                    className={clsx(
                      styles.PostMob_info_detail_account_info_name
                    )}
                  >
                    {`@${account?.username}`}
                  </div>
                  <div
                    className={clsx(
                      styles.PostMob_info_detail_account_info_dataPosted
                    )}
                  >
                    yesterday
                  </div>
                </div>
              </div>
            )}
            <div className={clsx(styles.PostMob_info_detail_description)}>
              Buy and get access to the moment{" "}
            </div>
            <div className={clsx(styles.PostMob_info_detail_tags)}>
              <Hashtags />
            </div>
          </div>
          <PostRightSide id={id} statistic={statistic} />
        </div>
        <ButtonOrder onClick={HandleOrder}>Order Now</ButtonOrder>
      </div>
    </div>
  );
};

export default PostMob;
