import React from 'react';
import styles from './TechBlogPage,module.css';

export default function TechblogPage(){
    return (
        <section className={styles.techContainer}>
            {/* Tech Blog Header */}
            <div className={styles.techHeader}>
                <h2 className={styles.techTitle}>
                    Tech Blog
                </h2>
                <p className={styles.techDescription}>
                    Sharing insights, tutorials, and thoughts on the latest in AI, web development, and technology trends.
                </p>
            </div>
        </section>
    )
}