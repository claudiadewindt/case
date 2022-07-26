/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { menu } from "../../data/data";
import Button from "../button/Button";
import styles from "./NavOverlay.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const NavOverlay = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <nav className={styles.navOverlay}>
      <ul className={styles.navOverlay__list}>
        {menu.map((item, index) => (
          <li
            className={styles.navOverlay__item}
            key={index}
            data-aos="fade-right"
          >
            <Button className={styles.navOverlay__button}>
              <img
                src="/assets/icons/arrow-white.svg"
                alt="arrow"
                className={styles.navOverlay__arrow}
              />
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavOverlay;
