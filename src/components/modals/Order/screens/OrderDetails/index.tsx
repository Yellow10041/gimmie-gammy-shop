import { FC, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Select, SelectItem } from "./ui/select";
import countryList from "react-select-country-list";

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

  const options = useMemo(() => countryList().getData(), []);

  const changeDataType = (data: string) => {
    setCountry(data);
  };

  const { register, handleSubmit, reset, watch } = useForm<IOrderDetailsInputs>(
    {
      mode: "onChange",
    }
  );

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

  return (
    <div className={clsx(styles.OrderDetails)}>
      <div className={clsx(styles.OrderDetails_title)}>
        please fill in the details of where to send your order
      </div>
      <form
        className={clsx(styles.OrderDetails_form)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={clsx(styles.OrderDetails_form_inputs)}>
          <div className={clsx(styles.OrderDetails_form_inputs_box)}>
            <input
              className={clsx(styles.OrderDetails_form_input)}
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Your Name"
            />
            <input
              className={clsx(styles.OrderDetails_form_input)}
              {...register("email", {
                required: "Email is required",
              })}
              type="text"
              placeholder="Your Email"
            />
          </div>
          <Select
            onDataChange={changeDataType}
            clearTrigger={selectClearTrigger}
            items={[...options]}
          />
          <input
            className={clsx(styles.OrderDetails_form_input)}
            {...register("phone", {
              required: "Phone Number is required",
            })}
            type="text"
            placeholder="Your Phone Number"
          />
          <input
            className={clsx(styles.OrderDetails_form_input)}
            {...register("address", {
              required: "Address is required",
            })}
            type="text"
            placeholder="Your Address"
          />
        </div>
        <button
          className={clsx(
            styles.OrderDetails_button,
            !isButtonActive && styles.disable
          )}
        >
          Create Order
        </button>
      </form>
    </div>
  );
};
