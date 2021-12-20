import Image from "next/image";
// Icons
import camera from "@/icons/camera.svg";
// Image
import portrait from "@/images/johndanielseminemacaranas.jpg";
// Styles
import styles from "@/styles/Header.module.scss";
// Utils
import { scrollToHandler, floatTextMaker } from "@/utils";

const Header = () => {
  const space = <>&ensp;\&ensp;</>;

  return (
    <header className={styles.header} id="header">
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h1 className={styles.name}>
            {floatTextMaker("John Daniel")}
            <br />
            <span className={styles.lastName}>
              {floatTextMaker("Semine Macaranas")}
            </span>
          </h1>
          <p className={styles.skills}>
            {floatTextMaker(
              [
                ["Full-Stack Developer"],
                space,
                ["MERN"],
                space,
                ["Designer"],
                space,
                ["Creative"],
              ],
              -12
            )}
          </p>
          <div className={styles.btnsContainer}>
            <button
              className={`${styles.btn} ${styles.btnProject}`}
              onClick={() => scrollToHandler("section-projects")}
            >
              Check some of my projects!
            </button>
            <button
              className={`${styles.btn} ${styles.btnAbout}`}
              onClick={() => scrollToHandler("section-about")}
            >
              About me
            </button>
          </div>
        </div>

        <div className={styles.photo}>
          <div className={styles.photoFrame}>
            <Image
              src={portrait}
              layout="fill"
              alt="John Daniel Semine Macaranas"
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </div>
          <div className={styles.credit}>
            <div className={styles.icon}>
              <Image
                src={camera}
                layout="fill"
                alt="camera"
                objectFit="contain"
              />
            </div>
            Jake Agustin
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
