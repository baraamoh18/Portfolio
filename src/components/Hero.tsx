import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { DecoderText } from './DecoderText';
import { MagneticButton } from './MagneticButton';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
          'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)'
        }} />


      <div className="max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm text-slate-300"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>

          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">

          <span className="text-slate-400">Hi, I'm </span>
          <span className="text-white">
            <DecoderText text="Baraa" delay={400} />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-slate-400 mb-4 font-light">

          Front-End Engineer & Creative Developer
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">

          I build performant, beautiful digital experiences — combining frontend engineering depth with a developer’s eye for polished, interactive design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 mb-16">

          <MagneticButton>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)'
              }}>

              View My Work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-300 transition-all"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>

              Get In Touch
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-5">

          {[
          {
            icon: GithubIcon,
            href: 'https://github.com/baraamoh18',
            label: 'GitHub'
          },
          {
            icon: LinkedinIcon,
            href: 'https://www.linkedin.com/in/al-baraa-mohamed-830498284/',
            label: 'LinkedIn'
          },
          {
            icon: MailIcon,
            href: 'albaraamoh41@gmail.com.com',
            label: 'Email'
          }].
          map(({ icon: Icon, href, label }) =>
          <MagneticButton key={label}>
              <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-11 h-11 rounded-full text-slate-400 hover:text-white transition-colors"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>

                <Icon size={18} />
              </a>
            </MagneticButton>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">

        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{
            y: [0, 6, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>

          <ArrowDownIcon size={16} />
        </motion.div>
      </motion.div>
    </section>);

}