import React from 'react';
import { Menu, Search, Bell, Settings, HelpCircle } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/30 border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <Menu className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Companies</a>
                <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Create</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-600" />
            <Bell className="h-5 w-5 text-gray-600" />
            <Settings className="h-5 w-5 text-gray-600" />
            <HelpCircle className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}