import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext } from "react";
import { MainContext } from "@/providers/MainContext";

interface ICategoriesMobItemProps {
  title: string;
}

const CategoriesMobItem: React.FunctionComponent<ICategoriesMobItemProps> = ({
  title,
}) => {
  const { modalEmail } = useContext(MainContext);

  const HandleButton = () => {
    modalEmail.setButton(title);
    modalEmail.openModal();
  };

  return (
    <div className={clsx(styles.CategoriesMobItem)} onClick={HandleButton}>
      {title}
    </div>
  );
};

export default CategoriesMobItem;
