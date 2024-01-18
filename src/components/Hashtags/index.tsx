import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { HashtagsItem } from "./ui/hashtags-item";

interface IHashtags {}

const data = ["#shirt", "#shirt", "#shirt", "#shirt", "#shirt"];

export const Hashtags: FC<IHashtags> = () => {
  return (
    <div className={clsx(styles.Hashtags)}>
      {data.map((e, i) => (
        <HashtagsItem key={i}>{e}</HashtagsItem>
      ))}
    </div>
  );
};
