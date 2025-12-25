import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { User, Bell, Lock, Palette, Globe, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Settings() {
  const [notifications, setNotifications] = useState({
    caseUpdates: true,
    aiSuggestions: true,
    riskAlerts: true,
    systemUpdates: false,
  });

  const [preferences, setPreferences] = useState({
    autoApplyAI: false,
    emailDigest: true,
    twoFactor: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
        enabled ? 'bg-red-600' : 'bg-gray-600'
      }`}
    >
      <motion.div
        layout
        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-lg"
        animate={{ x: enabled ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-white mb-2">Settings</h2>
        <p className="text-gray-400">Manage your account and application preferences</p>
      </div>

      {/* Profile Section */}
      <GlassCard className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <User className="w-6 h-6 text-red-400" />
          <h3 className="text-xl text-white">Profile Settings</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="Sarah Mitchell"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 focus:outline-none focus:border-red-500/50 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="sarah.mitchell@caseai.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 focus:outline-none focus:border-red-500/50 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Role</label>
            <input
              type="text"
              defaultValue="Senior Case Manager"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 focus:outline-none focus:border-red-500/50 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Department</label>
            <input
              type="text"
              defaultValue="Claims & Compliance"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 focus:outline-none focus:border-red-500/50 transition-all duration-300"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-red-600/30">
            Save Changes
          </button>
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-xl transition-all duration-300">
            Cancel
          </button>
        </div>
      </GlassCard>

      {/* Notifications */}
      <GlassCard className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Bell className="w-6 h-6 text-yellow-400" />
          <h3 className="text-xl text-white">Notification Preferences</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
            <div>
              <p className="text-gray-300 mb-1">Case Updates</p>
              <p className="text-sm text-gray-500">Receive notifications when cases are updated</p>
            </div>
            <ToggleSwitch
              enabled={notifications.caseUpdates}
              onChange={() => toggleNotification('caseUpdates')}
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
            <div>
              <p className="text-gray-300 mb-1">AI Suggestions</p>
              <p className="text-sm text-gray-500">Get notified about new AI recommendations</p>
            </div>
            <ToggleSwitch
              enabled={notifications.aiSuggestions}
              onChange={() => toggleNotification('aiSuggestions')}
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
            <div>
              <p className="text-gray-300 mb-1">Risk Alerts</p>
              <p className="text-sm text-gray-500">Critical alerts for high-risk cases</p>
            </div>
            <ToggleSwitch
              enabled={notifications.riskAlerts}
              onChange={() => toggleNotification('riskAlerts')}
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
            <div>
              <p className="text-gray-300 mb-1">System Updates</p>
              <p className="text-sm text-gray-500">Maintenance and feature announcements</p>
            </div>
            <ToggleSwitch
              enabled={notifications.systemUpdates}
              onChange={() => toggleNotification('systemUpdates')}
            />
          </div>
        </div>
      </GlassCard>

      {/* Security & Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-6 h-6 text-red-400" />
            <h3 className="text-xl text-white">Security</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
              <div>
                <p className="text-gray-300 mb-1">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <ToggleSwitch
                enabled={preferences.twoFactor}
                onChange={() => togglePreference('twoFactor')}
              />
            </div>

            <button className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-300 text-left">
              <p className="text-gray-300 mb-1">Change Password</p>
              <p className="text-sm text-gray-500">Update your account password</p>
            </button>

            <button className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-300 text-left">
              <p className="text-gray-300 mb-1">Session Management</p>
              <p className="text-sm text-gray-500">View and manage active sessions</p>
            </button>
          </div>
        </GlassCard>

        {/* Preferences */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Palette className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl text-white">Preferences</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
              <div>
                <p className="text-gray-300 mb-1">Auto-Apply AI Suggestions</p>
                <p className="text-sm text-gray-500">Automatically apply high-confidence AI recommendations</p>
              </div>
              <ToggleSwitch
                enabled={preferences.autoApplyAI}
                onChange={() => togglePreference('autoApplyAI')}
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
              <div>
                <p className="text-gray-300 mb-1">Daily Email Digest</p>
                <p className="text-sm text-gray-500">Receive daily summary of case activities</p>
              </div>
              <ToggleSwitch
                enabled={preferences.emailDigest}
                onChange={() => togglePreference('emailDigest')}
              />
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <label className="block text-gray-300 mb-3">Language</label>
              <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 focus:outline-none focus:border-red-500/50 transition-all duration-300">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <label className="block text-gray-300 mb-3">Time Zone</label>
              <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 focus:outline-none focus:border-red-500/50 transition-all duration-300">
                <option value="pst">Pacific Time (PST)</option>
                <option value="mst">Mountain Time (MST)</option>
                <option value="cst">Central Time (CST)</option>
                <option value="est">Eastern Time (EST)</option>
              </select>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Appearance Preview */}
      <GlassCard className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Globe className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl text-white">Appearance Preview</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-black to-gray-900 border border-white/10">
            <div className="w-full h-32 rounded-lg bg-gradient-to-br from-red-600/20 to-transparent border border-red-500/30 mb-3" />
            <p className="text-sm text-gray-400 text-center">Dark Theme (Active)</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 opacity-50 cursor-not-allowed">
            <div className="w-full h-32 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100 mb-3" />
            <p className="text-sm text-gray-500 text-center">Light Theme (Coming Soon)</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 opacity-50 cursor-not-allowed">
            <div className="w-full h-32 rounded-lg bg-gradient-to-br from-blue-900 to-blue-950 mb-3" />
            <p className="text-sm text-gray-500 text-center">High Contrast (Coming Soon)</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
