import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Search, ListFilter, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const cases = [
  { id: 'INS-2024-4892', client: 'Acme Corp', type: 'Property Damage', priority: 'high', status: 'In Review', assignee: 'John Davis', updated: '2m ago', confidence: 94 },
  { id: 'INS-2024-4891', client: 'TechStart Inc', type: 'Liability Claim', priority: 'critical', status: 'Pending', assignee: 'Sarah Chen', updated: '15m ago', confidence: 87 },
  { id: 'INS-2024-4890', client: 'Global Industries', type: 'Auto Insurance', priority: 'medium', status: 'Investigation', assignee: 'Mike Johnson', updated: '32m ago', confidence: 92 },
  { id: 'INS-2024-4889', client: 'Smith & Partners', type: 'Health Insurance', priority: 'low', status: 'Approved', assignee: 'Emma Wilson', updated: '1h ago', confidence: 98 },
  { id: 'INS-2024-4888', client: 'Metro Finance', type: 'Fraud Investigation', priority: 'critical', status: 'Urgent Review', assignee: 'David Lee', updated: '2h ago', confidence: 76 },
  { id: 'INS-2024-4887', client: 'Ocean Logistics', type: 'Cargo Claim', priority: 'high', status: 'In Review', assignee: 'Lisa Anderson', updated: '3h ago', confidence: 89 },
];

export function ActiveCases() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const getPriorityBadge = (priority: string) => {
    const styles = {
      critical: 'bg-red-500/20 text-red-400 border-red-500/50 shadow-red-500/20',
      high: 'bg-red-500/10 text-red-300 border-red-500/30',
      medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-yellow-500/20',
      low: 'bg-gray-500/20 text-gray-400 border-gray-500/50',
    };
    return styles[priority as keyof typeof styles] || styles.low;
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      'Urgent Review': 'bg-red-500/20 text-red-400',
      'Pending': 'bg-yellow-500/20 text-yellow-400',
      'In Review': 'bg-blue-500/20 text-blue-400',
      'Investigation': 'bg-purple-500/20 text-purple-400',
      'Approved': 'bg-green-500/20 text-green-400',
    };
    return styles[status] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <GlassCard className="p-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search cases by ID, client, or type..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all duration-300"
            />
          </div>
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 flex items-center gap-2">
            <ListFilter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>
      </GlassCard>

      {/* Cases Table */}
      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 py-4 text-sm text-gray-400">Case ID</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400">Client</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400">Type</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400">Priority</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400">Status</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400">Assignee</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400">AI Score</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400">Updated</th>
                <th className="text-left px-6 py-4 text-sm text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {cases.map((caseItem, index) => (
                <motion.tr
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedCase(caseItem.id)}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer group"
                >
                  <td className="px-6 py-4">
                    <span className="text-red-400">{caseItem.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-300">{caseItem.client}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-400">{caseItem.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs border ${getPriorityBadge(caseItem.priority)}`}>
                      {caseItem.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusBadge(caseItem.status)}`}>
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-400">{caseItem.assignee}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden w-16">
                        <div 
                          className={`h-full ${caseItem.confidence >= 90 ? 'bg-green-500' : caseItem.confidence >= 80 ? 'bg-yellow-400' : 'bg-red-500'}`}
                          style={{ width: `${caseItem.confidence}%` }}
                        />
                      </div>
                      <span className={`text-xs ${caseItem.confidence >= 90 ? 'text-green-400' : caseItem.confidence >= 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {caseItem.confidence}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-500 text-sm">{caseItem.updated}</span>
                  </td>
                  <td className="px-6 py-4">
                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-red-400 transition-colors" />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Case Detail Panel */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedCase(null)}
          >
            <GlassCard 
              className="max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-white mb-2">{selectedCase}</h3>
                  <p className="text-gray-400">Case Details</p>
                </div>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Client Name</p>
                    <p className="text-gray-200">Acme Corp</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Case Type</p>
                    <p className="text-gray-200">Property Damage</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Priority Level</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs border bg-red-500/20 text-red-400 border-red-500/50">
                      HIGH
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Current Status</p>
                    <p className="text-gray-200">In Review</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-gray-300 mb-4">AI Analysis</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Risk Assessment</span>
                      <span className="text-yellow-400">Medium Risk</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Recommended Action</span>
                      <span className="text-green-400">Approve with conditions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Confidence Level</span>
                      <span className="text-green-400">94%</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-red-600/30">
                    Take Action
                  </button>
                  <button className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-xl transition-all duration-300">
                    View Full Report
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}