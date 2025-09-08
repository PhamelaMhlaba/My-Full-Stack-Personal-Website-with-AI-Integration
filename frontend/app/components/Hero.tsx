import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}></div>
                <div className={styles.HeroGrid}></div>

                {/* Left Content*/}
                <div className={styles.leftContent}></div>
                    <div className={styles.headingSection}> 
                        <h1 className={styles.mainHeading}>
                            Engineering the
                            <br />
                            Future with {''}
                            <span className= {styles.gradientText}>AI & Full Stack</span>
                        </h1>
                        <p className={styles.description}>
                            Full Stack Engneering Specializing in AI-powered applications, I 
                            architect and build intelligent systrems that seamlessly integrate
                            machine learning capabilities with scalable web infrastructure. 
                        </p>
                    </div>

                    {/*Action Buttons*/}
                    <div className={styles.buttonGroup}>
                        <button type="button" className={styles.primaryButton}>
                            View AI Solutions
                        </button>
                        <button type="button" className={styles.secondaryButton}>
                            Free Consultation
                        </button>
                    </div>

                    {/*Newsletter Section*/}
                    <div className={styles.newsletterCard}>
                        <div className={styles.newsletterHeader}>
                            <span className={styles.newsletterIcon}>📊</span>
                            <h4 className={styles.newsletterTitle}>Weekly AI &Tech Insights </h4>
                            <p>
                                Join 100+ developers getting cutting edge tips
                            </p>
                            <div className={styles.emailForm}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={styles.emailInput}
                                />
                                <button type="button" className={styles.subsrcibeButton}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Profile Image*/}
                    <div className={styles.rightContent}>
                        <div className={styles.imageContainer}>
                            <div className={styles.profileImageWrapper}>
                                <img
                                   // src={profileImg}
                                    alt="Phamela Mhlaba =Full Stack AI Engineer"
                                    className={styles.profileImage}
                                    />
                                <div className={styles.statusBadge}>
                                    <div className={styles.statusIndicator}></div>
                                    <span className={styles.statustext}>Available for Projects </span>
                                </div>
                            </div>
                            <div className={styles.decorativeCircle1}></div>
                            <div className={styles.decorativeCircle2}></div>
                        </div>
                    </div>
        </section>
    );
};

export default Hero;