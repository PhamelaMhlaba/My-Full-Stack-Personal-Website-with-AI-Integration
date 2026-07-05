"use client";

import React from 'react';
import styles from './Hero.module.css';
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Hero: React.FC = () => {
    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget

    try {

      //Email to user confirmation 
      await emailjs
      .sendForm(
        "service_iuy2l0j",
        "template_2hbew44",
        form,
        "Si7luRLFo1x_8Wym5"
      );
    
      alert("Subscribed Successfully");
      form.reset();

    } catch (error: any) {
      // Log the full error so you can debug
      console.error("EmailJS Error status:", error?.status);
      console.error("EmailJS Error text:", error?.text);
      console.error("Full error:", error);
      alert(`Subscription failed: ${error?.text || "Please try again"}`);
    }
  }
      

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
              
              <div className={styles.ctaGroup}>
                    <Link href="/ai-assistance" className="btn-primary">
                        View AI Solutions
                    </Link>

                    <a
                        href="/Phamela_Mhlaba_Resume_2026.pdf"
                        download="Phamela_Mhlaba_Resume_2026.pdf"
                        className={styles.btnSecondary}
                    >
                      <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download my Resume
                   </a>
              </div>
    
              <div className={styles.newsletterCard}>
                <div className={styles.newsletterHeader}>
                  <span className={styles.newsletterIcon}>📊</span>
                  <h4 className={styles.newsletterTitle}>Weekly AI & Tech Insights</h4>
                </div>
                
                <p className={styles.newsletterDescription}>
                  Join 100+ developers getting cutting-edge tips
                </p>
                
                <div className={styles.newsLetterForm}>
                  {/* User to to be able to subscribe */}
                  <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your email"
                        required
                        className={styles.emailInput}
                      />

                      <button type="submit" className={styles.subscribeButton}>
                          Subscribe
                      </button>
                  </form>
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