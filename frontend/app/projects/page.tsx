import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Projects</h1>
        <p className={styles.heroDescription}>
          A collection of what I've built - from full stack applications to AI-powered tools.
        </p>
      </section>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}