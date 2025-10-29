import React from 'react';
import styles from '/TechBlogGrid.module.css';

export default function TechBlogGrid () {

    const posts = [
        {
            id: 1,
            category: "AI/ML",
            readTime: "5 min read",
            title: "Building Production-Ready AI Applications with OpenAI GPT- 4",
            excerpt: "A comprehensive guide to integrating GPT-4 into your web applications, including best practices for prompt engineering and error...",
            date: "March 15, 2024"
        },
        {
            id: 2,
            category: "React",
            readTime: "8 min read",
            title: "Advanced React Patterns for Scalable Applications",
            excerpt: "Explore compound components, render props, and custom hooks to build maintainable and reausable Reactt...",
            date: "March 10,2024"
        },
        {
            id: 3,
            category: "DevOps",
            readTime: "12 min read",
            title: "Serverless Architecture: Building Scalable API;s with AWS lambda",
            excerpt: "Learn how to build and deploy serverless API's that automatically scale, reduce costs, and improve performance",
            date: "March 5, 2024"
        }
    ];

    return (
        <div className={styles.blogGrid}>
            {posts.map((posts) => (
                <article key={posts.id} className={styles.blogCard}>

                    {/* Category and Read Time */}
                    <div className={styles.postMeta}>
                        <span className={styles.category}>{posts.category}</span>
                        <span className={styles.readTime}>{posts.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className={styles.postTitle}>{posts.title}</h2>

                    {/* Excerpt */}
                    <p className={styles.postExcerpt}>{posts.excerpt}</p>

                    {/* Date and Read More */}
                    <div className={styles.postFooter}>
                        <span className={styles.postDate}>{posts.date}</span>
                        <a href={`/blog/${posts.id}`} className={styles.readMore}>
                            Read More
                        </a>
                    </div>
                </article>
            ))}
        </div>
    )
}