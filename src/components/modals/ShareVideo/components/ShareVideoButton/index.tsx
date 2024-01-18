import clsx from "clsx";
import styles from "./index.module.scss";

interface IShareVideoButtonProps {
  dataSharer: string;
  dataURL: string;
  title: string;
}

const ShareVideoButton: React.FunctionComponent<IShareVideoButtonProps> = ({
  dataSharer,
  dataURL,
  title,
}) => {
  return (
    <button
      className={clsx(styles.ShareVideoButton)}
      data-sharer={dataSharer}
      data-title="Checkout GIMMIE GAMMY!"
      data-url={dataURL}
      onClick={() => navigator.clipboard.writeText(dataURL)}
    >
      {title} <span>{dataSharer}</span>
    </button>
  );
};

export default ShareVideoButton;
