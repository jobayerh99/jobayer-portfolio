/**
 * Projects Data Configuration
 * Comprehensive data for all portfolio projects and their dedicated detail pages.
 * 
 * UPDATE INSTRUCTIONS:
 * - Update 'liveUrl' placeholders when your projects are deployed to Vercel/Netlify.
 * - 'githubUrl' contains your confirmed repository links.
 * - Images are loaded from public/projects/ or src/assets/projects/.
 */

export const projectsData = [
  {
    id: "fitlog",
    slug: "fitlog",
    title: "FitLog — Workout Library & Routine Planner",
    shortDescription: "A comprehensive workout web application for browsing exercise libraries, reviewing detailed guides, saving custom routines, and managing weekly fitness plans.",
    longDescription: "FitLog is designed for fitness enthusiasts and beginners alike who need a streamlined, clutter-free web application to discover exercises, evaluate target muscle groups, and curate tailored daily workout plans. Built with React and Next.js, it combines high-performance rendering with an energetic dark-mode aesthetic featuring neon lime accents.",
    accentColor: "#84cc16", // Lime
    badge: "Featured Fitness App",
    image: "/projects/fitlog.png",
    fallbackImagePlaceholder: "Workout Library & Routine Management UI",
    technologies: ["React", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "DaisyUI", "REST APIs", "React Toastify"],
    
    // Links (Confirmed GitHub repo + configurable live demo placeholder)
    githubUrl: "https://github.com/jobayerh99/assienment-fit-log",
    liveUrl: "https://fitlog-demo.vercel.app", // [PLACEHOLDER] Replace with your actual deployed URL
    isLiveUrlPlaceholder: true,
    placeholderNotice: "Live demo URL is an editable placeholder. Update 'liveUrl' in src/data/projects.js once deployed.",

    // Detailed Case Study Breakdown
    problemStatement: "Many fitness applications are either overly complex, require paid subscriptions for basic features, or lack an intuitive interface for quickly finding targeted exercises and organizing them into an actionable workout routine.",
    
    keyFeatures: [
      {
        title: "Dynamic Exercise Catalog",
        description: "Browse categorized workouts targeting specific muscle groups (chest, back, legs, core, arms, cardio) with difficulty ratings and equipment requirements."
      },
      {
        title: "Comprehensive Exercise Detail View",
        description: "Dedicated detail pages showcasing step-by-step instructions, target muscles, recommended sets/reps, and safety tips."
      },
      {
        title: "Saved Workouts & Plan Manager",
        description: "Interactive routine builder allowing users to save exercises into custom plans, adjust training volume, and remove finished workouts."
      },
      {
        title: "High-Contrast Dark Theme",
        description: "Ergonomic dark theme with lime-accented visual indicators designed for high visibility in gym and outdoor environments."
      },
      {
        title: "Feedback & Toast Alerts",
        description: "Instant visual feedback using React Toastify whenever an exercise is added, removed, or updated in the workout routine."
      }
    ],

    roleAndImplementation: [
      "Sole Frontend Developer: Planned the UI hierarchy, component modularity, and client-side data flows.",
      "Implemented responsive layouts using Tailwind CSS and DaisyUI utility classes.",
      "Engineered client state management for exercise filtering, bookmarked workouts, and planned routines.",
      "Consumed external REST endpoints to retrieve structured exercise data and handled loading/empty states cleanly."
    ],

    challenges: [
      {
        challenge: "Managing Synchronized State Across Filtered Views and the Saved Plan",
        solution: "Structured centralized state at an appropriate parent level and passed down action handlers to keep the catalog view, detail view, and saved routine list in perfect sync without stale data."
      },
      {
        challenge: "Designing an Accessible Drawer & Modal System on Small Mobile Screens",
        solution: "Implemented responsive drawer patterns with CSS backdrop blur and touch-friendly button targets (minimum 44x44px), ensuring gym users can easily log workouts on one hand."
      },
      {
        challenge: "Handling Network Latency and Empty Search Queries",
        solution: "Added animated skeleton loaders, graceful empty-state illustrations, and debounced search inputs to deliver a smooth user experience even on slower mobile data connections."
      }
    ],

    futureRoadmap: [
      "User Authentication: Integrate JWT / NextAuth for persistent user accounts across multiple devices.",
      "Interactive Rest Timer: Build an in-app rest stopwatch with audio cues between workout sets.",
      "Progress Analytics: Visual charts displaying workout completion streaks and weight progression over time.",
      "Offline Support: Add PWA capabilities and service workers for offline gym usage."
    ]
  },

  {
    id: "book-vibe",
    slug: "book-vibe",
    title: "Book Vibe — Book Discovery & Reading Tracker",
    shortDescription: "An interactive book discovery platform where readers can browse curated literature, explore in-depth book details, organize reading lists, and track personal reading goals.",
    longDescription: "Book Vibe is a modern web application crafted for avid readers seeking a clean, delightful space to discover books across genres, track their reading milestones, and manage both active reading lists and future wishlists. Built with React, Next.js, and TypeScript, it leverages localStorage persistence and chart visualizations.",
    accentColor: "#22c55e", // Green
    badge: "Interactive Reader App",
    image: "/projects/book-vibe.jpg",
    fallbackImagePlaceholder: "Book Discovery & Reading List Tracker UI",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Recharts", "React Icons", "React Toastify"],
    
    // Links (Confirmed GitHub repo + configurable live demo placeholder)
    githubUrl: "https://github.com/jobayerh99/book-vibe",
    liveUrl: "https://book-vibe-demo.vercel.app", // [PLACEHOLDER] Replace with your actual deployed URL
    isLiveUrlPlaceholder: true,
    placeholderNotice: "Live demo URL is an editable placeholder. Update 'liveUrl' in src/data/projects.js once deployed.",

    // Detailed Case Study Breakdown
    problemStatement: "Readers frequently lose track of books they intend to read or books they have finished. Traditional spreadsheet trackers are cumbersome on mobile devices, while existing platforms are often cluttered with advertisements and social feeds.",
    
    keyFeatures: [
      {
        title: "Curated Book Showcase",
        description: "Visual grid of books featuring cover artwork, author tags, genre pills, publisher information, and average reader ratings."
      },
      {
        title: "In-Depth Book Detail Inspection",
        description: "Full-page book breakdown displaying total page count, synopsis, publisher metadata, year of publication, and rating breakdown."
      },
      {
        title: "Dual Reading & Wishlist Management",
        description: "Separate management tabs for 'Books I Have Read' and 'Wishlist', preventing duplicate entries with intelligent transfer logic."
      },
      {
        title: "Reading Progress Statistics with Recharts",
        description: "Interactive visual bar charts showcasing pages read per book to help readers visualize their reading progress."
      },
      {
        title: "Persistent Browser Storage",
        description: "Saves user lists automatically to browser storage so user reading history persists across sessions without requiring a database."
      }
    ],

    roleAndImplementation: [
      "Lead Developer: Designed and developed the entire application from component blueprint to finished deployment.",
      "Authored TypeScript data interfaces for type-safe book structures, rating systems, and list states.",
      "Integrated Recharts charting library to calculate dynamic page counts and render responsive analytical bars.",
      "Crafted an elegant reading-focused visual theme with calm typography and warm aesthetic accents."
    ],

    challenges: [
      {
        challenge: "Preventing State Conflicts Between Read Books and Wishlist",
        solution: "Engineered validation guards: if a book is already marked as 'Read', adding it to the Wishlist triggers an informative toast notice preventing inconsistent duplicate states."
      },
      {
        challenge: "Responsive Recharts Rendering on Mobile Viewports",
        solution: "Configured ResponsiveContainer with flexible aspect ratios and custom tooltip formatters to prevent axis label truncation on narrow screens."
      },
      {
        challenge: "TypeScript Prop Typing Across Complex Nested Components",
        solution: "Defined modular TypeScript interfaces (`Book`, `ListedBook`, `TabType`) in a shared `types` directory, eliminating 'any' types and ensuring end-to-end type safety."
      }
    ],

    futureRoadmap: [
      "Open Library API Integration: Enable real-time search across millions of books via ISBN and title queries.",
      "Annual Reading Goal Tracker: Visual progress circle tracking completion toward a user's yearly book target.",
      "Personal Notes & Quotes: Allow readers to write Markdown book reviews and save favorite quotes.",
      "Dark / Sepia Reading Mode: Add customizable color palettes optimized for daytime and nighttime reading."
    ]
  },

  {
    id: "devstack",
    slug: "devstack",
    title: "DevStack — Technology Stack Builder",
    shortDescription: "An interactive developer productivity tool that lets engineers explore modern technologies across categories and assemble a personalized, exportable development stack.",
    longDescription: "DevStack is an interactive productivity application built to help software engineers, students, and tech leads evaluate technologies across frontend, backend, database, and devops layers and curate custom tech stacks for upcoming projects. Built with React, TypeScript, Vite, and Tailwind CSS, it demonstrates modern React patterns including Suspense-driven data loading.",
    accentColor: "#38bdf8", // Sky Blue
    badge: "Developer Productivity Tool",
    image: "/projects/devstack.png",
    fallbackImagePlaceholder: "Interactive Tech Stack Assembly UI",
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite", "React Icons", "React Toastify"],
    
    // Links (Confirmed GitHub repo + configurable live demo placeholder)
    githubUrl: "https://github.com/jobayerh99/B14-A05-DevStack",
    liveUrl: "https://devstack-builder.vercel.app", // [PLACEHOLDER] Replace with your actual deployed URL
    isLiveUrlPlaceholder: true,
    placeholderNotice: "Live demo URL is an editable placeholder. Update 'liveUrl' in src/data/projects.js once deployed.",

    // Detailed Case Study Breakdown
    problemStatement: "When starting a new web project or planning a learning path, developers often struggle with technology selection paralysis due to the vast ecosystem of libraries, frameworks, and databases.",
    
    keyFeatures: [
      {
        title: "Comprehensive Tech Catalog",
        description: "Browse categorized technologies across Frontend, Backend, Database, Styling, and Dev Tools with descriptive tags and official badges."
      },
      {
        title: "Single-Click Stack Assembly",
        description: "Add or remove technologies into a real-time stack drawer with immediate visual badge counters and stack breakdown."
      },
      {
        title: "Stack Summary & Stats Panel",
        description: "Real-time summary breakdown displaying total chosen tools and category distribution to maintain a balanced architecture."
      },
      {
        title: "Clear & Reset Controls",
        description: "Quick-action controls to clear individual selections or reset the entire workbench with confirmation toasts."
      },
      {
        title: "Modern React Suspense Integration",
        description: "Utilizes React 19's `use()` hook and `<Suspense>` boundaries for clean promise-based data fetching without useEffect boilerplates."
      }
    ],

    roleAndImplementation: [
      "Frontend Architect: Designed the data schema, interactive sidebar, and responsive grid layouts.",
      "Implemented strict TypeScript typing for technology cards, category filters, and active stack state.",
      "Wrote educational documentation in the project README demonstrating core React mental models (props vs state, useState, Suspense, unique keys).",
      "Constructed a high-tech developer aesthetic with glowing borders, monospaced accents, and dark UI surfaces."
    ],

    challenges: [
      {
        challenge: "Adopting React 19 'use()' Hook & Suspense for Data Ingestion",
        solution: "Replaced legacy useEffect data fetching patterns with the modern Promise-based 'use()' API, wrapping the tech card container in Suspense with clean fallback skeletons."
      },
      {
        challenge: "Maintaining Responsive Side Panel on Mobile Devices",
        solution: "Created an adaptive drawer panel that collapses into a floating action button (FAB) on small screens with a badge counter indicating current stack size."
      },
      {
        challenge: "Preventing Accidental Stack Duplicates",
        solution: "Implemented idempotent selection logic: attempting to add an already selected technology triggers a subtle notification rather than corrupting the stack array."
      }
    ],

    futureRoadmap: [
      "Stack Compatibility Advisor: Add smart warnings if incompatible technologies are selected (e.g., incompatible database drivers).",
      "One-Click README Generator: Export the assembled tech stack as clean Markdown badges directly for GitHub READMEs.",
      "Starter Template Scaffolder: Generate `npx` starter commands based on the user's customized stack.",
      "Community Stack Voting: Allow developers to upvote and share popular production-tested stacks."
    ]
  }
];
