import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className={styles.image}
          sizes="430px"
        />

        <div className={styles.overlay} />

        <span
          className={`${styles.statusBadge} ${
            project.status === "completed"
              ? styles.completed
              : styles.inProgress
          }`}
        >
          {project.status === "completed"
            ? "Completed"
            : "In Progress"}
        </span>

        <div className={styles.content}>
          <h3 className={styles.title}>
            {project.title}
          </h3>

          <p className={styles.description}>
            {project.description}
          </p>

          <span className={styles.viewProject}>
            View Project →
          </span>
        </div>
      </div>
    </Link>
  );
}