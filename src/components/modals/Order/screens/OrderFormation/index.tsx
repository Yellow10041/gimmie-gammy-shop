import { FC, useContext, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { ButtonOrder } from "@/components/buttons/ButtonOrder";
import { OrderItem } from "./ui/order-item";
import { MainContext } from "@/providers/MainContext";
import { ISwiper } from "@/types/Swiper.interface";

import { Swiper, SwiperSlide } from "swiper/react";
import { IPostClothes } from "@/types/post";

interface IOrderFormation {
  selectOrder: any;
}

export interface IForwardData {
  brand: string;
  itemName: string;
  itemPrice: number;
  itemSize: string;
}

export const OrderFormation: FC<IOrderFormation> = ({ selectOrder }) => {
  const { modalOrder, windowWidth } = useContext(MainContext);

  const [orderData, setOrderData] = useState<IForwardData[]>([]);
  const totalPrice = useMemo(() => {
    let price = 0;
    orderData.map((e) => {
      price += e.itemPrice;
    });
    return price;
  }, [orderData]);

  const renderTextProgress = (text: string) => {
    text = text.replace(".", ",");
    let dotIndex = text.indexOf(",");

    if (dotIndex !== -1) {
      let textBeforeDot = text.substring(0, dotIndex + 1);
      let textAfterDot = text.substring(dotIndex + 1);

      return (
        <>
          {textBeforeDot}
          <span>{textAfterDot}</span>
        </>
      );
    } else {
      return <>{text}</>;
    }
  };

  const orderHandler = (data: IForwardData) => {
    if (data.itemSize) {
      setOrderData((prev) => [...prev.filter((item) => item.itemName != data.itemName), data]);
    } else {
      setOrderData((prev) => [...prev.filter((item) => item.itemName != data.itemName)]);
    }
  };

  const handle = async () => {
    let resMas: any = {};

    orderData.map((e, i) => {
      Object.entries(e).map((data) => {
        resMas = {
          ...resMas,
          [`${data[0]}_${i + 1}: `]: data[1],
        };
      });
    });

    resMas = {
      ...resMas,
      [`TotalPrice: `]: `${totalPrice}$`,
    };

    selectOrder(resMas);
  };

  const [swiper, setSwiper] = useState<ISwiper>();
  const swiperSettings = {
    // autoHeight: true,
    modules: [],
    slidesPerView: windowWidth > 1024 ? 2 : 1.3,
    // centeredSlides: windowWidth > 1024 ? false : true,
    spaceBetween: 10,
    speed: 500,
    allowTouchMove: true,
    grab: true,
    onSwiper: (swiper: ISwiper) => {
      setSwiper(swiper);
    },
  };

  useEffect(() => {
    !modalOrder.isActive && setOrderData([]);
  }, [modalOrder.isActive]);

  return (
    <div className={clsx(styles.OrderFormation)}>
      <div className={clsx(styles.OrderFormation_title)}>Select your size</div>
      <div className={clsx(styles.OrderFormation_look)}>
        <Swiper {...swiperSettings} className={styles.OrderFormation_swiper}>
          <>
            {modalOrder?.data?.clothes.map((clothes: IPostClothes, i: number) => (
              <SwiperSlide className={styles.OrderFormation_swiper_slide} key={i}>
                <OrderItem clothes={clothes} brand={modalOrder.data.brand} forwardData={orderHandler} />
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </div>
      <div className={clsx(styles.OrderFormation_footer)}>
        <div className={clsx(styles.OrderFormation_price)}>Total: ${renderTextProgress(totalPrice.toString())}</div>
        <div className={clsx(styles.OrderFormation_payment, totalPrice == 0 && styles.disable)}>
          <ButtonOrder onClick={handle}>Proceed to payment</ButtonOrder>
        </div>
      </div>
    </div>
  );
};
