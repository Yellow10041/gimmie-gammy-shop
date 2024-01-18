import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { IconShop } from "@/public/img/icons/shop";

interface IButtonOrder {
  onClick?: () => void;
}

export const ButtonOrder: FC<PropsWithChildren<IButtonOrder>> = ({
  onClick,
  children,
}) => {
  return (
    <div className={clsx(styles.ButtonOrder)} onClick={onClick}>
      <IconShop />
      {children}
    </div>
  );
};
