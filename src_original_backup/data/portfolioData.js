// ============================================================
// portfolioData.js — Centralized configuration for the portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "RAMPAVITHRAN R.P",
  firstName: "Rampavithran",
  brandName: "RAMPAVITHRAN R.P",
  title: "Hello, I'm Rampavithran R.P",
  organization: "LTM",
  summary:
    "Software Engineer and Full Stack Developer focused on .NET, React, Java, modern UI engineering, and interactive web experiences.",
};

export const socialLinks = {
  github: "https://github.com/RAMPAVITHRAN23",
  linkedin: "https://linkedin.com/in/rampavithran-rp/",
  instagram: null,
};

export const heroContent = {
  eyebrow: " FULL STACK DEVELOPER",
  greeting: "Hi, I'm Rampavithran R.P",
  titleHighlight: "I build things that feel alive.",
  subtitle:
    "I'm a Software Engineer, Full Stack Developer and freelancer who loves turning ideas into thoughtful digital experiences with code, design and AI.",
  secondaryLine: "Software Engineer · Full Stack Developer · IEEE Leader · Freelancer",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: { text: "Let's Connect", href: "#contact" },
};

export const aboutContent = {
  heading: "I don't just write code. I build things worth remembering.",

  paragraphs: [
    "Hey, I'm Rampavithran R.P — a Software Engineer at LTIMindtree, Full Stack Developer, and freelancer who enjoys turning a blank screen into something people can actually feel and use.",
    "My world sits somewhere between engineering and creativity. I work with .NET, ASP.NET Core, React.js, JavaScript, TypeScript and modern web technologies, while constantly exploring AI, interactive 3D experiences, WebGL, UI/UX and the next idea that makes me curious.",
    "I love the moment when an idea moves from 'What if we built this?' to something real — a product, an interface, an animation, or an experience that makes someone stop and say, 'Whoa, how did you do that?' That's the kind of work I want to keep creating.",
    "Outside the code, I've spent years building communities through IEEE and NSS — leading teams, mentoring students, organizing hundreds of initiatives, volunteering, and learning how to turn people, ideas and energy into something bigger than any one person.",
    "Today, I'm building my career one project at a time — growing as a software engineer, exploring AI engineering and immersive web experiences, freelancing, and chasing ideas that make technology feel a little more human."
  ],

  techStack: [
    ".NET",
    "ASP.NET Core",
    "React.js",
    "JavaScript",
    "TypeScript",
    "AI",
    "WebGL / 3D",
    "UI/UX"
  ],
};


export const skillsContent = {
  badge: "What I Build",
  heading: "Engineering shaped by interaction and visual storytelling",
  description: "Software, interfaces, and digital experiences built with a balance of structure and curiosity.",
  cards: [
    {
      number: "01",
      title: "Full Stack Web Applications",
      text: "Modern responsive applications with structured frontend and backend architecture.",
    },
    {
      number: "02",
      title: "Interactive Websites",
      text: "Websites built around motion, interaction, storytelling, and strong visual hierarchy.",
    },
    {
      number: "03",
      title: "3D Web Experiences",
      text: "Exploring interactive WebGL experiences with Three.js and React Three Fiber.",
    },
    {
      number: "04",
      title: "Portfolio & Brand Websites",
      text: "Modern web experiences for personal brands, creators, startups, and product concepts.",
    },
    {
      number: "05",
      title: "AI-Assisted Development",
      text: "Using AI to accelerate research, prototyping, coding, and debugging with human-reviewed implementation.",
    },
  ],
  endText: "Build with intention.",
};

