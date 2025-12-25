import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`
        relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02]
        border border-white/10 rounded-2xl shadow-2xl
        ${hover ? 'transition-all duration-300 hover:border-red-600/50 hover:shadow-red-600/20 hover:shadow-xl cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
