
import React from 'react';
import { PARTNERS } from '../constants';

const PartnerSection: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             {/* Dynamic Partner Visual */}
            <div className="relative z-10 rounded-none overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-black aspect-video flex items-center justify-center p-12 border-[12px] border-gray-100">
               <div className="absolute inset-0 opacity-40">
                  <img src="https://picsum.photos/seed/collaboration_impact/800/600" alt="Strategic Partnership" className="w-full h-full object-cover" />
               </div>
               <div className="relative z-20 text-center space-y-4">
                  <div className="w-16 h-1 bg-[#00f2ea] mx-auto"></div>
                  <h3 className="text-white text-4xl font-black tracking-tighter uppercase leading-none">
                    PARTNER <br/> FOR <br/> IMPACT
                  </h3>
                  <p className="text-[#00f2ea] text-[10px] font-black tracking-[0.4em] uppercase">Join the Elite 50 Network</p>
               </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">Why Partner?</h2>
            <p className="text-gray-500 text-xl leading-relaxed font-outfit font-medium">
              Align your brand with the architects of Africa's digital sovereignty. Access a curated ecosystem of high-growth entrepreneurs and key regional decision-makers.
            </p>
            <ul className="space-y-5">
              {[
                'Show support for African entrepreneurs',
                'Align brand with continental innovation',
                'Access senior decision-makers',
                'Forge new business opportunities'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center space-x-4 font-bold text-gray-800 uppercase text-sm tracking-tight">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-[10px]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="px-10 py-5 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-[#ff00ff] transition-all transform hover:-translate-y-1">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
