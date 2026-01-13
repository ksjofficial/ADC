
import React, { useState, useEffect } from 'react';
import { CHAMPIONS_2025 } from '../constants';
import { Champion } from '../types';

const Hero: React.FC = () => {
  const [featuredChampion, setFeaturedChampion] = useState<Champion | null>(null);

  useEffect(() => {
    // Select a random champion from the Class of 2025
    const randomIndex = Math.floor(Math.random() * CHAMPIONS_2025.length);
    setFeaturedChampion(CHAMPIONS_2025[randomIndex]);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Brand Motif - Concentric Circles from Logo 'D' */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none opacity-20">
         <div className="absolute inset-0 border-[1px] border-[#00f2ea] rounded-full animate-[pulse_4s_infinite]"></div>
         <div className="absolute inset-[100px] border-[1px] border-[#ff00ff] rounded-full animate-[pulse_6s_infinite]"></div>
         <div className="absolute inset-[200px] border-[1px] border-[#ff9900] rounded-full animate-[pulse_8s_infinite]"></div>
      </div>
      
      {/* Brand Motif - Geometric Triangle from Logo 'A' */}
      <div className="absolute bottom-[-200px] right-[-100px] w-0 h-0 border-l-[400px] border-l-transparent border-b-[600px] border-b-white/5 border-r-[400px] border-r-transparent rotate-12 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
        <div className="text-left space-y-12">
          <div className="inline-flex items-center space-x-6">
             <div className="w-20 h-[5px] bg-[#00f2ea]"></div>
             <span className="text-[#00f2ea] text-sm font-black tracking-[0.6em] uppercase">Africa Digital Festival 2026</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-8xl md:text-[180px] font-black text-white leading-[0.7] uppercase tracking-tighter">
              CLASS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] via-[#ff00ff] to-[#ff9900]">OF '25</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
                <p className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                   CHAMPIONS
                </p>
                <div className="px-6 py-2 bg-white text-black font-black text-2xl italic skew-x-[-15deg] w-fit shadow-[8px_8px_0_#ff9900]">
                  THE ELITE 50
                </div>
            </div>
          </div>
          
          <p className="text-2xl text-gray-400 max-w-2xl leading-relaxed font-medium font-outfit">
            Celebrating the most influential digital pioneers from 50 nations, recognized by the Africa Digital Festival for their transformative impact in 2025.
          </p>
          
          <div className="flex flex-wrap gap-10 pt-10">
            <a href="#champions" className="group relative">
              <span className="absolute inset-0 bg-[#00f2ea] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></span>
              <span className="relative block px-14 py-8 bg-white text-black font-black uppercase text-lg tracking-widest border-2 border-white">
                Enter The Class
              </span>
            </a>
            <a href="#about" className="flex items-center space-x-6 text-white group py-4">
              <span className="w-2 h-16 bg-[#ff00ff] transition-all group-hover:h-20"></span>
              <span className="font-black uppercase text-base tracking-[0.5em] group-hover:text-[#ff00ff] transition-colors">Our Legacy</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative group">
           <div className="absolute -inset-20 bg-gradient-to-br from-[#00f2ea]/20 via-[#ff00ff]/20 to-[#ff9900]/20 rounded-full blur-[100px] group-hover:opacity-100 opacity-60 transition-opacity duration-1000"></div>
           <div className="relative w-full aspect-[4/5] overflow-hidden border-[20px] border-white/5 backdrop-blur-md shadow-2xl bg-neutral-900">
              {featuredChampion ? (
                <>
                  <img 
                    src={featuredChampion.imageUrl} 
                    alt={featuredChampion.name} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                     <img src="input_file_40.png" className="h-20 w-auto mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Africa's 50 Digital Champions Logo" />
                     <p className="text-[#00f2ea] font-black text-sm tracking-[0.4em] uppercase mb-1">Featured Catalyst • {featuredChampion.country}</p>
                     <p className="text-white font-black text-3xl uppercase tracking-tighter">{featuredChampion.name}</p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                   <img src="input_file_40.png" className="h-32 w-auto opacity-20 animate-pulse" alt="Loading" />
                </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
