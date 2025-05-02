import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData, Experience as ExperienceType } from '../library/data';
import clsx from 'clsx';

const Experience = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
                  <VerticalTimeline 
                lineColor= "#e5e7eb"
                animate={true}
                layout={'1-column-left'}
                className="custom-line before:!w-[2px]"
            >
                {experiencesData.map((item: ExperienceType, index: number) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={false}
                            intersectionObserverProps={{
                                threshold: 0.2,
                                triggerOnce: true,
                            }}
                            contentStyle={{
                                background: isDarkMode ? "#1f2937" : "#ffffff",
                                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                border: "1px solid rgba(0,0,0, 0.05)",
                                textAlign: "left",
                                padding: "1.5rem 2rem",
                                maxWidth: "650px",
                                backdropFilter: "blur(8px)",
                                borderRadius: "1.5rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #ffffff",
                            }}
                            iconStyle={{
                                background: "linear-gradient(-45deg, #2dd4bf, #06b6d4, #4f46e5, #2dd4bf)",
                                backgroundSize: "400% 400%",
                                animation: "gradient 5s ease infinite",
                                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                            }}
                            className="!mb-12"
                        >
                            <h3 className="font-semibold capitalize text-xl text-gray-900 dark:text-gray-100 !mt-0">
                                {item.position}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center !mt-1">
                                <p className="font-medium text-base text-gray-700 dark:text-gray-300">
                                    {item.company}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                                    {item.startDate} - {item.endDate}
                                </p>
                            </div>
                            <p className="!mt-3 !font-normal text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                {item.tags.map((tag, i: number) => (
                                    <div
                                        key={i}
                                        className="group relative"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 p-2 transition-transform hover:scale-110 shadow-sm">
                                            <img
                                                src={tag.icon}
                                                alt={tag.name}
                                                className={clsx({
                                                    "dark:invert": tag.name === "Django" || tag.name === "DRF" || tag.name === "CircleCI"
                                                })}
                                            />
                                        </div>
                                        <div className="absolute top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-0 group-hover:translate-y-1 whitespace-nowrap z-10">
                                            {tag.name}
                                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900 dark:border-b-gray-100"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
    </section>
  )
}

export default Experience
