import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Main Heading */}
            <div className={styles.headingSection}>
              <h1 className={styles.mainHeading}>
                Engineering the
                <br />
                Future with{' '}
                <span className={styles.gradientText}>
                  AI & Full Stack
                </span>
              </h1>
              
              {/* Description */}
              <p className={styles.description}>
                Full Stack Engineer specializing in AI-powered applications. I 
                architect and build intelligent systems that seamlessly integrate 
                machine learning capabilities with scalable web infrastructure.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className={styles.buttonGroup}>
              <button type="button" className={styles.primaryButton}>
                View AI Solutions
              </button>
              <button type="button" className={styles.secondaryButton}>
                Free Consultation
              </button>
            </div>
            
            {/* Newsletter Section */}
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterHeader}>
                <span className={styles.newsletterIcon}>📊</span>
                <h4 className={styles.newsletterTitle}>Weekly AI & Tech Insights</h4>
              </div>
              
              <p className={styles.newsletterDescription}>
                Join 100+ developers getting cutting-edge tips
              </p>
              
              <div className={styles.emailForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.emailInput}
                />
                <button type="button" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              {/* Profile Image Container */}
              <div className={styles.profileImageWrapper}>
                <img
                  src="/images/hero-profile.jpg"
                  alt="Phamela Mhlaba - Full Stack AI Engineer"
                  width={400}
                  height={500}   
                  className={styles.profileImage}
                />
                
                {/* Available Status Badge */}
                <div className={styles.statusBadge}>
                  <div className={styles.statusIndicator}></div>
                  <span className={styles.statusText}>Available for Projects</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className={styles.decorativeCircle1}></div>
              <div className={styles.decorativeCircle2}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;