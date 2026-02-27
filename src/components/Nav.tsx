import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // If near the bottom of the page, always highlight Contact
      const nearBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        setActiveSection('contact');
        return;
      }
      const midpoint = window.innerHeight / 2;
      const sections = ['work', 'about', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= midpoint && rect.bottom >= midpoint) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 pointer-events-none"
      initial={{
        y: -20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.1
      }}>

      {/* Outer glow ring — visible on scroll */}
      <div className="relative pointer-events-auto">
        {/* Aurora glow behind pill */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
            'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(59,130,246,0.2), rgba(16,185,129,0.15))',
            filter: 'blur(12px)',
            transform: 'scale(1.15)'
          }}
          animate={{
            opacity: scrolled ? 0.6 : 0.2
          }}
          transition={{
            duration: 0.5
          }} />


        {/* Main pill */}
        <motion.div
          className="relative flex items-center gap-1 px-2 py-2 rounded-full"
          animate={{
            background: scrolled ?
            'rgba(8, 8, 14, 0.75)' :
            'rgba(255,255,255,0.05)',
            borderColor: scrolled ?
            'rgba(255,255,255,0.14)' :
            'rgba(255,255,255,0.09)',
            boxShadow: scrolled ?
            '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)' :
            '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
          }}
          transition={{
            duration: 0.4
          }}
          style={{
            border: '1px solid rgba(255,255,255,0.09)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)'
          }}>

          {/* Top shimmer line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px rounded-full pointer-events-none"
            style={{
              background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)'
            }} />


          {[
          {
            label: 'Work',
            id: 'work'
          },
          {
            label: 'About',
            id: 'about'
          },
          {
            label: 'Contact',
            id: 'contact'
          }].
          map(({ label, id }) =>
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            className="relative px-4 py-1.5 text-sm font-medium rounded-full"
            style={{
              color: activeSection === id ? 'white' : 'rgba(148,163,184,0.8)'
            }}
            whileHover={{
              color: 'white'
            }}
            whileTap={{
              scale: 0.94
            }}>

              {activeSection === id &&
            <motion.span
              layoutId="pill-indicator"
              className="absolute inset-0 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 0 12px rgba(124,58,237,0.2)'
              }}
              transition={{
                type: 'spring',
                stiffness: 420,
                damping: 38
              }} />

            }
              <span className="relative z-10">{label}</span>
            </motion.button>
          )}

          {/* Divider */}
          <div
            className="w-px h-4 mx-1 flex-shrink-0"
            style={{
              background: 'rgba(255,255,255,0.1)'
            }} />


          {/* GitHub */}
          <motion.a
            href="https://github.com/baraamoh18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full"
            style={{
              color: 'rgba(148,163,184,0.8)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)'
            }}
            whileHover={{
              color: 'white',
              background: 'rgba(255,255,255,0.1)',
              borderColor: 'rgba(255,255,255,0.16)'
            }}
            whileTap={{
              scale: 0.94
            }}>

            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>);

}