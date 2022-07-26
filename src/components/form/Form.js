import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../button/Button";
import styles from "./Form.module.scss";

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    message: yup.string().required("This field is required"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <span className={styles.form__title}>Question? We are here to help!</span>

      <div className={styles.form__container}>
        <div className={styles.form__wrapper}>
          <label htmlFor="name" className={styles.form__label}>
            Name
          </label>
          <input {...register("name")} className={styles.form__input} />
          <p className={styles.form__error}>{errors.name?.message}</p>
        </div>

        <div className={styles.form__wrapper}>
          <label htmlFor="email" className={styles.form__label}>
            Email
          </label>
          <input {...register("email")} className={styles.form__input} />
          <p className={styles.form__error}>{errors.email?.message}</p>
        </div>
        <div>
          <div className={styles.form__wrapper}>
            <label htmlFor="message" className={styles.form__label}>
              Message
            </label>
            <textarea
              {...register("message")}
              className={styles.form__textarea}
            />
            <p className={styles.form__error_text}>{errors.message?.message}</p>
          </div>

          <Button
            type="submit"
            className={
              errors.email || errors.name || errors.message
                ? styles.form__button_error
                : styles.form__button
            }
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
