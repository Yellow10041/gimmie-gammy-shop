import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext } from "react";
import { MainContext } from "@/providers/MainContext";

import ButtonHeaderNav from "../buttons/ButtonHeaderNav";
import ButtonMenu from "../buttons/ButtonMenu";
import IconPlus from "@/public/img/icons/plus";

interface IHeaderNavProps {}

const HeaderNav: React.FunctionComponent<IHeaderNavProps> = (props) => {
  const { modalEmail, modalCreateAccount, setButtonTrigger } =
    useContext(MainContext);

  const HandleButtonUpload = (title: string) => {
    setButtonTrigger(title);
    modalCreateAccount.openModal();
  };

  const HandleButton = (title: string) => {
    setButtonTrigger(title);
    modalEmail.openModal();
  };

  return (
    <button className={clsx(styles.HeaderNav)}>
      <div className={clsx(styles.HeaderNav_buttons)}>
        <ButtonHeaderNav onClick={() => HandleButtonUpload("Sign Up")}>
          Sign Up
        </ButtonHeaderNav>
        <ButtonHeaderNav fill={true} onClick={() => HandleButton("Sign In")}>
          Sign In
        </ButtonHeaderNav>
      </div>
      <ButtonMenu />
    </button>
  );
};

export default HeaderNav;
