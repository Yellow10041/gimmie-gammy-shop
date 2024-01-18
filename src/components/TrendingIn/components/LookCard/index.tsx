import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface ILookCard {
  imgUrl: string;
}

export const LookCard: FC<ILookCard> = ({ imgUrl }) => {
  return (
    <div className={clsx(styles.LookCard)}>
      <img src={imgUrl} alt="" />
    </div>
  );
};
