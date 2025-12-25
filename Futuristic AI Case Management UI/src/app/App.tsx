import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ActiveCases } from './components/ActiveCases';
import { AIKnowledgePanel } from './components/AIKnowledgePanel';
import { Documents } from './components/Documents';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';
import { motion, AnimatePresence } from 'motion/react';

const pageLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  cases: 'Active Cases',
  'ai-panel': 'AI Knowledge Panel',
  documents: 'Documents',
  analytics: 'Analytics',
  settings: 'Settings',
};

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'cases':
        return <ActiveCases />;
      case 'ai-panel':
        return <AIKnowledgePanel />;
      case 'documents':
        return <Documents />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Red glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        {/* Yellow glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/20 via-black/40 to-black/60" />
      </div>

      {/* Top Navigation */}
      <TopNav currentPage={pageLabels[currentPage]} hasNotifications={true} />

      {/* Sidebar */}
      <Sidebar activePage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content Area */}
      <main className="ml-64 mt-[73px] min-h-screen p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating particle effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
