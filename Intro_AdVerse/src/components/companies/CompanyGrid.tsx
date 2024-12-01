import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { CompanyDetails } from './CompanyDetails';

const companies = [
  { name: 'Coca-Cola', color: 'bg-red-600', metrics: { campaigns: 156, engagement: '8.2M' } },
  { name: 'Google', color: 'bg-blue-600', metrics: { campaigns: 234, engagement: '12.5M' } },
  { name: 'Amazon', color: 'bg-orange-600', metrics: { campaigns: 189, engagement: '9.8M' } },
];

export const CompanyGrid = () => {
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Companies</h2>
          
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search companies..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <button
              key={company.name}
              onClick={() => setSelectedCompany(company)}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden text-left"
            >
              <div className={`h-32 ${company.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="absolute inset-0 p-6">
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <div className="flex gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Campaigns</p>
                    <p className="text-lg font-semibold">{company.metrics.campaigns}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Engagement</p>
                    <p className="text-lg font-semibold">{company.metrics.engagement}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCompany && (
        <CompanyDetails
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </>
  );
};