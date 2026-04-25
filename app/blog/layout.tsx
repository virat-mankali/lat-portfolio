import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vm.blog",
  description: "Notes, build logs, and personal essays from Virat Mankali on startups, AI, design, and building useful products.",
  keywords: ["Virat Mankali", "Blog", "Startups", "AI", "Product", "Engineering", "Snazzl"],
  openGraph: {
    title: "vm.blog",
    description: "Notes, build logs, and personal essays from Virat Mankali.",
    url: "https://virat.me/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
