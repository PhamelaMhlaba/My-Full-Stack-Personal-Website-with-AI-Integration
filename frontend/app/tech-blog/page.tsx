import React from 'react';
import TechBlog from "../components/TechBlogHeader";
import TechBlogGrid from "../components/TechBlogGrid";
import styles from "./TechBlog.module.css";

export default function TechBlogPage () {
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
            <div className={styles.newsLetterForm}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.emailInput}
                />
                <button className={styles.subscribeButton}>
                    Subscribe
                </button>
            </div>
       </div>
    </div>
  );
}
                   
                
            
        
