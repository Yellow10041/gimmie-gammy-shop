import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useState, useEffect } from "react";
import { MainContext } from "@/providers/MainContext";
import SendMessage from "@/utils/telegramSendMessage";

interface IEmailEnterProps {
  func: () => void;
}

const EmailEnter: React.FunctionComponent<IEmailEnterProps> = ({ func }) => {
  const { modalEmail, device, buttonTrigger } = useContext(MainContext);
  const [inputValue, setInputValue] = useState<string>("");

  const HandleButton = async () => {
    if (inputValue) {
      let resMas = {
        "Email: ": inputValue,
        "Device: ": device,
        "Button: ": buttonTrigger,
      };

      let response = await SendMessage(resMas);

      response && func();
    }
  };

  useEffect(() => {
    !modalEmail.isActive ? setInputValue("") : null;
  }, [modalEmail.isActive]);

  return (
    <div className={clsx(styles.EmailEnter)}>
      <div className={clsx(styles.EmailEnter_header)}>Enter your e-mail</div>
      <div className={clsx(styles.EmailEnter_description)}>
        Please enter your email address and we will send an invoice for payment
        to the address provided.
      </div>
      <div></div>
      <input
        className={clsx(styles.EmailEnter_input)}
        type="email"
        name="email"
        placeholder="hello@newolrd.com"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div
        className={clsx(styles.EmailEnter_button, inputValue && styles.active)}
        onClick={HandleButton}
      >
        Send
      </div>
    </div>
  );
};

export default EmailEnter;
