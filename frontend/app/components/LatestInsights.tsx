"use client"

import React, { useState } from "react";
import type { BlogPost as BlogPostType } from "@/lib/posts";
import styles from  "./LatestInsights.module.css";
import BlogPost from "./BlogPost";


const POSTS_PER_PAGE = 4;

interface LatestInsightsProps {
  posts: BlogPostType[];
}

export default function LatestInsights({ posts }: LatestInsightsProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

    return (
        <section className={styles.latesInsightsContainer}>   
            {/* Tech Blog Grid */}
            <div className={styles.blogGrid}>
                {currentPosts.map((post) => (
                 <BlogPost key={post.slug} post={post} />
                ))} 
            </div>
            
            {/* Pagination */}
            <div className={styles.pagination}>

            {/* Previous */}
            <button
                className={styles.pageBtn}
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt; Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
                key={page}
                className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ""}`}
                onClick={() => goToPage(page)}
            >
                {page}
                </button>
            ))}

            {/* Next */}
            <button
                className={styles.pageBtn}
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next &gt;
            </button>

        </div>
    </section>
    );
}

