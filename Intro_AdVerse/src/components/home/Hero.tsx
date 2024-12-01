import React from 'react';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600/20 backdrop-blur-sm mb-8">
            <Sparkles className="h-5 w-5 text-indigo-400 mr-2" />
            <span className="text-indigo-200">AI-Powered Ad Creation</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Advertising</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Create stunning advertisements in minutes with our AI-powered platform. Perfect for brands of all sizes.
          </p>
          
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}