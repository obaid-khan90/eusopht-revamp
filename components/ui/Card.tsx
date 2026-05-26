'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-2xl border border-border bg-surface p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
