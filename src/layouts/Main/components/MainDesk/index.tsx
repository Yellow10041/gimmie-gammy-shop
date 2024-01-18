import clsx from "clsx";
import styles from "./index.module.scss";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import Header from "@/widgets/Header";
import SideNav from "@/widgets/SideNav";
import RightSide from "@/widgets/RightSide";

import BG from "@/public/img/bg.jpg";

interface IMainDeskProps {
  children: React.ReactNode;
}

const MainDesk: React.FunctionComponent<IMainDeskProps> = ({ children }) => {
  const refBg = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl1 = gsap.timeline({
        defaults: {
          delay: 0,
          duration: 1,
          ease: "back.inOut",
        },
      });

      tl1.fromTo(
        refBg.current,
        {
          yPercent: -20,
          opacity: 0,
        },
        {
          yPercent: -5,
          opacity: 1,
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className={clsx(styles.MainDesk)}>
      <div className={clsx(styles.MainDesk_bgBox)} ref={refBg}>
        <Image
          className={clsx(styles.MainDesk_bg)}
          src={BG}
          alt="bg"
          priority
          quality={100}
        />
      </div>
      <Header />
      <div className={clsx(styles.MainDesk_container)}>
        <SideNav />
        <div className={clsx(styles.MainDesk_mainContent)}>{children}</div>
        <RightSide />
      </div>
    </div>
  );
};

export default MainDesk;
