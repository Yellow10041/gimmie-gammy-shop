import { FC, FormEvent, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Select } from "./ui/select";
import countryList from "react-select-country-list";
import { dataCountries } from "./data/dataCountries";

interface IOrderDetails {
  selectAddress: any;
  // isActive:
}

interface IOrderDetailsInputs {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export const OrderDetails: FC<IOrderDetails> = ({ selectAddress }) => {
  const [isButtonActive, setButtonActive] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [selectClearTrigger, setSelectClearTrigger] = useState<boolean>(false);

  const refForm = useRef<HTMLFormElement>(null);

  const options = useMemo(() => countryList().getData(), []);

  const changeDataType = (data: string) => {
    setCountry(data);
  };

  const { register, handleSubmit, reset, watch } = useForm<IOrderDetailsInputs>({
    mode: "onChange",
  });

  const watchAllFields = watch();

  const onSubmit: SubmitHandler<IOrderDetailsInputs> = async (data) => {
    setSelectClearTrigger((prev) => !prev);

    let resMas: any = {};

    Object.entries(data).map((data) => {
      resMas = {
        ...resMas,
        "country: ": country,
        [`${data[0]}: `]: data[1],
      };
    });

    selectAddress(resMas);
    reset();
  };

  useEffect(() => {
    let active = true;

    Object.entries(watchAllFields).map((e) => {
      if (e[1] == "") active = false;
    });

    setButtonActive(active);
  }, [watchAllFields]);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (refForm.current) {
      const formData = Object.fromEntries(new FormData(refForm.current).entries());

      // console.log(formData);
      selectAddress(formData);

      refForm.current.reset();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // для плавної прокрутки
    });
  };

  return (
    <div className={clsx(styles.OrderDetails)}>
      <div className={clsx(styles.OrderDetails_title)}>please fill in the details of where to send your order</div>
      <form className={clsx(styles.OrderDetails_form)} onSubmit={(e) => formSubmit(e)} ref={refForm}>
        <div className={clsx(styles.OrderDetails_form_inputs)}>
          <div className={clsx(styles.OrderDetails_form_inputs_box)}>
            <input className={clsx(styles.OrderDetails_form_input)} onBlur={scrollToTop} name="name" type="text" placeholder="Your Name" />
            <input className={clsx(styles.OrderDetails_form_input)} onBlur={scrollToTop} name="email" type="text" placeholder="Your Email" />
          </div>
          <Select onDataChange={changeDataType} clearTrigger={selectClearTrigger} items={[...dataCountries]} />
          <input className={clsx(styles.OrderDetails_form_input)} onBlur={scrollToTop} name="phone" type="text" placeholder="Your Phone Number" />
          <input className={clsx(styles.OrderDetails_form_input)} onBlur={scrollToTop} name="address" type="text" placeholder="Your Address" />
        </div>
        <button className={clsx(styles.OrderDetails_button, !isButtonActive && styles.disable)}>Create Order</button>
      </form>
    </div>
  );
};
