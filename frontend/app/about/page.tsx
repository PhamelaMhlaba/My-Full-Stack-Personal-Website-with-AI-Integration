import React from "react";
import styles from './About-me.module.css';
import AboutMeCoreSkills from '../components/AboutMeCoreSkills';

export default function AboutPage() {
    return (
        <main className={styles.main}>
            {/* Centered Header Section */}
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>
                    About Me
                </h1>
                <p className={styles.sectionDescription}>
                    Passionate about building intelligent, scalable solutions that make a real difference in business and everyday life.
                </p>
            </div>

            {/* Two Column Bio Section */}
            <section className={styles.bioSection}>
                <div className={styles.bioContainer}>
                    {/* Left Column - Profile Image */}
                    <div className={styles.imageColumn}>
                        <div className={styles.profileImage}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/images/coding-image.jpg"
                                    alt="Phamela Mhlaba - Full Stack AI Engineer"
                                    className={styles.image}
                                />
                            </div>
                        </div>                 
                    </div>

                    {/* Right Column - Bio Content */}
                    <div className={styles.contentColumn}>
                        <h2 className={styles.bioTitle}>
                            Engineering AI Solutions at Scale
                        </h2>
                        <div className={styles.bioText}>
                            <p>
                                With over 2 years of Full-Stack Engineering experience and 2 years specializing in AI/ML Solutions, I architect and build production-ready AI applications that serve users. My expertise spans from backend infrastructure to frontend interfaces, with deep knowledge in machine learning ops.
                            </p>
                            <p>
                                I specialize in translating complex AI capabilities into intuitive user experiences, building the entire technology stack from data pipelines to deployment infrastructure. My approach combines software engineering best practices with cutting-edge AI research to deliver reliable, scalable solutions.
                            </p>
                        </div>

                        {/* Statistics Grid */}
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>8+</span>
                                <span className={styles.statLabel}>Projects Delivered</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>8+</span>
                                <span className={styles.statLabel}>Happy Clients</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>2+</span>
                                <span className={styles.statLabel}>Years Experience</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>24/7</span>
                                <span className={styles.statLabel}>Support Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core expertise Section */}
                <AboutMeCoreSkills />
            </section>
    
          {/* Professional Journey, Digital CV Timeline. I can add more professional careers which makes this section scalable  */}
          <section>
            <h2>
                Professional Journey
            </h2>
            <div>
            <div>
                2025
            </div>
            <p><strong>Full Stack AI Engineer & Project Manager</strong></p>
            <p>Proto Care Pty (ltd)</p>
            <p>Developed the User Interface of the Proto Care Main Website. Currently developing the Patient Portal where I am involved in both frontend and backend development </p>
            </div>
          </section>
        </main>
    );
};
