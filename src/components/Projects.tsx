import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import todoListCover from '../../assets/todoList.png';
import simpleSiteCover from '../../assets/js1.png';
import simpleJsSiteCover from '../../assets/js2.png';
import {
  XIcon,
  ArrowUpRightIcon,
  GithubIcon,
  StarIcon,
  ExternalLinkIcon } from
'lucide-react';
type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  color: string;
  glowColor: string;
  year: string;
  featured: boolean;
  coverImage: string;
};
const PROJECTS: Project[] = [
{
  title: 'To-Do List',
  description:
  'A simple To-Do list website with simple auth and simple login and signuip',
  tags: ['TypeScript', 'Tailwind', 'ReactRouter', 'React'],
  href: 'https://to-do-app-jade-pi.vercel.app/',
  color: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
  glowColor: 'rgba(124, 58, 237, 0.15)',
  year: '2025',
  featured: false,
  coverImage: todoListCover
},
{
  title: 'Simple Site',
  description:
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores maxime commodi eum!',
  tags: ['HTML', 'CSS', 'JAVASCRIPT'],
  href: 'https://github.com',
  color: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
  glowColor: 'rgba(14, 165, 233, 0.15)',
  year: '2024',
  featured: true,
  coverImage: simpleSiteCover
},
{
  title: 'Simple Js Site',
  description:
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores maxime commodi eum!',
  tags: ['HTML', 'CSS', 'JAVASCRIPT'],
  href: 'https://github.com',
  color: 'linear-gradient(135deg, #10b981, #059669)',
  glowColor: 'rgba(16, 185, 129, 0.15)',
  year: '2024',
  featured: false,
  coverImage: simpleJsSiteCover
}];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
// Abstract thumbnail generator — creates a unique visual per project using its color
function ProjectThumbnail({ project }: {project: Project;}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: 160
      }}>

      <img
        src={project.coverImage}
        alt={`${project.title} cover`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

      {/* Overlay for legibility and atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
          'linear-gradient(to bottom, rgba(10,10,18,0.18) 0%, rgba(10,10,18,0.34) 45%, rgba(10,10,18,0.75) 100%)'
        }} />


      {/* Accent glow */}
      <div
        className="absolute"
        style={{
          width: 320,
          height: 180,
          bottom: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          background: `radial-gradient(circle, ${project.glowColor.replace('0.15', '0.3')} 0%, transparent 70%)`,
          filter: 'blur(14px)'
        }} />


      {/* Bottom fade into card body */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10"
        style={{
          background:
          'linear-gradient(to bottom, transparent, rgba(10,10,18,0.7))'
        }} />


      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`
        }} />

    </div>);

}
function ProjectCard({ project, index }: {project: Project;index: number;}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({
    x: 0,
    y: 0
  });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${isHovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s ease'
      }}
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-60px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.015,
        y: -2
      }}>

      {/* Mouse-tracking glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 420,
          height: 420,
          left: glowPos.x - 210,
          top: glowPos.y - 210,
          background: `radial-gradient(circle, ${project.glowColor} 0%, transparent 65%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          zIndex: 1
        }} />


      {/* Thumbnail */}
      <ProjectThumbnail project={project} />

      {/* Card body */}
      <div
        className="relative p-5 flex flex-col flex-1"
        style={{
          zIndex: 2
        }}>

        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {project.featured &&
            <span
              className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(124,58,237,0.12)',
                border: '1px solid rgba(124,58,237,0.22)',
                color: 'rgba(167,139,250,0.9)'
              }}>

                <StarIcon size={9} />
                Featured
              </span>
            }
            <span
              className="text-xs font-mono"
              style={{
                color: 'rgba(71,85,105,0.7)'
              }}>

              {project.year}
            </span>
          </div>
          <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg"
            style={{
              color: 'rgba(100,116,139,0.6)'
            }}
            whileHover={{
              color: 'white',
              background: 'rgba(255,255,255,0.08)'
            }}
            onClick={(e) => e.stopPropagation()}>

            <ExternalLinkIcon size={14} />
          </motion.a>
        </div>

        {/* Title */}
        <h3
          className="text-base font-semibold mb-1.5 transition-colors duration-200"
          style={{
            color: isHovered ? 'white' : 'rgba(241,245,249,0.88)'
          }}>

          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{
            color: 'rgba(100,116,139,0.8)'
          }}>

          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) =>
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(148,163,184,0.75)'
            }}>

              {tag}
            </span>
          )}
        </div>
      </div>
    </motion.div>);

}
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="work" className="relative py-28 px-6 z-10">
      <LayoutGroup>
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
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Projects
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map((project, i) =>
            <ProjectCard key={project.title} project={project} index={i} />
            )}
          </div>
        </div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {selectedProject &&
          <>
              {/* Backdrop */}
              <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]" />


              {/* Modal wrapper */}
              <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                <motion.div
                layoutId={`card-${selectedProject.title}`}
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl pointer-events-auto"
                style={{
                  background: 'rgba(10,10,15,0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(24px)'
                }}>

                  {/* Close button */}
                  <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white transition-colors z-20"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>

                    <XIcon size={18} />
                  </button>

                  <motion.div
                  layoutId={`content-${selectedProject.title}`}
                  className="p-10 md:p-14">

                    {/* Ambient glow */}
                    <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${selectedProject.glowColor}, transparent 60%)`
                    }} />


                    {/* Color bar */}
                    <div
                    className="w-12 h-1.5 rounded-full mb-6 relative z-10"
                    style={{
                      background: selectedProject.color
                    }} />


                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg text-slate-300 mb-8 relative z-10 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                      {selectedProject.tags.map((tag) =>
                    <span
                      key={tag}
                      className="text-sm px-3 py-1.5 rounded-full text-slate-200 font-medium"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.12)'
                      }}>

                          {tag}
                        </span>
                    )}
                    </div>

                    {/* Architecture placeholder */}
                    <div
                    className="h-44 w-full rounded-xl mb-8 flex items-center justify-center text-slate-500 text-sm relative z-10"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)'
                    }}>

                      [ Architecture Diagram / Deep Dive Mockup ]
                    </div>

                    {/* CTA */}
                    <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold relative z-10 hover:scale-105 transition-transform text-white"
                    style={{
                      background: selectedProject.color
                    }}>

                      View Source <ArrowUpRightIcon size={16} />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </>
          }
        </AnimatePresence>
      </LayoutGroup>
    </section>);

}
