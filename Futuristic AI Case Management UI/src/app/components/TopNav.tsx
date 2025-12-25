import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { motion } from 'motion/react';

interface TopNavProps {
  currentPage: string;
  hasNotifications?: boolean;
}

export function TopNav({ currentPage, hasNotifications = false }: TopNavProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/30">
              <div className="text-xl font-bold text-white">A</div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg tracking-tight bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              CaseAI
            </h1>
            <p className="text-xs text-gray-500">Knowledge Assistant</p>
          </div>
        </div>

        {/* Page Title */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <h2 className="text-gray-300">{currentPage}</h2>
        </motion.div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            {hasNotifications && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
            )}
          </motion.button>

          {/* Settings */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-300"
          >
            <Settings className="w-5 h-5 text-gray-400" />
          </motion.button>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="text-right">
              <p className="text-sm text-gray-300">Sarah Mitchell</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center border-2 border-white/20 shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
