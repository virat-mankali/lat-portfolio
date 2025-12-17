import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vm.projects",
  description: "Explore all of Virat Mankali's projects including Snazzl, Cortexa, Styrae, and Caricart. Full-stack development, AI/ML, and innovative tech solutions.",
  keywords: ["Projects", "Snazzl", "Cortexa", "Styrae", "Caricart", "Full Stack", "AI/ML", "React Native"],
  openGraph: {
    title: "vm.projects",
    description: "Explore all of Virat Mankali's projects including Snazzl, Cortexa, Styrae, and Caricart.",
    url: "https://virat.me/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
