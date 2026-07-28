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

  {
  slug: "ai-productivity-assistant",
  title: "Elevate AI — Productivity Assistant",
  description: "A modern AI-powered workplace productivity platform that consolidates multiple AI tools into one seamless SaaS experience. Built using Lovable's AI-assisted development platform and rapidly iterated into a production-ready application. Includes a smart email generator with tone and audience customization, a meeting notes summarizer, an AI task planner with priority matrix scheduling, a research assistant, an interactive AI chat assistant, a prompt library, and a productivity analytics dashboard. Built and designed around responsible AI principles, prompting users to verify outputs and avoid sharing confidential data.",
  techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API", "Lovable"],
  imageUrl: "/images/projects/ai-productivity-assistant.jpg",
  liveUrl: "https://phamela-mhlaba-ai-powered.lovable.app/app",
  githubUrl: "https://github.com/PhamelaMhlaba/AI-Productivity-Assistant",
  status: "completed",
},

{
  slug: "protocare",
  title: "ProtoCare — Health Data Platform",
  description: "A health-tech platform empowering users with complete visibility and ownership of their health data, helping them make informed decisions for a healthier future. Contributed to the main company website as part of a team, building with C#, Blazor, and .NET to deliver a robust, secure web application for health data management.",
  techStack: ["C#", "Blazor", ".NET"],
  imageUrl: "/images/projects/protocare.jpg",
  liveUrl: "https://proto.care/",
  githubUrl: "https://github.com/ProtocareMainWebsite/ProtoCareMainWebsite",
  status: "completed",
},

];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}