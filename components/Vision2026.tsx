
import React, { useState } from 'react';

const VISION_PILLARS = [
  {
    id: 'connectivity',
    title: 'Hyper-Connectivity',
    tag: 'Infrastructure',
    summary: 'Bridging the Last Mile by 2026.',
    details: 'Our mission is to achieve 90% terrestrial fiber coverage across the continent, integrating satellite backhaul to ensure every rural village is a digital node by the next festival cycle.',
    color: '#00f2ea'
  },
  {
    id: 'ai',
    title: 'AI Sovereignty',
    tag: 'Intelligence',
    summary: 'African Data, African Models.',
    details: 'Building local Large Language Models (LLMs) that reflect the linguistic diversity of 2000+ African tongues. Ensuring data residency within continental borders to protect our digital sovereignty.',
    color: '#ff00ff'
  },
  {
    id: 'market',
    title: 'Unified Market',
    tag: 'Trade',
    summary: 'The Digital AfCFTA Core.',
    details: 'Implementing a unified digital payment rail across all 54 nations. By 2026, we envision a borderless digital marketplace where services move as freely as goods.',
    color: '#ff9900'
  },
  {
    id: 'talent',
    title: 'Talent 10M',
    tag: 'Human Capital',
    summary: 'The Future Workforce.',
    details: 'A continental initiative to train 10 million youth in AI, Robotics, and GreenTech. Turning Africa from a consumer of technology into a premier global exporter of tech talent.',
    color: '#ffffff'
  }
];

const Vision2026: React.FC = () => {
  const [activePillar, setActivePillar] = useState(VISION_PILLARS[0]);

  return (
    <section id="vision" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-[#00f2ea]/5 to-transparent rounded-full -mr-[400px] -mt-[400px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#ff00ff]/5 to-transparent rounded-full -ml-[300px] -mb-[300px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-flex items-center space-x-6">
              <div className="w-16 h-[4px] bg-[#00f2ea]"></div>
              <span className="text-[#00f2ea] text-sm font-black tracking-[0.6em] uppercase">Roadmap to 2026</span>
            </div>
            <h2 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] font-syne">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">VISION</span>
            </h2>
            <p className="text-2xl text-gray-400 font-medium max-w-xl leading-relaxed font-outfit">
              Moving beyond recognition to realization. Vision 2026 defines the critical benchmarks for Africa's emergence as a global digital superpower.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {VISION_PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className={`p-10 border-2 transition-all duration-500 text-left relative group ${
                  activePillar.id === pillar.id 
                    ? 'bg-white text-black border-white scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)]' 
                    : 'bg-transparent text-white border-white/20 hover:border-white/50'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 block opacity-60">
                  {pillar.tag}
                </span>
                <h4 className="text-2xl font-black uppercase leading-none tracking-tighter">
                  {pillar.title}
                </h4>
                <div className={`mt-6 h-1 w-8 transition-all duration-500 ${
                  activePillar.id === pillar.id ? 'w-full' : 'w-8 group-hover:w-16'
                }`} style={{ backgroundColor: pillar.color }}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Pillar Content */}
        <div className="relative border-[10px] border-white/5 p-12 lg:p-24 bg-white/5 backdrop-blur-xl group">
          <div className="absolute top-0 right-0 p-8">
            <span className="text-[120px] font-black text-white/5 leading-none select-none tracking-tighter">
              2026
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <span className="px-6 py-2 border-2 text-sm font-black tracking-widest uppercase inline-block" style={{ borderColor: activePillar.color, color: activePillar.color }}>
                {activePillar.tag}
              </span>
              <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none font-syne">
                {activePillar.summary}
              </h3>
              <div className="h-1 w-32" style={{ backgroundColor: activePillar.color }}></div>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-700 delay-200">
              <p className="text-2xl lg:text-3xl text-gray-300 font-medium leading-relaxed font-outfit italic">
                "{activePillar.details}"
              </p>
              <div className="mt-12 flex space-x-4">
                 <button className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-[#00f2ea] transition-colors">
                    Download Framework
                 </button>
                 <button className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                    Partner With Us
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision2026;
