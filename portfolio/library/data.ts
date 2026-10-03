import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import proj4 from "../assets/proj4.jpg";
import proj5 from "../assets/proj5.png";

// Import all skill icons
import djangoIcon from '../assets/Django.svg';
import drfIcon from '../assets/Django REST.svg';
import mysqlIcon from '../assets/MySQL.svg';
import gitIcon from '../assets/Git.svg';
import pythonIcon from '../assets/Python.svg';
import sqlIcon from '../assets/MySQL.svg';
import matplotlibIcon from '../assets/Matplotlib.svg';
import pandasIcon from '../assets/Pandas.svg';
import numpyIcon from '../assets/NumPy.svg';
import typescriptIcon from '../assets/TypeScript.svg';
import nextjsIcon from '../assets/next.js.svg';
import prismaIcon from '../assets/prisma.svg';
import awsIcon from '../assets/aws.svg';
import kotlinIcon from '../assets/Kotlin.svg';

export interface Link {
    name: string;
    hash: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageUrl: string;
}

export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    tags: { icon: string; name: string; }[];
}

export const links: Link[] = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const projectsData: Project[] = [
    {
        title: "CampusPool: Ethereum Crowdfunding Platform",
        description:
            "I developed a Ethereum Crowdfunding Platform that allows stduents to create a campaign for their clubs and fund it. It uses Smart Contracts to distribute Soulbound Tokens for verification and security of the funds.",
        tags: ["React", "TypeScript", "TailwindCSS", "Solidity", "MetaMask", "Supabase", "Git"],
        link: "https://campus-pool.vercel.app/",
        imageUrl: proj5,
    },
    {
        title: "Chef Panda: Video to Recipe with AI",
        description:
            "I developed a website that takes a YouTube video and generates a recipe from it. I used React, JavaScript, TailwindCSS, and FastAPI to create the website. Initially, I am testing it with OpenAI API, but I plan to use a fine-tuned LLM model in the future.",
        tags: ["React", "JavaScript", "CSS", "FastAPI", "Python", "SQLite", "Git"],
        link: "https://chef-panda.vercel.app",
        imageUrl: proj2,
    },
    {
        title: "Gmail AI Client as a uv package",
        description:
            "I created a Gmail AI Client as a uv package. It is a Gmail AI Client that allows you to send and receive emails with AI.",
        tags: ["Python", "uv", "mypy", "ruff", "pytest", "coverage", "CircleCI", "Git"],
        link: "https://github.com/Shounak-Ghosh/ospsd-hw1-python/tree/hw4-integration",
        imageUrl: proj3,
    },
    {
        title: "Image to Insurance Claim AI Generator",
        description:
            "I integrated OpenAI to genearate insurance claim from images of their properties lost from California fire. I worked on Google Cloud Platform, FastAPI, and MySQL.",
        tags: ["React", "JavaScript", "TailwindCSS", "FastAPI", "Python", "GCP", "OpenAI", "MySQL", "Git"],
        link: "https://github.com/jeffersonnle/image_to_insurance",
        imageUrl: proj1,
    },
    {
        title: "httpi: A CLI API Testing Tool",
        description:
            "A passion project while learning Go. It is a CLI tool that allows you to test APIs, like Postman, but in the terminal.",
        tags: ["Go", "Git"],
        link: "https://github.com/Soohyeuk/cli-api-tester",
        imageUrl: proj4,
    },
] as const;

export const experiencesData: Experience[] = [
    {
        company: "Google",
        position: "Software Engineer Intern",
        startDate: "May. 2026",
        endDate: "Aug. 2026",
        description: "Built a live-streaming agentic marketing campaign drafting system for the Google Developer Program, automating 90% of the creation workflow by orchestrating specialized subagents and leveraging existing RPC endpoints. Reduced marketing campaign creation time by 60% and enabled notification deployment across 40+ Google pages collectively reaching 40M users with over 10% click-through rate. Authored an end-to-end design document evaluating 7+ architectural components and implementation approaches for the chat agent across frontend and backend, including A2UI, tool functions, MCP, skill, session persistence, and creation validation, to inform key architecture decisions.",
        tags: [
            { icon: kotlinIcon, name: "Kotlin" },
        ],
    },
    {
        company: "Civic",
        position: "Software Engineer Intern",
        startDate: "May. 2025",
        endDate: "August. 2025",
        description: "Launched template features within the embedded Rich Text Editor to streamline email automation, improving efficiency by 40%; utilized TypeScript, PlateJS, and tRPC server components. Designing and implementing data migration of over 20+ databases deployed in Azure to be consolidated under PostgreSQL using Prisma. Outlined internal tools to incorporate user feedback into ML model predictions for email automation, resulting in a 100% satisfaction rate from coworkers and a 10% improvement in model accuracy; utilized Matplotlib, NumPy, PostgreSQL, Next.js (TypeScript).",
        tags: [
            { icon: nextjsIcon, name: "Next.js" },
            { icon: typescriptIcon, name: "TypeScript" },
            { icon: prismaIcon, name: "Prisma" },
            { icon: awsIcon, name: "AWS" },
        ],
    },
    {
        company: "LikeLion US",
        position: "Backend Developer Intern",
        startDate: "Feb. 2025",
        endDate: "May. 2025",
        description: "Developed scalable API endpoints with Django and DRF, integrating JWT authentication and a meeting scheduler to enhance mentor-student interactions. Designed and optimized a MySQL database to efficiently manage over 10,000 users, ensuring secure and seamless communication.",
        tags: [
            { icon: djangoIcon, name: "Django" },
            { icon: drfIcon, name: "DRF" },
            { icon: mysqlIcon, name: "MySQL" },
            { icon: gitIcon, name: "Git" },
        ],
    },
    {
        company: "Cipher Mining",
        position: "Data Analyst Intern",
        startDate: "May. 2024",
        endDate: "Aug. 2024",
        description: "Extracted and processed 10 million data entries with NumPy, pandas, Spark, and SQL to optimize load balancer performance. Developed visualizations using matplotlib, reducing wasted spending by $1M annually. Conducted 5+ backtests to evaluate forecasting algorithm effectiveness, leveraging expertise in Python, statistical methods, and data visualization.",
        tags: [
            { icon: pythonIcon, name: "Python" },
            { icon: sqlIcon, name: "SQL" },
            { icon: matplotlibIcon, name: "Matplotlib" },
            { icon: pandasIcon, name: "Pandas" },
            { icon: numpyIcon, name: "NumPy" },
            { icon: gitIcon, name: "Git" },
        ],
    },
] as const;