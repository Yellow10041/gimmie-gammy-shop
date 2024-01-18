import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

interface IOrderDetails {
  selectAddress: any;
}

interface IOrderDetailsInputs {
  name: string;
  email: string;
  address: string;
}

export const OrderDetails: FC<IOrderDetails> = ({ selectAddress }) => {
  const [isButtonActive, setButtonActive] = useState<boolean>(false);

  const { register, handleSubmit, reset, watch } = useForm<IOrderDetailsInputs>(
    {
      mode: "onChange",
    }
  );

  const watchAllFields = watch();

  const onSubmit: SubmitHandler<IOrderDetailsInputs> = async (data) => {
    let resMas: any = {};

    Object.entries(data).map((data) => {
      resMas = {
        ...resMas,
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
