/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../button/Button";
import styles from "./ReadMore.module.scss";

const ReadMore = () => {
  return (
    <Button className={styles.read__button}>
      <img
        src="/assets/icons/ellipse.svg"
        alt="ellipse"
        className={styles.read__icon}
      />
      <span>Read more</span>
    </Button>
  );
};

export default ReadMore;
