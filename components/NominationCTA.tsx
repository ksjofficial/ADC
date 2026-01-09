
import React from 'react';

const NominationCTA: React.FC = () => {
  return (
    <section id="nominate" className="relative py-32 bg-black overflow-hidden border-t border-white/10">
      {/* Massive Background Text Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] md:text-[30vw] font-black text-white/[0.03] leading-none tracking-tighter uppercase translate-y-10">
          2026
        </span>
      </div>

      {/* Geometric Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff00ff]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border-b-8 border-l-8 border-[#00f2ea]/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="px-4 py-1 bg-[#ff9900] text-black font-black text-[10px] uppercase tracking-[0.3em]">
                  Now Open
                </span>
                <div className="h-[2px] w-12 bg-white/20"></div>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] font-syne">
                SHAPE THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] via-[#ff00ff] to-[#ff9900]">FUTURE</span>
              </h2>
              
              <p className="text-2xl text-gray-400 font-medium leading-relaxed font-outfit">
                Do you know a digital pioneer engineering change? Nominations for the <span className="text-white font-bold">Class of 2026</span> are officially open. Help us identify the next 50 champions.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end justify-center space-y-10">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ea] to-[#ff00ff] rounded-none blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button className="relative px-12 py-8 bg-white text-black font-black uppercase text-xl tracking-widest hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Nominate Now
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <span className="block text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Deadline</span>
                  <span className="block text-white font-bold text-lg uppercase tracking-tight">Dec 31, 2025</span>
                </div>
                <div className="w-[2px] h-12 bg-white/10"></div>
                <div className="text-right">
                  <span className="block text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Selection</span>
                  <span className="block text-white font-bold text-lg uppercase tracking-tight">Q1 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NominationCTA;
