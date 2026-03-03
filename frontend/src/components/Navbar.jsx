import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import { LucideMenu, LucideX } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'About Me', to: '/', hash: '#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Me', to: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (link) => {
    setMenuOpen(false)
    if (link.hash) {
      // If already on homepage, just scroll to section
      if (location.pathname === '/') {
        document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Navigate to homepage first, then scroll after render
        navigate('/')
        setTimeout(() => {
          document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      navigate(link.to)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-brand-white/80 border-b border-brand-muted/30"
    >
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-1 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to={'/'}>
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1"
            >
            <img src={logo} alt="logo" className="w-16 border border-brand-muted/40 rounded-full" />
            </motion.div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            >
              <button
                onClick={() => handleNavClick(link)}
                className="relative text-brand-dark/80 font-inter text-lg tracking-wide
                  hover:text-brand-dark transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px] after:bg-brand-warm after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <LucideX size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <LucideMenu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-brand-white/95 backdrop-blur-xl border-t border-brand-muted/20"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 30, opacity: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-brand-dark/80 font-inter tracking-wide
                      hover:text-brand-dark transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
