import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const CHARS = '!<>-_\\/[]{}—=+*^?#________';
export function DecoderText({
  text,
  delay = 0



}: {text: string;delay?: number;}) {
  const [output, setOutput] = useState('');
  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    const startAnimation = () => {
      interval = setInterval(() => {
        setOutput(
          text.
          split('').
          map((letter, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).
          join('')
        );
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    };
    const timer = setTimeout(startAnimation, delay);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [text, delay]);
  return <motion.span className="inline-block">{output || text}</motion.span>;
}