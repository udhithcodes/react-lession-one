import bmwImg from '../assets/bmw_preview.jpg'
import ecommerceImg from '../assets/ecommerce_preview.jpg'
import momentumImg from '../assets/momentum_preview.jpg'
import avatarImg from '../assets/profile_avatar.jpg'

export const personalInfo = {
  name: "Udhith R",
  role: "Frontend Developer | Fresher",
  degree: "Bachelor of Science (Information Technology)",
  location: "Sathyamangalam, Tamil Nadu, India",
  email: "udhith22@gmail.com",
  phone: "+91 637-433-8662",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  avatar: avatarImg,
  status: "Available for Roles & Internships",
  bio: "Passionate B.Sc Information Technology student and Frontend Developer dedicated to building responsive, pixel-perfect, and highly engaging digital experiences. Focused on clean architecture, intuitive UI/UX, and mastering modern web standards with React.js.",
  aboutDetailed: [
    "I specialize in bridging creative UI design with clean, maintainable frontend code. Through academic coursework and hands-on projects, I have developed a strong foundation in modern web technologies including HTML5, CSS3, modern JavaScript, and React.js.",
    "My development philosophy revolves around visual excellence, responsive layout precision (Flexbox & CSS Grid), and smooth user feedback. I take pride in crafting interfaces that don't just work reliably, but feel intuitive, lively, and enjoyable to use.",
    "Beyond web interfaces, I enjoy exploring object-oriented programming with Java and data modeling with MySQL. I am eager to contribute as an ambitious frontend engineer to forward-thinking engineering teams."
  ],
  stats: [
    { label: "Completed Projects", value: "3+", suffix: "Built" },
    { label: "Tech Stack Strengths", value: "8+", suffix: "Core Tools" },
    { label: "Degree Target", value: "2026", suffix: "B.Sc IT" },
    { label: "Code Dedication", value: "100%", suffix: "Clean UI" }
  ]
}

export const skillsData = {
  frontend: [
    { name: "React.js", level: 80, category: "Frontend", desc: "Component architecture, hooks, state management, SPA design" },
    { name: "JavaScript (ES6+)", level: 85, category: "Frontend", desc: "DOM manipulation, asynchronous JS, events, modern syntax" },
    { name: "HTML5", level: 95, category: "Frontend", desc: "Semantic markup, accessibility, SEO best practices" },
    { name: "CSS3 & Modern Styling", level: 90, category: "Frontend", desc: "Flexbox, CSS Grid, custom keyframes, responsive layouts" },
    { name: "Responsive Web Design", level: 92, category: "Frontend", desc: "Mobile-first layouts, adaptive viewports, fluid typography" }
  ],
  backendLanguages: [
    { name: "Java", level: 75, category: "Languages", desc: "Object-oriented principles, data structures, algorithms" },
    { name: "SQL", level: 78, category: "Database", desc: "Relational queries, schema design, joins, data integrity" },
    { name: "MySQL", level: 76, category: "Database", desc: "Table relationships, database management, query execution" }
  ],
  tools: [
    { name: "Git & GitHub", level: 84, category: "Tools", desc: "Version control, branching, repository management" },
    { name: "VS Code", level: 90, category: "Tools", desc: "Productive setup, debugging, linters, frontend tooling" },
    { name: "Vite & Modern Tooling", level: 82, category: "Tools", desc: "Rapid bundling, HMR, production build optimization" }
  ],
  currentlyLearning: [
    { title: "Advanced React.js & Ecosystem", desc: "State management libraries, custom hooks, performance tuning, and Next.js foundations." },
    { title: "Java Full-Stack Foundations", desc: "Deepening OOP patterns, backend API development, and enterprise Java architectures." }
  ]
}

