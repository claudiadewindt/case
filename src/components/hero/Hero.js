import React, { useEffect } from "react";
import styles from "./Hero.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className={styles.hero} data-aos="fade-down">
      <span className={styles.hero__label}>Work</span>
      <div className={styles.hero__title}>
        <span className={styles.hero__text}>A selection of projects that </span>
        <span className={styles.hero__text}>pioneer tech </span>
        <span className={styles.hero__text}>and </span>
        <span className={styles.hero__text}>marketing </span>
        <span className={styles.hero__text}>to help brands to stay ahead.</span>
      </div>
    </section>
  );
};

export default Hero;
