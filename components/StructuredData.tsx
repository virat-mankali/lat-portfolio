export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Virat Mankali",
    url: "https://virat.me",
    image: "https://virat.me/lovable-uploads/086e62e4-bcd5-4165-85df-f5b99b386146.png",
    description: "Full-stack developer, AI/ML student, and co-founder at Snazzl",
    jobTitle: "Co-founder & Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Snazzl",
      url: "https://snazzl.shop"
    },
    sameAs: [
      "https://github.com/viratmankali",
      "https://www.linkedin.com/in/virat-mankali/",
      "https://www.youtube.com/@viratmankali",
      "https://x.com/viratt_mankali"
    ],
    knowsAbout: [
      "React Native",
      "Next.js",
      "Full Stack Development",
      "AI/ML",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Computer Vision",
      "LangChain"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Woxsen University"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
