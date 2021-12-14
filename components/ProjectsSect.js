import Image from "next/image";
import Link from "next/link";
// Icons
import githubSmall from "@/icons/githubSmall.svg";
import ExternalLink from "@/icons/ExternalLink.svg";
// Styles
import styles from "@/styles/ProjectsSect.module.scss";

const ProjectsSection = () => {
  const space = <>&ensp;&ensp;</>;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h4>Stuff i&apos;ve made</h4>
        <h2>My Projects</h2>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Project Name</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            laborum ipsum velit autem officia saepe atque vero voluptatem
            quisquam. Molestias.
          </p>
          <p className={styles.tags}>
            React{space}Redux{space}Router{space}Styled-Components
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.thumbnail}>thumbnail</div>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Project Name</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            laborum ipsum velit autem officia saepe atque vero voluptatem
            quisquam. Molestias.
          </p>
          <p className={styles.tags}>
            React{space}Redux{space}Router{space}Styled-Components
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.thumbnail}>thumbnail</div>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Project Name</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            laborum ipsum velit autem officia saepe atque vero voluptatem
            quisquam. Molestias.
          </p>
          <p className={styles.tags}>
            React{space}Redux{space}Router{space}Styled-Components
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.thumbnail}>thumbnail</div>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Project Name</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            laborum ipsum velit autem officia saepe atque vero voluptatem
            quisquam. Molestias.
          </p>
          <p className={styles.tags}>
            React{space}Redux{space}Router{space}Styled-Components
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.thumbnail}>thumbnail</div>
      </div>
    </section>
  );
};

export default ProjectsSection;
