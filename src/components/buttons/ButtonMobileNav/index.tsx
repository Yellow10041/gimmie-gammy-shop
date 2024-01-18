import clsx from "clsx";
import styles from "./index.module.scss";

interface IButtonMobileNavProps {
  icon: React.ReactNode;
}

const ButtonMobileNav: React.FunctionComponent<IButtonMobileNavProps> = (
  {icon}
) => {
  return (
    <div className={clsx(styles.ButtonMobileNav)}>
      {icon}
    </div>
  );
};

export default ButtonMobileNav;
