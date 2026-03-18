import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "../../components/TechBlogGrid";
import BlogPostTemplate from "../../components/BlogPostTemplate";
import ShareBar from "../tech-blog/[id]/ShareBar";

import Image from "next/image";
import type { BlogPost } from "../types/blog";

import styles from "./BlogPostTemplate.module.css";


// ─── Types ────────────────────────────────────────────────────────────────────
// Next.js 15: params is a Promise — must be awaited.

interface PageParams {
  params: Promise<{ id: string }>;
}

// ─── Static Params ────────────────────────────────────────────────────────────
// Tells Next.js which [id] routes to pre-render at build time.
// All known posts get full static HTML — zero server work at request time.

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// Each blog post now gets its own <title> and <meta description>,
// which is critical for search engine indexing and social sharing.

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) return {};

  return {
    title: `${post.title} | Tech Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.coverImageUrl && { images: [{ url: post.coverImageUrl }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.coverImageUrl && { images: [post.coverImageUrl] }),
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function BlogPostPage({ params }: PageParams) {
  // Await params per Next.js 15 requirement
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) notFound();

  // Build canonical URL on the server — no window.location needed in client code
  const canonicalUrl = `${BASE_URL}/tech-blog/${post.id}`;

  return <BlogPostTemplate post={post} canonicalUrl={canonicalUrl} />;
}
