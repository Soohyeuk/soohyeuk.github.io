import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import proj4 from "../assets/proj4.jpg";

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
import reactIcon from '../assets/React.svg';
import typescriptIcon from '../assets/TypeScript.svg';
import circleCiIcon from '../assets/CircleCI.svg';
import ibmMainframeIcon from '../assets/ibm.svg';
import canvaIcon from '../assets/Canva.svg';
import javaIcon from '../assets/Java.svg';
import nextjsIcon from '../assets/Next.js.svg';
import prismaIcon from '../assets/Prisma.svg';
import awsIcon from '../assets/AWS.svg';

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
      title: "Image to Insurance Claim AI Generator",
      description:
        "I integrated OpenAI to genearate insurance claim from images of their properties lost from California fire. I worked on Google Cloud Platform, FastAPI, and MySQL.",
      tags: ["React", "JavaScript", "TailwindCSS", "FastAPI", "Python", "GCP", "OpenAI", "MySQL", "Git"],
      link: "https://github.com/jeffersonnle/image_to_insurance",
      imageUrl: proj1,
    },
    {
      title: "Fantasy Sports League Web",
      description:
        "I developed a fantasy sports website for Basketball, Football, and Baseball. I used Flask, Python, and MySQL to scrap players' stats and create a league for users to join and compete.",
      tags: ["React", "JavaScript", "CSS", "Flask", "Python", "MySQL", "Git"],
      link: "https://github.com/Soohyeuk/fantasy_sport",
      imageUrl: proj2,
    },
    {
      title: "Python Template Repository",
      description:
        "I created a Python template repository with CI/CD pipeline and Unit/Integration/End-to-End tests. Allowed each component to be a uv package.",
      tags: ["Python", "uv", "mypy", "ruff", "pytest", "coverage", "CircleCI", "Git"],
      link: "https://github.com/Shounak-Ghosh/ospsd-hw1-python",
      imageUrl: proj3,
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
        company: "Civic",
        position: "Software Engineer Intern",
        startDate: "May. 2025",
        endDate: "Jul. 2025",
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
    {
        company: "Power Changes Lives",
        position: "Software Engineer Intern",
        startDate: "Mar. 2024",
        endDate: "May. 2024",
        description: "Migrated a legacy PHP service to React, improving website quality by 50% based on user feedback. Designed and implemented a CI/CD pipeline using GitHub and CircleCI, ensuring automated unit testing for each component. Applied expertise in Software Development, TypeScript, Git, and CI/CD to enhance code quality and deployment efficiency.",
        tags: [
            { icon: reactIcon, name: "React" },
            { icon: typescriptIcon, name: "TypeScript" },
            { icon: circleCiIcon, name: "CircleCI" },
            { icon: gitIcon, name: "Git" },
        ],
    },
    {
        company: "IBM",
        position: "Z Ambassador",
        startDate: "Dec. 2023",
        endDate: "May. 2024",
        description: "Earned the IBM Z Xplore Concepts Badge, demonstrating proficiency in mainframe technology. Collaborating with IBM and my university to promote mainframe adoption and awareness.",
        tags: [
            { icon: ibmMainframeIcon, name: "IBM Mainframe" },
            { icon: canvaIcon, name: "Canva" },
            { icon: javaIcon, name: "Java" },
        ],
    },
] as const;