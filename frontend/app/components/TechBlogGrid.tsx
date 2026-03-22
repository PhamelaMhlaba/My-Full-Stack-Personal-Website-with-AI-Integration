import React from 'react';
import styles from './TechBlogGrid.module.css';
import Link from 'next/Link';

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
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "gpt4-ai-applications",
    category: "AI/ML",
    readTime: "5 min read",
    title: "Building Production-Ready AI Applications with OpenAI GPT-4",
    excerpt: "A comprehensive guide to integrating GPT-4 into your web applications, including best practices for prompt engineering and error handling...",
    date: "March 15, 2024",
    content: `
      <p>Building production-ready AI applications requires more than just calling the OpenAI API. 
      You need robust error handling, rate limiting, and thoughtful prompt engineering.</p>
      <p>In this guide, we'll walk through integrating GPT-4 into a Next.js application, 
      covering authentication, streaming responses, and cost optimisation strategies.</p>
      <h2>Setting Up the API Client</h2>
      <p>Start by installing the official OpenAI SDK and configuring your environment variables 
      securely. Never expose your API key on the client side.</p>
      <h2>Prompt Engineering Best Practices</h2>
      <p>Effective prompts are specific, provide context, and define the expected output format. 
      Use system messages to set behaviour boundaries and user messages for dynamic input.</p>
      <h2>Error Handling & Resilience</h2>
      <p>Implement exponential backoff for rate limit errors, graceful degradation when the API 
      is unavailable, and always validate model outputs before rendering them to users.</p>
    `,
    author: {
    name: "Phamela Mhlaba",
    role: "AI Developer",
    avatarUrl: "" 
  }
  },
  {
    id: 2,
    slug: "advanced-react-patterns",
    category: "React",
    readTime: "8 min read",
    title: "Advanced React Patterns for Scalable Applications",
    excerpt: "Explore compound components, render props, and custom hooks to build maintainable and reusable React applications...",
    date: "March 10, 2024",
    content: `
      <p>As React applications grow, component architecture becomes critical. The patterns you 
      choose early will either accelerate or bottleneck your team's velocity.</p>
      <p>This post covers three advanced patterns that have stood the test of time across 
      large-scale production applications.</p>
      <h2>Compound Components</h2>
      <p>Compound components allow you to create expressive APIs where parent and child components 
      share implicit state. Think of how a Select and Option work together natively in HTML.</p>
      <h2>Custom Hooks as the New HOCs</h2>
      <p>Higher-order components solved cross-cutting concerns but introduced prop collision and 
      wrapper hell. Custom hooks provide the same power with far cleaner composition.</p>
      <h2>Render Props for Inversion of Control</h2>
      <p>When you need to decouple behaviour from rendering, render props give consuming components 
      full control over what gets displayed, while the parent manages the logic.</p>
    `,
  author: {
      name: "Phamela Mhlaba",
      role: "AI Developer",
      avatarUrl: ""
    }
  },
  {
    id: 3,
    slug: "serverless-aws-lambda",
    category: "DevOps",
    readTime: "12 min read",
    title: "Serverless Architecture: Building Scalable APIs with AWS Lambda",
    excerpt: "Learn how to build and deploy serverless APIs that automatically scale, reduce costs, and improve performance...",
    date: "March 5, 2024",
    content: `
      <p>Serverless computing has matured significantly. AWS Lambda, combined with API Gateway, 
      lets you build APIs that scale from zero to millions of requests without managing servers.</p>
      <p>This guide walks through building a production-grade serverless API with proper 
      observability, cold start optimisation, and CI/CD pipelines.</p>
      <h2>When Serverless Makes Sense</h2>
      <p>Serverless excels for event-driven workloads, unpredictable traffic patterns, and teams 
      that want to minimise operational overhead. It's less ideal for long-running processes.</p>
      <h2>Reducing Cold Starts</h2>
      <p>Cold starts are the Achilles heel of Lambda. Use Provisioned Concurrency for 
      latency-sensitive endpoints, keep function bundles small, and avoid heavy initialisation 
      outside the handler.</p>
      <h2>Observability at Scale</h2>
      <p>Distributed tracing with AWS X-Ray, structured logging with CloudWatch, and custom 
      metrics give you the visibility needed to debug and optimise serverless systems.</p>
     `,
  author: {
      name: "Phamela Mhlaba",
      role: "AI Developer",
      avatarUrl: ""
    },
  },
];

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