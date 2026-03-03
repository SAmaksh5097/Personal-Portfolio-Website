import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { details } from '../assets/data'
import Form from '../components/Form'

const iconMap = {
  Mail: Mail,
  Address: MapPin,
  Phone: Phone,
}

const Contact = () => {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight">
          Let's Work Together
        </h1>
        <motion.div
          className="mt-4 h-px w-16 bg-brand-warm/60"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >

          <div className="flex flex-col gap-5">
            {details.map((detail, index) => {
              const Icon = iconMap[detail.key] || Mail
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-muted/15
                    flex items-center justify-center group-hover:bg-brand-warm/15
                    transition-colors duration-300">
                    <Icon className="w-4.5 h-4.5 text-brand-dark/40 group-hover:text-brand-warm
                      transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="text-xl font-medium text-brand-dark">
                      {detail.key}
                    </span>
                    <p className="text-sm text-brand-dark/75 mt-0.5">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="bg-brand-white/60 backdrop-blur-sm border border-brand-muted/25
            rounded-2xl p-6 sm:p-8 hover:border-brand-warm/30 transition-colors duration-500"
        >
          <Form />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
