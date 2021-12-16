import Image from "next/image";
// Icons
import camera from "@/icons/camera.svg";
// Image
import portrait from "@/images/johndanielseminemacaranas.jpg";
// Styles
import styles from "@/styles/Header.module.scss";

// TODO: credit jake as easter egg

const Header = () => {
  const space = <>&ensp;&ensp;\&ensp;&ensp;</>;

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
          <div className={styles.photoFrame}>
            <Image
              src={portrait}
              layout="fill"
              alt="John Daniel Semine Macaranas"
              objectFit="cover"
              objectPosition="top"
              priority
              placeholder="blur"
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
            whaddup jake
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
