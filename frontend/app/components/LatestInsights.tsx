import React from "react";
import  Posts  from "../data/posts";
import styles from  "./LatestInsights.module.css";
import BlogPost from "./BlogPost";

export default function LatestInsights() {
    return (
        <section className={styles.latesInsightsContainer}>
            {/* Tech Blog Header */}
            <div className={styles.latesInsightsHeader}>
                <h3 className={styles.title}>
                    Latest Insights
                </h3>
                <p className={styles.headerDescription}>
                    Practical advice and reflections on building a sustainable tech career
                </p>
            </div>
            
            {/* Tech Blog Grid */}
            <div className={styles.blogGrid}>
                {Posts.map((post) => (
                 <BlogPost key={post.id} post={post} />
                ))} 
            </div>
        </section>
    )
}

