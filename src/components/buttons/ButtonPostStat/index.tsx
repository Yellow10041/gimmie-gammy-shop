"use client";

import clsx from "clsx";
import styles from "./index.module.scss";

import { ReactNode, useState } from "react";

interface IButtonPostStatProps {
  icon: ReactNode;
  value: number;
  like?: boolean;
  onClick?: () => void;
}

const ButtonPostStat: React.FunctionComponent<IButtonPostStatProps> = ({ icon, value, like, onClick = () => null }) => {
  const [comValue, setComValue] = useState<number>(value);

  return (
    <div className={clsx(styles.ButtonPostStat)} onClick={() => (like ? setComValue(value + 1) : onClick())}>
      <div className={clsx(styles.ButtonPostStat_icon)}>{icon}</div>
      <div className={clsx(styles.ButtonPostStat_stat)}>{comValue}</div>
    </div>
  );
};

export default ButtonPostStat;
