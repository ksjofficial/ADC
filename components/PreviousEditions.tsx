
import React from 'react';

const PreviousEditions: React.FC = () => {
  return (
    <section id="previous" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-black">Previous Editions</h2>
            <div className="w-20 h-2 bg-amber-400"></div>
            <p className="text-xl text-gray-400 leading-relaxed">
              Started in 2019, 50 digital leaders were selected to showcase solutions impacting lives across Africa. Since then, the list has been held annually, growing into a formidable community.
            </p>
            <p className="text-gray-400">
              Mandela Washington Fellowship and other global brands have recognized the list for its significant impact on leadership and community development.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 18 }).map((_, i) => (
              <img 
                key={i} 
                src={`https://picsum.photos/seed/headshot${i}/100/100`} 
                className="w-full aspect-square object-cover rounded-lg opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                alt="Past Champion"
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-20">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <h3 className="text-3xl font-bold mb-4">Class of 2021</h3>
            <p className="text-gray-400">The 2021 cohort focused on resilient digital infrastructure during the post-pandemic recovery phase.</p>
          </div>
          <div className="p-8 rounded-3xl bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold">Class of 2023</h3>
              <span className="px-3 py-1 bg-blue-500 rounded-full text-xs font-bold uppercase">South Africa 2024</span>
            </div>
            <p className="text-gray-300">Honored as official ambassadors for policy acceleration on Digital Economy across 50 African countries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousEditions;
