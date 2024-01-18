import clsx from "clsx";
import styles from "./index.module.scss";
import MobileNav from "@/widgets/MobileNav";

interface IMainMobProps {
  children: React.ReactNode;
}

const MainMob: React.FunctionComponent<IMainMobProps> = ({ children }) => {
  return (
    <div className={clsx(styles.MainMob)}>
      <div className={clsx(styles.MainMob_content)}>{children}</div>
      {/* <MobileNav /> */}
    </div>
  );
};

export default MainMob;
