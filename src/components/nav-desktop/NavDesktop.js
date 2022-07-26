/* eslint-disable @next/next/no-img-element */
import React from "react";
import { nav } from "../../data/data";
import Button from "../button/Button";
import styles from "./NavDesktop.module.scss";

const NavDesktop = () => {
  return (
    <nav className={styles.navDesktop}>
      <ul className={styles.navDesktop__list}>
        {nav.map((item, index) => (
          <li className={styles.navDesktop__list__item} key={index}>
            <Button className={styles.navDesktop__button}>{item}</Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
