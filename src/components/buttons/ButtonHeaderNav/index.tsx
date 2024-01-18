import clsx from "clsx";
import styles from "./index.module.scss";

interface IButtonHeaderNavProps {
  children: React.ReactNode;
  fill?: boolean;
  onClick?: () => void;
}

const ButtonHeaderNav: React.FunctionComponent<IButtonHeaderNavProps> = ({
  children,
  fill = false,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.ButtonHeaderNav, fill ? styles.fill : null)}
      onClick={() => (onClick ? onClick() : null)}
    >
      {children}
    </div>
  );
};

export default ButtonHeaderNav;
