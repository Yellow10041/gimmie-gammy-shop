import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "@/providers/MainContext";

import IconCookies from "@/public/img/icons/cookies";
import gsap from "gsap";

interface ICookiesProps {}

const Cookies: React.FunctionComponent<ICookiesProps> = (props) => {
  const { modalCookies } = useContext(MainContext);

  const [active, setActive] = useState<boolean>(modalCookies.isActive);
  const [activePrev, setActivePrev] = useState<boolean>(active);

  const refCookies = useRef<HTMLDivElement>(null);

  const Animation = (reverse: boolean) => {
    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 0.15,
        ease: "power1.inOut",
      },
    });

    tl1.set(refCookies.current, {
      opacity: 1,
    });

    tl1.fromTo(
      refCookies.current,
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
    setActive(modalCookies.isActive);
  }, [modalCookies]);

  return (
    <div className={clsx(styles.Cookies)} ref={refCookies}>
      <div className={clsx(styles.Cookies_back)} />
      <div className={clsx(styles.Cookies_content)}>
        <div className={clsx(styles.Cookies_icon)}>
          <IconCookies />
        </div>
        <div className={clsx(styles.Cookies_title)}>We use Cookies</div>
        <div className={clsx(styles.Cookies_subtitle)}>
          Please accept cookies to continue enjoying our site, we promise
          they&apos;re delicious
        </div>
        <div
          className={clsx(styles.Cookies_button_accept)}
          onClick={modalCookies.closeModal}
        >
          Accept
        </div>
        <div
          className={clsx(styles.Cookies_dontAllow)}
          onClick={modalCookies.closeModal}
        >
          I don&apos;t like cookies
        </div>
      </div>
    </div>
  );
};

export default Cookies;
