import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative bg-brand-white/60 backdrop-blur-sm border border-brand-muted/25
        rounded-2xl overflow-hidden hover:border-brand-warm/40 hover:shadow-xl
        hover:shadow-brand-warm/8 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover object-top transition-transform duration-700
            group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark/20 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-brand-dark tracking-tight
          group-hover:text-brand-dark/90 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-brand-dark/55 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-3 pt-2 border-t border-brand-muted/20">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-brand-dark/50
              hover:text-brand-dark transition-colors duration-300 group/link"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <span className="w-px h-4 bg-brand-muted/30" />
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-brand-dark/50
              hover:text-brand-dark transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
