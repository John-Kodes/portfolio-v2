import Image from "next/image";
// Icons
import Logo from "@/icons/portfolioLogo.svg";
// Styles
import styles from "@/styles/Nav.module.scss";

// TODO: make nav bar animated with framer-motion

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          alt="John Daniel Semine Macaranas Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.btnsBox}>
        <button className={styles.link}>About</button>
        <button className={styles.link}>Projects</button>
        <button className={styles.link}>Contact</button>
        <button className={styles.resume}>Resume</button>
      </div>
    </nav>
  );
};

export default Nav;
