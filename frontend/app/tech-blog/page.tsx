"use client";

import React from 'react';
import TechBlog from "../components/TechBlogHeader";
import TechBlogGrid from "../components/TechBlogGrid";
import styles from "./TechBlog.module.css";
import emailjs from "@emailjs/browser";

export default function TechBlogPage() {

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_iuy2l0j",
        "template_2hbew44",
        form,
        "Si7luRLFo1x_8Wym5"
      );

      alert("Subscribed Successfully");
      form.reset();
    } catch (error: any) {
      console.error("EmailJS Error status:", error?.status);
      console.error("EmailJS Error text:", error?.text);
      console.error("Full error:", error);

      alert(`Subscription failed: ${error?.text || "Please try again"}`);
    }
  };

    return (
        <div>
            <TechBlog />
            <TechBlogGrid />
        {/* Newsletter Subscription */}
        <div className={styles.newsLetterSection}>
            <h3 className={styles.title}>
                Stay Updated with Latest Posts
            </h3>
            <p className={styles.titleDescription}>
                Get weekly insights on AI, development, and technology trends delivered to your inbox. 
            </p>

            {/* Newsletter Form */}
            <div className={styles.newsletterCard}>
                 <form onSubmit={handleSubscribe} className={styles.newsLetterForm}>
            
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
  );
}
                   
                
            
        
