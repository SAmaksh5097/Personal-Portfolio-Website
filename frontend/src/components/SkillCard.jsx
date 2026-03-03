import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ icon, name, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group relative bg-brand-white/60 backdrop-blur-sm border border-brand-muted/25
        rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center
        w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
        hover:border-brand-warm/40 hover:shadow-lg hover:shadow-brand-warm/5
        transition-all duration-300 cursor-default"
    >
      <div className="relative mb-1.5 sm:mb-2">
        <img
          src={icon}
          alt={name}
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-60 group-hover:opacity-100
            transition-opacity duration-300"
        />
      </div>
      <span className="text-brand-dark/60 group-hover:text-brand-dark text-[11px] sm:text-xs md:text-sm
        font-medium tracking-wide transition-colors duration-300 text-center">
        {name}
      </span>
    </motion.div>
  )
}

export default SkillCard
