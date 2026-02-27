import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, MailIcon, ArrowUpIcon } from 'lucide-react';
export function Footer() {
  const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return (
    <footer
      id="contact"
      className="relative py-20 px-6"
      style={{
        zIndex: 10
      }}>

      {/* Divider */}
      <div
        className="max-w-6xl mx-auto mb-16 h-px"
        style={{
          background:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)'
        }} />


      <div className="max-w-6xl mx-auto">
        {/* Contact glass panel */}
        <motion.div
          className="relative rounded-3xl p-10 md:p-14 text-center mb-12 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.35)'
          }}
          initial={{
            opacity: 0,
            y: 24
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}>

          {/* Animated top shimmer */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
            style={{
              width: '40%'
            }}
            animate={{
              background: [
              'linear-gradient(90deg, transparent, rgba(124,58,237,0.55), transparent)',
              'linear-gradient(90deg, transparent, rgba(99,102,241,0.7), transparent)',
              'linear-gradient(90deg, transparent, rgba(59,130,246,0.55), transparent)',
              'linear-gradient(90deg, transparent, rgba(124,58,237,0.55), transparent)']

            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />


          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)'
            }} />


          <div className="relative">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.18)',
                color: 'rgba(167,139,250,0.85)'
              }}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}>

              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: 'rgba(167,139,250,0.8)',
                  boxShadow: '0 0 6px rgba(167,139,250,0.6)'
                }} />

              Open to work
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Let's build something.
            </h2>
            <p
              className="text-base mb-9 max-w-sm mx-auto"
              style={{
                color: 'rgba(100,116,139,0.85)'
              }}>

              Open to frontend roles, freelance projects, and interesting
              collaborations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.a
                href="mailto:baraa@example.com"
                className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold"
                style={{
                  background:
                  'linear-gradient(135deg, rgba(124,58,237,0.85), rgba(99,102,241,0.8))',
                  border: '1px solid rgba(167,139,250,0.25)',
                  color: 'white',
                  boxShadow:
                  '0 0 30px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
                whileHover={{
                  boxShadow:
                  '0 0 55px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
                  scale: 1.03
                }}
                whileTap={{
                  scale: 0.97
                }}>

                <MailIcon size={13} />
                Get in touch
              </motion.a>

              <motion.a
                href="https://github.com/baraamoh18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: 'rgba(255,255,255,0.75)'
                }}
                whileHover={{
                  background: 'rgba(255,255,255,0.09)',
                  borderColor: 'rgba(255,255,255,0.15)',
                  color: 'white'
                }}
                whileTap={{
                  scale: 0.97
                }}>

                <GithubIcon size={13} />
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs font-mono"
            style={{
              color: 'rgba(51,65,85,0.9)'
            }}>

            © 2025 Baraa · Crafted with React & Framer Motion
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/baraamoh18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-200"
              style={{
                color: 'rgba(51,65,85,0.9)'
              }}
              onMouseEnter={(e) =>
              e.currentTarget.style.color = 'rgba(148,163,184,0.85)'
              }
              onMouseLeave={(e) =>
              e.currentTarget.style.color = 'rgba(51,65,85,0.9)'
              }>

              baraamoh18
            </a>

            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(71,85,105,0.7)'
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'white'
              }}
              whileTap={{
                scale: 0.88
              }}
              aria-label="Scroll to top">

              <ArrowUpIcon size={13} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>);

}