import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          
          {/* Main Content Area */}
          <div className={styles.mainContent}>
            
            {/* Left Column - Text Content */}
            <div className={styles.textContent}>
              <div className={styles.headingSection}>
                <h1 className={styles.mainHeading}>
                  Engineering the
                  <br />
                  Future with{' '}
                  <span className={styles.gradientText}>AI & Full Stack</span>
                </h1>
                
                <p className={styles.description}>
                  Full Stack Engineer specializing in AI-powered applications. I 
                  architect and build intelligent systems that seamlessly integrate 
                  machine learning capabilities with scalable web infrastructure.
                </p>
              </div>
              
              <div className={styles.buttonGroup}>
                <button type="button" className={styles.primaryButton}>
                  View AI Solutions
                </button>
                <button type="button" className={styles.secondaryButton}>
                  Free Consultation
                </button>
              </div>
              
              <div className={styles.newsletterCard}>
                <div className={styles.newsletterHeader}>
                  <span className={styles.newsletterIcon}>📊</span>
                  <h4 className={styles.newsletterTitle}>Weekly AI & Tech Insights</h4>
                </div>
                
                <p className={styles.newsletterDescription}>
                  Join 10,000+ developers getting cutting-edge tips
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

            {/* Right Column - Profile Image */}
            <div className={styles.imageContent}>
              <div className={styles.profileImageWrapper}>
                <img
                  src="/images/hero-profile.jpg"
                  alt="Phamela Mhlaba - Full Stack AI Engineer"
                  className={styles.profileImage}
                />
                
                <div className={styles.statusBadge}>
                  <div className={styles.statusIndicator}></div>
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Section - BELOW BOTH COLUMNS */}
          <div className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>5+</h3>
                <p className={styles.statLabel}>Projects Delivered</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>5+</h3>
                <p className={styles.statLabel}>Happy Clients</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>2</h3>
                <p className={styles.statLabel}>Years Experience</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>24/7</h3>
                <p className={styles.statLabel}>Support Available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;