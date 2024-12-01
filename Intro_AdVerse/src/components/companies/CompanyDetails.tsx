import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChatInterface } from '../ai/ChatInterface';
import { AdCarousel } from './AdCarousel';

interface CompanyDetailsProps {
  company: {
    name: string;
    color: string;
    metrics: {
      campaigns: number;
      engagement: string;
    };
  };
  onClose: () => void;
}

export const CompanyDetails = ({ company, onClose }: CompanyDetailsProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-[90vw] max-w-6xl h-[80vh] flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold">{company.name} Campaigns</h2>
        </div>

        <div className="flex-1 overflow-hidden flex">
          <AdCarousel company={company} />
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};