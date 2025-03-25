import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import clsx from "clsx";
import { links } from '../library/data';

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>("Home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
                        setActiveSection(sectionName);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-100px 0px",
            }
        );

        // Observe all sections
        links.forEach((link) => {
            const element = document.querySelector(link.hash);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (hash: string, name: string) => {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(name);
    };
    

    return (
        <header className="z-[999] relative">
            <motion.div className="fixed top-4 sm:top-6 left-1/2 h-[3rem] sm:h-[3.5rem] w-[95%] sm:w-[90%] max-w-[40rem] rounded-full border border-white border-opacity-40 
            bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 header-bg"
                initial={{y: -100, x: "-50%", opacity: 0}}
                animate={{y: 0, x: "-50%", opacity: 1}}
            ></motion.div>

            <nav className="flex fixed top-4 sm:top-6 left-1/2 h-[3rem] sm:h-[3.5rem] -translate-x-1/2 w-[95%] sm:w-[90%] max-w-[40rem]">
                <ul className="flex items-center justify-evenly w-full px-4 sm:px-4 text-[0.9rem] sm:text-[1.1rem] text-gray-500">
                    {links.map(link => (
                        <motion.li 
                            className="flex items-center justify-center relative" 
                            key={link.hash}
                            initial={{y: -100, opacity:0}} 
                            animate={{y:0, opacity:1}}
                        >
                            <a 
                                className={clsx("flex w-full items-center justify-center px-2 sm:px-4 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-100", {
                                    "text-gray-950 dark:text-white": activeSection === link.name,
                                })}
                                href={link.hash}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(link.hash, link.name);
                                }}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span 
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800/50"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30
                                        }}
                                    ></motion.span>
                                )}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

        </header>
    );
}
