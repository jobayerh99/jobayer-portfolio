# Jobayer Hosen — Professional Developer Portfolio

> **MERN Stack Web Developer**  
> Building modern, responsive, accessible, and user-friendly web applications.

A complete, production-ready developer portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **React Router**. Crafted with a premium coding-inspired visual identity featuring a dark palette, glowing accents in vibrant pink, electric blue, and purple, data-driven architecture, and detailed project case study routing.

---

## 🚀 Live Demo & Repository

- **GitHub Repository:** [https://github.com/jobayerh99/web-portfolio](https://github.com/jobayerh99/web-portfolio)
- **Developer Profile:** Jobayer Hosen (@jobayerh99)

---

## 🛠️ Tech Stack & Architecture

- **Core Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Routing:** [React Router v7](https://reactrouter.com/) (Single-Page App + dynamic project case study pages)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, Simple Icons, VS Code Icons, Tabler Icons, Material Icons)
- **Typography:** Inter & JetBrains Mono (via Google Fonts)

---

## 📂 Project Structure

```text
web-portfolio/
├── public/
│   ├── favicon.svg             # Custom SVG brand favicon (<JH/>)
│   ├── portrait.svg            # Default stylized developer portrait illustration
│   ├── portrait.jpg            # Place your personal photo here
│   ├── resume.pdf              # Place your real resume PDF here
│   └── projects/
│       ├── fitlog.png          # Real FitLog application screenshot
│       ├── book-vibe.jpg       # Real Book Vibe application screenshot
│       └── devstack.png        # Real DevStack application screenshot
├── src/
│   ├── assets/                 # Component assets and local graphics
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with mobile menu & scroll spy
│   │   ├── Footer.jsx          # Dynamic copyright year & back-to-top button
│   │   ├── SectionHeading.jsx  # Consistent section header with chip badges
│   │   ├── SocialLinks.jsx     # Social links with 1-click email copy
│   │   ├── SkillCard.jsx       # Skill cards with proficiency status badges
│   │   ├── ProjectCard.jsx     # Project showcase cards with tag pills & links
│   │   ├── ResumeModal.jsx     # Smart modal for resume download / guidance
│   │   └── TechIcon.jsx        # Safe tech icon mapping component
│   ├── sections/
│   │   ├── Hero.jsx            # Two-column hero with portrait & floating badges
│   │   ├── About.jsx           # Two-column journey & core principles
│   │   ├── Skills.jsx          # Category-filtered skill cards & status legend
│   │   ├── Education.jsx       # Rangpur Govt. College & Programming Hero
│   │   ├── Experience.jsx      # Learning milestones & career growth timeline
│   │   ├── Projects.jsx        # Responsive project cards grid & GitHub CTA
│   │   └── Contact.jsx         # Contact info & validated form with mailto fallback
│   ├── pages/
│   │   ├── Home.jsx            # Main single-page scroll layout
│   │   ├── ProjectDetails.jsx  # Dedicated case study route (/projects/:projectId)
│   │   └── NotFound.jsx        # Accessible 404 page with return links
│   ├── data/                   # Centralized configuration (no hardcoded JSX)
│   │   ├── profile.js          # Contact details, bio, & resume config
│   │   ├── skills.js           # Tech skills, categories, & status tags
│   │   ├── education.js        # Academic & training timeline
│   │   ├── experience.js       # Milestones & future job slots
│   │   └── projects.js         # Case study details, challenges & roadmaps
│   ├── routes/
│   │   └── AppRoutes.jsx       # Route definitions
│   ├── App.jsx                 # Layout wrapper (Navbar + Routes + Footer)
│   ├── main.jsx                # React root mount & BrowserRouter
│   └── index.css               # Tailwind CSS v4 setup & custom glow themes
├── legacy-starter/             # Archived starter files from July
├── package.json
└── vite.config.js
```

---

## ⚙️ Quickstart & Development Commands

You can run these commands from `c:\projects\web-portfolio` or directly from `c:\projects`:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates production-optimized assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Personalization & Customization Guide

All personal information, links, and text are centralized in `src/data/` so you can update them easily without modifying component logic:

### 1. Replacing Your Profile Portrait
- **Option A:** Drop your photograph named `portrait.jpg` into the `public/` folder (`public/portrait.jpg`). The Hero section automatically detects it and displays your photo with the cyber frame!
- **Option B:** If you prefer an SVG illustration, the current `public/portrait.svg` is ready out-of-the-box.

### 2. Adding Your Real Resume PDF
1. Save your completed resume as `resume.pdf`.
2. Move it to the `public/` directory: `web-portfolio/public/resume.pdf`.
3. Open `src/data/profile.js` and update:
   ```javascript
   resume: {
     fileName: "Jobayer_Hosen_Resume.pdf",
     filePath: "/resume.pdf",
     isAvailable: true, // <-- Change this to true!
   }
   ```
4. Now the "Download Resume" button in the Hero will directly initiate the file download.

### 3. Contact Details & Social Links
Open `src/data/profile.js` and update the placeholders:
- `contact.email`: Replace `jobayer.dev@placeholder.com` with your actual email.
- `contact.phone`: Replace `+880 1XXX-XXXXXX` with your real contact number.
- `contact.whatsapp`: Replace with your international WhatsApp number.
- `contact.linkedin`: Replace `https://linkedin.com/in/jobayer-placeholder` with your real profile link.

### 4. Updating Project Live Demos
Open `src/data/projects.js` and update the `liveUrl` properties once you deploy each project:
- FitLog: `liveUrl: "https://your-fitlog-url.vercel.app"` and set `isLiveUrlPlaceholder: false`
- Book Vibe: `liveUrl: "https://your-book-vibe-url.vercel.app"` and set `isLiveUrlPlaceholder: false`
- DevStack: `liveUrl: "https://your-devstack-url.vercel.app"` and set `isLiveUrlPlaceholder: false`

### 5. Connecting a Form Service
The contact form currently features full client-side validation (name, email format regex, subject, message) and opens your user's email client via `mailto:` with pre-filled content.
To connect a free backend form service such as **EmailJS** or **Formspree**:
1. Sign up on [Formspree.io](https://formspree.io/) or [EmailJS.com](https://www.emailjs.com/).
2. In `src/sections/Contact.jsx`, replace the simulated `setTimeout` submission in `handleSubmit` with your Formspree/EmailJS fetch call.

---

## 📄 License

Open-source under the [MIT License](LICENSE). Built by **Jobayer Hosen**.
