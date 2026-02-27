import React from 'react';
import { motion } from 'framer-motion';
export function Background() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0
      }}>

      {/* Base obsidian */}
      <div
        className="absolute inset-0"
        style={{
          background: '#0a0a0f'
        }} />


      {/* Purple orb - top left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 620,
          height: 620,
          top: '-12%',
          left: '-10%',
          background:
          'radial-gradient(circle, rgba(124,58,237,0.24) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -50, 30, -20, 0],
          scale: [1, 1.08, 0.96, 1.04, 1]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />


      {/* Blue orb - top right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          top: '5%',
          right: '-6%',
          background:
          'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        animate={{
          x: [0, -50, 20, -30, 0],
          y: [0, 40, -30, 50, 0],
          scale: [1, 0.95, 1.06, 0.98, 1]
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3
        }} />


      {/* Emerald orb - bottom center */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 460,
          height: 460,
          bottom: '8%',
          left: '33%',
          background:
          'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 50%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          x: [0, 60, -40, 20, 0],
          y: [0, -30, 50, -40, 0],
          scale: [1, 1.1, 0.94, 1.05, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 7
        }} />


      {/* Violet orb - bottom left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 380,
          height: 380,
          bottom: '-5%',
          left: '8%',
          background:
          'radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          x: [0, -30, 50, -20, 0],
          y: [0, 40, -20, 30, 0],
          scale: [1, 1.04, 0.97, 1.06, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 12
        }} />


      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
          'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
          'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
          'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          opacity: 0.35
        }} />


      {/* Radial vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
          'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(0,0,0,0.55) 100%)'
        }} />

    </div>);

}