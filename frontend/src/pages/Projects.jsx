import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/data'

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-24">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight">
          Projects
        </h1>
        <motion.div
          className="mt-4 h-px w-16 bg-brand-warm/60"
          initial={{ width: 0 }}
          animate={{ width: 74 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
