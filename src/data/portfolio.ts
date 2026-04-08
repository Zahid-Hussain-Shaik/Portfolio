export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  icon?: string;
  image?: string;
  github?: string;
  live?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
}

export const personalInfo = {
  name: "Shaik Zahid Hussain",
  title: "Software Developer",
  email: "zahidhussain6@gmail.com",
  location: "India",
  availability: "Open to internships and full stack roles",
  linkedin: "https://www.linkedin.com/in/shaikzahidhussain",
  github: "https://github.com/Zahid-Hussain-Shaik",
  instagram: "https://www.instagram.com/zahid_shaik_56?igsh=N2hhOHQ0dHE2YnFi",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 60 },
      { name: "HTML/CSS", level: 88 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 88 },
      { name: "Flask", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Django", level: 82 },
      { name: "Redux", level: 78 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "scikit-learn", level: 85 },
      { name: "SpaCy", level: 80 },
      { name: "TensorFlow/PyTorch", level: 70 },
      { name: "OpenCV", level: 78 },
      { name: "Pandas/NumPy", level: 88 },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQL Server", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 78 },
      { name: "Apache Spark", level: 72 },
      { name: "Databricks", level: 70 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: "Python Developer",
    company: "Motion Cut",
    location: "Remote",
    type: "Full-time",
    startDate: "2023",
    endDate: "2025",
    description: [
      "Built a Python data pipeline to fetch, parse, and clean real-time weather data from the OpenWeatherMap REST API",
      "Processing 1,000+ API calls per run with automated workflows, cutting effort by about 80%",
      "Designed a fault-tolerant JSON-to-dataset transformation layer with modular error handling",
      "Integrated output into a live weather application serving 100+ daily users with under 2s response latency",
    ],
    technologies: ["Python", "Flask", "REST API", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Software Developer Intern",
    company: "Renu Sharma Foundation",
    location: "Remote",
    type: "Internship",
    startDate: "2023",
    endDate: "2023",
    description: [
      "Developed and shipped 10+ responsive UI modules in HTML5, CSS3, and JavaScript following Agile sprint cycles",
      "Achieved cross-device compatibility with zero post-release regressions",
      "Refactored component library to eliminate redundant styling code, reducing CSS duplication by about 30%",
      "Improved delivery speed across multiple sprint cycles while collaborating with the design team",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
  },
];

export const projects: Project[] = [
  {
    title: "Weather Application",
    description:
      "Deployed a resilient service with live weather updates, reducing data latency and enabling accurate forecasts for 100+ daily users.",
    problem: "Existing weather dashboards were slow, inconsistent and lacked production-grade API reliability.",
    solution:
      "Built a Flask API with OpenWeather integration, caching, error handling and a responsive frontend that delivers stable location-based forecasts.",
    technologies: ["Python", "Flask", "OpenWeather API", "HTML", "CSS", "JavaScript"],
    image: "/images/Weather-Forecasting-Project-copy (1).png",
    github: "https://github.com/Zahid-Hussain-Shaik/weather-application-",
    live: "https://weather-application-3j46.onrender.com/",
  },
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "Enabled faster candidate shortlisting with a service-ready workflow built for integration into recruiting tools.",
    problem: "Resume review was manual and inconsistent, slowing down candidate screening for hiring teams.",
    solution:
      "Designed a backend service to parse resumes, normalize job descriptions and rank matches using token similarity and keyword relevance.",
    technologies: ["Python", "Flask", "SpaCy", "REST API", "SQL", "HTML"],
    image: "/images/ai resume.png",
    github: "https://github.com/Zahid-Hussain-Shaik/AI-Powered-Resume-Analyzer-Job-Matcher",
  },
  {
    title: "Spam Mail Detection System",
    description:
      "Delivered an automated filtering workflow that improves email triage efficiency and supports future integration.",
    problem: "Manual email triage made it difficult to manage spam and classify messages consistently.",
    solution:
      "Built a pipeline with preprocessing, feature extraction and service-level classification logic to label and filter messages reliably.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "SQL"],
    image: "/images/cybersecurity-concept-collage-design.jpg",
    github: "https://github.com/Zahid-Hussain-Shaik/Spam_mail_detector",
  },
  {
    title: "Student Performance Prediction",
    description:
      "Provided a reliable early-warning predictive tool giving teachers actionable insights for timely intervention.",
    problem: "Educators lack proactive tools to accurately identify at-risk students before performance drops.",
    solution:
      "Developed a machine learning model utilizing historical academic and demographic data to forecast student outcomes.",
    technologies: ["Python", "scikit-learn", "Pandas", "Jupyter Notebook"],
    image: "/images/StudentPerformancePrediction.png",
    github: "https://github.com/Zahid-Hussain-Shaik/StudentPerformancePrediction-ML",
  },
  {
    title: "Real-time Object Detection",
    description:
      "Enabled continuous, automated subject tracking providing high-confidence bounding box predictions.",
    problem: "Video monitoring systems require highly accurate, low-latency object detection in dynamic environments.",
    solution:
      "Implemented a real-time object detection framework capable of classifying and localizing targets from live feeds.",
    technologies: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
    image: "/images/body-temperature-coronavirus-pandemic-thermal-image.png",
    github: "https://github.com/Zahid-Hussain-Shaik/Object-Detection-Project",
  },
  {
    title: "E-commerce Platform",
    description:
      "Provided a ready-to-deploy scalable architecture for online retail with seamless transactions.",
    problem: "Small businesses struggle to set up robust, scalable online storefronts with integrated payments.",
    solution:
      "Developed a comprehensive e-commerce solution with product cataloging, secure checkout, and admin dashboard.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Redux", "Tailwind CSS"],
    image: "/images/e-commerence.jpg",
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech - Computer Science and Engineering",
    institution: "Jawaharlal Nehru Technological University Anantapur",
    location: "Andhra Pradesh, India",
    startDate: "2021",
    endDate: "2026",
    description: "Computer Science and Engineering",
  },
  {
    degree: "Intermediate - MPC",
    institution: "Penchal Reddy High School",
    location: "Rayachoty, Andhra Pradesh, India",
    startDate: "2019",
    endDate: "2020",
    description: "MPC",
  },
  {
    degree: "Secondary Education",
    institution: "Sri Raju High School",
    location: "Rayachoty, Andhra Pradesh, India",
    startDate: "2018",
    endDate: "2019",
  },
];

