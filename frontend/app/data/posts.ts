export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
   // Core dates
  date: string;
  displayDate: string;

  // Full content
  content: string;

  // Branding (VERY IMPORTANT for your vision)
  author: Author;

  // Optional future fields
  coverImageUrl?: string;
  tags?: string[];
}



export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "developers-guide-to-deep-work",
    category: "Productivity",
    readTime: "6 min read",
    title: "The Developer's Guide to Deep Work",
    excerpt: "How I structure my day to maximize focus...",

    date: "2025-01-10",
    displayDate: "January 10, 2025",

    content: `
      <p>This is your FULL blog content.</p>
      <h2>Deep Work</h2>
      <p>Focus is your biggest asset as a developer.</p>
    `,

    author: {
      name: "Phamela Mhlaba",
      role: "AI Developer",
      avatarUrl: ""
    }
  },
    {
    id: 2,
    slug: "preventing-developer-burnout",
    category: "Wellness",
    readTime: "4 min read",
    title: "The Developer's Guide to Deep Work",
    excerpt: "Recognizing the signs of burnout and implementing strategies to maintain long-term productivity and happiness.",
  

    date: "2025-01-10",
    displayDate: "January 10, 2025",

    content: `
      <p>This is your FULL blog content.</p>
      <h2>Deep Work</h2>
      <p>Focus is your biggest asset as a developer.</p>
    `,

    author: {
      name: "Phamela Mhlaba",
      role: "AI Developer",
      avatarUrl: ""
    }
    },

    {
    id: 3,
    slug: "sustainable-learning-routine",
    category: "Learning",
    readTime: "5 min read",
    title: "Building a Sustainable Learning Routine",
    excerpt: "Creating consistent habits for staying current with rapidly evolving technology.",
  

    date: "2025-01-10",
    displayDate: "January 10, 2025",

    content: `
      <p>This is your FULL blog content.</p>
      <h2>Deep Work</h2>
      <p>Focus is your biggest asset as a developer.</p>
    `,

    author: {
      name: "Phamela Mhlaba",
      role: "AI Developer",
      avatarUrl: ""
    }
    },
 
    {
    id: 4,
    slug: "art-of-code-reviews",
    category: "Collaboration",
    readTime: "7 min read",
    title: "The Art of Code Reviews",
    excerpt: "How thoughtful code reviews improve team dynamics and code quality.",
  

    date: "2025-01-10",
    displayDate: "January 10, 2025",

    content: `
      <p>This is your FULL blog content.</p>
      <h2>Deep Work</h2>
      <p>Focus is your biggest asset as a developer.</p>
    `,

    author: {
      name: "Phamela Mhlaba",
      role: "AI Developer",
      avatarUrl: ""
    }
    }, 
];

export default blogPosts;
