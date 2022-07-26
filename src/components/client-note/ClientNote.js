import { useEffect } from "react";
import { notes } from "../../data/data";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./ClientNote.module.scss";
import ReadMore from "../read-more/ReadMore";
import Aos from "aos";
import "aos/dist/aos.css";

const ClientNote = () => {
  const { width } = useWindowSize();

  const isMobile = width <= 768;

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className={styles.note__section} data-aos="fade-up">
      {isMobile ? (
        <ul className={styles.note__list}>
          {notes.map((note, index) => (
            <li key={index} className={styles.note__item}>
              <span className={styles.note__title}>{note.company}</span>
              <p className={styles.note__paragraph}>{note.slogan}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.note__list}>
          {notes.map((note, index) => (
            <li key={index} className={styles.note__item}>
              <span className={styles.note__title}>{note.company}</span>
              <p className={styles.note__paragraph}>{note.slogan}</p>
              <ReadMore />
            </li>
          ))}
          <li className={styles.note__item}>
            <span className={styles.note__title}>{notes[0].company}</span>
            <p className={styles.note__paragraph}>{notes[0].slogan}</p>
            <ReadMore />
          </li>
        </ul>
      )}
    </section>
  );
};

export default ClientNote;
