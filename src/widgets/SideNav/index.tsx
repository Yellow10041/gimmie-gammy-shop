import clsx from "clsx";
import styles from "./index.module.scss";

import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Separator from "@/components/Separator";
import TrendingIn from "@/components/TrendingIn";

import { dataTrendingIn } from "@/data/dataTrendingIn";

interface ISideNavProps {}

const SideNav: React.FunctionComponent<ISideNavProps> = (props) => {
  return (
    <div className={clsx(styles.SideNav)}>
      <div className={clsx(styles.SideNav_top)}>
        <MainNav />
        <Separator />
        <div className={clsx(styles.SideNav_trendingIn)}>
          {dataTrendingIn.map((e, i) => (
            <TrendingIn {...e} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SideNav;
