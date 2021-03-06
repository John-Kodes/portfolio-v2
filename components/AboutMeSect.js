import Image from "next/image";
// Icons
import Html5 from "@/icons/HTML5.svg";
import CssAndScss from "@/icons/CssAndScss.svg";
import JavaScript from "@/icons/JavaScript.svg";
import React from "@/icons/React.svg";
import Next from "@/icons/Next.svg";
import GithubAndGit from "@/icons/GithubAndGit.svg";
import Node from "@/icons/Node.svg";
import Express from "@/icons/Express.svg";
import MongoDB from "@/icons/MongoDB.svg";
// Background
import dots from "@/images/dotsBG.png";
// Animations
import { motion } from "framer-motion";
// Styles
import styles from "@/styles/AboutMeSect.module.scss";
// Utils
import { floatTextMaker } from "@/utils";

const AboutMeSection = () => {
  const skillItemHover = {
    scale: 1.1,
  };

  return (
    <section id="section-about">
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h4>{floatTextMaker("Get to know me!")}</h4>
          <h2>&bull;&ensp;{floatTextMaker("About Me")}</h2>
          <p>
            Hello! My name is John Daniel and I&apos;m based in California.
            I&apos;m a full stack developer (<span>MERN</span>) specializing in
            front-end development. I create engaging and interactive
            experiences, and also functional interfaces using <span>React</span>{" "}
            and <span>Next.js</span>.
            <br />I spend everyday improving both my coding and design skills. I
            have a passion for writing code, learning, design and also creating
            intuitive, dynamic user experiences.
          </p>
        </div>
        <div className={styles.skillsBox}>
          <h3>Technological Skills</h3>
          <div className={styles.itemsBox}>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={Html5}
                  layout="fill"
                  alt="HTML5"
                  objectFit="contain"
                />
              </div>
              <p>HTML5</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={CssAndScss}
                  layout="fill"
                  alt="CSS and Sass"
                  objectFit="contain"
                />
              </div>
              <p>CSS3 / SCSS</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={JavaScript}
                  layout="fill"
                  alt="JavaScript"
                  objectFit="contain"
                />
              </div>
              <p>JavaScript</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={React}
                  layout="fill"
                  alt="React framework"
                  objectFit="contain"
                />
              </div>
              <p>React</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={Next}
                  layout="fill"
                  alt="Next meta-framework"
                  objectFit="contain"
                />
              </div>
              <p>Next.js</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={GithubAndGit}
                  layout="fill"
                  alt="Github and Git"
                  objectFit="contain"
                />
              </div>
              <p>Github / Git</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={Node}
                  layout="fill"
                  alt="Node.js"
                  objectFit="contain"
                />
              </div>
              <p>Node.js</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={Express}
                  layout="fill"
                  alt="Express framework"
                  objectFit="contain"
                />
              </div>
              <p>Express.js</p>
            </motion.div>
            <motion.div className={styles.item} whileHover={skillItemHover}>
              <div className={styles.thumbnail}>
                <Image
                  src={MongoDB}
                  layout="fill"
                  alt="Mongo Database"
                  objectFit="contain"
                />
              </div>
              <p>MongoDB</p>
            </motion.div>
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
