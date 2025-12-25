import React from 'react';
import { GlassCard } from './GlassCard';
import { TrendingUp, TriangleAlert, Sparkles, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const metrics = [
  {
    title: 'Total Active Cases',
    value: '247',
    change: '+12%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/10',
  },
  {
    title: 'Cases at Risk',
    value: '18',
    change: '+3 today',
    trend: 'warning',
    icon: TriangleAlert,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    title: 'AI Suggestions Today',
    value: '342',
    change: '+28%',
    trend: 'up',
    icon: Sparkles,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    title: 'Compliance Score',
    value: '94.2%',
    change: '+1.2%',
    trend: 'up',
    icon: Shield,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
];

const recentActivity = [
  { id: 1, case: 'INS-2024-4892', action: 'AI suggestion applied', time: '2 min ago', status: 'success' },
  { id: 2, case: 'INS-2024-4891', action: 'Risk level updated to HIGH', time: '15 min ago', status: 'warning' },
  { id: 3, case: 'INS-2024-4890', action: 'Document uploaded', time: '32 min ago', status: 'info' },
  { id: 4, case: 'INS-2024-4889', action: 'Case assigned to reviewer', time: '1 hour ago', status: 'info' },
  { id: 5, case: 'INS-2024-4888', action: 'Compliance check passed', time: '2 hours ago', status: 'success' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <GlassCard key={metric.title} hover className="p-6">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${metric.bgColor} backdrop-blur-xl`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    metric.trend === 'up' ? 'bg-green-500/20 text-green-400' : 
                    metric.trend === 'warning' ? 'bg-yellow-500/20 text-yellow-400' : 
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-3xl mb-2 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  {metric.value}
                </h3>
                <p className="text-sm text-gray-500">{metric.title}</p>
              </motion.div>
            </GlassCard>
          );
        })}
      </div>

      {/* Recent Activity */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-gray-200">Recent Activity</h3>
          <button className="text-sm text-red-500 hover:text-red-400 transition-colors">
            View All
          </button>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-400 shadow-lg shadow-green-400/50' :
                  activity.status === 'warning' ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' :
                  'bg-gray-400 shadow-lg shadow-gray-400/50'
                }`} />
                <div>
                  <p className="text-gray-300">{activity.action}</p>
                  <p className="text-sm text-gray-500">Case: {activity.case}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6">
          <h4 className="text-gray-400 mb-4">Processing Speed</h4>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl text-white">2.4</span>
            <span className="text-gray-500 mb-1">sec avg</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-red-600 to-red-500"
            />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h4 className="text-gray-400 mb-4">AI Accuracy</h4>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl text-white">96.8</span>
            <span className="text-gray-500 mb-1">% confidence</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '96.8%' }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
            />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h4 className="text-gray-400 mb-4">User Satisfaction</h4>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl text-white">4.9</span>
            <span className="text-gray-500 mb-1">/ 5.0 rating</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '98%' }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-full bg-gradient-to-r from-green-500 to-green-400"
            />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}