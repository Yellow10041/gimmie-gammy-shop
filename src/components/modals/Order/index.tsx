import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useState, useEffect, useRef } from "react";
import { MainContext } from "@/providers/MainContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { ISwiper } from "@/types/Swiper.interface";

import gsap from "gsap";

import CreateAccountAwesome from "./screens/CreateAccountAwesome";

import ButtonCloseModal from "@/components/buttons/ButtonCloseModal";
import { OrderFormation } from "./screens/OrderFormation";
import { OrderDetails } from "./screens/OrderDetails";
import SendMessage from "@/utils/telegramSendMessage";
import { getUserLocation } from "@/utils/getUserLocation";

interface IOrderProps {}

const Order: React.FunctionComponent<IOrderProps> = (props) => {
  const { modalOrder, device, buttonTrigger } = useContext(MainContext);

  const [active, setActive] = useState<boolean>(modalOrder.isActive);
  const [activePrev, setActivePrev] = useState<boolean>(active);
  const [orderData, setOrderData] = useState<any>({});

  const refEmail = useRef<HTMLDivElement>(null);
  const refEmailBack = useRef<HTMLDivElement>(null);

  const [swiper, setSwiper] = useState<ISwiper>();
  const swiperSettings = {
    autoHeight: true,
    modules: [],
    slidesPerView: 1,
    centeredSlides: true,
    speed: 500,
    spaceBetween: 10,
    allowTouchMove: false,
    grab: false,
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
    setActive(modalOrder.isActive);

    setTimeout(() => {
      swiper?.slideTo(0);
    }, 500);

    setOrderData(null);
  }, [modalOrder.isActive]);

  const selectOrder = (data: any) => {
    setOrderData(data);
    swiper?.slideTo(1);
  };

  const selectAddress = (data: any) => {
    sentMass(data);
  };

  const sentMass = async (address: any) => {
    let resMas = {
      "Device: ": device,
      "Button: ": buttonTrigger,
      "userLocation: ": await getUserLocation(),
    };

    resMas = { ...resMas, ...address, ...orderData };
    let response = await SendMessage(resMas);

    response && swiper?.slideTo(2);
  };

  return (
    <div className={clsx(styles.Order)} ref={refEmail}>
      <div className={clsx(styles.Order_back)} ref={refEmailBack} />
      <ButtonCloseModal onClick={modalOrder.closeModal} />

      <Swiper {...swiperSettings} className={styles.Order_swiper}>
        <SwiperSlide className={styles.Order_swiper_slide}>
          <OrderFormation selectOrder={selectOrder} />
        </SwiperSlide>
        <SwiperSlide className={styles.Order_swiper_slide}>
          <OrderDetails selectAddress={selectAddress} />
        </SwiperSlide>
        <SwiperSlide className={styles.Order_swiper_slide}>
          <CreateAccountAwesome />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Order;
