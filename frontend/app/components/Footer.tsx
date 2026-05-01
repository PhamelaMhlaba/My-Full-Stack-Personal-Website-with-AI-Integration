"use client";

import React from 'react';
import styles from './Footer.module.css';
import emailjs from "@emailjs/browser";

const Footer = () => {

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget

    try {
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
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className={styles.container}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandTitle}>
              Full Stack <span className={styles.gradientText}>AI Engineer</span>
            </h3>
            <p className={styles.brandDescription}>
              Engineering intelligent solutions that bridge AI capabilities with robust full-stack applications.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <span>GitHub</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <span>Twitter</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li><a href="#" className={styles.footerLink}>AI Chatbots</a></li>
              <li><a href="#" className={styles.footerLink}>Web Development</a></li>
              <li><a href="#" className={styles.footerLink}>Machine Learning</a></li>
              <li><a href="#" className={styles.footerLink}>Consulting</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Resources</h4>
            <ul className={styles.linksList}>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
              <li><a href="#" className={styles.footerLink}>Case Studies</a></li>
              <li><a href="#" className={styles.footerLink}>Free Tools</a></li>
              <li><a href="#" className={styles.footerLink}>Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2025 Phamela Mhlaba. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <a href="/privacy-policy" className={styles.legalLink}>Privacy Policy</a>
              <a href="/terms-of-service" className={styles.legalLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;