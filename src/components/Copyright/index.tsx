import clsx from "clsx";
import styles from "./index.module.scss";

interface ICopyrightProps {}

const Copyright: React.FunctionComponent<ICopyrightProps> = (props) => {
  return (
    <div className={clsx(styles.Copyright)}>
      © {new Date().getFullYear()} GIMY
    </div>
  );
};

export default Copyright;