export const technicalSkills = {
  categories: [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Responsive UI", "Modern UI/UX"],
    },
    {
      title: "Backend",
      skills: ["C#", ".NET", "ASP.NET Core", "Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Programming",
      skills: ["C#", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MongoDB Atlas", "SQL Fundamentals"],
    },
    {
      title: "Creative & Interactive",
      skills: ["Three.js", "React Three Fiber", "GSAP", "WebGL Concepts", "Scroll Interactions", "Interactive UI", "Motion Design"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
    },
  ],
};

export const contentCreation = {
  badge: "Currently Exploring",
  heading: "Curiosity beyond the conventional interface",
  description: "Areas of learning and experimentation, not claims of professional specialization.",
  categories: [
    {
      title: "AI Engineering",
      description: "Exploring AI-assisted development and emerging AI engineering workflows.",
      stats: "Exploration",
    },
    {
      title: "3D Web & WebGL",
      description: "Learning how Three.js and React Three Fiber can bring depth to web experiences.",
      stats: "Exploration",
    },
    {
      title: "Interactive UI",
      description: "Experimenting with scroll-led interactions, motion, and responsive storytelling.",
      stats: "Exploration",
    },
    {
      title: "Modern Product Experiences",
      description: "Exploring creative frontend engineering and human-centered product ideas.",
      stats: "Exploration",
    },
  ],
};

export const leadershipData = {
  intro: {
    eyebrow: "Leadership",
    headline: "Beyond code.",
    description: "Building communities, leading teams, creating platforms, and giving people opportunities to grow.",
  },
  identity: {
    organization: "IEEE",
    descriptor: "Leadership & Community",
    role: "Ex-Chairperson",
    branch: "IEEE Sairam Student Branch",
    period: "2024–2025",
    description: "Led technical, professional, and student-development initiatives; coordinated volunteers, organized activities, mentored student teams, and helped build an active technical community.",
  },
  impact: [
    { value: 300, suffix: "+", label: "Technical and professional activities coordinated · 2024–25" },
    { value: 200, suffix: "+", label: "Students and volunteers mentored" },
    { value: 900, suffix: "+", label: "Members recruited within 48 hours" },
  ],
  milestones: [
    { year: "2023", title: "Volunteer recognition", detail: "Recognition milestone", href: "#leadership-awards" },
    { year: "2024", title: "IEEE Day organizing recognition", detail: "Recognition milestone", href: "#leadership-awards" },
    { year: "2024–2025", title: "IEEE Sairam Student Branch", detail: "Chairperson · Current portfolio data", href: "#leadership-roles" },
    { year: "2025", title: "Regional, community & technical programmes", detail: "IEEE and student initiatives", href: "#leadership-roles" },
  ],
  roles: [
    {
      id: "ieee-sairam-chairperson",
      title: "IEEE Sairam Student Branch",
      description: "Led the IEEE Sairam Student Branch across technical, professional, and student-development initiatives. Coordinated volunteers, organized large-scale events, mentored student teams, and contributed to building an active technical community.",
      role: "Chairperson | 2024–2025",
      badge: "IEEE Sairam",
      category: "Branch leadership",
      verificationNote: "Your brief says 2021–2025; current project data says 2024–2025. Confirm the exact chairperson period.",
    },
    {
      id: "ieee-computer-society",
      title: "IEEE Computer Society Student Branch Chapter",
      description: "Supported software development, emerging-technology learning, student engagement, programming activities, student-team mentoring, workshops, and technical sessions.",
      role: "SBC Chairperson / Student Branch Chapter Leadership",
      badge: "IEEE Computer Society",
      category: "Technical leadership",
    },
    {
      id: "ieee-r10-madras-mas-sac",
      title: "IEEE Region 10 & Madras Section",
      description: "IEEE R10 / Madras Section volunteer and IEEE MAS SAC Executive Committee member, contributing to regional and section-level student initiatives.",
      role: "Volunteer · Executive Committee",
      badge: "Regional leadership",
      category: "IEEE volunteering",
    },
    {
      id: "ieee-cs-syp-2025",
      title: "IEEE CS SYP Awards Engagement Program",
      description: "Co-led the IEEE CS SYP Awards Engagement Program in 2025.",
      role: "Co-Lead | 2025",
      badge: "IEEE Computer Society",
      category: "Programme leadership",
    },
    {
      id: "hize-2",
      title: "IEEE CS SCYP HIZE",
      description: "Served as Graphic Designer and core team member for HIZE 2.0, according to the current portfolio data.",
      role: "Graphic Designer · Core Team",
      badge: "Student initiative",
      category: "Creative contribution",
      verificationNote: "Your brief says Secretary; current project data says Graphic Designer & core team. Confirm the role title.",
    },
    {
      id: "yesist-2025",
      title: "IEEE YESIST 2025",
      description: "Contributed to the YESIST 2025 web team as a Web Developer.",
      role: "Web Developer",
      badge: "Technical programme",
      category: "Technical contribution",
    },
    {
      id: "rmc-2025",
      title: "RMC 2025",
      description: "Contributed to RMC 2025 as a Web Developer.",
      role: "Web Developer",
      badge: "Technical programme",
      category: "Technical contribution",
    },
    {
      id: "wie-day-2025",
      title: "IEEE WIE Day 2025",
      description: "Served as an IEEE WIE Day 2025 Ambassador.",
      role: "Ambassador | 2025",
      badge: "IEEE WIE",
      category: "Community engagement",
    },
    {
      id: "sairam-nss",
      title: "Sairam NSS",
      description: "Served as Sairam NSS Coordinator.",
      role: "NSS Coordinator",
      badge: "Community service",
      category: "Volunteering",
    },
  ],
  technicalContributions: [
    { roleId: "ieee-computer-society", title: "IEEE Computer Society", contribution: "Software development, programming activities, workshops, and technical learning." },
    { roleId: "yesist-2025", title: "YESIST 2025", contribution: "Web Developer · Web team contribution." },
    { roleId: "rmc-2025", title: "RMC 2025", contribution: "Web Developer." },
  ],
  appearances: [
    { id: "ieee-day-2025-guest", event: "IEEE Day 2025", role: "Invited Guest", detail: "Invited as a college guest for IEEE Day 2025." },
  ],
  recognition: [
    { id: "best-student-volunteer-2023", name: "Best Outstanding Student Volunteer", year: "2023", category: "Awards" },
    { id: "ieee-day-organizer-2024", name: "Outstanding Student Organizer · IEEE Day", year: "2024", category: "Awards" },
    { id: "ieee-day-guest-2025", name: "Invited Guest · IEEE Day", year: "2025", category: "Invitations / Guest Appearances", detail: "Invited as a college guest for IEEE Day 2025." },
  ],
  assets: [
    { id: "ieee-chair", category: "IEEE", path: "/assets/leadership/ieee/ieee-chair.jpg", label: "IEEE leadership photo", available: false },
    { id: "yesist-2025", category: "Events", path: "/assets/leadership/events/yesist-2025.jpg", label: "YESIST 2025 photo", available: false },
    { id: "rmc-2025", category: "Events", path: "/assets/leadership/events/rmc-2025.jpg", label: "RMC 2025 photo", available: false },
    { id: "ieee-day-2025", category: "Guest appearances", path: "/assets/leadership/guest-appearances/ieee-day-2025.jpg", label: "IEEE Day 2025 invitation photo", available: false },
    { id: "student-volunteer-award", category: "Awards", path: "/assets/leadership/awards/best-outstanding-student-volunteer-2023.jpg", label: "2023 award certificate", available: false },
    { id: "ieee-day-organizer-award", category: "Certificates", path: "/assets/leadership/certificates/ieee-day-organizer-2024.jpg", label: "2024 recognition certificate", available: false },
  ],
  verificationNotes: [
    "IEEE Sairam Student Branch Chairperson period differs between the current project data (2024–2025) and supplied brief (2021–2025).",
    "HIZE 2.0 role differs between current project data (Graphic Designer & core team) and supplied brief (Secretary).",
    "Only one guest/invitation appearance is named in the current project data; additional appearances need event names and details before publication.",
    "WES 2027 recognition and YESIST 2025 website-team chair/lead title are not documented in current project data.",
  ],
};

export const leadershipList = leadershipData.roles;
export const leadershipImpact = leadershipData.impact;
export const awards = leadershipData.recognition.filter((item) => item.category === "Awards");

export const professionalExperience = [
  {
    organization: "LTIMindtree",
    role: "Software Engineer",
    duration: "2025 – Present",
    description: "Building professional experience across enterprise software development and application engineering.",
  },
];

export const softSkillsList = [
  { name: "Leadership & Ownership", icon: "leadership", desc: "Comfortable taking responsibility for initiatives from planning through execution, coordinating people, managing priorities, and ensuring outcomes." },
  { name: "Team Collaboration", icon: "collaboration", desc: "Experienced working with developers, designers, organizers, volunteers, and cross-functional teams toward shared objectives." },
  { name: "Communication", icon: "communication", desc: "Able to communicate technical ideas, project requirements, and event objectives clearly to both technical and non-technical audiences." },
  { name: "Mentoring & Knowledge Sharing", icon: "mentoring", desc: "Experienced mentoring students and volunteers, conducting technical activities, and helping peers develop practical skills." },
  { name: "Problem Solving", icon: "problem-solving", desc: "Approaches challenges analytically, breaks complex problems into manageable tasks, and focuses on practical solutions." },
  { name: "Adaptability", icon: "adaptability", desc: "Comfortable learning new technologies, working across different responsibilities, and adapting to changing project requirements." },
  { name: "Project & Event Coordination", icon: "coordination", desc: "Experienced in planning, coordinating, and executing technical programs, competitions, workshops, and community initiatives." },
  { name: "Initiative & Self-Learning", icon: "initiative", desc: "Strong interest in exploring emerging technologies and building projects independently to turn concepts into practical experience." },
  { name: "Time & Priority Management", icon: "time", desc: "Able to balance development, leadership responsibilities, academic commitments, and multiple concurrent initiatives." },
  { name: "Creativity & Execution", icon: "creativity", desc: "Combines technical development with design, visual communication, and creative problem-solving to turn ideas into usable digital experiences." },
];

export const projects = [
  {
    id: "premium-3d-cafe",
    number: "01",
    type: "Creative / Experimental · Demo",
    title: "Premium 3D Café Experience",
    description:
      "A premium interactive café website concept where scrolling becomes part of the experience. It explores 3D objects, cinematic transitions, camera movement, interactive menu presentation, and visual storytelling.",
    techTags: ["React", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    links: {},
    isFlagship: true,
  },
  {
    id: "ninaivu-hub",
    number: "02",
    type: "Personal / Creative Platform",
    title: "Ninaivu Hub",
    description:
      "A digital creative platform focused on photo frames, memory cards, posters, video editing, and website development.",
    techTags: [],
    links: {},
    isFlagship: false,
  },
  {
    id: "foodhub",
    number: "03",
    type: "Full Stack Web Application · Learning Project",
    title: "FoodHub",
    description:
      "A modern food ordering interface inspired by contemporary food delivery platforms, created to explore reusable components, navigation, responsive UI, and full-stack JavaScript development.",
    techTags: [],
    links: {},
    isFlagship: false,
  },
];

export const education = {
  degree: "B.Tech · Information Technology",
  institution: "Sri Sairam Engineering College",
  // cgpa: "7.63 / 10",
  graduation: "2021 – 2025",
  description: "Completed a B.Tech in Information Technology with exposure to software development, programming, web technologies, technical communities, leadership, and student initiatives.",
};

export const footerContent = {
  taglines: [
    "Software Engineering",
    "Engineering · Design · Leadership",
    "Exploring Interactive Digital Experiences",
  ],
  credential: "B.Tech Information Technology · 2021–2025",
  copyright: `© ${new Date().getFullYear()} Rampavithran R.P · Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  recipientEmail: "rpram2003@gmail.com",
};
