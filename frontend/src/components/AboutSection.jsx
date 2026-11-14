import { motion } from 'framer-motion';
import profileImg from '../assets/pic.jpeg';
import { skillGroups, about } from '../assets/data';

const AboutSection = () => (
  <section className="relative min-h-screen flex items-center px-5 pt-24 pb-32 sm:px-12 md:px-20 md:pb-28 overflow-hidden" id="about">
    <div className="absolute inset-0 pointer-events-none">
      <motion.div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-warm/10 blur-3xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-brand-muted/15 blur-3xl" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} />
    </div>

    <div className="relative z-10 grid md:grid-cols-[0.8fr_1.2fr] items-center gap-10 md:gap-16 max-w-6xl w-full mx-auto">
      <div className="flex flex-col items-center md:items-start gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative">
          <div className="absolute -inset-3 rounded-full border border-brand-muted/40" />
          <div className="absolute -inset-6 rounded-full border border-brand-muted/20" />
          <img src={profileImg} alt="Samaksh" className="w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-2 border-brand-light shadow-lg" />
        </motion.div>
        <div className="flex items-center gap-3"><div className="h-px w-10 bg-brand-warm" /><span className="text-brand-warm text-xs sm:text-sm font-medium tracking-widest uppercase">About Me</span></div>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-brand-dark/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-md text-center md:text-left">{about}</motion.p>
      </div>

      <div className="w-full rounded-3xl border border-brand-muted/35 bg-brand-white/55 backdrop-blur-sm p-5 sm:p-7 md:p-8 shadow-xl shadow-brand-dark/[0.03]">
        <div className="mb-6">
          <span className="text-brand-warm text-xs font-semibold tracking-[0.2em] uppercase">My toolkit</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-brand-dark">Skills & tools</h2>
          <p className="mt-2 text-sm text-brand-dark/50">The technologies I use to design, build, and ship projects.</p>
        </div>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-2.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-dark/40">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group inline-flex items-center gap-2 rounded-xl border border-brand-muted/30 bg-white/70 px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-warm/70 hover:shadow-md hover:shadow-brand-warm/10">
                    <img src={skill.icon} alt="" loading="lazy" className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                    <span className="text-xs sm:text-sm font-medium text-brand-dark/65 group-hover:text-brand-dark">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
