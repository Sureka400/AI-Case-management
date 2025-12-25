import React from 'react';
import { GlassCard } from './GlassCard';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, TrendingDown, TriangleAlert, CircleCheck } from 'lucide-react';
import { motion } from 'motion/react';

const caseVolumeData = [
  { month: 'Jan', cases: 185, resolved: 172 },
  { month: 'Feb', cases: 201, resolved: 189 },
  { month: 'Mar', cases: 223, resolved: 215 },
  { month: 'Apr', cases: 198, resolved: 192 },
  { month: 'May', cases: 247, resolved: 231 },
  { month: 'Jun', cases: 265, resolved: 248 },
];

const riskDistribution = [
  { name: 'Low Risk', value: 156, color: '#6b7280' },
  { name: 'Medium Risk', value: 73, color: '#eab308' },
  { name: 'High Risk', value: 18, color: '#dc2626' },
];

const aiPerformance = [
  { metric: 'Accuracy', score: 96.8 },
  { metric: 'Speed', score: 94.2 },
  { metric: 'Compliance', score: 98.1 },
  { metric: 'User Trust', score: 92.5 },
];

const processingTime = [
  { category: 'Auto Claims', avgTime: 2.4, target: 3.0 },
  { category: 'Property', avgTime: 4.1, target: 5.0 },
  { category: 'Liability', avgTime: 3.8, target: 4.5 },
  { category: 'Health', avgTime: 1.9, target: 2.5 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* KPI Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-green-500/10">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">+12.5%</span>
          </div>
          <h3 className="text-3xl text-white mb-2">265</h3>
          <p className="text-sm text-gray-400">Cases This Month</p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-yellow-500/10">
              <TriangleAlert className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400">-5.2%</span>
          </div>
          <h3 className="text-3xl text-white mb-2">18</h3>
          <p className="text-sm text-gray-400">High Risk Cases</p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-red-500/10">
              <CircleCheck className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">+8.3%</span>
          </div>
          <h3 className="text-3xl text-white mb-2">93.5%</h3>
          <p className="text-sm text-gray-400">Resolution Rate</p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-purple-500/10">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">+15.7%</span>
          </div>
          <h3 className="text-3xl text-white mb-2">3.2 days</h3>
          <p className="text-sm text-gray-400">Avg Resolution Time</p>
        </GlassCard>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Case Volume Trend */}
        <GlassCard className="p-6">
          <h3 className="text-xl text-white mb-6">Case Volume Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={caseVolumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(10, 10, 10, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
                labelStyle={{ color: '#f5f5f5' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cases" 
                stroke="#dc2626" 
                strokeWidth={3}
                dot={{ fill: '#dc2626', r: 5 }}
                activeDot={{ r: 7 }}
                name="Total Cases"
              />
              <Line 
                type="monotone" 
                dataKey="resolved" 
                stroke="#eab308" 
                strokeWidth={3}
                dot={{ fill: '#eab308', r: 5 }}
                activeDot={{ r: 7 }}
                name="Resolved Cases"
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Risk Distribution */}
        <GlassCard className="p-6">
          <h3 className="text-xl text-white mb-6">Risk Distribution</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 10, 10, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(20px)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {riskDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-gray-400">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Performance Metrics */}
        <GlassCard className="p-6">
          <h3 className="text-xl text-white mb-6">AI Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={aiPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis type="number" domain={[0, 100]} stroke="#9ca3af" />
              <YAxis type="category" dataKey="metric" stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(10, 10, 10, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
              />
              <Bar dataKey="score" fill="#eab308" radius={[0, 8, 8, 0]}>
                {aiPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.score >= 95 ? '#eab308' : '#dc2626'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Processing Time Comparison */}
        <GlassCard className="p-6">
          <h3 className="text-xl text-white mb-6">Avg Processing Time vs Target</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={processingTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="category" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(10, 10, 10, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                }}
              />
              <Legend />
              <Bar dataKey="avgTime" fill="#dc2626" radius={[8, 8, 0, 0]} name="Actual Time (days)" />
              <Bar dataKey="target" fill="#6b7280" radius={[8, 8, 0, 0]} name="Target (days)" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Performance Summary */}
      <GlassCard className="p-6">
        <h3 className="text-xl text-white mb-6">System Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 border-4 border-green-500/30 mb-4">
              <div>
                <div className="text-4xl text-green-400">98%</div>
                <div className="text-xs text-gray-400 mt-1">Uptime</div>
              </div>
            </div>
            <p className="text-gray-400">System Reliability</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-4 border-yellow-500/30 mb-4">
              <div>
                <div className="text-4xl text-yellow-400">342</div>
                <div className="text-xs text-gray-400 mt-1">Today</div>
              </div>
            </div>
            <p className="text-gray-400">AI Suggestions</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 border-4 border-red-500/30 mb-4">
              <div>
                <div className="text-4xl text-red-400">2.4s</div>
                <div className="text-xs text-gray-400 mt-1">Average</div>
              </div>
            </div>
            <p className="text-gray-400">Response Time</p>
          </motion.div>
        </div>
      </GlassCard>
    </div>
  );
}