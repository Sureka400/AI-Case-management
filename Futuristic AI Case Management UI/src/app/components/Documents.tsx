import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { FileText, Download, Eye, Search, Upload, File, Image, FileCog } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const documents = [
  { id: 1, name: 'Property Damage Assessment Report.pdf', type: 'PDF', size: '2.4 MB', uploaded: '2 hours ago', category: 'Assessment', status: 'verified' },
  { id: 2, name: 'Insurance Policy Document.pdf', type: 'PDF', size: '1.8 MB', uploaded: '1 day ago', category: 'Policy', status: 'verified' },
  { id: 3, name: 'Incident Photos.zip', type: 'ZIP', size: '15.2 MB', uploaded: '2 days ago', category: 'Evidence', status: 'verified' },
  { id: 4, name: 'Witness Statement Form.docx', type: 'DOCX', size: '145 KB', uploaded: '2 days ago', category: 'Legal', status: 'pending' },
  { id: 5, name: 'Compliance Checklist.xlsx', type: 'XLSX', size: '89 KB', uploaded: '3 days ago', category: 'Compliance', status: 'verified' },
  { id: 6, name: 'Third Party Liability Report.pdf', type: 'PDF', size: '3.1 MB', uploaded: '4 days ago', category: 'Legal', status: 'verified' },
];

export function Documents() {
  const [previewDoc, setPreviewDoc] = useState<typeof documents[0] | null>(null);

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="w-5 h-5 text-red-400" />;
      case 'ZIP':
        return <FileCog className="w-5 h-5 text-yellow-400" />;
      case 'DOCX':
        return <File className="w-5 h-5 text-blue-400" />;
      case 'XLSX':
        return <File className="w-5 h-5 text-green-400" />;
      default:
        return <File className="w-5 h-5 text-gray-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Assessment': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Policy': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Evidence': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Legal': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Compliance': 'bg-green-500/20 text-green-400 border-green-500/30',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <div className="space-y-6">
      {/* Header with Upload */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-white mb-2">Document Repository</h2>
          <p className="text-gray-400">Manage and review case documents</p>
        </div>
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-red-600/30 flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload Documents
        </button>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 p-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search documents by name, type, or category..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all duration-300"
            />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Documents</p>
              <p className="text-3xl text-white">{documents.length}</p>
            </div>
            <div className="p-3 rounded-xl bg-red-500/10">
              <FileText className="w-8 h-8 text-red-400" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <GlassCard hover className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {getFileIcon(doc.type)}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs border ${
                  doc.status === 'verified' 
                    ? 'bg-green-500/20 text-green-400 border-green-500/50' 
                    : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                }`}>
                  {doc.status}
                </span>
              </div>

              <h4 className="text-white mb-2 line-clamp-2 min-h-[3rem]">{doc.name}</h4>
              
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 rounded-full text-xs border ${getCategoryColor(doc.category)}`}>
                  {doc.category}
                </span>
                <span className="text-xs text-gray-500">{doc.size}</span>
              </div>

              <p className="text-sm text-gray-500 mb-4">Uploaded {doc.uploaded}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="flex-1 px-4 py-2 bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/50 text-gray-300 hover:text-red-400 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Preview</span>
                </button>
                <button className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-lg transition-all duration-300">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Document Preview Modal */}
      <AnimatePresence>
        {previewDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setPreviewDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <GlassCard className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl text-white mb-2">{previewDoc.name}</h3>
                    <p className="text-gray-400">Document Preview</p>
                  </div>
                  <button
                    onClick={() => setPreviewDoc(null)}
                    className="text-gray-400 hover:text-red-400 transition-colors text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Mock Preview Content */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 min-h-[400px]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                      <div className="p-4 rounded-xl bg-red-500/10">
                        {getFileIcon(previewDoc.type)}
                      </div>
                      <div>
                        <h4 className="text-lg text-white mb-1">Property Damage Assessment</h4>
                        <p className="text-sm text-gray-400">Page 1 of 8</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-gray-300">
                      <p className="leading-relaxed">
                        <span className="bg-yellow-500/30 text-yellow-300 px-1">Assessment Summary:</span> Comprehensive property damage evaluation conducted on December 20, 2024, for the claim filed by Acme Corp regarding structural damage to commercial property located at 123 Business Avenue.
                      </p>
                      <p className="leading-relaxed">
                        The assessment team identified significant damage to the main structure, including foundation cracks, water damage to interior walls, and compromised electrical systems. Total estimated repair costs: <span className="text-red-400">$87,500</span>.
                      </p>
                      <p className="leading-relaxed">
                        Based on policy section 4.2.1, this claim qualifies for extended liability coverage review. <span className="bg-yellow-500/30 text-yellow-300 px-1">Recommended action: Approve with standard deductible.</span>
                      </p>
                      <p className="leading-relaxed text-sm text-gray-500 italic">
                        Note: All highlighted sections have been flagged by AI analysis for compliance review.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-red-600/30">
                    Download Full Document
                  </button>
                  <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-xl transition-all duration-300">
                    Share
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
