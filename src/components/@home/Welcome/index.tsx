import clsx from "clsx";
import styles from "./index.module.scss";

interface IWelcomeProps {}

const Welcome: React.FunctionComponent<IWelcomeProps> = (props) => {
  return (
    <div className={clsx(styles.Welcome)}>
      <div className={clsx(styles.Welcome_title)}>
        Trendiest products of the month
      </div>
      <div className={clsx(styles.Welcome_subtitle)}>
        Quality guarantee, if the item is defective or does not match the
        picture we will pay x2
      </div>
    </div>
  );
};

export default Welcome;
