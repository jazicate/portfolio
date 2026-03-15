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
  badgeStyle?: "tech" | "plain";
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
      "Collaborated on a team to develop the MVP of BatchGrade, a cross-platform Electron desktop application that automates compilation, execution, and validation of programming assignments.",
    impact:
      "Reduced manual grading time by building an automated pipeline that processed 50+ submissions per assignment and persisted grading results in SQLite.",
    stack: ["Electron", "React", "TypeScript", "TailwindCSS", "Drizzle ORM", "SQLite", "Node.js", "Vitest"],
    bullets: [
      "Worked across the Electron application stack to help turn the initial MVP into a usable grading workflow for programming assignments.",
      "Built the automated grading pipeline in MVP-2 and MVP-3, compiling and executing student code in an isolated environment, running instructor-defined test cases, validating outputs, and persisting results in SQLite.",
      "Implemented unit tests with Vitest and an in-memory database to verify grading logic and ensure reliable submission processing.",
    ],
    href: "https://github.com/UNLV-CS472-672/2026-S-GROUP3-BatchGrade",
  },
  {
    name: "SecureCrypto",
    summary:
      "C++ security project that implements AES-256 encryption and decryption with OpenSSL, with an emphasis on correctness, key handling, and reliable file processing.",
    impact:
      "Demonstrates systems-level programming, applied cryptography fundamentals, and disciplined validation of security-sensitive behavior.",
    stack: ["C++", "OpenSSL", "CMake", "Catch2"],
    bullets: [
      "Implemented AES-256 encryption and decryption workflows in C++ using OpenSSL primitives for secure file handling.",
      "Added key generation and derivation with PBKDF2, randomized salt generation, and proper AES padding to follow established secure development practices.",
      "Covered edge cases such as large inputs and invalid keys with automated tests using Catch2.",
    ],
    href: "https://github.com/jazicate/SecureCrypto",
  },
  {
    name: "Student Performance Prediction",
    summary:
      "Machine learning project focused on predicting student performance by comparing multiple classification models, tuning them systematically, and evaluating how each model generalizes.",
    impact:
      "Reached 91.1% accuracy with Random Forest while building a full workflow for model comparison, hyperparameter tuning, and result communication.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    bullets: [
      "Benchmarked Random Forest, KNN, and SVM models to compare classification accuracy, recall, and generalization behavior.",
      "Optimized KNN hyperparameters with GridSearchCV and improved recall to 94.2% through systematic tuning.",
      "Visualized model outcomes with confusion matrices, ROC curves, and cross-validation plots to make results easier to interpret.",
    ],
    href: "https://github.com/jazicate/StudentPerformancePrediction",
  },
  {
    name: "Iris Flower Classification",
    summary:
      "Multi-class classification project built around the Iris dataset to compare model behavior, improve weaker baselines, and communicate results with clear visual analysis.",
    impact:
      "Achieved 100% test accuracy with Naive Bayes and Neural Network models while improving Logistic Regression through targeted tuning.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    bullets: [
      "Compared Naive Bayes, Neural Network, and Logistic Regression models to understand tradeoffs in accuracy and log-loss.",
      "Used GridSearchCV to improve Logistic Regression performance and evaluate the impact of parameter choices.",
      "Built visual reports with confusion matrices, ROC curves, and pairplots to clearly explain class separation and model quality.",
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
    badgeStyle: "tech",
    items: ["Python", "Rust", "TypeScript", "JavaScript", "C++", "C#", "MATLAB", "SQL"],
  },
  {
    title: "Frameworks",
    badgeStyle: "tech",
    items: ["React", "Node.js", "Electron", "Flask", "Django", "TailwindCSS"],
  },
  {
    title: "Databases",
    badgeStyle: "tech",
    items: ["PostgreSQL", "SQLite", "Prisma", "Drizzle ORM"],
  },
  {
    title: "Tools",
    badgeStyle: "tech",
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
