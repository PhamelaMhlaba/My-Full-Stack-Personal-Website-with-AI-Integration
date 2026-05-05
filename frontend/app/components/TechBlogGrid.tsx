
import React from 'react';
import styles from './TechBlogGrid.module.css';
import Link from 'next/link';
import { blogPosts } from "@/app/data/posts";


{/* Data Shape of Blog */}

interface BlogPost {
  id: number;
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  }   
}

// Move data outside component — no re-creation on every render


export default function TechBlogGrid () { 
    return (
        <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
                <article key={post.id} className={styles.blogCard}>

                    {/* Category and Read Time */}
                    <div className={styles.postMeta}>
                        <span className={styles.category}>{post.category}</span>
                        <span className={styles.readTime}>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className={styles.postTitle}>{post.title}</h2>

                    {/* Excerpt */}
                    <p className={styles.postExcerpt}>{post.excerpt}</p>

                    {/* Date and Read More */}
                    <div className={styles.postFooter}>
                        <span className={styles.postDate}>{post.date}</span>
                        {/* Correct path + Next.js Link = no 404 */}
                        <Link href={`/tech-blog/${post.slug}`} className={styles.readMore}>
                            Read More
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    )
}
