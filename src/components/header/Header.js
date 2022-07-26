/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import styles from "./Header.module.scss";
import Button from "../button/Button";
import NavDesktop from "../nav-desktop/NavDesktop";
import MenuOverlay from "../menu-overlay/MenuOverlay";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const onCLoseClick = () => {
    setIsOpen(false);
  };

  const isMobile = width <= 768;

  return (
    <header className={styles.header}>
      {isMobile ? (
        <div className={styles.header__mobile}>
          <Button href="/" className={styles.header__logo}>
            <img
              src="/assets/logos/Dept-black.svg"
              alt="DEPT black logo"
              className={styles.header__logo_img}
            />
          </Button>

          <Button onClick={onMenuClick} className={styles.header__button_open}>
            <span>Menu</span>
          </Button>
        </div>
      ) : (
        <div className={styles.header__desktop}>
          <Button href="/" className={styles.header__logo}>
            <img
              src="/assets/logos/Dept-white.svg"
              alt="DEPT white logo"
              className={styles.header__logo_img}
            />
          </Button>

          <div className={styles.header__menu}>
            <NavDesktop className={styles.header__navbar} />

            <Button
              onClick={onMenuClick}
              className={styles.header__button_open}
            >
              <img
                src="/assets/icons/menu.svg"
                alt="menu"
                className={styles.header__icon}
              />
            </Button>
          </div>
        </div>
      )}
      <MenuOverlay isOpen={isOpen} onCLoseClick={onCLoseClick} />
    </header>
  );
};

export default Header;
