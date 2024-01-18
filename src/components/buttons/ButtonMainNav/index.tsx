import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext } from "react";
import { MainContext } from "@/providers/MainContext";

interface IButtonMainNavProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const ButtonMainNav: React.FunctionComponent<IButtonMainNavProps> = ({
  children,
  active = false,
  onClick,
}) => {
  const { modalEmail } = useContext(MainContext);

  return (
    <div
      className={clsx(styles.ButtonMainNav)}
      onClick={() => modalEmail.openModal()}
    >
      <button
        className={clsx(styles.ButtonMainNavBox, active ? styles.active : null)}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonMainNav;
