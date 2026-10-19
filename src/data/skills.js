/**
 * Skills Data Configuration
 * Organized by category with learning status badges.
 * No arbitrary percentages — honest, editable status indicators.
 * 
 * Status options:
 * - "Core": Core daily technology used in projects
 * - "Proficient": Solid hands-on working knowledge
 * - "Learning": Currently expanding knowledge and practical skills
 * - "Exploring": Actively researching and experimenting with
 */

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & Interests" },
];

export const skillsData = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    status: "Core",
    iconName: "FaReact",
    color: "#61DAFB",
    description: "Component architecture, hooks (useState, useEffect, useContext), custom hooks, routing, and state management.",
  },
  {
    name: "Next.js",
    category: "frontend",
    status: "Proficient",
    iconName: "SiNextdotjs",
    color: "#ffffff",
    description: "App Router, SSR, SSG, client/server components, API routes, and modern web optimization.",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    status: "Core",
    iconName: "SiJavascript",
    color: "#F7DF1E",
    description: "Asynchronous programming (Promises, async/await), closures, array methods, DOM manipulation, and modern syntax.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    status: "Learning",
    iconName: "SiTypescript",
    color: "#3178C6",
    description: "Static typing, interfaces, generics, type-safe props, and type checking in React applications.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    status: "Core",
    iconName: "SiTailwindcss",
    color: "#06B6D4",
    description: "Utility-first design, responsive layouts, custom utility configuration, and dark mode theming.",
  },
  {
    name: "HTML5",
    category: "frontend",
    status: "Core",
    iconName: "SiHtml5",
    color: "#E34F26",
    description: "Semantic markup, modern forms, SEO-friendly document structure, and web accessibility standards.",
  },
  {
    name: "CSS3",
    category: "frontend",
    status: "Core",
    iconName: "FaCss3Alt",
    color: "#1572B6",
    description: "Flexbox, CSS Grid, media queries, animations, transitions, and responsive typography.",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    status: "Proficient",
    iconName: "SiNodedotjs",
    color: "#339933",
    description: "Server-side JavaScript runtime, event loop, asynchronous file I/O, and npm package ecosystem.",
  },
  {
    name: "Express.js",
    category: "backend",
    status: "Proficient",
    iconName: "SiExpress",
    color: "#ffffff",
    description: "RESTful API architecture, middleware chaining, route handlers, error handling, and CORS configuration.",
  },
  {
    name: "REST APIs",
    category: "backend",
    status: "Core",
    iconName: "TbApi",
    color: "#ec4899",
    description: "Designing, consuming, and testing structured HTTP endpoints (GET, POST, PUT, DELETE, PATCH).",
  },
  {
    name: "Authentication Concepts",
    category: "backend",
    status: "Learning",
    iconName: "MdSecurity",
    color: "#F59E0B",
    description: "Understanding JWT tokens, session cookies, password hashing (bcrypt), and protected routes.",
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    status: "Proficient",
    iconName: "SiMongodb",
    color: "#47A248",
    description: "NoSQL document storage, Atlas cloud hosting, collections, documents, and CRUD query operations.",
  },
  {
    name: "Mongoose",
    category: "databases",
    status: "Proficient",
    iconName: "SiMongoose",
    color: "#880000",
    description: "Schema modeling, data validation, population, index optimization, and middleware hooks.",
  },
  {
    name: "PostgreSQL",
    category: "databases",
    status: "Learning",
    iconName: "SiPostgresql",
    color: "#4169E1",
    description: "Relational database concepts, SQL queries, table relations, constraints, and joins.",
  },
  {
    name: "MySQL",
    category: "databases",
    status: "Exploring",
    iconName: "SiMysql",
    color: "#00758F",
    description: "Relational schema design, normalization, foreign keys, and basic indexing.",
  },

  // Tools & Interests
  {
    name: "Git",
    category: "tools",
    status: "Core",
    iconName: "FaGitAlt",
    color: "#F05032",
    description: "Version control workflows, branching, merging, commit hygiene, and conflict resolution.",
  },
  {
    name: "GitHub",
    category: "tools",
    status: "Core",
    iconName: "FaGithub",
    color: "#ffffff",
    description: "Repository management, collaboration, pull requests, project tracking, and GitHub Pages.",
  },
  {
    name: "VS Code",
    category: "tools",
    status: "Core",
    iconName: "VscCode",
    color: "#007ACC",
    description: "Daily development environment with key extensions, linting, debugging, and terminal integration.",
  },
  {
    name: "Responsive Design",
    category: "tools",
    status: "Core",
    iconName: "MdDevices",
    color: "#38bdf8",
    description: "Mobile-first development, fluid layouts, cross-browser testing, and touch accessibility.",
  },
  {
    name: "AI-Assisted Development",
    category: "tools",
    status: "Learning",
    iconName: "FaRobot",
    color: "#a855f7",
    description: "Leveraging LLM prompts, AI code generation, automated refactoring, and AI-assisted debugging.",
  },
  {
    name: "Data Science & AI Interests",
    category: "tools",
    status: "Exploring",
    iconName: "FaBrain",
    color: "#ec4899",
    description: "Career ambition: learning Python fundamentals, statistical data modeling, and machine learning principles.",
  },
];
