
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff00ff]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00f2ea] via-[#ff00ff] to-[#ff9900] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-1000"></div>
            <div className="relative aspect-square max-w-md mx-auto rounded-none border-[20px] border-white/5 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center p-12 text-center">
              <span className="text-[#00f2ea] text-xs font-black tracking-[0.6em] uppercase mb-6">Core Objective</span>
              <h2 className="text-white text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                DIGITAL <br /> SOVEREIGNTY
              </h2>
              <div className="w-20 h-1 bg-[#ff00ff] mb-8"></div>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Defining the next decade of African technology.</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[2px] bg-[#ff9900]"></div>
                <h3 className="text-[#ff9900] font-black tracking-[0.4em] uppercase text-xs">The Initiative</h3>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter">
                UNIFYING THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">CONTINENT</span>
              </h2>
            </div>
            
            <p className="text-2xl text-gray-400 leading-relaxed font-outfit font-medium">
              Africa's 50 Digital Champions is an elite annual index curated by the Africa Digital Festival. We celebrate 50 innovative leaders across 50 nations who are engineering the continent's digital future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Raise Awareness', desc: 'Showcasing the socio-economic impact of digital infrastructure.', color: '#00f2ea' },
                { title: 'Inspire Growth', desc: 'Mentoring the next billion-dollar startup founders.', color: '#ff00ff' },
                { title: 'Foster Collaboration', desc: 'Bridging the gap between policy makers and tech hubs.', color: '#ff9900' },
                { title: 'Policy Acceleration', desc: 'Crafting the blueprint for the Pan-African Digital Economy.', color: '#ffffff' }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border-l-4 bg-white/5 hover:bg-white/10 transition-all group" style={{ borderColor: item.color }}>
                  <h4 className="font-black text-white text-lg uppercase tracking-tight mb-3 group-hover:text-[#00f2ea] transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
