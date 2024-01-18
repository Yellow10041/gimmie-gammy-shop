import clsx from "clsx";
import styles from "./index.module.scss";

import Copyright from "@/components/Copyright";

interface IRightSideProps {}

const RightSide: React.FunctionComponent<IRightSideProps> = (props) => {
  return (
    <div className={clsx(styles.RightSide)}>
      <Copyright />
    </div>
  );
};

export default RightSide;
