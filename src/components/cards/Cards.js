/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import styles from "./Cards.module.scss";
import { cards } from "../../data/data";
import ClientNote from "../client-note/ClientNote";
import ReadMore from "../read-more/ReadMore";
import ClientQuote from "../client-quote/ClientQuote";
import Aos from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  const firstCards = cards.slice(0, 4);
  const secondCards = cards.slice(5, 7);
  const thirdCards = cards.slice(8, 12);
  const fourthCards = cards.slice(12, 16);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.card}>
      <ul className={styles.card__list}>
        {firstCards.map((card, index) => (
          <li
            className={styles.card__item}
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
            data-aos={card.aos}
          >
            <div className={styles.card__content}>
              <span className={styles.card__company}>{card.company}</span>
              <p className={styles.card__slogan}>{card.slogan}</p>
              <ReadMore />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.card__note}>
        <div
          style={{ backgroundImage: `url(${cards[4].image})` }}
          className={styles.card__note_item}
          data-aos={cards[4].aos}
        >
          <div className={styles.card__content}>
            <span className={styles.card__company}>{cards[4].company}</span>
            <p className={styles.card__slogan}>{cards[4].slogan}</p>
            <ReadMore />
          </div>
        </div>
        <ClientNote className={styles.clientNote} />
      </div>

      <ul className={styles.card__list}>
        {secondCards.map((card, index) => (
          <li
            className={styles.card__item}
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
            data-aos={card.aos}
          >
            <div className={styles.card__content}>
              <span className={styles.card__company}>{card.company}</span>
              <p className={styles.card__slogan}>{card.slogan}</p>
              <ReadMore />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.card__note}>
        <ClientNote className={styles.clientNote} />
        <div
          style={{ backgroundImage: `url(${cards[7].image})` }}
          className={styles.card__note_item}
          data-aos={cards[7].aos}
        >
          <div className={styles.card__content}>
            <span className={styles.card__company}>{cards[7].company}</span>
            <p className={styles.card__slogan}>{cards[7].slogan}</p>
            <ReadMore />
          </div>
        </div>
      </div>

      <ul className={styles.card__list}>
        {thirdCards.map((card, index) => (
          <li
            className={styles.card__item}
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
            data-aos={card.aos}
          >
            <div className={styles.card__content}>
              <span className={styles.card__company}>{card.company}</span>
              <p className={styles.card__slogan}>{card.slogan}</p>
              <ReadMore />
            </div>
          </li>
        ))}
      </ul>

      <ClientQuote className={styles.client_quote} />

      <ul className={styles.card__list}>
        {fourthCards.map((card, index) => (
          <li
            className={styles.card__item}
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
            data-aos={card.aos}
          >
            <div className={styles.card__content}>
              <span className={styles.card__company}>{card.company}</span>
              <p className={styles.card__slogan}>{card.slogan}</p>
              <ReadMore />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
