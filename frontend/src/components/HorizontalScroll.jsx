import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const panelCount = Array.isArray(children) ? children.length : 1;
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(panelCount - 1) * 100}%`]);

  return (
    <>
      {/* Desktop: horizontal scroll */}
      <div ref={containerRef} style={{ height: `${panelCount * 100}vh` }} className="relative hidden md:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex h-full">
            {(Array.isArray(children) ? children : [children]).map((child, i) => (
              <div key={i} className="w-screen h-screen shrink-0">
                {child}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col">
        {(Array.isArray(children) ? children : [children]).map((child, i) => (
          <div key={i} className="min-h-screen w-full">
            {child}
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizontalScroll;
