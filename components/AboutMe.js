import Image from "next/image";
// Icons
import dots from "@/images/dotsBG.png";
// Styles
import styles from "@/styles/AboutMe.module.scss";

const AboutMeSection = () => {
  return (
    <section>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h4>Get to know me!</h4>
          <h2>&bull;&ensp;About Me</h2>
          <p>
            Hello! My name is John Daniel and I&apos;m based in California.
            I&apos;m a full stack developer (<span>MERN</span>) specializing in
            front-end development. I create engaging and interactive
            experiences, and also functional interfaces using <span>React</span>{" "}
            and <span>Next.js</span>.<br />I spend everyday improving both my
            coding and design skills.
            <br />
            <br />I have a passion for writing code, learning, design and also
            creating intuitive, dynamic user experiences.
          </p>
        </div>
        <div className={styles.skillsBox}>
          <h3>Technological Skills</h3>
          <div className={styles.itemsBox}>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>HTML5</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>CSS3 / SCSS</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>JavaScript</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>React</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>Next.js</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>Github / Git</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>Node.js</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>Express.js</p>
            </div>
            <div className={styles.item}>
              <div className={styles.thumbnail}>image</div>
              <p>MongoDB</p>
            </div>
          </div>
          <p className={styles.more}>...and more</p>
          <Image
            src={dots}
            layout="fill"
            alt="dots"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
