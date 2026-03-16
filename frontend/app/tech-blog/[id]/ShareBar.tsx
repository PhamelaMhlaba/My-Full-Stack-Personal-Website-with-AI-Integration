"use client";

// ─── ShareBar ─────────────────────────────────────────────────────────────────
// Isolated as its own Client Component so that BlogPostTemplate (the parent)
// can remain a Server Component. Only this small island of interactivity
// ships as client-side JS — the rest of the page is static HTML.

import { useState, useCallback, useMemo } from "react";
import styles from "./ShareBar.module.css";

interface ShareBarProps {
  title: string;
  /** Pass the canonical URL from the server to avoid `window` access on mount */
  url: string;
}

// Pure function — easy to unit test in isolation
function buildShareUrls(title: string, url: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };
}

export default function ShareBar({ title, url }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  // Memoised — only recomputes when title or url actually changes
  const shareUrls = useMemo(() => buildShareUrls(title, url), [title, url]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      // Reset after 2s so the button is reusable
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that block clipboard without user gesture
      console.warn("Clipboard write failed");
    }
  }, [url]);

  return (
    <div className={styles.shareBlock}>
      <span className={styles.shareLabel}>Share:</span>

      <a
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareBtn}
        aria-label="Share on Twitter"
      >
        <TwitterIcon />
      </a>

      <a
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareBtn}
        aria-label="Share on LinkedIn"
      >
        <LinkedInIcon />
      </a>

      <a
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareBtn}
        aria-label="Share on Facebook"
      >
        <FacebookIcon />
      </a>

      <button
        type="button"
        className={`${styles.shareBtn} ${copied ? styles.shareBtnCopied : ""}`}
        aria-label={copied ? "Link copied!" : "Copy link"}
        onClick={handleCopy}
      >
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
// Each is a pure, side-effect-free component — zero dependencies, trivially testable.

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452H17.21v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.991V9h3.114v1.561h.046c.434-.822 1.494-1.689 3.075-1.689 3.29 0 3.897 2.166 3.897 4.984v6.596zM5.337 7.433a1.806 1.806 0 01-1.806-1.805 1.806 1.806 0 011.806-1.806 1.806 1.806 0 011.806 1.806 1.806 1.806 0 01-1.806 1.805zm1.558 13.019H3.78V9h3.115v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
