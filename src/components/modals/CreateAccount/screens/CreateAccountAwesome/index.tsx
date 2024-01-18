import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useState } from "react";
import { MainContext } from "@/providers/MainContext";

import IconCheck from "@/public/img/icons/check";

interface ICreateAccountAwesomeProps {}

const CreateAccountAwesome: React.FunctionComponent<
  ICreateAccountAwesomeProps
> = (props) => {
  const { modalEmail } = useContext(MainContext);

  return (
    <div className={clsx(styles.CreateAccountAwesome)}>
      <div className={clsx(styles.CreateAccountAwesome_icon)}>
        <IconCheck />
      </div>
      <div className={clsx(styles.CreateAccountAwesome_header)}>Awesome!</div>
      <div className={clsx(styles.CreateAccountAwesome_description)}>
        We’ll get back to you within a few hours to confirm receipt and ask you
        some questions if any.
      </div>
      <div
        className={clsx(styles.CreateAccountAwesome_button)}
        onClick={() => {
          modalEmail.closeModal();
        }}
      >
        Close
      </div>
    </div>
  );
};

export default CreateAccountAwesome;
