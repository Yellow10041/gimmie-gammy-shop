import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext } from "react";
import { MainContext } from "@/providers/MainContext";

import ButtonMainNav from "@/components/buttons/ButtonMainNav";

import { dataMainNav } from "@/data/dataMainNav";

interface IMainNavProps {}

const MainNav: React.FunctionComponent<IMainNavProps> = (props) => {
  const { modalEmail, setButtonTrigger } = useContext(MainContext);

  const HandleButton = (title: string) => {
    setButtonTrigger(title);
    modalEmail.openModal();
  };

  return (
    <div className={clsx(styles.MainNav)}>
      {dataMainNav.map((e, i) => (
        <ButtonMainNav
          active={i == 0 ? true : false}
          onClick={() => HandleButton(e.title)}
          key={i}
        >
          {e.icon}
          {e.title}
        </ButtonMainNav>
      ))}
    </div>
  );
};

export default MainNav;
