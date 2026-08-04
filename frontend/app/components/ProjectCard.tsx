import Link from "next/link";
import styles from "./ProjectCard.module.css";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
     <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.image}
        />
        <span className={`${styles.statusBadge} ${project.status === "completed" ? styles.completed : styles.inProgress}`}>
          {project.status === "completed" ? "Completed" : "In Progress"}
        </span>
        <div className={styles.overlay} />
        <h3 className={styles.title}>{project.title}</h3>
      </div>
    </Link>
  );
}

      