
import React from 'react';
import { ACTIVITIES } from '../constants';

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00f2ea]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-[2px] bg-[#ff00ff]"></div>
                 <span className="text-[#ff00ff] text-xs font-black tracking-[0.4em] uppercase">Programming</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                BEYOND THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f2ea]">LIST</span>
              </h2>
            </div>

            <div className="space-y-12">
              {ACTIVITIES.map((activity) => (
                <div key={activity.id} className="flex gap-10 group relative">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#ff9900] group-hover:text-black transition-all duration-500 transform group-hover:rotate-12">
                    {activity.id.toString().padStart(2, '0')}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#ff9900] transition-colors">{activity.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-md font-medium font-outfit">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity blur-2xl"></div>
              <div className="relative aspect-[4/5] overflow-hidden border-[15px] border-white/5">
                <img src="https://picsum.photos/seed/africa_nation_digital/800/1000" alt="African Digital Landscape" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                   <p className="text-white text-4xl font-black uppercase tracking-tighter leading-none">
                     ADC <br /> MIXER <br /> 2026
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
