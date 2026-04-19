export const personalInfo = {
  name: "Yves Sheja N M",
  title: "Software Engineer",
  tagline: "I build scalable backend systems, intelligent data pipelines, and production-ready web platforms.",
  shortIntro: "Software engineer focused on backend architecture, API integrations, analytics-ready systems, and modern full-stack development.",
  email: "ysheja@gmail.com",
  github: "https://www.github.com/Preacher-Y",
  linkedin: "https://www.linkedin.com/in/yves-sheja-n-m/",
  location: "Kigali, Rwanda",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroWords = ["Backend Systems", "APIs", "Data Pipelines", "Cloud Workflows", "Full-Stack Products"];

export const aboutContent = {
  bio: "I'm a software engineer who specializes in transforming complex, real-world requirements into scalable, maintainable systems. My focus spans backend architecture, API design, data workflows, and full-stack development with modern technologies.",
  philosophy: "I believe in clean architecture, pragmatic engineering, and building solutions that can grow with business needs. Every line of code should serve a purpose and contribute to a larger system.",
  strengths: [
    {
      title: "System Architecture",
      description: "Designing scalable backend systems and API-first architectures that support business growth"
    },
    {
      title: "Data Engineering",
      description: "Building ETL pipelines, OCR workflows, and analytics-ready data infrastructure"
    },
    {
      title: "Full-Stack Integration",
      description: "Connecting frontend and backend with clean contract design and robust error handling"
    },
    {
      title: "Cloud Deployment",
      description: "Containerizing applications and deploying production-ready solutions on cloud infrastructure"
    }
  ],
  whatIBring: [
    "Turning messy real-world requirements into scalable systems",
    "Building APIs with maintainable architecture",
    "Connecting frontend and backend cleanly",
    "Creating analytics-ready workflows",
    "Shipping production-oriented solutions"
  ]
};

export const skillCategories = [
  {
    name: "Frontend",
    description: "Building responsive, interactive user interfaces with modern frameworks",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    color: "#61dafb"
  },
  {
    name: "Backend",
    description: "Building scalable APIs, business logic layers, and maintainable service architecture",
    skills: ["Node.js", "Express", "NestJS", "Java", "Spring Boot", "Python", "FastAPI", "Django"],
    color: "#68a063"
  },
  {
    name: "Data / Systems",
    description: "Designing data pipelines, database systems, and analytics-ready infrastructure",
    skills: ["SQL", "MySQL", "MongoDB", "OCR pipelines", "API integration", "structured data workflows", "analytics-ready systems"],
    color: "#f59e0b"
  },
  {
    name: "DevOps / Tools",
    description: "Containerization, deployment automation, and development workflow optimization",
    skills: ["Docker", "Kubernetes", "Git", "GitHub", "Firebase", "Supabase", "Linux", "Figma", "Trello", "Jira"],
    color: "#8b5cf6"
  }
];

export const projects = [
  {
    id: 1,
    title: "Global Roots",
    summary: "A mentorship platform connecting diaspora professionals with Rwandan youth to give back to the community",
    problem: "Organizations struggle to connect experienced professionals abroad with youth who need mentorship and career guidance.",
    solution: "Built a role-based platform with progress tracking, performance metrics, and scalable interface boundaries for different user types.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    highlights: [
      "Role-based access control system",
      "Progress tracking APIs",
      "Performance metrics dashboard",
      "Scalable interface boundaries",
      "Clean frontend and backend integration"
    ],
    impact: "Enabled hundreds of mentorship connections across continents with structured guidance workflows.",
    github: "https://github.com/Preacher-Y/global-roots",
    live: "https://globalroots.netlify.app",
    icon: "globe",
    images: ["/projects/globalroots-1.png"]
  },
  {
    id: 2,
    title: "SafeMind",
    summary: "A privacy-aware digital health platform supporting structured session tracking and AI-assisted interaction",
    problem: "Mental health platforms often lack proper session structure, privacy controls, and integration with AI assistance.",
    solution: "Developed a privacy-focused system with WebRTC peer-to-peer interaction, structured session metadata pipelines, and Gemini API integration.",
    techStack: ["Java", "Android", "Firebase SDK", "Gemini API", "WebRTC"],
    highlights: [
      "Session metadata pipelines",
      "Fault handling and recovery",
      "Performance optimization",
      "Peer-to-peer interaction using WebRTC",
      "Analytics-ready structured storage"
    ],
    impact: "Provided a secure, compliant platform for mental health professionals to conduct remote sessions.",
    github: "https://github.com/Preacher-Y/safemind",
    live: null,
    icon: "shield",
    images: ["/projects/safemind-1.png", "/projects/safemind-2.png"]
  },
  {
    id: 3,
    title: "Requenta",
    summary: "An intelligent reimbursement management system with OCR extraction, validation, and export",
    problem: "Manual reimbursement processing is time-consuming, error-prone, and difficult to scale for organizations with high transaction volumes.",
    solution: "Created an ETL-style ingestion workflow with OpenAI-powered OCR extraction, data validation, and Excel export capabilities.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Supabase", "Email.js", "OpenAI"],
    highlights: [
      "ETL-style ingestion workflow",
      "OCR pipeline with OpenAI",
      "Backend endpoints for validation",
      "Data validation rules engine",
      "Excel export workflow"
    ],
    impact: "Reduced reimbursement processing time by 80% through automated extraction and validation.",
    github: "https://github.com/Preacher-Y/requenta",
    live: "https://requenta.netlify.app",
    icon: "document",
    images: ["/projects/requenta-1.png"]
  }
];

export const experience = [
  {
    role: "Web Developer",
    company: "HeptaDev",
    period: "June 2025 - Present",
    highlights: [
      "Designed and implemented RESTful APIs using Java Spring Boot and Node.js",
      "Built full-stack applications using React, TypeScript, and Tailwind CSS",
      "Translated business requirements into technical specifications",
      "Applied Clean Code and SOLID principles",
      "Deployed apps using Docker"
    ]
  },
  {
    role: "Coach & Technical Mentor",
    company: "The Gym Bootcamp",
    period: "Feb 2025 - March 2026",
    highlights: [
      "Mentored junior developers on backend architecture, API design, debugging, Git workflows, and frontend-backend communication",
      "Reviewed codebases for best practices, structure, and performance"
    ]
  },
  {
    role: "Frontend Developer",
    company: "LENSA",
    period: "Feb 2024 - Mar 2025",
    highlights: [
      "Built responsive UI using HTML5, JavaScript, CSS, Bootstrap, and jQuery",
      "Integrated frontend systems with REST APIs in .NET Core / Web API",
      "Improved frontend-backend reliability",
      "Worked on analytics-driven service interfaces"
    ]
  }
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Adventist University of Central Africa",
  period: "Jan 2023 - Nov 2026",
  focus: "Software Engineering",
  details: [
    "Software engineering lifecycle",
    "Object-oriented design",
    "Data structures and algorithms",
    "Team-based academic projects"
  ]
};

export const certifications = [
  {
    name: "Phase 1 / Core Skills Training",
    provider: "The Gym",
    focus: "Advanced frontend and backend development, interactive project building",
    skills: ["JavaScript frameworks", "Tailwind CSS", "Team collaboration"]
  }
];
