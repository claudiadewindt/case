import React, { useEffect } from "react";
import styles from "./ClientQuote.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const ClientQuote = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className={styles.quote} data-aos="fade-up">
      <p className={styles.quote__paragraph}>
        “Dept helped us tell our story through a bold new identity and a robust
        online experience. To the tone of 60% growth in online bookings in just
        one month””
      </p>
      <p className={styles.quote__paragraph}>
        MATTIJS TEN DRINK - CEO, TRANSAVIA
      </p>
    </section>
  );
};

export default ClientQuote;
