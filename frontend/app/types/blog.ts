/**
 * app/types/blog.ts
 *
 * Single source of truth for the BlogPost data shape.
 *
 * Previously the BlogPost interface was duplicated across:
 *  - TechBlogGrid.tsx (inline, unexported)
 *  - BlogPostTemplate.tsx (separate definition)
 *
 * Having two definitions means they silently drift apart — one gets updated,
 * the other doesn't, and you get runtime crashes.
 *
 * Now there is ONE definition. Every file imports from here.
 * If the shape ever needs to change, you change it in one place only.
 */
 
export interface Author {
  name: string;
  role: string;
  /** Empty string ("") triggers the initials fallback in AuthorCard. */
  avatarUrl: string;
}
 
export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  /** ISO-8601 string e.g. "2024-03-15" — used in <time dateTime> for SEO/a11y. */
  date: string;
  /** Human-readable string e.g. "March 15, 2024" — displayed in the UI. */
  displayDate: string;
  /** Plain Markdown string — rendered by react-markdown in BlogPostTemplate. */
  content: string;
  /**
   * Required on every post — enforced by TypeScript.
   * This directly prevents: TypeError: Cannot read properties of undefined (reading 'name')
   */
  author: Author;
  /** Optional cover image. Falls back to a CSS gradient when absent. */
  coverImageUrl?: string;
  /** Optional tags for future filtering support. */
  tags?: string[];
}