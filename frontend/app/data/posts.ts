export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  slug: string;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "The Developer's Guide to Deep Work",
    excerpt:
      "How I structure my day to maximize focus, minimize distractions, and produce high-quality code consistently.",
    category: "Productivity",
    readTime: "6 min read",
    publishedAt: "2025-01-10",
    slug: "developers-guide-to-deep-work",
  },
  {
    id: "2",
    title: "Preventing Developer Burnout",
    excerpt:
      "Recognizing the signs of burnout and implementing strategies to maintain long-term productivity and happiness.",
    category: "Wellness",
    readTime: "4 min read",
    publishedAt: "2025-01-08",
    slug: "preventing-developer-burnout",
  },
  {
    id: "3",
    title: "Building a Sustainable Learning Routine",
    excerpt:
      "Creating consistent habits for staying current with rapidly evolving technology.",
    category: "Learning",
    readTime: "5 min read",
    publishedAt: "2025-01-06",
    slug: "sustainable-learning-routine",
  },
  {
    id: "4",
    title: "The Art of Code Reviews",
    excerpt:
      "How thoughtful code reviews improve team dynamics and code quality.",
    category: "Collaboration",
    readTime: "7 min read",
    publishedAt: "2025-01-04",
    slug: "art-of-code-reviews",
  },
];

export default posts;
