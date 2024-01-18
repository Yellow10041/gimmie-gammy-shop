import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useEffect, useState, RefObject, useRef } from "react";
import { MainContext } from "@/providers/MainContext";

import gsap from "gsap";
import { dataShareVideo } from "@/data/dataShareVideo";
import ShareVideoButton from "./components/ShareVideoButton";
import IconShare from "@/public/img/icons/share";
import IconClose from "@/public/img/icons/close";

interface IShareVideoProps {}

const ShareVideo: React.FunctionComponent<IShareVideoProps> = (props) => {
  const { modalShareVideo } = useContext(MainContext);

  const [active, setActive] = useState<boolean>(modalShareVideo.isActive);
  const [activePrev, setActivePrev] = useState<boolean>(active);
  const [hostName, setHostName] = useState<string>("");

  const refShareVideo = useRef<HTMLDivElement>(null);

  const Animation = (reverse: boolean) => {
    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 0.15,
        ease: "power1.inOut",
      },
    });

    tl1.set(refShareVideo.current, {
      opacity: 1,
    });

    tl1.fromTo(
      refShareVideo.current,
      {
        scale: 0,
      },
      { scale: 1, ease: "back.out", duration: 0.5 }
    );

    reverse ? tl1.reverse(0) : null;
  };

  useEffect(() => {
    if (active != activePrev) {
      active ? Animation(false) : Animation(true);
    }
    setActivePrev(active);
  }, [active]);

  useEffect(() => {
    setActive(modalShareVideo.isActive);
    setHostName(window?.location.hostname);
  }, [modalShareVideo]);

  return (
    <div className={clsx(styles.ShareVideo)} ref={refShareVideo}>
      <div
        className={clsx(styles.ShareVideo_close)}
        onClick={() => modalShareVideo.closeModal()}
      >
        <IconClose />
      </div>
      <div className={clsx(styles.ShareVideo_header)}>
        Share video! <IconShare />
      </div>
      <div className={clsx(styles.ShareVideo_shared)}>
        {dataShareVideo.map((e, i) => (
          <ShareVideoButton
            title="Share on"
            dataSharer={e.dataSharer}
            dataURL={`${hostName}/${modalShareVideo.videoID}`}
            key={i}
          />
        ))}
        <ShareVideoButton
          title="Copy Link!"
          dataSharer=""
          dataURL={`${hostName}/${modalShareVideo.videoID}`}
        />
      </div>
    </div>
  );
};

export default ShareVideo;
