'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, type HTMLMotionProps } from 'framer-motion';

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
  motionProps?: HTMLMotionProps<'span'>;
}

export default function WordRotate({
  words,
  duration = 2500,
  className = '',
  motionProps = {
    initial: { opacity: 0, y: '100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100%' },
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    // pb/-mb gives descenders (g, y, p) room inside the overflow-hidden box
    <span className="inline-flex justify-center overflow-hidden pb-[0.18em] -mb-[0.18em] align-bottom leading-[1.15]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={`whitespace-nowrap ${className}`}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
