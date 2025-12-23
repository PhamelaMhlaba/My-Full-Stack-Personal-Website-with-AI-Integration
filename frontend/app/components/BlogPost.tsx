import styles from "./BlogPost.module.css";
import { BlogPost as BlogPostType } from "../data/posts";

type Props = {
  post: BlogPostType;
};

export default function BlogPost({ post }: Props) {
  return (
    <article className={styles.card}>
      {/* Meta info */}
      <div className={styles.meta}>
        <span className={styles.category}>{post.category}</span>
        {/*Import the time icon for readTime */}
        <span className={styles.readTime}>{post.readTime}</span>
      </div>

      {/* Title */}
      <h4 className={styles.title}>{post.title}</h4>

      {/* Excerpt */}
      <p className={styles.excerpt}>{post.excerpt}</p>

      {/* Footer */}
      <div className={styles.footer}>
        <time className={styles.date}>
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>

        {/* Future-ready link */}
        <a
          href={`/blog/${post.slug}`}
          className={styles.readMore}
          aria-label={`Read more about ${post.title}`}
        >
          Read More →
        </a>
      </div>
    </article>
  );
}
