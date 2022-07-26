/* eslint-disable @next/next/no-img-element */

import React from "react";
import styles from "./MenuOverlay.module.scss";
import Button from "../button/Button";
import NavOverlay from "../nav-overlay/NavOverlay";
import { countries } from "../../data/data";

const MenuOverlay = ({ isOpen, onCLoseClick }) => {
  const country = countries[0];
  const countryName = countries.slice(1, 8);

  return (
    <div className={isOpen ? styles.menu__open : styles.menu__closed}>
      <div className={styles.menu__top}>
        <Button href="/" className={styles.menu__logo}>
          <img
            src="/assets/logos/Dept-white.svg"
            alt="DEPT white logo"
            className={styles.menu__logo_img}
          />
        </Button>
        <Button onClick={onCLoseClick} className={styles.menu__button_close}>
          <img
            src="/assets/icons/hamburger-close.svg"
            alt="menu"
            className={styles.menu__icon}
          />
        </Button>
      </div>

      <div className={styles.menu__section}>
        <div className={styles.menu__wrapper}>
          <span className={styles.menu__country}>{country}</span>
          <ul className={styles.menu__list}>
            {countryName.map((item, index) => (
              <li className={styles.menu__item} key={index}>
                <Button className={styles.menu__button}>
                  <img
                    src="/assets/icons/arrow-white.svg"
                    alt="arrow"
                    className={styles.menu__arrow}
                  />
                  <span className={styles.menu__text}>{item}</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <NavOverlay className={styles.menu__navbar} />
      </div>
    </div>
  );
};

export default MenuOverlay;
