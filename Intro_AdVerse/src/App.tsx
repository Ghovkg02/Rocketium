import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/home/Hero';
import { CompanyGrid } from './components/companies/CompanyGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <CompanyGrid />
    </div>
  );
}

export default App;