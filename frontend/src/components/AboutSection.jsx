import { motion } from 'framer-motion';
import profileImg from '../assets/logo.png';
import SkillCard from './SkillCard';

const AboutSection = () => {
    const skills = [
        {
            name: 'Java',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
            name: 'Express.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        },
        {
            name: 'MongoDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
    ]

  return (
    <section
      className="relative h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 overflow-hidden"
      id="about"
    >
      {/* Background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-brand-warm/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-brand-muted/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 max-w-6xl w-full">
        {/* Left — Photo + About text */}
        <div className="flex flex-col items-center md:items-start gap-6 md:flex-1">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-brand-muted/40" />
              <div className="absolute -inset-6 rounded-full border border-brand-muted/20" />
              <img
                src={profileImg}
                alt="Samaksh Arzare"
                className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover
                  border-2 border-brand-light shadow-lg"
              />
            </div>
          </motion.div>

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-10 bg-brand-warm" />
            <span className="text-brand-warm text-xs sm:text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-brand-dark/55 text-sm sm:text-base md:text-lg leading-relaxed max-w-md text-center md:text-left"
          >
            I'm a Computer Science student passionate about building clean,
            performant, and user-friendly applications. I love turning complex
            problems into simple, elegant solutions.
          </motion.p>
        </div>

        {/* Right — Skills Grid */}
        <div className="md:flex-1 w-full">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-brand-dark/40 text-xs font-medium tracking-widest uppercase mb-4 text-center md:text-left"
          >
            Tech Stack
          </motion.h3>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 place-items-center">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
