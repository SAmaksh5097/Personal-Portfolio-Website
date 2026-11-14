import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const JourneySection = () => (
  <section className="relative min-h-screen flex items-center px-5 pt-24 pb-32 sm:px-12 md:px-20 md:pt-16 md:pb-28 overflow-hidden">
    <div className="absolute -top-24 -right-20 h-96 w-96 rounded-full bg-brand-warm/10 blur-3xl pointer-events-none" />
    <div className="relative z-10 max-w-6xl w-full mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3"><div className="h-px w-10 bg-brand-warm" /><span className="text-brand-warm text-xs sm:text-sm font-medium tracking-widest uppercase">The journey</span></div>
        <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-brand-dark">Learning by building.</h2>
      </motion.div>

      <div className="grid md:grid-cols-[0.78fr_1.22fr] gap-4 sm:gap-5">
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-brand-muted/35 bg-white/65 p-5 sm:p-6 shadow-xl shadow-brand-dark/[0.03]">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-warm/15 text-brand-dark"><GraduationCap size={20} /></span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-dark/40">Education</span>
          </div>
          <div className="mt-6 border-l border-brand-warm/60 pl-5">
            <span className="text-xs font-medium text-brand-warm">Currently studying</span>
            <h3 className="mt-2 text-xl font-semibold text-brand-dark">Computer Science</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/55">Final year engineering undergraduate</p>
          </div>
          <p className="mt-7 rounded-xl bg-brand-light/60 px-4 py-3 text-xs leading-relaxed text-brand-dark/50">Guru Gobind Singh Indraprastha University, New Delhi</p>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="rounded-3xl border border-brand-muted/35 bg-white/65 p-5 sm:p-6 shadow-xl shadow-brand-dark/[0.03]">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-warm/15 text-brand-dark"><BriefcaseBusiness size={19} /></span>
            <div><span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-dark/40">Experience</span></div>
          </div>
          <div className="mt-4 rounded-2xl border border-brand-muted/30 bg-brand-white/80 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                
                <h4 className="mt-1 text-xl font-semibold text-brand-dark">SDE Intern</h4>
                <p className="mt-1 text-sm text-brand-dark/55">Sun Life Global Solutions</p>
              </div>
              <span className="w-fit rounded-full border border-brand-muted/40 bg-white/80 px-3 py-1.5 text-xs font-medium text-brand-dark/50">July 2026 – Present</span>
            </div>
            <div className="mt-4 border-t border-brand-muted/30 pt-4">
              <h5 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-dark/40">What I worked on</h5>
              <ul className="mt-2.5 space-y-2">
                {[
                  'Built a .NET/C# app for a 10+ member finance team with server-to-local sync and audit history; split the monolithic UI into 8 modular views and improved usability.',
                  'Automated web workflows with Selenium, cutting task time from 45 minutes to under 5 and saving 15+ team hours weekly.',
                  'Partnered with senior developers and BSAs on requirements, POCs, testing, UAT, and deployment for 2 internal apps.',
                ].map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-dark/55">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-warm" />
                    <span><span className="mr-2 text-[10px] font-semibold tracking-wider text-brand-warm/80">0{index + 1}</span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  </section>
);

export default JourneySection;
