/**
 * Education Data Configuration
 * Honest representation without invented CGPA or fake awards.
 * Coursework and details are kept easily editable.
 */

export const educationData = [
  {
    id: "honors-physics",
    institution: "Rangpur Govt. College",
    degree: "Bachelor of Science (Honors)",
    field: "Physics",
    status: "Final Year / Graduating 2026",
    period: "2021 – 2026",
    type: "Academic",
    badgeColor: "border-pink-500/30 text-pink-400 bg-pink-500/10",
    description: "Pursuing an honors degree in Physics, building a deep foundation in analytical reasoning, mathematical logic, problem solving, and computational thinking.",
    coursework: [
      "Mathematical Physics (Vector Analysis & Differential Equations)",
      "Computational Methods & Numerical Analysis",
      "Electromagnetism & Solid State Physics",
      "Statistical Mechanics & Thermodynamics",
      // [PLACEHOLDER] Add any specific academic honors or confirmed thesis topic here
    ],
    highlights: [
      "Trained in systematic breakdown of complex real-world systems",
      "Strong mathematical modeling and algorithmic mindset",
      "Independent analytical research and problem formulation"
    ]
  },
  {
    id: "programming-hero",
    institution: "Programming Hero",
    degree: "Complete Web Development Certificate Course",
    field: "Full-Stack MERN Web Development",
    status: "Completed / Active Graduate",
    period: "2024 – 2026",
    type: "Professional Training",
    badgeColor: "border-sky-500/30 text-sky-400 bg-sky-500/10",
    description: "Rigorous, hands-on, project-driven software development training covering modern frontend, backend, database design, and collaborative workflow best practices.",
    coursework: [
      "Modern JavaScript (ES6+, Asynchronous JS, Event Loop)",
      "React.js Single-Page Applications & State Management",
      "Next.js App Router, SSR, and API Routes",
      "Node.js & Express.js REST API Architecture",
      "MongoDB Database Modeling with Mongoose",
      "Tailwind CSS, DaisyUI & Modern Responsive UI/UX",
      "Git, GitHub Collaboration & CI/CD Deployment"
    ],
    highlights: [
      "Built multiple production-grade web applications from scratch",
      "Mastered component architecture, props flow, and custom React hooks",
      "Participated in assignment evaluations and code reviews"
    ]
  }
];
