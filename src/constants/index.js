import { teralogo, logo } from "../assets/images";

import {
    bash,
    contact,
    cplusplus,
    docker,
    estate,
    express,
    fastapi,
    git,
    github,
    javascript,
    linkedin,
    mongodb,
    mysql,
    nextjs,
    nodejs,
    postgresql,
    postman,
    pricewise,
    prisma,
    python,
    pytest,
    react,
    redis,
    snapgram,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Language",
    },
    {
        imageUrl: bash,
        name: "Bash",
        type: "Language",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: prisma,
        name: "Prisma ORM",
        type: "Database",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Testing & DevOps",
    },
    {
        imageUrl: pytest,
        name: "pytest",
        type: "Testing & DevOps",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Testing & DevOps",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "ICT Intern",
        company_name: "Tera Software Limited",
        icon: teralogo,
        iconBg: "#E6F4F1",
        date: "May 2025 - July 2025",
        points: [
            "Supported configuration, deployment and maintenance of network hardware and ICT infrastructure for the PAN Smart City Project.",
            "Acted as first-line support for hardware, software and connectivity issues — diagnosed root causes and restored service, improving device uptime.",
            "Maintained operational records and compiled progress reports for stakeholders to support project coordination and delivery.",
        ],
    },
    {
        title: "Summer Intern",
        company_name: "India Space Lab",
        icon: logo,
        iconBg: "#383E56",
        date: "June 2025 - July 2025",
        points: [
            "Built a working CanSat and CubeSat prototype as part of the internship programme.",
            "Designed electronic circuits and PCB layouts for the payload using EasyEDA.",
            "Took part in hands-on sessions on satellite communication systems, ground station operations, rocketry design and image processing fundamentals.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shishird-03',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shishir-d-85219a28b/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Rajamrutha — AI-Driven E-Commerce Platform',
        description: 'Full-stack e-commerce platform (storefront, admin panel and backend services) built on PostgreSQL with Prisma ORM, with REST API documentation and system design specs maintained across the lifecycle. Integrated a Retrieval-Augmented Generation (RAG) chatbot via the OpenRouter API to interpret user health queries and surface real-time, context-aware product recommendations. Secured with JWT authentication and Redis caching to hold response times steady under high traffic.',
        link: 'https://ayurvedic-client.vercel.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'SmartChallan — AI E-Challan System',
        description: 'Computer-vision pipeline built on the YOLOv8 object-detection model to automate traffic-violation detection and digital fine collection, cutting manual processing. The detection service runs in Python (FastAPI) within a microservices architecture, exposing REST endpoints and containerised with Docker for CI/CD-ready deploys. JWT-based Role-Based Access Control isolates Citizen, Police and Admin workflows, backed by pytest suites across services.',
        link: 'https://smart-challan.vercel.app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Incridea 2026 — "Dimensional Drift" Fest Website',
        description: 'Official website for NMAMIT\'s annual fest, serving 3000+ users. Led a sub-team of 3–4 developers to build and deploy it, handling live bug fixes and holding zero downtime through peak registrations. Coordinated task distribution, tracked progress and cleared blockers under tight deadlines through cross-team collaboration.',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Lost and Found DBMS',
        description: 'Full-stack web application for managing lost and found items, built with React.js, Node.js, Express.js and MySQL. Implemented user authentication and authorisation for secure login and account creation, plus modules for lost/found item reporting, item tracking and automated item matching to improve recovery rates.',
        link: 'https://github.com/shishird-03/Lost-and-Found-DBMS-Project',
    },
];
