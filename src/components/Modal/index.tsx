import clsx from "clsx";
import styles from "./index.module.scss";

import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { setTimeout } from "timers";

interface IModalProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  isActive,
  children,
}) => {
  const [activePrev, setActivePrev] = useState<boolean>(isActive);

  const refModal = useRef<HTMLDivElement>(null);
  const refModalBack = useRef<HTMLDivElement>(null);

  const hiddenVideoBox = (isDisplay: boolean) => {
    gsap.set(refModal.current, {
      display: isDisplay ? "flex" : "none",
    });
  };

  const Animation = (reverse: boolean) => {
    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 1,
        ease: "power1.inOut",
      },
    });

    gsap.set(refModal.current, {
      display: "flex",
    });

    tl1.fromTo(
      refModalBack.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );

    reverse ? tl1.reverse(0) : null;

    tl1.eventCallback("onReverseComplete", () => {
      hiddenVideoBox(false);
    });
  };

  useEffect(() => {
    if (isActive != activePrev) {
      isActive ? Animation(false) : Animation(true);
    }
    setActivePrev(isActive);
  }, [isActive]);

  return (
    <div className={clsx(styles.Modal)} ref={refModal}>
      <div className={clsx(styles.Modal_background)} ref={refModalBack} />
      {children}
    </div>
  );
};

export default Modal;
