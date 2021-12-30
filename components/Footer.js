import Image from "next/image";
// Icons
import Github from "@/icons/GithubRound.svg";
import LinkedIn from "@/icons/LinkedIn.svg";
// Styles
import styles from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.credit}>
          <a
            href="https://github.com/John-Kodes/portfolio-v2"
            rel="noreferrer"
            target="_blank"
          >
            Built &amp; designed by John Daniel Semine
          </a>
          <br />
          {/* <a className={styles.email} href="mailto:johndanielsemine@gmail.com">
            johndanielsemine@gmail.com
          </a> */}
          <br />
          Made with &hearts;
        </p>
        <div className={styles.links}>
          <a
            className={styles.link}
            href="https://github.com/John-Kodes"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={Github}
              alt="github"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/john-daniel-s-949ab0204/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={LinkedIn}
              alt="linkedIn"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
