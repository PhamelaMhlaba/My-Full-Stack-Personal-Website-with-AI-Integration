import React from 'react';
import styles from './AboutMeCoreSkills.module.css';

export default function AboutMeCoreSkills() {
    const skillsCategories =[
        {
            title: "Frontend Engineering",
            description: "Creating responsive, performant user interfaces with modern frameworks and libraries.",
            skills:["React", "Javascript", "TypeScript", "C#", "Blazor", "Bootsrap", "Tailwind CSS"]
        },
        {
            title: "Backend Engineering",
            description: "Building scalable server architectures and robust API systems.",
            skills: ["Node,js", "Express.js", "Python", "MongoDB", "SQL", "PostegreSQL"]
        },
        {
            title: "AI/ML",
            description: "Implementing intelligent solutions using cutting-edge AI technologies.",
            skills: ["Tensorflow", "Pytorch", "Scikit_learn", "OpenAI", "Numpy", "Pandas", "Matplotlib"]
        }
    ];

    const skillsButtons =  ["React", "TypeScript", "Next.js", "C3", "Blazor", "Node.js", "Python", "AWS", "TensorFlow","Pytorch", "Numpy", "PostgreSQL", "Docker"];
    return (
        <section className={styles.container}>
            <div className={styles.coreExpertiseHeader}>
                <h2 className={styles.coreExpertiseTitle}>
                    Core Expertise
                </h2>
                <p className={styles.coreExpertiseDescription}>
                    A comprehensive skill set spanning frontend, backend, AI/ML, and cloud technologies
                </p>
            </div>

            {/* Horizontal Skills List Buttons */}
            <div className={styles.skillsContainer}>
                <div className={styles.skillsFlexContainer}>
                    {skillsButtons.map((skill, index) => (
                        <button
                            key={index}
                            className={styles.skillButton}
                            aria-label={skill}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
            </div>

            {/* Three Column Grid */}
            <div className={styles.categoriesGrid}>
              {skillsCategories.map((category, index) => (
                <div key={index} className={styles.categoryCard}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <ul className={styles.skillsList}>
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className={styles.skillItem}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
             ))}
        </div>

        {/* Professional Journey */}
        <div className={styles.professionalJourneyContainer}>
            
        </div>
    </section>
    );
}