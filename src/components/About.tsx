import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeIcon,
  BrainIcon,
  ZapIcon } from
'lucide-react';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
function BentoTile({
  children,
  className = '',
  style = {}




}: {children: React.ReactNode;className?: string;style?: React.CSSProperties;}) {
  return (
    <motion.div
      className={`relative rounded-2xl p-6 overflow-hidden group ${className}`}
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        ...style
      }}
      whileHover={{
        scale: 1.01
      }}
      transition={{
        duration: 0.2
      }}>

      {children}
    </motion.div>);

}
const SKILLS = [
{
  label: 'TypeScript',
  level: 95
},
{
  label: 'TailwindCSS',
  level: 85
},
{
  label: 'React',
  level: 92
},
{
  label: 'ReactRouter',
  level: 80
},
{
  label: 'Redux',
  level: 65
}];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-16">

          <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About</h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* Bio tile — spans 2 cols */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="lg:col-span-2">

            <BentoTile className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <CodeIcon size={18} className="text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  The Builder
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm a frontend engineer dedicated to building seamless digital experiences. With a focus on React, TypeScript, and Tailwind CSS, I love turning complex requirements into intuitive, performant, and accessible interfaces. For me, software development is just another form of design and logic—a philosophy that bleeds into the rest of my life.
              </p>
              
            </BentoTile>
          </motion.div>

          {/* Engineering Roots tile — Blueprint grid hover */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}>

            <BentoTile className="h-full min-h-[200px]">
              {/* Animated Blueprint Grid */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}>

                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                    'linear-gradient(180deg, transparent, rgba(59,130,246,0.05) 50%, transparent)'
                  }}
                  animate={{
                    y: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }} />

              </div>

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <ZapIcon size={18} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  CS Roots
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                I began my studies at Suez Canal University in 2023. This academic background in computer and information sciences built my core understanding of software systems, giving me the solid foundation I now use to build clean, effective React applications. .
              </p>
            </BentoTile>
          </motion.div>

          {/* Chess tile */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}>

            <BentoTile className="h-full min-h-[200px]">
              {/* Chess knight interaction */}
              <div className="relative h-12 mb-4 group-hover:scale-110 transition-transform duration-500">
                <motion.div
                  className="absolute text-3xl z-10 select-none"
                  initial={{
                    x: 0,
                    y: 0
                  }}
                  whileHover={{
                    x: 20,
                    y: -20,
                    scale: 1.2
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                  }}>

                  ♞
                </motion.div>
                <motion.div
                  className="absolute text-2xl text-slate-600 top-0 left-6 select-none"
                  initial={{
                    opacity: 0
                  }}
                  whileHover={{
                    opacity: 0,
                    scale: 0.5,
                    x: 10,
                    y: -10
                  }}
                  animate={{
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.3
                  }}>

                  ♙
                </motion.div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                Chess Enthusiast
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Rated 1500+ on Chess.com. Chess taught me to think three moves
                ahead — a habit that bleeds into system design and debugging.
              </p>
            </BentoTile>
          </motion.div>

          {/* Skills tile */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="lg:col-span-2">

            <BentoTile className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <BrainIcon size={18} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Core Skills
                </h3>
              </div>
              <div className="space-y-3">
                {SKILLS.map((skill, i) =>
                <div key={skill.label} className="flex items-center gap-4">
                    <span className="text-sm text-slate-400 w-24 shrink-0">
                      {skill.label}
                    </span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                        'linear-gradient(90deg, #7c3aed, #3b82f6)'
                      }}
                      initial={{
                        width: 0
                      }}
                      whileInView={{
                        width: `${skill.level}%`
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }} />

                    </div>
                    <span className="text-xs text-slate-600 w-8 text-right">
                      {skill.level}%
                    </span>
                  </div>
                )}
              </div>
            </BentoTile>
          </motion.div>

        </div>
      </div>
    </section>);

}
