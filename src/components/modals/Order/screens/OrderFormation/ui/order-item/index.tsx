import { FC, useContext, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { IAccount, ILook } from "@/types/Post.interface";
import { MainContext } from "@/providers/MainContext";
import { IPostClothes } from "@/types/post";
import { getMediaPath } from "@/utils/getMediaPath";
import { IBrand } from "@/types/global";

interface IOrderItem {
  clothes: IPostClothes;
  brand: IBrand;
  forwardData: any;
}

export const OrderItem: FC<IOrderItem> = ({ clothes, brand, forwardData }) => {
  const { modalOrder } = useContext(MainContext);

  const [activeSizeIndex, setActiveSizeIndex] = useState<number | null>(null);

  useEffect(() => {
    const data = {
      brand: brand.data.attributes.title,
      itemName: clothes.title,
      itemPrice: clothes.price,
      itemSize: activeSizeIndex != null ? clothes.sizes[activeSizeIndex].size : null,
    };

    forwardData(data);
  }, [activeSizeIndex]);

  useEffect(() => {
    !modalOrder.isActive && setActiveSizeIndex(null);
  }, [modalOrder.isActive]);

  return (
    <div className={clsx(styles.OrderItem)}>
      <div className={clsx(styles.OrderItem_card)}>
        <img className={clsx(styles.OrderItem_card_lookImg)} src={getMediaPath(clothes.image)} alt="" />
        <div className={clsx(styles.OrderItem_card_header)}>
          <div className={clsx(styles.OrderItem_card_header_brand)}>
            <img className={clsx(styles.OrderItem_card_header_brand_avatar)} src={getMediaPath(brand.data.attributes.logo)} alt="" />
            <div className={clsx(styles.OrderItem_header_brand_name)}>{brand.data.attributes.title}</div>
          </div>
        </div>
        <div className={clsx(styles.OrderItem_card_footer)}>
          <div className={clsx(styles.OrderItem_card_name)}>{clothes.title}</div>
          <div className={clsx(styles.OrderItem_card_price)}>${clothes.price}</div>
        </div>
      </div>
      <div className={clsx(styles.OrderItem_sizes)}>
        {clothes?.sizes.map((e, i) => (
          <div
            className={clsx(styles.OrderItem_sizes_item, !e.available && styles.disable, activeSizeIndex === i && styles.active)}
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
            <div className={clsx(styles.OrderItem_sizes_item_text)}>{e.size}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
