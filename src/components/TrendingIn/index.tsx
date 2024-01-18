import { useRef, useState } from "react";

import clsx from "clsx";
import styles from "./index.module.scss";

import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TrendingInSwiperItem from "./components/TrendingInSwiperItem";

import IconArrow from "@/public/img/icons/arrow";
import { ITrendingData } from "@/types/TrendingData.inerface";
import { ISwiper } from "@/types/Swiper.interface";
import { LookCard } from "./components/LookCard";

interface ITrendingInProps extends ITrendingData {}

const TrendingIn: React.FunctionComponent<ITrendingInProps> = ({
  title,
  people,
  looks,
}) => {
  const refSwiperSlideNext = useRef<HTMLDivElement>(null);
  const refSwiperSlidePrev = useRef<HTMLDivElement>(null);

  const [swiper, setSwiper] = useState<ISwiper>();
  const swiperSettings = {
    modules: [Navigation, Autoplay, FreeMode],
    slidesPerView: "auto",
    grabCursor: true,
    speed: 500,
    freeMode: true,
    navigation: {
      nextEl: refSwiperSlideNext.current,
      prevEl: refSwiperSlidePrev.current,
      disabledClass: styles.disable,
    },
    // autoplay: {
    //   delay: 5000,
    // },
    onSwiper: (swiper: ISwiper) => {
      setSwiper(swiper);
    },
  };

  return (
    <div className={clsx(styles.TrendingIn)}>
      <div className={clsx(styles.TrendingIn_header)}>
        <div className={clsx(styles.TrendingIn_title)}>{title}</div>
        <div className={clsx(styles.TrendingIn_swiperNav)}>
          <div
            className={clsx(
              styles.TrendingIn_swiperNav_item,
              styles.swiper_nav_prev
            )}
            ref={refSwiperSlidePrev}
          >
            <IconArrow />
          </div>
          <div
            className={clsx(
              styles.TrendingIn_swiperNav_item,
              styles.swiper_nav_next
            )}
            ref={refSwiperSlideNext}
          >
            <IconArrow />
          </div>
        </div>
      </div>
      <Swiper
        {...swiperSettings}
        slidesPerView={"auto"}
        className={styles.TrendingIn_swiper}
      >
        {people?.map((e, i) => (
          <SwiperSlide className={styles.TrendingIn_swiper_item} key={i}>
            <TrendingInSwiperItem {...e} />
          </SwiperSlide>
        ))}
        {looks?.map((e, i) => (
          <SwiperSlide className={styles.TrendingIn_swiper_item} key={i}>
            <LookCard {...e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingIn;
