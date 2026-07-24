import styles from "./ProjectCard.module.css";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.image}
        />
        <span className={`${styles.statusBadge} ${project.status === "completed" ? styles.completed : styles.inProgress}`}>
          {project.status === "completed" ? "Completed" : "In Progress"}
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}