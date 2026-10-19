/**
 * Profile Data Configuration
 * Centralized configuration for Jobayer Hosen's portfolio.
 * 
 * UPDATE INSTRUCTIONS:
 * 1. Replace placeholder contact values (email, phone, linkedin) with your real details.
 * 2. To activate resume download, drop your resume file as 'resume.pdf' into the 'public/' directory.
 * 3. To update your profile portrait, drop your image into 'src/assets/portrait.jpg' or update 'avatarUrl'.
 */

export const profileData = {
  name: "Jobayer Hosen",
  initials: "JH",
  role: "MERN Stack Web Developer",
  shortHeadline: "Building modern, responsive, user-friendly web applications.",
  bio: "Passionate MERN stack developer dedicated to crafting fast, accessible, and intuitive digital experiences. Committed to clean code, systematic problem-solving, and expanding my expertise toward data science and AI engineering.",
  
  careerGoal: "Become a highly skilled full-stack web developer and continuously evolve toward data science and AI engineering.",
  
  status: "Available for Internships, Junior Developer Roles & Freelance Work",
  location: "Rangpur, Bangladesh",
  
  // Contact details & placeholders
  contact: {
    // [PLACEHOLDER] Replace with your actual email address
    email: "jobayer.dev@placeholder.com",
    emailPlaceholderNotice: "Replace 'jobayer.dev@placeholder.com' with your actual email in src/data/profile.js",
    
    // [PLACEHOLDER] Replace with your actual phone number
    phone: "+880 1XXX-XXXXXX",
    phonePlaceholderNotice: "Replace '+880 1XXX-XXXXXX' with your active phone number in src/data/profile.js",
    
    // [PLACEHOLDER] WhatsApp number (international format e.g. 8801XXXXXXXXX)
    whatsapp: "+8801XXXXXXXXX",
    whatsappLink: "https://wa.me/8801XXXXXXXXX",
    
    // Confirmed GitHub Profile
    github: "https://github.com/jobayerh99",
    githubUsername: "jobayerh99",
    
    // [PLACEHOLDER] Replace with your actual LinkedIn profile URL
    linkedin: "https://linkedin.com/in/jobayer-placeholder",
    linkedinPlaceholderNotice: "Replace with your real LinkedIn profile URL in src/data/profile.js",
    
    // [PLACEHOLDER] Twitter/X profile (optional)
    twitter: "https://x.com/placeholder_user",
  },

  // Resume configuration
  resume: {
    fileName: "resume.pdf",
    filePath: "/resume.pdf", // Placed in public/resume.pdf
    isAvailable: false, // Set to true once you put resume.pdf in public/
    instruction: "Place your real resume as 'resume.pdf' in the 'public/' directory, then set 'isAvailable: true' in src/data/profile.js to enable 1-click downloads.",
  },

  // About Me Section Highlights
  about: {
    introParagraphs: [
      "Hello! I am Jobayer Hosen, a motivated MERN Stack Web Developer based in Bangladesh. My journey into programming grew from a deep curiosity about how digital products come to life and how software can solve everyday challenges.",
      "With an academic foundation in Physics from Rangpur Govt. College, I bring a structured, analytical approach to software development. Physics taught me how to break down complex, multi-variable problems into first principles — a mindset that translates directly into architecting clean code, debugging efficiently, and writing robust logic.",
      "Through intensive, hands-on learning with Programming Hero, I immersed myself in the modern JavaScript ecosystem. I discovered my passion for building dynamic, responsive single-page applications with React and Next.js, and structuring scalable backend APIs with Node.js, Express, and MongoDB.",
      "Looking ahead, my goal is to establish myself as a well-rounded full-stack engineer and progressively expand into data science and AI-assisted engineering. When I am not writing code, you can find me exploring emerging technologies, reading about AI advancements, and brainstorming new digital tools."
    ],
    highlights: [
      {
        title: "Analytical Problem Solver",
        description: "Background in Physics reinforces methodical logic, critical thinking, and algorithmic problem decomposition.",
        icon: "analytical"
      },
      {
        title: "Modern Frontend Specialist",
        description: "Passionate about creating fluid, component-driven UIs with React, Next.js, and Tailwind CSS with attention to accessibility.",
        icon: "frontend"
      },
      {
        title: "Full-Stack MERN Architecture",
        description: "Comfortable building RESTful APIs, handling asynchronous operations, and designing MongoDB database schemas.",
        icon: "fullstack"
      },
      {
        title: "Continuous Learner & AI Enthusiast",
        description: "Actively expanding into modern data tools, TypeScript best practices, and AI-assisted developer workflows.",
        icon: "learning"
      }
    ],
    personalInterests: [
      "Exploring cutting-edge web & AI tools",
      "Analyzing algorithmic challenges",
      "Designing clean developer experiences",
      "Physics, technology articles, and sci-tech discussions"
    ]
  }
};
