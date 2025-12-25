import React from 'react';
import { LayoutDashboard, Briefcase, Brain, FileText, ChartLine, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'cases', label: 'Active Cases', icon: Briefcase },
  { id: 'ai-panel', label: 'AI Knowledge Panel', icon: Brain },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'analytics', label: 'Analytics', icon: ChartLine },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <div className="fixed left-0 top-[73px] bottom-0 w-64 backdrop-blur-2xl bg-gradient-to-b from-black/40 to-black/20 border-r border-white/10 z-40">
      <div className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => onNavigate(item.id)}
              className={`
                relative w-full flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-300 group
                ${isActive 
                  ? 'bg-gradient-to-r from-red-600/20 to-red-600/10 border border-red-600/50 text-white' 
                  : 'hover:bg-white/5 border border-transparent text-gray-400 hover:text-gray-200'
                }
              `}
            >
              {/* Active indicator strip */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-r-full shadow-lg shadow-red-500/50"
                />
              )}
              
              <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-red-500' : 'group-hover:text-red-400'}`} />
              <span className={`transition-all duration-300 ${isActive ? '' : ''}`}>
                {item.label}
              </span>
              
              {/* Hover glow */}
              {!isActive && (
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-600/5 to-transparent" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Bottom gradient decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
}