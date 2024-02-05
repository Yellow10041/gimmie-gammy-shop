import { FC, useEffect } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { HashtagsItem } from "./ui/hashtags-item";
import { IPostHashtag } from "@/types/post";

interface IHashtags {
  items: IPostHashtag[];
}

const data = ["#shirt", "#shirt", "#shirt", "#shirt", "#shirt"];

export const Hashtags: FC<IHashtags> = ({ items }) => {
  return <div className={clsx(styles.Hashtags)}>{items && items.length > 0 && items.map((e, i) => <HashtagsItem key={i}>{e.title}</HashtagsItem>)}</div>;
};
