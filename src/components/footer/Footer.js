/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Footer.module.scss";
import { nav, footer } from "../../data/data";
import Button from "../button/Button";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <Button className={styles.footer__logo}>
          <img
            src="/assets/logos/Dept-white.svg"
            alt="Dept white logo"
            className={styles.footer__logo_img}
          />
        </Button>

        <ul className={styles.footer__list}>
          {nav.map((item, index) => (
            <li className={styles.footer__item} key={index}>
              <Button className={styles.footer__menu_button}>{item}</Button>
            </li>
          ))}
        </ul>

        <div className={styles.footer__media}>
          <Button className={styles.footer__media_button}>
            <img src="/assets/icons/facebook.svg" alt="Facebook icon" />
          </Button>
          <Button className={styles.footer__media_button}>
            <img src="/assets/icons/twitter.svg" alt="Twitter icon" />
          </Button>
          <Button className={styles.footer__media_button}>
            <img src="/assets/icons/instagram.svg" alt="Instagram icon" />
          </Button>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        <ul className={styles.footer__copyright_list}>
          {footer.map((item, index) => (
            <li className={styles.footer__copyright_item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer__scroll}>
        <Button className={styles.footer__scroll_button} onClick={scrollTop}>
          <svg viewBox="0 0 13 24" className={styles.footer__scroll_arrow}>
            <path d="M5.61676 0.197354C5.77839 -0.0612402 6.15306 -0.0667486 6.32222 0.186982L12.2446 9.07061C12.4307 9.34966 12.2306 9.72343 11.8953 9.72343H0.42057C0.0907663 9.72343 -0.110299 9.36065 0.0644969 9.08098L5.61676 0.197354Z" />
            <path d="M4.70176 5.52443C4.70176 5.29253 4.88975 5.10454 5.12166 5.10454H7.22115C7.45306 5.10454 7.64105 5.29253 7.64105 5.52443V23.5801C7.64105 23.812 7.45306 24 7.22115 24H5.12166C4.88975 24 4.70176 23.812 4.70176 23.5801V5.52443Z" />
          </svg>
          <span className={styles.footer__scroll_text}>Top</span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
