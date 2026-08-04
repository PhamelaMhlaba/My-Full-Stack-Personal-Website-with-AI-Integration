import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./ProjectDetailTemplate.module.css";

interface ProjectDetailTemplateProps {
  project: Project;
}

export default function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  return (
    <article>
      <header
        className={styles.hero}
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/projects" className={styles.backLink}>
            ← Back to Projects
          </Link>

          <span
            className={`${styles.statusBadge} ${
              project.status === "completed" ? styles.completed : styles.inProgress
            }`}
          >
            {project.status === "completed" ? "Completed" : "In Progress"}
          </span>

          <h1 className={styles.title}>{project.title}</h1>
        </div>
      </header>

      <div className={styles.body}>
        {project.problem && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <p className={styles.sectionText}>{project.problem}</p>
          </section>
        )}

        {project.solution && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Solution</h2>
            <p className={styles.sectionText}>{project.solution}</p>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <div className={styles.techStack}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className={styles.links}>
          {project.liveUrl && (
            <a
            
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink}
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}