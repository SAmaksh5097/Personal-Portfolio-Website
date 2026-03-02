import React from 'react'
import { motion } from 'framer-motion'
import Socials from './Socials'

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="left-0 right-0 z-40 bg-brand-white/80 backdrop-blur-xl border-t border-brand-muted/30"
      id='footer'
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 sm:py-3 gap-2 sm:gap-0">
        {/* Left — Socials */}
        <Socials />

        {/* Right — Name & Year */}
        <div className="flex items-center gap-2 text-brand-dark/50 text-xs sm:text-sm">
          <span className="hidden sm:inline">&copy;</span>
          <span>{new Date().getFullYear()}</span>
          <span className="text-brand-muted">|</span>
          <span className="font-medium text-brand-dark/80">Samaksh Arzare</span>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
