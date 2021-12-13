import Image from "next/image";
// Icons
import dots from "@/images/dotsBG.png";
// Styles
import styles from "@/styles/ProjectsSect.module.scss";

const ProjectsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h4>Stuff i&apos;ve made</h4>
        <h2>My Projects</h2>
      </div>
    </section>
  );
};

export default ProjectsSection;
