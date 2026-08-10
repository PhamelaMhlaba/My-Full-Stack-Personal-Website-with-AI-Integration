"use client";

import { useEffect, useState } from "react";
import styles from "./LikeButton.module.css";

interface LikeButtonProps {
  slug: string;
}

export default function LikeButton({ slug }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    const counts = JSON.parse(localStorage.getItem("likeCounts") || "{}");
    setLiked(!!likedPosts[slug]);
    setCount(counts[slug] || 0);
  }, [slug]);

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    const counts = JSON.parse(localStorage.getItem("likeCounts") || "{}");

    const nowLiked = !likedPosts[slug];
    likedPosts[slug] = nowLiked;
    counts[slug] = (counts[slug] || 0) + (nowLiked ? 1 : -1);

    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    localStorage.setItem("likeCounts", JSON.stringify(counts));

    setLiked(nowLiked);
    setCount(counts[slug]);
  };

  return (
    <button
      onClick={handleLike}
      className={`${styles.likeButton} ${liked ? styles.liked : ""}`}
      aria-label={liked ? "Unlike this post" : "Like this post"}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
      <span>{liked ? "Liked" : "Like"}{count > 0 ? ` (${count})` : ""}</span>
    </button>
  );
}