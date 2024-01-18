import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useEffect, useState, RefObject, useRef } from "react";
import { MainContext } from "@/providers/MainContext";

import gsap from "gsap";

import IconClose from "@/public/img/icons/close";
import ButtonBuy from "@/components/buttons/ButtonBuy";

interface IFullScreenVideoProps {}

const FullScreenVideo: React.FunctionComponent<
  IFullScreenVideoProps
> = ({}) => {
  const { modalFullScreenVideo } = useContext(MainContext);

  const [active, setActive] = useState<boolean>(modalFullScreenVideo.isActive);
  const [activePrev, setActivePrev] = useState<boolean>(active);

  const refVideoBox = useRef<HTMLDivElement>(null);
  const refVideo = useRef<HTMLVideoElement>(null);
  const refClose = useRef<HTMLDivElement>(null);
  const refBuy = useRef<HTMLDivElement>(null);

  const getPos = (refVideo: RefObject<HTMLDivElement>) => {
    let x = 0;
    let y = 0;
    let w = 0;
    let h = 0;

    if (refVideo.current) {
      const refPos = refVideo.current.getBoundingClientRect();
      x = refPos.x;
      y = refPos.y;
      w = refPos.width;
      h = refPos.height;
    }
    return { x, y, w, h };
  };

  const Animation = (reverse: boolean) => {
    let { x, y, w, h } = getPos(modalFullScreenVideo.videoRef);

    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 1,
        ease: "power1.inOut",
      },
    });

    tl1.set(refVideoBox.current, { x: x, y: y, width: w, height: h });
    tl1.set(refVideoBox.current, { opacity: 1 });

    tl1.fromTo(
      refVideoBox.current,
      {
        x: x,
        y: y,
        width: w,
        height: h,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    tl1.fromTo(
      refClose.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,

        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "<1%"
    );

    tl1.fromTo(
      refBuy.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "<1%"
    );

    tl1.eventCallback("onReverseComplete", () => {
      gsap.set(refVideoBox.current, { opacity: 0 });
    });

    reverse ? tl1.reverse(0) : null;
  };

  useEffect(() => {
    if (active != activePrev) {
      active ? Animation(false) : Animation(true);
      active ? refVideo.current?.play() : refVideo.current?.pause();
    }
    setActivePrev(active);
  }, [active]);

  useEffect(() => {
    setActive(modalFullScreenVideo.isActive);
  }, [modalFullScreenVideo]);

  return (
    <div className={clsx(styles.FullScreenVideo)} ref={refVideoBox}>
      <div className={clsx(styles.FullScreenVideo_video)}>
        <video
          src={modalFullScreenVideo.videoSrc}
          playsInline
          controls
          loop
          ref={refVideo}
        />
      </div>
      <div className={clsx(styles.FullScreenVideo_video_buy)} ref={refBuy}>
        <ButtonBuy title={`Play moment for ${modalFullScreenVideo.price}$`} />
      </div>
      <div
        className={clsx(styles.FullScreenVideo_close)}
        onClick={() => modalFullScreenVideo.closeModal()}
        ref={refClose}
      >
        <IconClose />
      </div>
    </div>
  );
};

export default FullScreenVideo;
