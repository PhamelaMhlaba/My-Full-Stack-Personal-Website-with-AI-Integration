export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Full Stack Personal Website with AI Integration",
    description: "My personal portfolio site - built with MERN Stack, featuring a dynamic MDX-powered blog,",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Vercel"],
    imageUrl: "/images/projects/portfolio.jpg",
    liveUrl: "https://phamelamhlaba.vercel.app",
    githubUrl: "https://github.com/PhamelaMhlaba/My-Full-Stack-Personal-Website-with-AI-Integration",
    status: "completed",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}