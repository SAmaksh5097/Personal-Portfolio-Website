import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const name = "Samaksh";

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 sm:px-12 md:px-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient orb */}
        <motion.div
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-brand-muted/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-warm/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Signature SVG */}
        <div className="absolute top-1/3 left-8 w-full max-w-[500px] opacity-15">
          <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M10 100 Q 50 10, 100 100 T 200 100 T 300 100 T 400 100 T 500 100"
              stroke="#C9B59C"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: 'easeInOut', delay: 1 }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start max-w-5xl">
        {/* Greeting line */}

        {/* Hi + Wave */}
        <div className="flex items-baseline gap-3 sm:gap-5">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl font-bold leading-none text-brand-dark tracking-tight"
          >
            Hi
          </motion.h1>
          <motion.span
            initial={{ y:80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration:0.7, ease:'easeInOut'}}
          className="text-6xl sm:text-7xl md:text-8xl origin-bottom-right inline-block">
            👋🏻
          </motion.span>
          
        </div>

        {/* I'm Name — letter-by-letter */}
        <div className="mt-2 overflow-hidden">
          <div className="flex flex-wrap items-baseline">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl font-bold leading-none text-brand-dark tracking-tight mr-4 sm:mr-6"
            >
              I'm
            </motion.span>
            <span className="flex">
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 8}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-7xl sm:text-8xl md:text-9xl font-bold leading-none text-brand-warm tracking-tight"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;