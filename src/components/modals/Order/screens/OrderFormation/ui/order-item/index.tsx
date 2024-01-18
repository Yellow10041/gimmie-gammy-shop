import { FC, useContext, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { IAccount, ILook } from "@/types/Post.interface";
import { MainContext } from "@/providers/MainContext";

interface IOrderItem {
  look: ILook;
  account: IAccount;
  forwardData: any;
}

export const OrderItem: FC<IOrderItem> = ({ look, account, forwardData }) => {
  const { modalOrder } = useContext(MainContext);

  const [activeSizeIndex, setActiveSizeIndex] = useState<number | null>(null);

  useEffect(() => {
    const data = {
      brand: account.username,
      itemName: look.name,
      itemPrice: look.price,
      itemSize:
        activeSizeIndex != null ? look.sizes[activeSizeIndex].size : null,
    };

    forwardData(data);
  }, [activeSizeIndex]);

  useEffect(() => {
    !modalOrder.isActive && setActiveSizeIndex(null);
  }, [modalOrder.isActive]);

  return (
    <div className={clsx(styles.OrderItem)}>
      <div className={clsx(styles.OrderItem_card)}>
        <img
          className={clsx(styles.OrderItem_card_lookImg)}
          src={look?.imgPath}
          alt=""
        />
        <div className={clsx(styles.OrderItem_card_header)}>
          <div className={clsx(styles.OrderItem_card_header_brand)}>
            <img
              className={clsx(styles.OrderItem_card_header_brand_avatar)}
              src={account?.avatarPath}
              alt=""
            />
            <div className={clsx(styles.OrderItem_header_brand_name)}>
              {account?.username}
            </div>
          </div>
        </div>
        <div className={clsx(styles.OrderItem_card_footer)}>
          <div className={clsx(styles.OrderItem_card_name)}>{look?.name}</div>
          <div className={clsx(styles.OrderItem_card_price)}>
            ${look?.price}
          </div>
        </div>
      </div>
      <div className={clsx(styles.OrderItem_sizes)}>
        {look?.sizes.map((e, i) => (
          <div
            className={clsx(
              styles.OrderItem_sizes_item,
              !e.available && styles.disable,
              activeSizeIndex === i && styles.active
            )}
            onClick={() => {
              if (e.available) {
                if (i == activeSizeIndex) {
                  setActiveSizeIndex(null);
                } else {
                  setActiveSizeIndex(i);
                }
              }
            }}
            key={i}
          >
            <div className={clsx(styles.OrderItem_sizes_item_text)}>
              {e.size}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
