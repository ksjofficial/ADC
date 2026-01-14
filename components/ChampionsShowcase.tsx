
import React, { useState, useEffect, useCallback } from 'react';
import { CHAMPIONS_2025 } from '../constants';
import { Champion } from '../types';

const ImageWithFallback = ({ src, alt, className }: { src: string | undefined | null, alt: string, className: string }) => {
  return (
    <div className={`bg-black flex flex-col items-center justify-center p-8 ${className}`}>
      <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-white/20 p-10 transition-all duration-700 w-full h-full group-hover:border-[#00f2ea]">
         <img src="input_file_40.png" alt="Africa's 50 Digital Champions Logo" className="h-24 w-auto opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
      </div>
    </div>
  );
};

const ExpandableBio = ({ text, limit = 100, className = "" }: { text: string, limit?: number, className?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > limit;
  const displayText = (shouldTruncate && !isExpanded) ? `${text.substring(0, limit)}...` : text;

  return (
    <div className={className}>
      <p className="inline">
        {displayText}
      </p>
      {shouldTruncate && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="ml-2 text-[#00f2ea] hover:text-[#ff00ff] font-black uppercase text-[10px] tracking-widest transition-colors inline-block align-middle"
        >
          {isExpanded ? '[ Show Less ]' : '[ Read More ]'}
        </button>
      )}
    </div>
  );
};

const ChampionsShowcase: React.FC = () => {
  const [selectedChampion, setSelectedChampion] = useState<Champion | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(CHAMPIONS_2025.map(c => c.category)))];
  const filteredChampions = filter === 'All' 
    ? CHAMPIONS_2025 
    : CHAMPIONS_2025.filter(c => c.category === filter);

  const closeModal = useCallback(() => {
    setSelectedChampion(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedChampion) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedChampion, closeModal]);

  return (
    <section id="champions" className="py-24 md:py-32 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-28 gap-12">
          <div className="max-w-2xl border-l-[12px] md:border-l-[16px] border-black pl-8 md:pl-10">
            <h2 className="text-6xl sm:text-7xl md:text-9xl font-black text-black tracking-tighter mb-8 uppercase leading-[0.85]">
              The Class <br /> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] via-[#ff00ff] to-[#ff9900]">2025</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-lg leading-relaxed font-outfit">
              Africa Digital Festival 2026 presents: The pioneers of our digital sovereignty. One continent, 50 nations, 50 elite champions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 sm:px-7 sm:py-3 rounded-none text-[10px] sm:text-[11px] font-black tracking-[0.2em] transition-all border-2 ${
                  filter === cat 
                    ? 'bg-black text-white border-black shadow-2xl scale-105' 
                    : 'bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-16 md:gap-y-24">
          {filteredChampions.map((champion, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedChampion(champion)}
              className="group cursor-pointer transition-all duration-500 hover:scale-105 will-change-transform flex flex-col h-full"
            >
              <div className="aspect-[1/1.3] overflow-hidden mb-6 md:mb-10 rounded-none relative transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-transparent group-hover:border-black/5 bg-neutral-900">
                <ImageWithFallback 
                  src={champion.imageUrl} 
                  alt={champion.name} 
                  className="w-full h-full"
                />
                
                {/* Branding Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-6 left-6 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                   <div className="w-10 h-10 border-l-2 border-t-2 border-[#00f2ea]"></div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                   <span className="block text-[#00f2ea] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Impact Category</span>
                   <span className="block text-white text-xl font-black uppercase tracking-tight">{champion.category}</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 px-2 flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                   <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tighter leading-none group-hover:text-[#ff00ff] transition-colors duration-300">
                     {champion.name}
                   </h3>
                   <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                      <img 
                        src={`https://flagcdn.com/w40/${champion.countryCode.toLowerCase()}.png`} 
                        alt={champion.country}
                        className="w-6 h-auto shadow-sm rounded-sm"
                      />
                      <span className="text-[10px] font-black bg-black text-white px-3 py-1 shadow-sm italic group-hover:bg-[#ff9900] group-hover:text-black transition-colors duration-500">
                         {champion.country.substring(0,3).toUpperCase()}
                      </span>
                   </div>
                </div>
                <p className="text-gray-400 text-xs font-bold tracking-[0.2em] leading-none group-hover:text-gray-900 transition-colors uppercase">
                  {champion.role}
                </p>
                
                <ExpandableBio 
                  text={champion.bio}
                  limit={80}
                  className="text-gray-500 text-xs font-medium leading-relaxed font-outfit"
                />
                
                <div className="mt-auto pt-4">
                  <div className="h-[3px] w-12 bg-gray-200 group-hover:w-full group-hover:bg-[#ff9900] transition-all duration-500 mb-4"></div>
                  <button className="text-[10px] font-black uppercase tracking-widest text-black group-hover:text-[#ff00ff] transition-colors flex items-center space-x-2">
                    <span>Read Full Profile</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedChampion && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-12 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/98 backdrop-blur-3xl animate-in fade-in duration-300 cursor-pointer" 
            onClick={closeModal}
          />
          <div className="relative w-full max-w-7xl bg-white h-full max-h-[100vh] sm:max-h-[95vh] overflow-y-auto rounded-none flex flex-col lg:flex-row shadow-[0_0_120px_rgba(0,0,0,0.6)] border border-white/5 animate-in zoom-in-95 duration-500 slide-in-from-bottom-10">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 z-30 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center bg-black text-white hover:bg-[#ff00ff] transition-all hover:scale-110 active:scale-95 shadow-xl"
            >
              <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-auto bg-black relative overflow-hidden group shrink-0">
              <ImageWithFallback 
                src={selectedChampion.imageUrl} 
                alt={selectedChampion.name} 
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 lg:bg-gradient-to-r lg:from-black/60 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 flex flex-col space-y-4">
                 <div className="px-4 py-2 sm:px-6 border-2 border-[#00f2ea] text-[#00f2ea] font-black text-[10px] sm:text-xs tracking-widest w-fit uppercase bg-black/50 backdrop-blur-sm">Class of 2025</div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-24 flex flex-col justify-start lg:justify-center bg-white">
              <div className="mb-8 sm:mb-16">
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
                  <div className="flex items-center space-x-2 sm:space-x-3 px-3 py-1.5 sm:px-5 sm:py-2 bg-[#00f2ea] text-black shadow-lg">
                    <img 
                      src={`https://flagcdn.com/w80/${selectedChampion.countryCode.toLowerCase()}.png`} 
                      alt={selectedChampion.country}
                      className="w-5 sm:w-8 h-auto shadow-sm"
                    />
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                      {selectedChampion.country}
                    </span>
                  </div>
                  <div className="hidden md:block w-12 h-[2px] bg-gray-100"></div>
                  <span className="text-[#ff00ff] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                    {selectedChampion.category}
                  </span>
                </div>
                
                <h2 className="text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] font-black text-black uppercase tracking-tighter leading-[0.9] mb-4 sm:mb-8 break-words">
                  {selectedChampion.name}
                </h2>
                <p className="text-lg sm:text-2xl font-bold text-gray-400 font-syne uppercase tracking-tight leading-snug">{selectedChampion.role}</p>
                <div className="w-24 sm:w-32 h-2 sm:h-4 bg-black mt-6 sm:mt-12 flex">
                    <div className="w-1/3 h-full bg-[#00f2ea]"></div>
                    <div className="w-1/3 h-full bg-[#ff00ff]"></div>
                    <div className="w-1/3 h-full bg-[#ff9900]"></div>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-gray-700 leading-relaxed text-base sm:text-xl font-medium mb-10 sm:mb-16 font-outfit">
                   {selectedChampion.bio}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 border-t-[6px] border-black pt-10 sm:pt-16 pb-6">
                  {selectedChampion.socials.linkedin && (
                    <a href={selectedChampion.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col group/link">
                      <span className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">Professional</span>
                      <span className="inline-flex items-center text-base sm:text-lg font-black uppercase border-b-4 border-transparent group-hover/link:border-[#00f2ea] pb-2 w-fit transition-all">
                        LinkedIn
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-50 group-hover/link:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  )}
                  {selectedChampion.socials.twitter && (
                    <a href={selectedChampion.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-col group/link">
                      <span className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">Ecosystem</span>
                      <span className="inline-flex items-center text-base sm:text-lg font-black uppercase border-b-4 border-transparent group-hover/link:border-[#ff00ff] pb-2 w-fit transition-all">
                        X / Twitter
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-50 group-hover/link:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  )}
                  {selectedChampion.socials.website && (
                    <a href={selectedChampion.socials.website} target="_blank" rel="noopener noreferrer" className="flex flex-col group/link">
                      <span className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">Venture</span>
                      <span className="inline-flex items-center text-base sm:text-lg font-black uppercase border-b-4 border-transparent group-hover/link:border-[#ff9900] pb-2 w-fit transition-all">
                        Website
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-50 group-hover/link:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ChampionsShowcase;