export const certifications: Certification[] = [
  {
    title: "Cloud Computing Certification",
    issuer: "NPTEL / Swayam",
    image: "/Certificates/Cloud computing-1.png",
  },
  {
    title: "Python Full Stack Certification",
    issuer: "Sri Vency Technologies",
    image: "/Certificates/Full Stack Python Devlopment Completion Certficate.jpg",
  },
  {
    title: "Python Programming Intern",
    issuer: "Motion Cut",
    image: "/Certificates/Python Intern at Motion Cut.jpg",
  },
  {
    title: "Web Development Intern",
    issuer: "Renu Sharma Foundation",
    image: "/Certificates/Renu Sharma Completion Cerficate.jpg",
  },
  {
    title: "Python Programming Internship",
    issuer: "Bharat Intern",
    image: "/Certificates/bharat intern.jpeg",
  },
  {
    title: "Java Programming Intern",
    issuer: "CodSoft",
    image: "/Certificates/codsoft intern.jpeg",
  },
  {
    title: "Oracle Certified Professional",
    issuer: "Oracle",
    image: "/Certificates/Oracle Certifiedprofessional.jpg",
  },
  {
    title: "Oracle GenAI Job Simulation",
    issuer: "Oracle / Forage",
    image: "/Certificates/06.png",
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "JP Morgan Chase",
    image: "/Certificates/jp morgon .png",
  },
  {
    title: "GenAI Job Simulation",
    issuer: "BCGX / Forage",
    image: "/Certificates/bcgx.png",
  },
];
