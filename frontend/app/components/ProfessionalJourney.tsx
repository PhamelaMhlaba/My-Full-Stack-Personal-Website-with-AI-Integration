import React from 'react';
import styles from './ProfessionalJourney.module.css';

export default function ProfessionalJourney() {

    const professionalExperiences = [
        {
            title: "Full- Stack AI Engineer",
            company: "Proto Care pty ltd",
            description: "Developed the Healttech Holistic Patient Platform"
        },
        {
            title: "Project Manager Intern",
            company: "Proto Care Pty (ltd)",
            description: "Led Cross-Functional teams distributed in South Africa and ensured that the team met Product goals",
        },
        {
            title: "Full Stack Engineer",
            company: "Project Y",
            description: "Buildt a Full-Stack Application that helps travellers in South Africa with activities to do based on their prefernces"
        }
    ]
    return (
        <section className={styles.professionalJourneyContainer}>
            {/* Section Header */}
            <div className={styles.header}>
                <h2 className={styles.title}>
                    Professional Journey
                </h2>
            </div>

            {/* Timeline Experinces List */}
            <div className={styles.timeLine}>
                {professionalExperiences.map((experience, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timeLineItem}>
                            {/* Put in the job details in the box*/}
                            <h3 className={styles.jobTitle}>{experience.title}</h3>
                            <p className={styles.company}>{experience.company}</p>
                            <p className={styles.jobDescription}>{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}