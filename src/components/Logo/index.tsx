import Image from "next/image";

import clsx from "clsx";
import styles from "./index.module.scss";

interface ILogoProps {}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
    <div className={clsx(styles.Logo)}>
      <Image
        className={clsx(styles.Logo_icon)}
        src="/img/logo.svg"
        alt="logo"
        width={0}
        height={0}
        priority
      />
      <div className={clsx(styles.Logo_text)}>
        <div className={clsx(styles.Logo_text_item)}>gimmy</div>
        <div className={clsx(styles.Logo_text_item)}>
          <span>gammy</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
