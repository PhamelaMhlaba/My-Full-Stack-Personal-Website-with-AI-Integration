"use client";

import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const projects = getAllProjects();

  // Duplicate projects for infinite scrolling
  const scrollingProjects = [...projects, ...projects];

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Projects</h1>

        <p className={styles.heroDescription}>
          A collection of what I have built from full stack applications to AI-powered tools.
        </p>
      </section>

      <div className={styles.scrollerWrapper}>
        <div className={styles.scroller}>
          {scrollingProjects.map((project, index) => (
            <ProjectCard
              key={`${project.slug}-${index}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}