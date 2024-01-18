import clsx from "clsx";
import styles from "./index.module.scss";
import { dataVideoCategories } from "@/data/dataVideoCategories";
import CategoriesMobItem from "./components/CategoriesMobItem";

interface ICategoriesMobProps {}

const CategoriesMob: React.FunctionComponent<ICategoriesMobProps> = (props) => {
  return (
    <div className={clsx(styles.CategoriesMob)}>
      {dataVideoCategories.map((e, i) => (
        <CategoriesMobItem title={e.title} key={i} />
      ))}
    </div>
  );
};

export default CategoriesMob;
