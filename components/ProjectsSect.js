import Image from "next/image";
// Icons
import githubSmall from "@/icons/githubSmall.svg";
import ExternalLink from "@/icons/ExternalLink.svg";
// Styles
import styles from "@/styles/ProjectsSect.module.scss";
// Animation
import { motion } from "framer-motion";
// Utils
import { floatTextMaker } from "@/utils";
// data
import data from "../data/projects";

// TODO: add framer-motion to blackjax thumbnail text

const ProjectsSection = () => {
  const renderProjects = (data) => {
    return data.map((project, i) => {
      return (
        <div className={styles.projectBox} key={i}>
          <div className={styles.textBox}>
            <h3 className={styles.title}>{floatTextMaker(project.title)}</h3>
            <motion.p
              className={styles.description}
              whileHover={{ x: i % 2 ? -10 : 10 }}
            >
              {project.description}
            </motion.p>
            <ul className={styles.tags}>
              {project.tags.map((tag, i) => (
                <li key={i}>{floatTextMaker([tag], -4)}</li>
              ))}
            </ul>
            <div className={styles.btnsBox}>
              <a
                className={styles.btn}
                target="_blank"
                rel="noreferrer"
                href={project.github}
              >
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
              <a
                className={styles.btn}
                target="_blank"
                rel="noreferrer"
                href={project.externalLink}
              >
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </div>
          </div>

          {project.thumbnail}
        </div>
      );
    });
  };

  return (
    <section className={styles.section} id="section-projects">
      <div className={styles.header}>
        <h4>{floatTextMaker("Stuff I've made")}</h4>
        <h2>{floatTextMaker("My Projects")}</h2>
      </div>

      {[...renderProjects(data)]}
    </section>
  );
};

export default ProjectsSection;
