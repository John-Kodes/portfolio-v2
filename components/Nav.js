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

  return (
    <nav className={`${styles.nav} ${!scrollUp && !inView && styles.navHide}`}>
      <div className={`${styles.logo} ${!inView && styles.logoHide}`}>
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
      <div className={styles.hamburger} onClick={() => setIsActive(!isActive)}>
        <div className={`${styles.line} ${isActive && styles.lineActive}`} />
      </div>
    </nav>
  );
};

export default Nav;
