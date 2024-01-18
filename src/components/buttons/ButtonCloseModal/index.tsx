import clsx from "clsx";
import styles from "./index.module.scss";
import IconClose from "@/public/img/icons/close";

interface IButtonCloseModalProps {
  onClick: () => void;
}

const ButtonCloseModal: React.FunctionComponent<IButtonCloseModalProps> = ({
  onClick,
}) => {
  return (
    <div className={clsx(styles.ButtonCloseModal)} onClick={onClick}>
      <IconClose />
    </div>
  );
};

export default ButtonCloseModal;
