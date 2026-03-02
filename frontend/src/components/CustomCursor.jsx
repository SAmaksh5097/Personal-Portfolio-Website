import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);

    const handleLinkEnter = () => setIsHoveringLink(true);
    const handleLinkLeave = () => setIsHoveringLink(false);

    const addLinkListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', handleLinkEnter);
        el.addEventListener('mouseleave', handleLinkLeave);
      });
    };

    addLinkListeners();
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      observer.disconnect();
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkEnter);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Inner dot — hidden when hovering a link */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-brand-warm rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
          scale: isHoveringLink ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250 }}
      />

      {/* Outer ring — expands with arrow icon on link hover */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center border border-brand-warm"
        animate={{
          x: isHoveringLink ? mousePos.x - 28 : mousePos.x - 16,
          y: isHoveringLink ? mousePos.y - 28 : mousePos.y - 16,
          width: isHoveringLink ? 56 : 32,
          height: isHoveringLink ? 56 : 32,
          backgroundColor: isHoveringLink ? 'rgba(201, 181, 156, 0.15)' : 'rgba(217, 207, 199, 0.2)',
          borderColor: isHoveringLink ? '#C9B59C' : 'rgba(201, 181, 156, 0.5)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      >
        <AnimatePresence>
          {isHoveringLink && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <ArrowUpRight size={20} className="text-brand-warm" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;