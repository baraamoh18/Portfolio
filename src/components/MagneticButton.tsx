import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
export function MagneticButton({ children, className = '', ...props }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });
  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };
  const reset = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      style={{
        x: springX,
        y: springY
      }}
      className={`relative cursor-pointer ${className}`}
      {...props}>

      {children}
    </motion.div>);

}