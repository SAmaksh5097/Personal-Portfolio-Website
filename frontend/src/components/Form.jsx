import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const inputClasses = `w-full border-b border-brand-muted/40 py-3 px-1
    text-brand-dark placeholder:text-brand-dark/30 text-sm
    focus:border-brand-warm focus:outline-none transition-colors duration-300`

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 w-full"
    >
      <div className="relative">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          className={inputClasses}
          required
        />
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          className={inputClasses}
          required
        />
      </div>

      <div className="relative">
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          className={`${inputClasses} resize-none`}
          required
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center justify-center gap-2 mt-2 py-3 px-8
          bg-brand-dark text-brand-white text-sm font-medium tracking-wide
          rounded-full hover:bg-brand-dark/90 transition-colors duration-300 w-fit"
      >
        <span>Submit</span>
      </motion.button>
    </motion.form>
  )
}

export default Form
