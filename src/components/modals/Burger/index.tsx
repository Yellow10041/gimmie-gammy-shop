import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useEffect, useState, useRef } from "react";
import { MainContext } from "@/providers/MainContext";
import gsap from "gsap";
import BurgerItem from "./components/BurgerItem";
import IconClose from "@/public/img/icons/close";
import { dataVideoCategories } from "@/data/dataVideoCategories";

interface IBurgerProps {}

const Burger: React.FunctionComponent<IBurgerProps> = (props) => {
  const { modalBurger } = useContext(MainContext);

  const [active, setActive] = useState<boolean>(modalBurger.isActive);
  const [activePrev, setActivePrev] = useState<boolean>(active);

  const refBurgerNav = useRef<HTMLDivElement>(null);
  const refBurgerClose = useRef<HTMLDivElement>(null);

  const Animation = (reverse: boolean) => {
    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 0.15,
        ease: "power1.inOut",
      },
    });

    tl1.set(refBurgerNav.current, {
      xPercent: 200,
      opacity: 1,
    });
    tl1.set(refBurgerClose.current, {
      xPercent: 200,
      opacity: 1,
    });

    tl1.fromTo(
      refBurgerClose.current,
      {
        xPercent: 200,
      },
      { xPercent: 0, ease: "back.out", duration: 0.5 },
      "<1%"
    );

    tl1.fromTo(
      refBurgerNav.current,
      {
        xPercent: 200,
      },
      { xPercent: 0, ease: "back.out", duration: 0.5 },
      "<10%"
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
    setActive(modalBurger.isActive);
  }, [modalBurger]);
  return (
    <div className={clsx(styles.Burger)}>
      <div
        className={clsx(styles.Burger_close)}
        onClick={modalBurger.closeModal}
        ref={refBurgerClose}
      >
        <IconClose />
      </div>
      <div className={clsx(styles.Burger_nav)} ref={refBurgerNav}>
        {dataVideoCategories.map((e, i) => (
          <BurgerItem title={e.title} count={e.count} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Burger;
