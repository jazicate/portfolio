export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  summary: string;
  impact: string;
  stack: string[];
  bullets: string[];
  href?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type SkillGroupData = {
  title: string;
  items: string[];
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  username: "@jazicate",
  fullName: "Jerome Azicate",
  title: "Computer Science Senior",
  headline: "Computer science senior building solid software across apps, tooling, and ML projects.",
  summary:
    "I'm a computer science senior at UNLV graduating in May 2026. Most of my work has been in TypeScript, Python, and C++, with an emphasis on building things that are maintainable, testable, and actually useful.",
  intro:
    "This site is a straightforward snapshot of the projects, coursework, and teaching experience that best represent how I work.",
  location: "Las Vegas, Nevada",
  email: "jjromazicate@gmail.com",
  phone: "(702) 328-5726",
  github: "https://github.com/jazicate",
  linkedin: "https://www.linkedin.com/in/jerome-azicate/",
  education: {
    school: "University of Nevada, Las Vegas",
    degree: "Bachelor of Science in Computer Science",
    graduation: "Expected Graduation: May 2026",
    coursework: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Machine Learning",
      "Computer Architecture",
      "Programming Languages",
      "Databases",
      "Cybersecurity",
    ],
  },
};

export const projects: Project[] = [
  {
    name: "BatchGrade",
    summary:
      "Cross-platform Electron desktop application for automating compilation, execution, and validation of student code submissions.",
    impact:
      "Designed to reduce grading turnaround time for programming assignments and make feedback delivery more consistent.",
    stack: ["Electron", "React", "TypeScript", "TailwindCSS", "Drizzle ORM", "SQLite", "Node.js", "Vitest"],
    bullets: [
      "Built a React and TypeScript renderer with a secure Electron IPC architecture across main, preload, and renderer layers.",
      "Designed the local persistence layer with Drizzle ORM and SQLite for grading workflow reliability.",
      "Added unit tests with Vitest and an in-memory database to validate critical grading and persistence behavior.",
    ],
    href: "https://github.com/UNLV-CS472-672/2026-S-GROUP3-BatchGrade",
  },
  {
    name: "SecureCrypto",
    summary:
      "C++ application implementing secure AES-256 encryption and decryption using OpenSSL.",
    impact:
      "Demonstrates applied systems-level programming, security fundamentals, and disciplined testing practices.",
    stack: ["C++", "OpenSSL", "CMake", "Catch2"],
    bullets: [
      "Implemented key generation and derivation with PBKDF2.",
      "Handled edge cases including large inputs and invalid keys through automated tests.",
      "Used randomized salt generation and proper AES padding to align with secure development practices.",
    ],
    href: "https://github.com/jazicate/SecureCrypto",
  },
  {
    name: "Student Performance Prediction",
    summary:
      "Machine learning project comparing predictive models for student performance classification.",
    impact:
      "Reached 91.1% accuracy with Random Forest while demonstrating evaluation, tuning, and visualization workflows.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    bullets: [
      "Benchmarked Random Forest, KNN, and SVM models to compare classification performance.",
      "Optimized KNN hyperparameters with GridSearchCV and improved recall to 94.2%.",
      "Communicated outcomes with confusion matrices, ROC curves, and cross-validation visualizations.",
    ],
    href: "https://github.com/jazicate/StudentPerformancePrediction",
  },
  {
    name: "Iris Flower Classification",
    summary:
      "Multi-class classification workflow built to evaluate model quality and communicate results clearly.",
    impact:
      "Achieved 100% test accuracy with Naive Bayes and Neural Network models while improving Logistic Regression through tuning.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    bullets: [
      "Compared multiple models to understand tradeoffs in accuracy and log-loss.",
      "Used GridSearchCV to improve Logistic Regression performance.",
      "Built visual reports with confusion matrices, ROC curves, and pairplots.",
    ],
    href: "https://github.com/jazicate/IrisFlowerClassification",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "University of Nevada, Las Vegas",
    role: "Computer Science Teaching Assistant",
    period: "Aug 2023 - May 2024",
    location: "Las Vegas, Nevada",
    bullets: [
      "Assisted undergraduate students with algorithms, data structures, and problem-solving fundamentals.",
      "Provided 50+ one-on-one support sessions during lab hours for debugging and implementation guidance.",
      "Graded 30+ assignments and exams with actionable feedback to improve student performance and clarity.",
    ],
  },
];

export const skillGroups: SkillGroupData[] = [
  {
    title: "Languages",
    items: ["Python", "Rust", "TypeScript", "JavaScript", "C++", "C#", "MATLAB", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["React", "Node.js", "Electron", "Flask", "Django", "TailwindCSS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "SQLite", "Prisma", "Drizzle ORM"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "CMake", "OpenSSL", "pytest", "Catch2", "Jupyter"],
  },
  {
    title: "Coursework",
    items: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Machine Learning",
      "Computer Architecture",
      "Programming Languages",
      "Databases",
      "Cybersecurity",
    ],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "jjromazicate@gmail.com",
    href: "mailto:jjromazicate@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/jazicate",
    href: "https://github.com/jazicate",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/jerome-azicate/",
    href: "https://www.linkedin.com/in/jerome-azicate/",
  },
];
