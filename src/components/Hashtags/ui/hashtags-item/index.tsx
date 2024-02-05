import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface IHashtagsItem {}

export const HashtagsItem: FC<PropsWithChildren<IHashtagsItem>> = ({ children }) => {
  return <div className={clsx(styles.HashtagsItem)}>#{children}</div>;
};
