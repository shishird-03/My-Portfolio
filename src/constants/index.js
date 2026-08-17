import { meta, shopify, starbucks, tesla, teralogo, logo } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
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
            "Supported and maintained internal IT infrastructure and Smart city implementation processs",
            "Participated in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: " Summer Intern ",
        company_name: "India Space Lab",
        icon: logo,
        iconBg: "#383E56",
        date: "June 2025 - July 2025",
        points: [
            "Developed a model or a protope on CANSAT and CUBESAT as part of the internship program.",
            "Implemented responsive design on Electronic Circuits and PCB Design modules using Easy EDA software.",
            "Participated in hands on session with satellite communication systems and ground station operations including Rocketry design and fundamentals on image processing.", 
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
        name: 'ACE Website- Assocaition of Computer Engineers',
        description: "Contributing to the development of ACE’s official platform using the T3 Stack Next js, TypeScript, tRPC, Prisma. Designed and implemented responsive Blog and Team pages focused on clean UI and optimized user experience. Practicing version control with Git/GitHub to maintain efficient collaboration within the development team.",
        link: 'https://github.com/shishird-03/ace',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'InterviewOne.ai',
        description: 'Developing full-stack Next.js 16 application with TypeScript, integrating Google Gemini AI for real-time interview feedback analysis. Building voice-enabled interview system using VAPI SDK with Firebase Authentication and Firestore database integration. Integrating Firebase Admin SDK for secure user session management and real-time data synchronization across devices.',
        link: '###',
    },
    {
        //iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Personal Portfolio Website',
        description: 'Designing and developing an interactive 3D personal portfolio website to showcase projects and skills through immersiveWebGL experiences Implementing dynamic 3D scenes and animations using Three.js and React Three Fiber with smooth transitions via Framer Motion Enhancing UI responsiveness and performance with Tailwind CSS and optimized React component structure.',
        link: '###',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Agrigo- Waste Mangaement Platform',
        description: ' Selected among Top 60 teams at Hackfest 2025 (in collaboration with Palo Alto Networks, Rakuten, Inflow Technologies and Niveous Solutions) for building an innovative agri-tech solution. Developed a scalable platform enabling farmers to sell agricultural waste directly to biofuel industries, creating a sustainable business model connecting farmers and industrial buyers. Applied full-stack development skills (React, Node.js, Express.js, MongoDB) to design, implement, and integrate critical system components.',
        link: 'https://github.com/shishird-03/Hackfest25-38',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Lost and Found DBMS',
        description: 'Designed and developed a full-stack web application for managing lost and found items using React.js, Node.js,Express.js, and MySQL.Implemented user authentication and authorization to enable secure login and account creation.Built modules for lost/found item reporting, item tracking, and automated item matching to improve recovery efficiency',
        link: 'https://github.com/shishird-03/Lost-and-Found-DBMS-Project',
    },
   /* {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }*/
];