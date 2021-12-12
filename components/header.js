import Image from "next/image";
// Image
import portrait from "@/images/johndanielseminemacaranas.jpg";
// Styles
import styles from "@/styles/Header.module.scss";

// TODO: credit jake as easter egg

const Header = () => {
  const space = <>&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;</>;

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h1 className={styles.name}>
            John Daniel
            <br />
            <span>Semine Macaranas</span>
          </h1>
          <p className={styles.skills}>
            Full-Stack Developer{space}MERN{space}Designer{space}Creative
          </p>
          <div className={styles.btnsContainer}>
            <button className={`${styles.btn} ${styles.btnProject}`}>
              Check some of my projects!
            </button>
            <button className={`${styles.btn} ${styles.btnAbout}`}>
              About me
            </button>
          </div>
        </div>

        <div className={styles.photo}>
          <Image
            src={portrait}
            layout="fill"
            alt="John Daniel Semine Macaranas"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
