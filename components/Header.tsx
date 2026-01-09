
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="input_file_38.png" 
            alt="Africa Digital Festival Logo" 
            className="h-12 md:h-14 w-auto invert brightness-0"
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${isScrolled ? 'text-white hover:text-[#00f2ea]' : 'text-white/90 hover:text-[#ff00ff]'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="lg:hidden text-white p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
