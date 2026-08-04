"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const scrollerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollSpeed = 0.5; // pixels per frame — adjust for faster/slower
    let animationId: number;
    let isPaused = false;

    const step = () => {
      if (!isPaused && scroller) {
        scroller.scrollLeft += scrollSpeed;

        // Loop back to start once we've scrolled past the first set of cards
        const singleSetWidth = scroller.scrollWidth / 2;
        if (scroller.scrollLeft >= singleSetWidth) {
          scroller.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    scroller.addEventListener("mouseenter", handleMouseEnter);
    scroller.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scroller.removeEventListener("mouseenter", handleMouseEnter);
      scroller.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Projects</h1>
        <p className={styles.heroDescription}>
          A collection of what I've built - from full stack applications to AI-powered tools.
        </p>
      </section>

      <div className={styles.scrollerWarapper}>
        <div className={styles.scroller}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}