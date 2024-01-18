import clsx from "clsx";
import styles from "./index.module.scss";

import { KeyboardEvent, useContext, useRef } from "react";
import { MainContext } from "@/providers/MainContext";
import Image from "next/image";

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const { modalCreateAccount, setButtonTrigger } = useContext(MainContext);

  const refInput = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      modalCreateAccount.openModal();
      setButtonTrigger(`Search: ${refInput.current?.value}`);
    }
  };

  return (
    <div className={clsx(styles.Search)}>
      <Image
        className={clsx(styles.Search_icon)}
        src="/img/search.svg"
        alt="search"
        width={0}
        height={0}
        priority
      />
      <input
        className={clsx(styles.Search_input)}
        placeholder="Search goods ..."
        onKeyDown={handleKeyPress}
        ref={refInput}
      />
    </div>
  );
};

export default Search;
