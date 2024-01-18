import clsx from "clsx";
import styles from "./index.module.scss";

interface ISeparatorProps {}

const Separator: React.FunctionComponent<ISeparatorProps> = (props) => {
  return <div className={clsx(styles.Separator)} />;
};

export default Separator;
