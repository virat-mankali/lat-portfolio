import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { StructuredData } from "@/components/StructuredData";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vm.",
  description: "Co-founder at Snazzl. Full-stack developer, AI/ML student at Woxsen University, and national-level swimmer. Building innovative fashion tech solutions.",
  keywords: ["Virat Mankali", "Full Stack Developer", "AI/ML", "React Native", "Next.js", "Snazzl", "Entrepreneur", "Portfolio"],
  authors: [{ name: "Virat Mankali" }],
  creator: "Virat Mankali",
  publisher: "Virat Mankali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virat.me",
    siteName: "Virat Mankali",
    title: "virat mankali - Full Stack Developer & AI/ML Entrepreneur",
    description: "Co-founder at Snazzl. Full-stack developer, AI/ML student at Woxsen University, and national-level swimmer. Building innovative fashion tech solutions.",
    images: [
      {
        url: "https://virat.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virat Mankali - Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@viratt_mankali",
    creator: "@viratt_mankali",
    title: "virat mankali - Full Stack Developer & AI/ML Entrepreneur",
    description: "Co-founder at Snazzl. Building innovative fashion tech solutions with AI.",
    images: ["https://virat.me/og-image.jpg"],
  },
  icons: {
    icon: "/tabicon.png",
    apple: "/tabicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://virat.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/tabicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/tabicon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <StructuredData />
      </head>
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
