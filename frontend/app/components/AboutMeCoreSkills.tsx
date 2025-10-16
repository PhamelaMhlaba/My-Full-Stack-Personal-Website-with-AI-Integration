import React from 'react';
import styles from './AboutMeCoreSkills.module.css';

export default function AboutMeCoreSkills() {
    return (
        <div className={styles.coreExperiseHeader}>
            <h2 className={styles.coreExpertise}>
                Core Expertise
            </h2>
            <p className={styles.coreExpertiseDescription}>
                A comprehensive skill set spanning frontend, backend, AI/ML, and cloud technologies
            </p>
        </div>
    )
}