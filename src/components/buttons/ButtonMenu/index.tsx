import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext } from "react";
import { MainContext } from "@/providers/MainContext";

interface IButtonMenuProps {}

const ButtonMenu: React.FunctionComponent<IButtonMenuProps> = (props) => {
  const { modalBurger } = useContext(MainContext);

  return (
    <div className={clsx(styles.ButtonMenu)} onClick={modalBurger.openModal}>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div className={clsx(styles.ButtonMenu_row)} key={i}>
            {Array(3)
              .fill(null)
              .map((_, ind) => (
                <div className={clsx(styles.ButtonMenu_row_item)} key={ind} />
              ))}
          </div>
        ))}
    </div>
  );
};

export default ButtonMenu;
