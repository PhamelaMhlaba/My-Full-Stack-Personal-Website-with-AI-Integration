//
// BlogPostTemplate.tsx
//
// A React Server Component — no "use client" directive here.
// Everything in this file renders as plain static HTML on the server.
// The only interactive piece (the share bar) lives in its own isolated
// Client Component file (ShareBar.tsx) and is imported as an island.
// 

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "../data/posts";
import ShareBar from "./ShareBar";
import styles from "./BlogPostTemplate.module.css";

// Component Props

interface BlogPostTemplateProps {
  /** The full blog post data object — shape defined in types/blog.ts */
  post: BlogPost;
  /**
   * The canonical URL for this post, built on the server in page.tsx.
   * Passed down so ShareBar never needs to read window.location itself.
   */
  canonicalUrl: string;
}

// BackLink 
// Single responsibility: render the "← Back to Blog" navigation link.
// Kept as its own component so it can be reused or restyled independently.

function BackLink() {
  return (
    <Link href="/tech-blog" className={styles.backLink}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 3L5 8L10 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to Blog
    </Link>
  );
}

// AuthorCard
// Displays author avatar, name, and role.
// If no avatarUrl is provided, falls back to a coloured initials circle —
// no broken image icon, no external placeholder service needed.

interface AuthorCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

function AuthorCard({ name, role, avatarUrl }: AuthorCardProps) {
  return (
    <div className={styles.authorBlock}>
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={`${name} avatar`}
          width={40}
          height={40}
          className={styles.authorAvatar}
        />
      ) : (
        <div
          className={styles.authorAvatarFallback}
          aria-label={`${name} avatar`}
        >
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      <div>
        <p className={styles.authorName}>{name}</p>
        <p className={styles.authorRole}>{role}</p>
      </div>
    </div>
  );
}

// CalendarIcon
// Inline SVG — no icon library dependency, zero JS, inherits text colour.

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="3"
        width="12"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M2 7H14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 1V4M11 1V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

//  ClockIcon 

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 5V8.5L10.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

//  Here
// The dark header section: background image (or gradient fallback), overlay,
// category badge, post title, author info, date, read time, and share bar.
//
// Receives the full post object rather than individual fields so that adding
// new fields to BlogPost (e.g. tags) doesn't require updating Hero's prop list.

interface HeroProps {
  post: BlogPost;
  canonicalUrl: string;
}

function Hero({ post, canonicalUrl }: HeroProps) {
  return (
    <header
      className={styles.hero}
      style={
        post.coverImageUrl
          ? { backgroundImage: `url(${post.coverImageUrl})` }
          : undefined
      }
    >
      {/* Semi-transparent overlay — makes white text legible over any image */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContent}>
        {/* ── Navigation ── */}
        <BackLink />

        {/* ── Category label e.g. "AI/ML", "React", "DevOps" ── */}
        <span className={styles.categoryBadge}>{post.category}</span>

        {/* ── Post title ── */}
        <h1 className={styles.heroTitle}>{post.title}</h1>

        {/* ── Meta row: author · date · read time · share ── */}
        <div className={styles.heroMeta}>

          {/* Author — dynamic, driven by post.author, never hardcoded */}
          <AuthorCard
            name={post.author?.name || "Unknown Author"}
            role={post.author?.role || "Contributor"}
            avatarUrl={post.author?.avatarUrl}
        />
          {/* Date — dateTime is machine-readable (SEO/a11y), displayDate is human-readable */}
          <div className={styles.metaItem}>
            <CalendarIcon />
            <time dateTime={post.date}>{post.displayDate}</time>
          </div>

          {/* Read time estimate */}
          <div className={styles.metaItem}>
            <ClockIcon />
            <span>{post.readTime}</span>
          </div>

          {/*
           * ShareBar is the ONLY Client Component on this page.
           * It receives everything it needs as plain props so it never
           * has to touch window.location or any browser-only API directly.
           */}
          <ShareBar title={post.title} url={canonicalUrl} />
        </div>
      </div>
    </header>
  );
}

// ArticleBody
// Renders the HTML content of the post inside a semantic <article> element.
//
// dangerouslySetInnerHTML is used intentionally — content is authored
// internally and controlled. If you ever connect a CMS, sanitise first:
//
//   import DOMPurify from "isomorphic-dompurify";
//   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />

interface ArticleBodyProps {
  content: string;
}

function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <article className={styles.articleBody}>
      <div
        className={styles.articleContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}

// BlogPostTemplate (main export) 
// The orchestrator. Its only job is to receive the data and delegate rendering
// to the focused sub-components above. It owns no logic of its own.

export default function BlogPostTemplate({
  post,
  canonicalUrl,
}: BlogPostTemplateProps) {
  return (
    <main className={styles.page}>
      <Hero post={post} canonicalUrl={canonicalUrl} />
      <ArticleBody content={post.content} />
    </main>
  );
}