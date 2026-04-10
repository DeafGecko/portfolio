export interface Project {
  title: string;
  category: string;
  year: string;
  color: string;
  description: string;
  imageUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Brand Identity X",
    category: "Branding / Logo",
    year: "2024",
    color: "bg-gradient-to-br from-purple-200 to-pink-200",
    description: "Complete brand system for a tech startup.",
    liveUrl: "#"
  },
  {
    title: "Motion Graphics Reel",
    category: "Animation / GSAP",
    year: "2025",
    color: "bg-gradient-to-br from-blue-200 to-cyan-200",
    description: "60-second explainer with fluid motion.",
    liveUrl: "#"
  },
  {
    title: "UI/UX Case Study",
    category: "Product Design",
    year: "2024",
    color: "bg-gradient-to-br from-emerald-200 to-teal-200",
    description: "Mobile app for creative professionals.",
    liveUrl: "#"
  },
  {
    title: "Design System",
    category: "Components / React",
    year: "2025",
    color: "bg-gradient-to-br from-amber-200 to-orange-200",
    description: "Reusable component library with Storybook.",
    liveUrl: "#"
  }
];
