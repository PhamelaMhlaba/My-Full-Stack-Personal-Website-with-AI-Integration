import React from "react";
import  Posts  from "../data/posts";
import styles from  "./LatestInsights.module.css";
import BlogPost from "./BlogPost";
import Link from "next/link";

export default function LatestInsights() {
    return (
        <section className={styles.latesInsightsContainer}>   
            {/* Tech Blog Grid */}
            <div className={styles.blogGrid}>
                {Posts.map((post) => (
                 <BlogPost key={post.id} post={post} />
                ))} 
            </div>
            <div className={styles.buttonContainer}>
                    <Link href="/tech-blog" className={styles.viewAllButtonLink}>
                        View all Posts
                    </Link>
            </div>
        </section>
    )
}

