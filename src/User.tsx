import { IconBrandGithub, IconMail, IconBrandLeetcode, IconBrandLinkedin, IconBrandFacebook } from "@tabler/icons-react";
import { assetUrl } from "./assets";
const Info = {
    name: "Dilumi Gimansha",
    stack: ["Quality Assurance Engineer", "Manual QA Tester", "QA Automation Engineer", "IT-Professional", "API Testing Specialist"],
    bio: "I'm a detail-driven QA engineer specialized in building robust testing strategies and catching what others miss, ensuring every release meets the highest standards of quality and reliability. I love partnering with teams to ship dependable software, let's connect and build something solid together!",
    fname: "Dilumi Gimansha Karunarathna"
}



const ProjectInfo = [
    {
        title: "Online Class Management System | IT Project",
        desc: "Fully responsive online class management platform built using React, Node.js, Express.js, MongoDB, TailwindCSS, and Redux, offering a seamless learning experience across all devices. It features secure user authentication with role-based access control, supporting distinct login, registration, and logout functionalities for students, instructors, and admins. Instructors can create and manage courses with video lectures, downloadable resources, and structured modules, while students can browse the course catalog and enroll with ease. The assignment submission system allows students to upload work directly, with instructors able to review, grade, and provide feedback seamlessly. Students can monitor their performance through a dedicated grades and progress tracker. EduFlow combines a robust full-stack architecture with a clean, intuitive design, making online education organized, accessible, and enjoyable for everyone.",
        image: assetUrl("lms.png"),
        live: true,
        technologies: ["React", "Express.js", "MongoDB", "Tailwind", "Redux", "Node.js"],
        link: "https://github.com/DilumiGimansha/online-class-management-system.git",
        github: "https://github.com/DilumiGimansha/online-class-management-system.git"
    },
    {
        title: "Agrofresh | Information Technology Project",
        desc: "Contributed to the Customer Function of AgroFresh Online Vegetable Delivery Management System, enabling customers to easily register, search products, track orders, and provide feedback. This module enhances transparency, improves service quality, and supports a direct supply chain between farmers and consumers, reducing waste and ensuring fresh produce delivery 🌱📦.",
        image: assetUrl("agrofresh.png"),
        live: false,
        technologies: ["React", "Express.js", "MongoDB", "Tailwind", "Redux", "Node.js"],
        // link: "https://github.com/Code-Mars/Facebook-Clone",
        // github: "https://github.com/Code-Mars/Facebook-Clone"
    },
    {
        title: "Programming Application Framework | PAF",
        desc: "Developed a web application using Spring Boot with CRUD features for posts, along with like & comment functionality. Implemented user login/authentication (JWT) and database integration with MySQL. Designed REST APIs to manage user interactions, posts, and feedback efficiently. 🚀",
        image: assetUrl("paf.png"),
        live: false,
        technologies: ["REST APIs", "Springboot", "Spring Security", "JPA/Hibernate", "MySQL"],
        // link: "https://github.com/Code-Mars/Spotify-Clone",
        // github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    {
        title: "Wiley QE Training Program  2024",
        desc: "Playwright automated test scripts for Wiley Online Library website.I am honored to have been selected for this opportunity. I confirmed my participation in the training session scheduled for December 10, 2024, and I gained valuable insights into Wiley’s Software Quality Engineering practices & exploring opportunities for professional growth. This opportunity to learn from industry experts and develop my skills means a lot to me. Thank you once again for organizing such a valuable program and considering me for this experience.",
        image: assetUrl("qe.png"),
        live: true,
        technologies: ["Software Quality Engineering practices", "Automation", "Playwright ", "Test Scripts", "Web Application Testing"],
        link: "https://github.com/DilumiGimansha/Wiley-Test-Automation.git",
        github: "https://github.com/DilumiGimansha/Wiley-Test-Automation.git"
    },
    {
        title: "Online Examination Management System | SLIIT Project",
        desc: "The Online Examination Management System is a full-stack web application designed to streamline the process of creating, managing, and conducting online examinations. Built with React for the frontend and Spring Boot for the backend, it offers a comprehensive solution for educational institutions. The system supports various question types, real-time monitoring during exams, and detailed reporting. It ensures a secure and efficient examination environment for both administrators and users.",
        image: assetUrl("OEMS.png"),
        live: false,
        technologies: ["React", "Express.js", "MongoDB", "Tailwind", "Redux", "Node.js" ],
        // link: "https://github.com/Code-Mars/Instagram-Clone",
        // github: "https://github.com/Code-Mars/Instagram-Clone"
    },
    {
        title: "Smart Courier Intelligence System | Research Project",
        desc: "Smart Courier Intelligence Platform is an AI-driven logistics solution designed to modernize courier operations in Sri Lanka by addressing key challenges in customer support, delivery efficiency, parcel security, and identity verification. The platform integrates four core components: an Automated Sinhala AI Voice Agent for real-time parcel tracking and pricing inquiries through natural speech, an AI-Driven Hybrid Routing System combining reinforcement learning with live GIS traffic data for dynamic delivery optimization, a Multimodal AI Face Engine fusing facial recognition with speaker verification for secure parcel handover, and a Voice Authentication System using ensemble-based detection to distinguish genuine from AI-generated voices with 96.2% accuracy. Together, these components demonstrate how integrated AI — spanning natural language processing, computer vision, biometrics, and operations research — can meaningfully transform the accessibility, security, and efficiency of courier services in Sri Lanka and similar developing economy logistics contexts.",
        image: assetUrl("postal.jpg"),
        live: true,
        technologies: ["Python", "Fast API", "Machine Learning", "Deep Learning", "TensorFlow", "Reinforcement Learning"],
        link: "https://github.com/Lahiru2000/Smart_Postal.git",
        github: "https://github.com/Lahiru2000/Smart_Postal.git"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python" ,"php"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite", "selenium"]
    }
]
const socialLinks = [
    { link: "https://github.com/DilumiGimansha", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/dilumi-gimansha-karunarathna", icon: IconBrandLinkedin },
    { link: "mailto:dilmansha2001@gmail.com", icon: IconMail }, 
    { link: "https://www.facebook.com/dilumi.gimansha", icon: IconBrandFacebook },
    { link: "https://leetcode.com/dilumigimansha/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Quality Assurance Engineer",
        company: "Variosystems",
        date: "June 2022 – June 2026 | WTC Colombo, Sri Lanka",
        desc: "Performed manual and automated testing of software applications, identifying and documenting defects to ensure product quality and reliability. Collaborated within an Agile team environment by actively participating in sprint planning, daily standups, and retrospectives, working closely with developers and product teams to align on quality standards and deliver project goals effectively.",
        skills: ["Manual Testing", "Automated Testing", "Defect Documentation", "Quality Assurance", "Scrum", "Agile"]
    },
    {
        role: "Quality Assurance Trainee (Intern) & ISO Coordinator",
        company: "Co-Operative Insurance Company PLC",
        date: "December 2024 – June 2025 | Colombo, Sri Lanka",
        desc: " Designed and executed test plans, test cases, and test scripts for web and mobile applications within Agile/Scrum sprints, contributing to a 30% reduction in post-release defects. Performed manual testing including functional, regression, integration, smoke, and UAT, tracking defects through JIRA and improving resolution time by 25%. Collaborated with developers and product teams to define acceptance criteria and maintain quality standards throughout the SDLC. Conducted internal quality audits and maintained ISO 9001 compliance, achieving 100% compliance during external audit processes.",
        skills: ["Manual Testing", "UAT", "ISO 9001 Quality Management", "Test Case Design", "Automation Testing"]
    },
     {
        role: "Trainee IT",
        company: "Andaradeniya Estate (Pvt) Limited",
        date: "June 2024 – December 2024 | Colombo, Sri Lanka",
        desc: "Supported software quality reviews and conducted basic validation testing on internal web systems, ensuring consistent functionality and data accuracy across updates. Documented technical processes and maintained website content, reinforcing attention to detail and systematic problem-solving practices. Collaborated with the IT team to troubleshoot and resolve minor technical issues, contributing to a smoother user experience for internal stakeholders. Assisted in the implementation of basic automation scripts for routine tasks, enhancing efficiency and reducing manual workload.",
        skills: ["QA Reviews", "Data Accuracy Verification", "Automation Scripting", "Functional Testing"]
    },
]

// ─── Add this to your existing User.ts file ───────────────────────────────────
// (alongside your existing ProjectInfo export)

 const CertificateInfo = [
    {
        title: "Higher Diploma in Information Technology",
        issuer: "SLIIT University",
        image: assetUrl("hnd.png"),          // path to your certificate image
        date: "Sep 27, 2025",
        skills: ["Software Development", "Web Development"],
        // link: "",
    },
    {
        title: "Diploma in English",
        issuer: "Sanit Campus",
        image: assetUrl("english.png"),
        date: "February 2026",
        skills: ["English Proficiency", "Communication Skills"],
        // link: "",
    },
    {
        title: "AWS Cloud Web Application Builder Trainer",
        issuer: "Amazon Web Services Training and Certification",
        image: assetUrl("aws-trainer.png"),
        date: "September 27, 2025",                     // omit if no credential ID
        skills: ["Architecting Solutions On AWS", "AWS Cloud", "Web Applications", "Building Infrastructure On AWS", "AWS Cloud Practitioner"],
        link: "https://www.credly.com/badges/41ec1cf6-43f3-4ff9-a0b0-1ec98a357275",
     },
      {
        title: "SimuLearn: Highly Available Web Application",
        issuer: "Amazon Web Services Training and Certification",
        image: assetUrl("webapplication.png"),
        date: "September 11, 2025",                     // omit if no credential ID
        skills: ["Relational Databases", "Core Security Concepts", "Auto Healing & Scaling Applications", "Highly Available Web Applications"],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7373291629404884993/",
     },
        {
        title: "SimuLearn: Database in Practice",
        issuer: "Amazon Web Services Training and Certification",
        image: assetUrl("dbapp.png"),
        date: "September 11, 2025",                     // omit if no credential ID
        skills: ["Amazon RDS", "Scaling", "Backups", "Database Security", "Database Migration", "Database Monitoring", "Database Performance", "Database Troubleshooting"],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7373282676499345408/",
     },
            {
        title: "Automate Azure Load Testing by using GitHub",
        issuer: "Microsoft Azure Certified: Azure Fundamentals",
        image: assetUrl("Testing.png"),
        date: "June 11, 2026",                     // omit if no credential ID
        skills: ["Azure Load Testing", "GitHub Actions", "Automation", "Performance Testing", "JMeter scripts", "Load Testing", "Azure DevOps", "Continuous Integration"],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7470798376767430656/",
    },
      
];

const EducationInfo = [
    {
        degree: "B.Sc. (Hons) in Information Technology Specialising in Information Technology",
        institution: "Sri Lanka Institute of Information Technology (SLIIT)",
        date: "June 2022 – June 2026",
        year: "2026",
        location: "Malabe, Sri Lanka",
        desc: "Specialised in Software Engineering with a focus on full-stack development, software quality assurance, and AI-driven systems. Final year research project: Smart Courier Intelligence System an AI-driven logistics platform integrating NLP, computer vision, and reinforcement learning.",
        // grade: "Second Class Upper",
        skills: ["Software Engineering", "QA & Testing", "Machine Learning", "Web Development", "Research"],
    },
     {
        degree: "Diploma in English",
        institution: "Sanit Campus",
        date: "2018 – 2020",
        year: "2026",
        location: "Kandy, Sri Lanka",
        desc: "Developed professional English proficiency with a focus on written and verbal communication, grammar, and comprehension forming a strong foundation for clear technical documentation and cross-functional collaboration.",
        skills: ["Communication", "Technical Writing", "Grammar & Composition", "Comprehension", "Presentation Skills"],
    },
    {
        degree: "Higher Diploma in Information Technology",
        institution: "SLIIT University",
        date: "December 2024",
        year: "2024",
        location: "Malabe, Sri Lanka",
        desc: "Advanced diploma covering software development methodologies, web technologies, and professional IT practices, complementing the undergraduate degree.",
        skills: ["Software Development", "Web Development"],
    },
   
];

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs, CertificateInfo, EducationInfo };

