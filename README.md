# Virat Mankali - Portfolio

A modern, responsive portfolio website built with Next.js 16, showcasing my work as a Co-founder at Snazzl, Full Stack Developer, and AI/ML Student.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, React 19, TypeScript
- **Stunning UI**: Framer Motion animations, Radix UI components, Tailwind CSS
- **Dark/Light Mode**: Custom theme toggle with smooth transitions
- **Fully Responsive**: Optimized for all devices
- **Performance Optimized**: Built with Turbopack for fast development and production builds

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **Package Manager**: Bun

## 🛠️ Installation

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## 📁 Project Structure

```
virat-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ContactSection.tsx
│   ├── Navigation.tsx
│   ├── ThemeToggle.tsx
│   └── FloatingElements.tsx
├── contexts/              # React contexts
│   └── ThemeContext.tsx  # Theme management
├── hooks/                 # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                   # Utility functions
│   └── utils.ts
└── public/               # Static assets

```

## 🎨 Sections

1. **Hero Section**: Introduction with profile image and social links
2. **About Section**: Background, achievements, and personal statement
3. **Skills Section**: Technical skills with progress bars and achievements
4. **Services Section**: Services offered with detailed features
5. **Projects Section**: Featured projects including Snazzl, Moodly.AI, and Outfit.AI
6. **Achievements Section**: Timeline of major milestones
7. **Contact Section**: Contact form with Web3Forms integration

## 🌐 Deployment

This project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

## 📝 Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Add your environment variables here
```

## 🤝 Contact

- **Email**: viratmankali@gmail.com
- **LinkedIn**: [Virat Mankali](https://www.linkedin.com/in/virat-mankali/)
- **GitHub**: [viratmankali](https://github.com/viratmankali)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Virat Mankali
