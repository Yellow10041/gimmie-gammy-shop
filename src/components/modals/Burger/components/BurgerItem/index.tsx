import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext } from "react";
import { MainContext } from "@/providers/MainContext";

interface IBurgerItemProps {
  title: string;
  count: number;
}

const BurgerItem: React.FunctionComponent<IBurgerItemProps> = ({
  title,
  count,
}) => {
  const { modalEmail, modalBurger } = useContext(MainContext);

  const HandleButton = () => {
    modalEmail.setButton(title);
    modalEmail.openModal();
  };

  return (
    <div className={clsx(styles.BurgerItem)} onClick={HandleButton}>
      {title}
      <div className={clsx(styles.BurgerItem_count)}>{count}</div>
    </div>
  );
};

export default BurgerItem;
