import clsx from "clsx";
import styles from "./index.module.scss";

import { dataFooter } from "@/data/dataFooter";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className={clsx(styles.Footer)}>
      {dataFooter.map((e, i) => (
        <a
          className={clsx(styles.Footer_item)}
          href={e.link}
          target="_blank"
          key={i}
        >
          {e.title}
        </a>
      ))}
    </div>
  );
};

export default Footer;
