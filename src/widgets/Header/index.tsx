import clsx from "clsx";
import styles from "./index.module.scss";

import Logo from "@/components/Logo";
import Search from "@/components/Search";
import HeaderNav from "@/components/HeaderNav";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className={clsx(styles.Header)}>
      <Logo />
      <Search />
      <HeaderNav />
    </div>
  );
};

export default Header;
