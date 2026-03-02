import React from 'react'
import { motion } from 'framer-motion'
import linkedin from '../assets/icon-linkedin.svg'
import github from '../assets/icon-github.svg'
import codolio from '../assets/icon-codolio.svg'
const Socials = () => {
    const links = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/samaksh-arzare-925779294',
            icon: linkedin,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/SAmaksh5097',
            icon: github,
        },
        {
            name:'Codolio',
            url:'https://codolio.com/SAmaksh5097',
            icon: codolio,
        },
        {
            name:'Resume',
            url:'https://google.com',
            icon: 'https://img.icons8.com/ios-filled/50/000000/resume.png',

        }

    ]

    return (
        <div className="flex items-center gap-2 sm:gap-4">
            {links.map((item, i) => (
                <motion.a
                    key={item.name}
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="group flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg
                        border border-brand-muted/40 bg-brand-light/50
                        hover:border-brand-warm hover:bg-brand-light
                        transition-colors duration-300"
                >
                    <img
                        src={item.icon}
                        alt={item.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="hidden sm:inline text-sm text-brand-dark/70 group-hover:text-brand-dark transition-colors duration-300">
                        {item.name}
                    </span>
                </motion.a>
            ))}
        </div>
    )
}

export default Socials
