/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import styles from "./ClientLogos.module.scss";
import { logos } from "../../../data/data";
import Aos from "aos";
import "aos/dist/aos.css";

const ClientLogos = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.client_logos}>
      <ul className={styles.client_logos__list}>
        {logos.map((logo, index) => (
          <li
            key={index}
            className={styles.client_logos__item}
            data-aos="fade-up"
          >
            <img
              src={logo}
              alt="client logo"
              className={styles.client_logos__img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientLogos;
