import Image from "next/image";

import clsx from "clsx";
import styles from "./index.module.scss";

import { RefObject, useEffect, useRef, useState } from "react";

import gsap from "gsap";

interface ITrendingInSwiperItemProps {
  avatar: string;
  nickname: string;
}

const TrendingInSwiperItem: React.FunctionComponent<
  ITrendingInSwiperItemProps
> = ({ avatar, nickname }) => {
  const refNicknameBox = useRef<HTMLDivElement>(null);
  const refNickname = useRef<HTMLDivElement>(null);
  const [tl2, setTl2] = useState<gsap.core.Timeline>();

  const getWidth = (refEl: RefObject<HTMLDivElement>) => {
    return refEl.current ? refEl.current.offsetWidth : 0;
  };

  const onMouseEnter = () => {
    console.log;
    tl2?.resume();
  };

  const onMouseLeave = () => {
    tl2?.pause();
  };

  useEffect(() => {
    refNickname.current?.classList.add(styles.active);

    if (getWidth(refNicknameBox) < getWidth(refNickname)) {
      refNicknameBox.current?.classList.add(styles.long);
      setTimeout(() => {
        let ctx = gsap.context(() => {
          let xShort = getWidth(refNickname);
          let xLong = getWidth(refNicknameBox) * 1.3;

          let tl1Cur = gsap.timeline({
            defaults: {
              delay: 0,
              ease: "none",
              repeat: -1,
            },
          });

          tl1Cur.fromTo(
            refNickname.current,
            {
              x: 0,
            },
            {
              x: -xLong,
              duration: xLong * 0.03,
            }
          );

          tl1Cur.set(refNickname.current, {
            x: xShort,
          });

          tl1Cur.to(refNickname.current, {
            x: -xLong,
            duration: xLong * 0.05,
          });
          tl1Cur.pause();
          setTl2(tl1Cur);
        });

        return () => ctx.revert();
      }, 1000);
    } else {
      refNickname.current?.classList.add(styles.center);
    }
  }, []);

  return (
    <div
      className={clsx(styles.TrendingInSwiperItem)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        className={styles.TrendingInSwiperItem_avatar}
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
        quality={100}
      />
      <div
        className={clsx(styles.TrendingInSwiperItem_nicknameBox)}
        ref={refNicknameBox}
      >
        <div className={clsx(styles.TrendingInSwiperItem_nicknameBox_inner)}>
          {nickname}
          <div
            className={clsx(styles.TrendingInSwiperItem_nickname)}
            ref={refNickname}
          >
            {nickname}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingInSwiperItem;
