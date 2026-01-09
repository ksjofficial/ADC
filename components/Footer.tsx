
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 overflow-hidden relative">
      {/* Visual motif from Slide 10 */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400 translate-x-1/2 translate-y-1/2 rotate-45 opacity-20 md:opacity-100"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[#00f2ea] text-xs font-black tracking-[0.4em] uppercase">Africa Digital Festival</span>
              <h2 className="text-8xl md:text-[120px] font-black tracking-tighter uppercase leading-[0.8]">ADC</h2>
            </div>
            <p className="text-xl text-gray-400 max-w-sm leading-relaxed font-outfit">
              Building the digital future of Africa, one champion at a time. The Elite 50 network is engineering continental sovereignty.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center hover:bg-[#ff00ff] transition-all group">
                <svg className="w-6 h-6 fill-white group-hover:fill-black" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center hover:bg-[#00f2ea] transition-all group">
                <svg className="w-6 h-6 fill-white group-hover:fill-black" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-12 rounded-none border-l-[12px] border-amber-400 space-y-8 backdrop-blur-md">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Get In Touch</h3>
            <div className="space-y-6">
              <div>
                <span className="block text-amber-400 font-black uppercase text-[10px] tracking-[0.4em] mb-2">ADF Advisory</span>
                <a href="mailto:hello@digitalfoundation.africa" className="text-2xl md:text-3xl font-black hover:text-[#00f2ea] transition-colors break-all leading-none">
                  hello@digitalfoundation.africa
                </a>
              </div>
              <div className="flex flex-col space-y-2 border-t border-white/10 pt-6">
                <span className="block text-gray-500 font-black uppercase text-[10px] tracking-[0.4em]">Direct Connect</span>
                <a href="https://wa.me/233268633987" target="_blank" className="text-xl md:text-2xl font-bold text-white hover:text-[#ff9900] transition-all">
                   WhatsApp & Call: +233 268 633 987
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-600">
          <p>© 2026 Digital Foundation Africa. Class of 2025.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
