import { motion } from "framer-motion";
import { projectsData } from '../library/data'
import React from 'react';
const Project = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[75rem] mx-auto project-container">
      {projectsData.map((project, index: number) => (
        <motion.div 
          key={index} 
          className="flex flex-col bg-gray-200/60 dark:bg-gray-700/50 rounded-xl p-8 cursor-pointer backdrop-blur-sm border border-gray-300/20 dark:border-gray-700/20 shadow-md"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">
            {project.title}
          </h3>

          <motion.div 
            className="w-full aspect-[3/2] rounded-xl overflow-hidden mb-4"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="object-cover w-full h-full"
              />
            </a>
          </motion.div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-base text-left">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 w-full md:max-w-[65%]">
            {project.tags.map((tag: string, tagIndex: number) => (
              <motion.span 
                key={tagIndex} 
                className="px-3 py-1 bg-gray-600/95 dark:bg-gray-900/90 rounded-xl text-sm text-gray-100 dark:text-gray-200 project-tag"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Add specific dark mode overrides */}
      <style>
        {`
          html.dark .project-container .dark\\:bg-gray-700\\/50 {
            background-color: rgba(55, 65, 81, 0.5) !important;
          }
          
          html.dark .project-container .dark\\:text-gray-100 {
            color: #f3f4f6 !important;
          }
          
          html.dark .project-container .dark\\:text-gray-400 {
            color: #9ca3af !important;
          }
          
          html.dark .project-container .project-tag.dark\\:bg-gray-900\\/90 {
            background-color: rgba(17, 24, 39, 0.9) !important;
          }
          
          html.dark .project-container .project-tag.dark\\:text-gray-200 {
            color: #e5e7eb !important;
          }
        `}
      </style>
    </div>
  )
}

export default Project
