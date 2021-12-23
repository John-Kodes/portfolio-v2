import { useEffect, useState } from "react";
import Image from "next/image";
// Icons
import Logo from "@/icons/portfolioLogo.svg";
// Styles
import styles from "@/styles/Nav.module.scss";
// Util
import { scrollToHandler } from "@/utils";

// TODO: Make hamburger for mobile

const Nav = ({ inView }) => {
  // page Y position
  const [y, setY] = useState(undefined);
  // if last scroll direction was up
  const [scrollUp, setScrollUp] = useState(false);
  // hamburger state
  const [isActive, setIsActive] = useState(false);

  const MobileScrollTo = (section) => {
    scrollToHandler(section);
    setIsActive(true);
  };

  // Finds scroll direction
  useEffect(() => {
    if (!window) return;
    setY(window.scrollY);

    let prevScrollpos = window.scrollY;

    window.onscroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) setScrollUp(true);

      if (prevScrollpos < currentScrollPos) setScrollUp(false);

      prevScrollpos = currentScrollPos;
    };
  }, [y]);

  useEffect(() => {
    if (!document) return;

    if (isActive) document.body.style.overflow = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [isActive]);

  return (
    <>
      <nav
        className={`${styles.nav} ${!scrollUp && !inView && styles.navHide}`}
      >
        <div
          className={`${styles.logo} ${
            (!inView && styles.logoHide) || (isActive && styles.logoFade)
          }`}
        >
          <Image
            src={Logo}
            alt="John Daniel Semine Macaranas Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={`${styles.btnsBox} ${inView && styles.btnsBoxInitial}`}>
          <button
            className={styles.link}
            onClick={() => scrollToHandler("section-about")}
          >
            About
          </button>
          <button
            className={styles.link}
            onClick={() => scrollToHandler("section-projects")}
          >
            Projects
          </button>
          <button
            className={styles.link}
            onClick={() => scrollToHandler("section-contact")}
          >
            Contact
          </button>
          <button className={styles.resume}>Resume</button>
        </div>
        {/* MOBILE HAMBURGER NAV */}
        <div
          className={styles.hamburger}
          onClick={() => setIsActive(!isActive)}
        >
          <div className={`${styles.line} ${isActive && styles.lineActive}`} />
        </div>
      </nav>
      <ul className={`${styles.navPage} ${!isActive && styles.navPageHide}`}>
        <li
          className={styles.pageLink}
          onClick={() => {
            MobileScrollTo("section-about");
          }}
        >
          About
        </li>
        <li
          className={styles.pageLink}
          onClick={() => {
            MobileScrollTo("section-projects");
          }}
        >
          Projects
        </li>
        <li
          className={styles.pageLink}
          onClick={() => {
            MobileScrollTo("section-contact");
          }}
        >
          Contact
        </li>
        <li className={styles.pageResume}>Resume</li>
      </ul>
      <div
        className={`${styles.overlay} ${!isActive && styles.overlayHidden}`}
      />
    </>
  );
};

export default Nav;
