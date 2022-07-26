import styles from "./Banner.module.scss";
import Button from "../button/Button";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <p>
        <span className={styles.banner__text}>in </span>
        <Button className={styles.banner__button}>
          <span className={styles.banner__text_button}>all industries</span>
        </Button>
      </p>
      <p>
        <span className={styles.banner__text}>Show me </span>
        <Button className={styles.banner__button}>
          <span className={styles.banner__text_button}>all work</span>
        </Button>
      </p>
    </section>
  );
};

export default Banner;
