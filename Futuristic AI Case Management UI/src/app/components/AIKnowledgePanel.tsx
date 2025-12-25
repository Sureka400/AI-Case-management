import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Brain, ChevronDown, ChevronUp, Sparkles, CircleCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const suggestions = [
  {
    id: 1,
    title: 'Policy Section 4.2.1 - Liability Coverage',
    description: 'This case may qualify for extended liability coverage based on the damage assessment.',
    confidence: 94,
    policy: 'General Liability Policy - Section 4.2.1',
    details: 'According to Section 4.2.1, property damage claims exceeding $50,000 with documented third-party involvement qualify for extended coverage review. The current case meets these criteria with estimated damages of $87,500 and confirmed third-party liability.',
  },
  {
    id: 2,
    title: 'Compliance Requirement - Documentation',
    description: 'Additional documentation required to meet federal compliance standards.',
    confidence: 87,
    policy: 'Federal Compliance Guidelines - Doc Requirements',
    details: 'Federal regulations require submission of certified damage assessment reports within 48 hours of claim filing. Current submission is missing the certified assessor signature and timestamp verification.',
  },
  {
    id: 3,
    title: 'Risk Assessment - Fraud Indicators',
    description: 'Low fraud risk detected. Recommend standard processing workflow.',
    confidence: 92,
    policy: 'Risk Management Protocol - Fraud Detection',
    details: 'AI analysis of claim patterns, documentation consistency, and historical claimant data indicates a fraud probability of only 8%. All documentation matches expected patterns for legitimate claims in this category.',
  },
  {
    id: 4,
    title: 'Similar Case Resolution - Precedent Found',
    description: 'Found 3 similar cases with successful resolutions averaging 14 days.',
    confidence: 89,
    policy: 'Case Resolution Database - Historical Patterns',
    details: 'Analysis of cases INS-2024-3421, INS-2024-2187, and INS-2023-8934 shows similar damage patterns and circumstances. Average resolution time was 14.3 days with an approval rate of 100%.',
  },
];

export function AIKnowledgePanel() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [appliedSuggestions, setAppliedSuggestions] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const applySuggestion = (id: number) => {
    setAppliedSuggestions(prev => new Set(prev).add(id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <GlassCard className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-700/10 border border-purple-500/30">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl text-white mb-1">AI Knowledge Assistant</h2>
            <p className="text-gray-400">Real-time policy suggestions and compliance guidance</p>
          </div>
          <div className="text-right">
            <div className="text-3xl text-purple-400">342</div>
            <p className="text-sm text-gray-500">Suggestions Today</p>
          </div>
        </div>
      </GlassCard>

      {/* Active Case Context */}
      <GlassCard className="p-6 border-l-4 border-l-yellow-500">
        <div className="flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-yellow-400 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg text-white mb-2">Currently Analyzing: INS-2024-4892</h3>
            <p className="text-gray-400 mb-4">Acme Corp - Property Damage Claim</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2 }}
                  className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                />
              </div>
              <span className="text-sm text-yellow-400">75% analyzed</span>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Suggestions List */}
      <div className="space-y-4">
        <h3 className="text-xl text-gray-300">AI Recommendations</h3>
        
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={suggestion.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <GlassCard 
              className={`overflow-hidden transition-all duration-300 ${
                appliedSuggestions.has(suggestion.id) ? 'border-green-500/50' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-white">{suggestion.title}</h4>
                      {appliedSuggestions.has(suggestion.id) && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                          <CircleCheck className="w-3 h-3" />
                          Applied
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{suggestion.description}</p>
                    <p className="text-xs text-gray-500">{suggestion.policy}</p>
                  </div>
                  
                  <button
                    onClick={() => toggleExpand(suggestion.id)}
                    className="ml-4 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    {expandedId === suggestion.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Confidence Bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-gray-500">Confidence</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${suggestion.confidence}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${
                        suggestion.confidence >= 90 
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' 
                          : suggestion.confidence >= 80 
                          ? 'bg-gradient-to-r from-yellow-600 to-yellow-500' 
                          : 'bg-gradient-to-r from-orange-500 to-orange-400'
                      }`}
                    />
                  </div>
                  <span className={`text-sm ${
                    suggestion.confidence >= 90 ? 'text-yellow-400' : 'text-orange-400'
                  }`}>
                    {suggestion.confidence}%
                  </span>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedId === suggestion.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 pt-4 mt-4"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {suggestion.details}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => applySuggestion(suggestion.id)}
                          disabled={appliedSuggestions.has(suggestion.id)}
                          className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                            appliedSuggestions.has(suggestion.id)
                              ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
                              : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30'
                          }`}
                        >
                          {appliedSuggestions.has(suggestion.id) ? 'Applied' : 'Apply Suggestion'}
                        </button>
                        <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-lg transition-all duration-300">
                          View Policy
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-yellow-500/5" />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}