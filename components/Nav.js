import { useEffect, useState } from "react";
import Image from "next/image";
// Icons
import Logo from "@/icons/portfolioLogo.svg";
// Styles
import styles from "@/styles/Nav.module.scss";

const Nav = ({ inView }) => {
  // page Y position
  const [y, setY] = useState(undefined);
  // if last scroll direction was up
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    // Finds scroll direction
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
        <button className={styles.link}>About</button>
        <button className={styles.link}>Projects</button>
        <button className={styles.link}>Contact</button>
        <button className={styles.resume}>Resume</button>
      </div>
    </nav>
  );
};

export default Nav;
