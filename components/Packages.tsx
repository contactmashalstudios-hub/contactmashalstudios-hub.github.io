
import React, { useState } from 'react';
import { Check, ArrowRight, Monitor, Target, Sparkles } from 'lucide-react';
import { ADS_PACKAGES, WEB_PACKAGES } from '../constants';
import { Package } from '../types';

const PackageCard: React.FC<{ pkg: Package; type: 'ads' | 'web' }> = ({ pkg, type }) => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    const subjectSelect = document.getElementById('contact-subject') as HTMLSelectElement;
    const messageArea = document.getElementById('contact-message') as HTMLTextAreaElement;

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Auto-fill the form subject based on package type
      if (subjectSelect) {
        if (type === 'ads') {
          subjectSelect.value = "Meta Ads Management";
        } else {
          subjectSelect.value = "Website Design (Shopify/WP)";
        }
      }

      // Briefly focus the message area to invite input
      setTimeout(() => {
        messageArea?.focus();
      }, 800);
    }
  };

  return (
    <div 
      className={`relative bg-white rounded-[2rem] p-6 lg:p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
        pkg.recommended ? 'border-indigo-600 ring-4 ring-indigo-50/50' : 'border-zinc-100'
      }`}
    >
      {pkg.recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-lg flex items-center gap-2">
          <Sparkles className="w-3 h-3" />
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tight mb-2">{pkg.name}</h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-3xl lg:text-5xl font-black text-zinc-900">{pkg.price}</span>
          <span className="text-zinc-400 font-bold uppercase text-[8px] tracking-widest">Fixed Fee</span>
        </div>
        <p className="text-zinc-500 text-xs font-medium leading-relaxed">{pkg.description}</p>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {pkg.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-1 w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </div>
            <span className="text-zinc-700 text-xs font-bold leading-tight">{feature}</span>
          </div>
        ))}
      </div>

      <a 
        href="#contact"
        onClick={handleBookClick}
        className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all ${
          pkg.recommended 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-100' 
            : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
        }`}
      >
        Book Now
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};

const Packages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ads' | 'web'>('ads');

  const handleCustomClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    const subjectSelect = document.getElementById('contact-subject') as HTMLSelectElement;
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      if (subjectSelect) subjectSelect.value = "Custom Subject";
    }
  };

  return (
    <section id="packages" className="py-12 lg:py-20 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
          <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-[10px] lg:text-xs mb-3 block">High Efficiency, Low Cost</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-zinc-900 tracking-tight mb-6">Unbeatable Pricing.</h2>
          
          <div className="inline-flex p-1.5 bg-zinc-200/50 rounded-2xl backdrop-blur-sm border border-zinc-200/50 shadow-inner">
            <button 
              onClick={() => setActiveTab('ads')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'ads' ? 'bg-white text-indigo-600 shadow-lg scale-105' : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              <Target className="w-4 h-4" />
              Ads Plans
            </button>
            <button 
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'web' ? 'bg-white text-indigo-600 shadow-lg scale-105' : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Web Plans
            </button>
          </div>
        </div>

        <div className="relative">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ${
            activeTab === 'ads' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
          }`}>
            {ADS_PACKAGES.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="ads" />
            ))}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ${
            activeTab === 'web' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
          }`}>
            {WEB_PACKAGES.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="web" />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 rounded-full shadow-sm">
             <a 
               href="#contact" 
               onClick={handleCustomClick}
               className="text-indigo-600 text-[10px] font-black uppercase tracking-widest hover:underline"
             >
               WANT CUSTOM PACKAGE CONTACT
             </a>
          </div>
          
          <p className="text-zinc-400 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.25em] block">
            * All prices are introductory. Quality guaranteed on every tier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
