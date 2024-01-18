import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext } from "react";
import { MainContext } from "@/providers/MainContext";

import IconButtonBuyBorder from "@/public/img/icons/buttonBuyBorder";
import IconButtonBuyBorderMob from "@/public/img/icons/buttonBuyBorderMob";

interface IButtonBuyProps {
  title: string;
}

const ButtonBuy: React.FunctionComponent<IButtonBuyProps> = ({ title }) => {
  const { modalEmail, windowWidth, setButtonTrigger } = useContext(MainContext);

  const HandleButton = () => {
    setButtonTrigger(title);
    modalEmail.openModal();
  };

  return (
    <div className={clsx(styles.ButtonBuy)} onClick={HandleButton}>
      <div className={clsx(styles.ButtonBuy_inner)}>
        {windowWidth > 1024 ? (
          <IconButtonBuyBorder />
        ) : (
          <IconButtonBuyBorderMob />
        )}

        {title}
      </div>
    </div>
  );
};

export default ButtonBuy;
