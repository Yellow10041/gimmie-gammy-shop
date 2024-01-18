import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useState, useEffect, useRef } from "react";
import { MainContext } from "@/providers/MainContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { ISwiper } from "@/types/Swiper.interface";

import gsap from "gsap";

import EmailEnter from "./screens/EmailEnter";
import EmailAwesome from "./screens/EmailAwesome";
import ButtonCloseModal from "@/components/buttons/ButtonCloseModal";

interface IEmailProps {}

const Email: React.FunctionComponent<IEmailProps> = (props) => {
  const { modalEmail } = useContext(MainContext);

  const [active, setActive] = useState<boolean>(modalEmail.isActive);
  const [activePrev, setActivePrev] = useState<boolean>(active);

  const refEmail = useRef<HTMLDivElement>(null);
  const refEmailBack = useRef<HTMLDivElement>(null);

  const [swiper, setSwiper] = useState<ISwiper>();
  const swiperSettings = {
    modules: [],
    slidesPerView: 1,
    speed: 500,
    allowTouchMove: false,
    onSwiper: (swiper: ISwiper) => {
      setSwiper(swiper);
    },
  };

  const Animation = (reverse: boolean) => {
    let tl1 = gsap.timeline({
      defaults: {
        delay: 0,
        duration: 0.15,
        ease: "power1.inOut",
      },
    });

    tl1.set(refEmail.current, {
      opacity: 1,
    });

    tl1.fromTo(
      refEmail.current,
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
    setActive(modalEmail.isActive);
  }, [modalEmail]);

  useEffect(() => {
    setTimeout(() => {
      swiper?.slideTo(0);
    }, 500);
  }, [modalEmail.isActive]);

  return (
    <div className={clsx(styles.Email)} ref={refEmail}>
      <div className={clsx(styles.Email_back)} ref={refEmailBack} />
      <ButtonCloseModal onClick={modalEmail.closeModal} />
      <Swiper {...swiperSettings} className={styles.Email_swiper}>
        <SwiperSlide className={styles.Email_swiper_slide}>
          <EmailEnter func={() => swiper?.slideTo(1)} />
        </SwiperSlide>
        <SwiperSlide className={styles.Email_swiper_slide}>
          <EmailAwesome />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Email;
