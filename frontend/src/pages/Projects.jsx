import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/data'

const Projects = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-5 sm:px-8 md:px-12 pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-28 -right-32 h-80 w-80 rounded-full bg-brand-warm/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10 sm:mb-14"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mt-3 text-4xl sm:text-6xl font-semibold text-brand-dark tracking-tight">Projects<span className="text-brand-warm">.</span></h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-brand-dark/55">A collection of things I’ve designed, built, and learned from — spanning full stack apps, automation, and machine learning.</p>
          </div>
          
        </div>
      </motion.div>

      {/* Project Grid */}
      <div className="relative grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