export const projectsData = [
  {
    id: "momentum-study-planner",
    title: "Momentum – Daily Study Planner",
    subtitle: "Productivity & Habit Tracker Web Application",
    tagline: "Streak-powered productivity application with interactive analytics, task priorities, and ambient dark/light mode.",
    image: momentumImg,
    badge: "Flagship Project",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "AI-Assisted UI"],
    repoUrl: "https://github.com",
    demoUrl: "#",
    overview: "A responsive study planner designed to empower students and learners to build disciplined study habits. Features a daily study streak tracker, customizable subject time tracking, priority checklists, and smooth animations.",
    highlights: [
      "Daily study streak monitoring with visual flame counter to boost learner retention",
      "Dynamic study timer with circular time visualizer and subject analytics breakdown",
      "Interactive task checklist categorized by priority (Urgent, High, Medium, Completed)",
      "Built-in Dark and Light mode theme switching with preserved user preferences",
      "Leveraged AI-assisted development tools for UI design optimization while independently implementing custom logic"
    ],
    techStack: [
      { name: "Vanilla JavaScript", role: "Core state, local storage persistence, timer logic" },
      { name: "CSS3 Glassmorphism", role: "Modern dark aesthetic, custom animations & transitions" },
      { name: "HTML5 Semantic Elements", role: "Accessible layout and dashboard structure" }
    ],
    metrics: {
      streak: "Active streak logic",
      theme: "Dark & Light Mode",
      features: "Timer + Analytics + Tasks"
    }
  },
  {
    id: "ux-ecommerce-website",
    title: "UX E-Commerce Website",
    subtitle: "Interactive Shopping Experience",
    tagline: "Modern responsive e-commerce storefront featuring interactive product displays, real-time cart interactions, and dynamic catalog filtering.",
    image: ecommerceImg,
    badge: "Featured UI",
    tags: ["HTML5", "CSS3", "JavaScript", "E-Commerce", "Responsive UX"],
    repoUrl: "https://github.com",
    demoUrl: "#",
    overview: "An e-commerce storefront crafted to provide a fluid, engaging shopping journey. Features dynamic catalog views, category filters, responsive product cards, cart drawer counter, and clean micro-interactions.",
    highlights: [
      "Interactive product display grid with category filters (Footwear, Audio Tech, Lifestyle)",
      "Dynamic shopping cart counter and preview drawer simulation",
      "Rich product cards with ratings, dynamic pricing, and quick-add feedback",
      "Fully responsive navigation bar with search bar and user action triggers",
      "Optimized layout across desktop, tablet, and mobile devices using CSS Grid"
    ],
    techStack: [
      { name: "JavaScript (ES6+)", role: "Dynamic DOM rendering, event delegation, cart logic" },
      { name: "CSS Grid & Flexbox", role: "Fluid responsive catalog and category filtering" },
      { name: "Modern UX Principles", role: "Intuitive product hierarchy and feedback states" }
    ],
    metrics: {
      responsiveness: "Mobile-First Design",
      interactivity: "Dynamic DOM Cart",
      components: "Modular Product Cards"
    }
  },
  {
    id: "bmw-landing-page",
    title: "BMW Automotive Showcase",
    subtitle: "Luxury Vehicle Concept Landing Page",
    tagline: "High-impact automotive landing page celebrating luxury engineering with dynamic vehicle showcases and sleek dark aesthetics.",
    image: bmwImg,
    badge: "Design Showcase",
    tags: ["HTML5", "CSS3", "Responsive Web Design", "Flexbox", "UI Showcase"],
    repoUrl: "https://github.com",
    demoUrl: "#",
    overview: "A BMW-inspired conceptual landing page celebrating precision vehicle engineering. Focused on high-contrast visual storytelling, clean typography, luxury specs presentation, and responsive layouts.",
    highlights: [
      "Immersive hero banner with futuristic electric vehicle concept imagery",
      "Interactive vehicle specifications grid (Performance, Battery Range, Autonomy, Design)",
      "Clean, modern navigation system with transparent glassmorphism header",
      "Sleek call-to-action sections with hover glowing button effects",
      "Polished multi-column footer with automotive links and newsletter section"
    ],
    techStack: [
      { name: "Semantic HTML5", role: "Clear document hierarchy and modern layout tags" },
      { name: "Custom CSS3", role: "Neon glowing borders, hover transitions, and glass panels" },
      { name: "Responsive Layouts", role: "Adaptive presentation for desktop, laptop, and mobile screens" }
    ],
    metrics: {
      performance: "Zero-dependency pure CSS",
      design: "Cyber-Luxury Aesthetic",
      structure: "Semantic Sections"
    }
  }
]

export const educationHistory = [
  {
    id: "college",
    institution: "CMS College of Science and Commerce",
    degree: "Bachelor of Science in Information Technology (B.Sc IT)",
    period: "Jun 2023 — May 2026 (Present)",
    location: "Coimbatore, Tamil Nadu",
    status: "Currently Pursuing (Final Year Approaching)",
    description: "In-depth undergraduate program covering core computer science foundations, web architectures, software development methodologies, and database systems.",
    highlights: [
      "Key Coursework: Web Technology, Programming in Java, Database Management Systems (DBMS / SQL), Data Structures, Software Engineering",
      "Practical Lab Experience: Developing responsive web pages, database schema design, and algorithms",
      "Active participant in technical symposiums and academic tech workshops"
    ],
    type: "Undergraduate Degree"
  },
  {
    id: "school",
    institution: "Government Model Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC) — Computer Science Stream",
    period: "Jun 2018 — Mar 2023",
    location: "Sathyamangalam, Tamil Nadu",
    status: "Completed with Distinction",
    description: "Established a strong foundational grounding in Computer Science, Mathematics, and Analytical Problem Solving.",
    highlights: [
      "Acquired initial fundamentals of computer programming and digital logic",
      "Built problem-solving mindset and analytical mathematics discipline",
      "Represented school in academic and science exhibitions"
    ],
    type: "Higher Secondary Education"
  }
]
